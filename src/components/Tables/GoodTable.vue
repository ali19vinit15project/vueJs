<template>
  <div>
    <vue-good-table
      mode="remote"
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
      :search-options="{
        enabled: true,
        skipDiacritics: true,
        placeholder: 'Search Employee ',
      }"
      :sort-options="{
        enabled: true,
        initialSortBy: [
          {field: 'name', type: 'asc', columnIndex: 1},
          {field: 'age', type: 'asc', columnIndex: 2},
          {field: 'score', type: 'asc', columnIndex: 3}
        ],
      }"
      :pagination-options="{
        enabled: true,
        perPage: 10,
        position: 'top',
        perPageDropdown: [3, 5, 9, 11],
        dropdownAllowAll: false,
        rowsPerPageLabel: 'Employees per page',
        mode: 'pages'
      }"
      :select-options="{
        enabled: true,
        selectOnCheckboxOnly: true, // only select when checkbox is clicked instead of the row
        
        selectionText: 'employees selected',
        clearSelectionText: 'clear',
      }"
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

export default {

  components: {
    VueGoodTable
  },
  methods : {
    selectionChanged(){
      console.log(this.$refs['my-table'].selectedRows);
    },

    // Start: Methods added for Server side rendering
    updateParams(newProps) {
      console.log("updateParams");
      this.serverParams = Object.assign({}, this.serverParams, newProps);
    },
    
    onPageChange(params) {
      console.log("onPageChange");
      this.updateParams({page: params.currentPage});
      this.loadItems();
    },

    onPerPageChange(params) {
      console.log("onPerPageChange-",params.currentPerPage);
      this.updateParams({perPage: params.currentPerPage});
      this.loadItems();
    },

    onSortChange(params) {
      console.log("onSortChange");
      this.updateParams({
        sort: [{
          type: params.sortType,
          field: this.columns[0].field,
        }],
      });
      this.loadItems();
    },
    
    onColumnFilter(params) {
      console.log("onColumnFilter");
      this.updateParams(params);
      this.loadItems();
    },

    // load items is what brings back the rows from server
    loadItems() {
      this.totalRecords = 1;
      var arr = [
          { id:1, name:"Jwohn", age: 20, score: 0.03343 },
          { id:2, name:"Jante", age: 24, score: 0.45343 },
          { id:3, name:"Suvssan", age: 16, score: 0.23343 },
          { id:4, name:"Sxusan", age: 16, score: 0.23343 },
        { id:5, name:"Chyris", age: 5, score: 0.83343 },
        { id:6, name:"Dain", age: 40, score: 0.3343 },
        { id:7, name:"John", age: 20, score: 0.10343 },
        { id:8, name:"Alzi", age: 90, score: 0.8433 },
        { id:9, name:"Vidnit", age: 80, score: 0.8433 },
        { id:10, name:"Chrfis", age: 5, score: 0.83343 },
        { id:11, name:"Deakn", age: 40, score: 0.3343 },
        { id:12, name:"Joehn", age: 20, score: 0.10343 },
        { id:13, name:"Aqli", age: 90, score: 0.8433 },
        { id:14, name:"Vinjit", age: 80, score: 0.8433 },
      ];
      var newArr = [...arr];
      newArr.length = this.serverParams.perPage;
      this.rows = newArr;
      /*getFromServer(this.serverParams).then(response => {
         this.totalRecords = response.totalRecords;
         this.rows = response.rows;
      });*/
    }
    // End: Methods added for Server side rendering
  },
  data(){
    return {
      isLoading: false,
      totalRecords: 14,
      rows: [],
      serverParams: {
         // a map of column filters example: {name: 'john', age: '20'}
        columnFilters: {

        },
        sort: {
          field: 'name', // example: 'name'
          type: 'asc', // 'asc' or 'desc'
        },
        page: 1, // what page I want to show
        perPage: 10 // how many items I'm showing per page
      },

      columns: [
        {
          label: 'Name',
          field: 'name',
        },
        {
          label: 'Age',
          field: 'age',
            type: 'number',
        },
        {
          label: 'Percent',
          field: 'score',
          type: 'percentage',
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
