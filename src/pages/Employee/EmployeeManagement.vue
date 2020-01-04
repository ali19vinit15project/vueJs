<template>
  <div>
    <h4>Employees</h4>
    <employees-table/>
  </div>
</template>

<script>

import EmployeesTable from './EmployeesTable.vue'

export default {
  components: {
      EmployeesTable
  }
}

</script>