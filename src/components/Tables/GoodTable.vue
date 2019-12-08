<template>
  <div>
    <vue-good-table
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
          {field: 'name', type: 'asc'},
          {field: 'age', type: 'asc'}
        ],
      }"
      :pagination-options="{
        enabled: true,
        perPage: 4,
        position: 'top',
        perPageDropdown: [3, 5, 9, 11],
        dropdownAllowAll: false,
        rowsPerPageLabel: 'Employees per page',
        mode: 'pages'
      }"
      :select-options="{
        enabled: true,
        selectOnCheckboxOnly: false, // only select when checkbox is clicked instead of the row
        
        selectionText: 'employees selected',
        clearSelectionText: 'clear',
      }"
      @on-selected-rows-change="selectionChanged"
      styleClass="vgt-table striped bordered"
      >
        <div slot="table-actions">
          <button>Add</button> 
           <button>Delete</button>
            <button>Edit</button>
        </div>
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
    }

  },
  data(){
    return {
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
      ],
      rows: [
        { id:1, name:"John", age: 20, score: 0.03343 },
        { id:2, name:"Jane", age: 24, score: 0.45343 },
        { id:3, name:"Susan", age: 16, score: 0.23343 },
        { id:4, name:"Chris", age: 55, score: 0.83343 },
        { id:5, name:"Dan", age: 40, score: 0.3343 },
        { id:6, name:"John", age: 20, score: 0.10343 },
        { id:1, name:"John", age: 20, score: 0.03343 },
        { id:2, name:"Jane", age: 24, score: 0.45343 },
        { id:3, name:"Susan", age: 16, score: 0.23343 },
        { id:4, name:"Chris", age: 55, score: 0.83343 },
        { id:5, name:"Dan", age: 40, score: 0.3343 },
        { id:6, name:"John", age: 20, score: 0.10343 },
        { id:1, name:"John", age: 20, score: 0.03343 },
        { id:2, name:"Jane", age: 24, score: 0.45343 },
        { id:3, name:"Susan", age: 16, score: 0.23343 },
        { id:4, name:"Chris", age: 55, score: 0.83343 },
        { id:5, name:"Dan", age: 40, score: 0.3343 },
        { id:6, name:"John", age: 20, score: 0.10343 },
        { id:1, name:"John", age: 20, score: 0.03343 },
        { id:2, name:"Jane", age: 24, score: 0.45343 },
        { id:3, name:"Susan", age: 16, score: 0.23343 },
        { id:4, name:"Chris", age: 55, score: 0.83343 },
        { id:5, name:"Dan", age: 40, score: 0.3343 },
        { id:6, name:"John", age: 20, score: 0.10343 },
        { id:1, name:"John", age: 20, score: 0.03343 },
        { id:2, name:"Jane", age: 24, score: 0.45343 },
        { id:3, name:"Susan", age: 16, score: 0.23343 },
        { id:4, name:"Chris", age: 5, score: 0.83343 },
        { id:5, name:"Dan", age: 40, score: 0.3343 },
        { id:6, name:"John", age: 20, score: 0.10343 },
        { id:6, name:"Ali", age: 90, score: 0.8433 },
        { id:6, name:"Vinit", age: 80, score: 0.8433 },
      ],
    };
  },
};
</script>



<style>
</style>
