<template>
    <div class="row">
      <div class="col-xl-12 col-lg-12 col-md-12">
        <employee-form :empId = "empId"/>
      </div>
    </div>
</template>
<script>
import EmployeeForm from "./EmployeeForm.vue";
export default {
  components: {
    EmployeeForm
  },
  props: ['empId']
};
</script>
<style>
</style>
