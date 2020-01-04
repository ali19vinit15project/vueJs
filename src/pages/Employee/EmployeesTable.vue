<template>
  <div>
    <vue-good-table
      mode="remote"
      @on-search="onSearch"
      @on-page-change="onPageChange"
      @on-sort-change="onSortChange"
      @on-column-filter="onColumnFilter"
      @on-per-page-change="onPerPageChange"
      :totalRows="totalRecords"
      :isLoading.sync="isLoading"
      ref="my-table"
      :columns="columns"
      :rows="rows"
      :line-numbers="true"
      :search-options="searchOptions"
      :sort-options="sortOptions"
      :pagination-options="paginationOptions"
      :select-options="selectOptions"
      @on-selected-rows-change="selectionChanged"
      styleClass="vgt-table striped bordered"
      >
      <div slot="table-actions">
        <router-link to="/employee" class="btn btn-primary btn-sm" tag="button">Add</router-link>&nbsp;
      </div>

      <template slot="table-row" slot-scope="props">

        <span v-if="props.column.field == 'edit'">        
          <router-link :to="{ name: 'EmployeeProfile', params: { empId: props.row.id } }" class="ti-pencil" tag="a"></router-link>&nbsp;          
        </span>  
        <span v-else-if="props.column.field == 'photo'">        
          <img class="w-100 rounded-circle" :src= "props.row.photo">       
        </span> 
        <span v-else>
          {{props.formattedRow[props.column.field]}}
        </span>
      </template>
    </vue-good-table>
  </div>
</template>

<script>

import 'vue-good-table/dist/vue-good-table.css'
import { VueGoodTable } from 'vue-good-table';
import axios from "axios";

export default {

  components: {
    VueGoodTable
  },
  computed: {

    paginationOptions() {
      return {
        enabled: true,
        perPage: this.serverParams.perPage,
        position: 'top',
        perPageDropdown: [5, 10, 20, 50 ],
        dropdownAllowAll: false,
        rowsPerPageLabel: 'Employees per page',
        mode: 'pages',
      }
    },
    sortOptions() {
      return {
        enabled: true,
        initialSortBy: [
          {field: 'firstName', type: 'asc'}
        ],
      }
    },
    searchOptions() {
      return {
        enabled: true,
        skipDiacritics: true,
        placeholder: 'Search Employee ',
      }
    },
    selectOptions(){
      return {
        enabled: true,
        selectOnCheckboxOnly: true, // only select when checkbox is clicked instead of the row
        
        selectionText: 'employees selected',
        clearSelectionText: 'clear',
      }
    }
  },
  methods : {
    onSearch(params) {
      console.log(params.searchTerm);
    },
    selectionChanged(){
      console.log(this.$refs['my-table'].selectedRows);
    },

    // Start: Methods added for Server side rendering
    updateParams(newProps) {
      console.log("updateParams->this.serverParams ",this.serverParams);
      this.serverParams = Object.assign({}, this.serverParams, newProps);
    },
    
    onPageChange(params) {
      console.log("onPageChange", params);
      this.updateParams({page: params.currentPage});
      this.loadItems();
    },

    onPerPageChange(params) {
      console.log("onPerPageChange-",params.currentPerPage);
      this.updateParams({perPage: params.currentPerPage});
      this.loadItems();
    },

    onSortChange(params) {
      console.log("onSortChange-> params",params);
      this.updateParams({
        sort: [{
          type: params[0].type,
          field: params[0].field,
        }],
      });
      this.loadItems();
    },
    
    onColumnFilter(params) {
      console.log("onColumnFilter",params);
      this.updateParams(params);
      this.loadItems();
    },

    loadItems() {
      this.getFromServer(this.serverParams)
      .then(response =>{
        console.log("response",response);
        this.setTableData(response.data);
      })
      .catch(err => {
        console.log("Error",  err);
        this.notifyVue('top', 'center');
      });
    },

    getFromServer(serverParams) {
      console.log("getFromServer", serverParams);
      const url = "http://localhost:8090/api/employees";
      const params = {
        size: serverParams.perPage,
        page: serverParams.page - 1,
        sort: `${serverParams.sort[0].field},${serverParams.sort[0].type}`,
      };
      return axios.get(url,{ params });        
    },

    setTableData(data){
      this.totalRecords = data.page.totalElements;
      var rows = data._embedded.employees.map(emp  => {
        /* emp.photo = `<img src="${emp.photo}">`; */
        return emp;
      });
      this.rows = data._embedded.employees;
    },
    notifyVue(verticalAlign, horizontalAlign) {
      this.$notify({
        timeout: 20000,
        message: 'Server down. Please try after some time. ',
        icon: "ti-alert",
        horizontalAlign: horizontalAlign,
        verticalAlign: verticalAlign,
        type: "danger"
      });
    }
    // End: Methods added for Server side rendering
  },
  data(){
    return {
      empId: 0,
      isLoading: true,
      totalRecords: 0,
      rows: [],
      serverParams: {
         // a map of column filters example: {name: 'john', age: '20'}
        columnFilters: {
        },
        sort: {
          field: 'firstName', // example: 'name'
          type: 'asc', // 'asc' or 'desc'
        },
        page: 1, // what page I want to show
        perPage: 5 // how many items I'm showing per page
      },

      columns: [
        {
          label: 'First Name',
          field: 'firstName',
        },
        {
          label: 'Email',
          field: 'email',
        },
        {
          label: 'DOB',
          field: 'dob',
        },
        {
          label: 'Address',
          field: 'address.area',
        },
        {
          label: 'Photo',
          field: 'photo',
          html: true,
          tdClass: 'photoParent'
        },
        {
          label: 'Action',
          field: 'edit',
          sortable: false,
          width: '75px',
          tdClass: 'text-center',
        }
      ],
    };
  },
};
</script>

<style>
.photoParent {
  width: 100px;
  height: 100px;
}
</style>
