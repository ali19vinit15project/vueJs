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
        <router-link to="/editProfileForm" class="btn btn-primary btn-sm" tag="button">Add</router-link>&nbsp;
      </div>

      <template slot="table-row" slot-scope="props">
        <span v-if="props.column.field == 'name'">
          <a href="#/editProfileForm" style="font-weight: bold; color: blue;">{{props.row.name}}</a> 
        </span>
        <span v-else>
          {{props.formattedRow[props.column.field]}}
        </span>
      </template>


      <template slot="table-row" slot-scope="props">
        <span v-if="props.column.field == 'edit'">        
          <router-link to="/editProfileForm" class="ti-pencil" tag="a"></router-link>&nbsp;          
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
      this.getFromServer(this.serverParams).then(response =>{
        console.log("response",response);
        this.setTableData(response.data);
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
      this.rows = data._embedded.employees;
    }
    // End: Methods added for Server side rendering
  },
  data(){
    return {
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
          /*filterOptions: {
            enabled: true, // enable filter for this column
            placeholder: 'Filter This Name', // placeholder for filter input
            filterValue: '', // initial populated value for this filter
            filterDropdownItems: [], // dropdown (with selected values) instead of text input
            filterFn: this.columnFilterFn, //custom filter function that
            trigger: 'enter', //only trigger on enter not on keyup 
          },*/

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
</style>
