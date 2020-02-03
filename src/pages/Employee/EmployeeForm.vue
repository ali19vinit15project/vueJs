<template>
  <card class="card" :title="pageTitle">
    <div>
      <form @submit.prevent v-on:submit="save" action="#" method="post">
        <div class="row">
          <div class="col-md-4">
            <fg-input
              type="text"
              require
              label="First Name"
              placeholder="First Name"
              v-model="user.firstName"
              :validationFlag="submitted && $v.user.firstName.$error"
            ></fg-input>
          <div v-if="submitted && !$v.user.firstName.required" class="invalid-feedback" style="display: block">{{errorMsg.firstName.required}}</div> 
          <div v-if="submitted && !$v.user.firstName.alpha" class="invalid-feedback" style="display: block">{{errorMsg.firstName.alpha}}</div> 
          </div>
          <div class="col-md-4">
            <fg-input
              type="text"
              label="Middle Name"
              placeholder="Middle Name"
              v-model="user.middleName"
            :validationFlag="submitted && $v.user.middleName.$error"
            ></fg-input>
          <div v-if="submitted && !$v.user.middleName.required" class="invalid-feedback" style="display: block">{{errorMsg.middleName.required}}</div> 
          <div v-if="submitted && !$v.user.middleName.alpha" class="invalid-feedback" style="display: block">{{errorMsg.middleName.alpha}}</div>
          </div>
          <div class="col-md-4">
            <fg-input type="text" label="Last Name" placeholder="Last Name" v-model="user.lastName"
            :validationFlag="submitted && $v.user.lastName.$error"
            ></fg-input>
            <div v-if="submitted && !$v.user.lastName.required" class="invalid-feedback" style="display: block">{{errorMsg.lastName.required}}</div> 
          <div v-if="submitted && !$v.user.lastName.alpha" class="invalid-feedback" style="display: block">{{errorMsg.lastName.alpha}}</div>
          </div>
        </div>

        <div class="row">
          <div class="col-md-4">
            <fg-input 
            type="text" 
            label="Email" 
            placeholder="Email Address" 
            v-model="user.email"
            :validationFlag="submitted && $v.user.email.$error"
            @change="validateEmail"
            ></fg-input>
          <div v-if="submitted && !$v.user.email.email" class="invalid-feedback" style="display: block">{{errorMsg.email.email}}</div> 
          </div>
          <div class="col-md-4">
            <fg-input
              type="text"
              label="Phome Number"
              placeholder="Phone Number"
              v-model="user.phoneNum"
              :validationFlag="submitted && $v.user.phoneNum.$error"
              @change="validatePhoneNum"
            ></fg-input>
            <div v-if="submitted && !$v.user.phoneNum.required" class="invalid-feedback" style="display: block">{{errorMsg.phoneNum.required}}</div> 
            <div v-if="submitted && !$v.user.phoneNum.numeric" class="invalid-feedback" style="display: block">{{errorMsg.phoneNum.numeric}}</div> 
            <div v-if="submitted && !$v.user.phoneNum.minLength" class="invalid-feedback" style="display: block">{{errorMsg.phoneNum.minLength}}</div>
            <div v-if="submitted && !$v.user.phoneNum.maxLength" class="invalid-feedback" style="display: block">{{errorMsg.phoneNum.maxLength}}</div>
          </div>
          <div class="col-md-4">
            <fg-input
              type="text"
              label="Emergency Phone Number"
              placeholder="Emergency Phone"
              v-model="user.emrgncyPhoneNum"
              :validationFlag="submitted && $v.user.emrgncyPhoneNum.$error"
            ></fg-input>
            <div v-if="submitted && !$v.user.emrgncyPhoneNum.required" class="invalid-feedback" style="display: block">{{errorMsg.emrgncyPhoneNum.required}}</div> 
            <div v-if="submitted && !$v.user.emrgncyPhoneNum.numeric" class="invalid-feedback" style="display: block">{{errorMsg.emrgncyPhoneNum.numeric}}</div> 
            <div v-if="submitted && !$v.user.emrgncyPhoneNum.minLength" class="invalid-feedback" style="display: block">{{errorMsg.emrgncyPhoneNum.minLength}}</div>
            <div v-if="submitted && !$v.user.emrgncyPhoneNum.maxLength" class="invalid-feedback" style="display: block">{{errorMsg.emrgncyPhoneNum.maxLength}}</div>
          </div>
        </div>

        <div class="row">
          <div class="col-md-4">
            <fg-input
              type="text" 
              label="Aadhar" 
              placeholder="Aadhar Card" 
              v-model="user.aadhar"
              :validationFlag="submitted && $v.user.aadhar.$error"
              @change="validateAadhar"
            ></fg-input>
            <div v-if="submitted && !$v.user.aadhar.required" class="invalid-feedback" style="display: block">{{errorMsg.aadhar.required}}</div> 
            <div v-if="submitted && !$v.user.aadhar.numeric" class="invalid-feedback" style="display: block">{{errorMsg.aadhar.numeric}}</div> 
            <div v-if="submitted && !$v.user.aadhar.minLength" class="invalid-feedback" style="display: block">{{errorMsg.aadhar.minLength}}</div>
            <div v-if="submitted && !$v.user.aadhar.maxLength" class="invalid-feedback" style="display: block">{{errorMsg.aadhar.maxLength}}</div>
            <div v-if="!$v.user.aadhar.aadharServersideRule" class="invalid-feedback" style="display: block">{{errorMsg.aadhar.aadharServersideRule}}</div>
          </div>
          <div class="col-md-4">
            <fg-input 
              type="text" 
              label="PAN No." 
              placeholder="PAN No." 
              v-model="user.pan"
              :validationFlag="submitted && $v.user.pan.$error"
              @change="validatePan"
            ></fg-input>
          <div v-if="submitted && !$v.user.pan.pan" class="invalid-feedback" style="display: block">{{errorMsg.pan.pan}}</div>
          <div v-if="!$v.user.pan.panServersideRule" class="invalid-feedback" style="display: block">{{errorMsg.pan.panServersideRule}}</div>
          </div>
          <div class="col-md-4">
            <fg-input
              type="text"
              label="Blood Group"
              placeholder="Blood Group"
              v-model="user.bloodGroup"
              :validationFlag="submitted && $v.user.bloodGroup.$error"
            ></fg-input>
            <div v-if="submitted && !$v.user.bloodGroup.bloodGroup" class="invalid-feedback" style="display: block">{{errorMsg.bloodGroup.bloodGroup}}</div>           
          </div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <fg-input
              type="text"
              label="Qualification"
              placeholder="Qualification"
              v-model="user.qualification"
              :validationFlag="submitted && $v.user.qualification.$error"
            ></fg-input>
            <div v-if="submitted && !$v.user.qualification.required" class="invalid-feedback" style="display: block">{{errorMsg.qualification.required}}</div> 
            <div v-if="submitted && !$v.user.qualification.qualification" class="invalid-feedback" style="display: block">{{errorMsg.qualification.qualification}}</div> 
          </div>
          <div class="col-md-4">
            <label>Profile Picture</label>
            <br>
            <input
              type="file"
              class="hidden"
              ref="imageUpload"
              label="Photo"
              id="tempImage"
              @change="previewImage($event)"
              accept="image/*"
              :class="{ 'is-invalid': submitted && $v.user.photo.$error }">
              <label for="tempImage" class="btn btn-round btn-info btn-sm btn-outline-secondary">Select image</label>
              <div v-if="submitted && !$v.user.photo.required" class="invalid-feedback" style="display: block">{{errorMsg.photo.required}}</div>           
                 
          </div>
          <div class="col-md-4">
            <img id="imgPreview" :src="defaultPreviewImage" ref="imgPreview" alt="your image" />
          </div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <label>Date Of Birth</label>
            <br>
            <date-pick
              style="display: inherit"
              ref="dob-date-picker"
              v-model="user.dob"
              :displayFormat="'DD-MM-YYYY'"
              :format="'DD-MM-YYYY'"
              :isDateDisabled="isFutureDate"
            ></date-pick>
          <div v-if="submitted && !$v.user.dob.required" class="invalid-feedback" style="display: block">{{errorMsg.dob.required}}</div>
          </div>
          <div class="col-md-4">
            <label>Gender</label>
            <br>
            <select v-model="user.gender" :class="{ 
              'is-invalid': submitted && $v.user.gender.$error,
              'custom-select':true
              }">
              <option disabled selected value>Select Gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Others</option>
            </select>
            <div v-if="submitted && !$v.user.gender.required" class="invalid-feedback" style="display: block">{{errorMsg.gender.required}}</div>
          </div>
          <div class="col-md-4">
            <label>Martial Status</label>
            <br>
            <select v-model="user.martialStatus" :class="{ 'is-invalid': submitted && $v.user.martialStatus.$error,
              'custom-select':true }"
            >
              <option disabled selected value>Select Status</option>
              <option>Married</option>
              <option>UnMarried</option>
              <option>Divorce</option>
            </select>
            <div v-if="submitted && !$v.user.martialStatus.required" class="invalid-feedback" style="display: block">{{errorMsg.martialStatus.required}}</div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <div class="form-group">
              <label>Address</label>
              <textarea
                rows="3"
                class="form-control border-input"
                placeholder="Enter Area, Street No, LandMark"
                v-model="user.address.area"
                :class="{ 'is-invalid': submitted && $v.user.address.area.$error }"
              ></textarea>
              <div v-if="submitted && !$v.user.address.area.required" class="invalid-feedback" style="display: block">{{errorMsg.area.required}}</div>      
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <fg-input type="text" label="State" placeholder="State" v-model="user.address.state"
            :validationFlag="submitted && $v.user.address.state.$error"
            ></fg-input>
            <div v-if="submitted && !$v.user.address.state.required" class="invalid-feedback" style="display: block">{{errorMsg.state.required}}</div> 
            <div v-if="submitted && !$v.user.address.state.alpha" class="invalid-feedback" style="display: block">{{errorMsg.state.alpha}}</div> 
          </div>
          <div class="col-md-4">
            <fg-input type="text" label="City" placeholder="City" v-model="user.address.city"
            :validationFlag="submitted && $v.user.address.city.$error"
            ></fg-input>
            <div v-if="submitted && !$v.user.address.city.required" class="invalid-feedback" style="display: block">{{errorMsg.city.required}}</div> 
            <div v-if="submitted && !$v.user.address.city.alpha" class="invalid-feedback" style="display: block">{{errorMsg.city.alpha}}</div> 
          </div>
          <div class="col-md-4">
            <fg-input
              type="text"
              label="Pin Code"
              placeholder="Pin Code"
              v-model="user.address.pincode"
              :validationFlag="submitted && $v.user.address.pincode.$error"
            ></fg-input>
            <div v-if="submitted && !$v.user.address.pincode.required" class="invalid-feedback" style="display: block">{{errorMsg.pincode.required}}</div> 
            <div v-if="submitted && !$v.user.address.pincode.numeric" class="invalid-feedback" style="display: block">{{errorMsg.pincode.numeric}}</div> 
            <div v-if="submitted && !$v.user.address.pincode.minLength" class="invalid-feedback" style="display: block">{{errorMsg.pincode.minLength}}</div>
            <div v-if="submitted && !$v.user.address.pincode.maxLength" class="invalid-feedback" style="display: block">{{errorMsg.pincode.maxLength}}</div>
          </div>
        </div>

        <div class="text-center">
          
          <DetailsPopup class ="float-left" ref="confirmCancelPopup">
            <template v-slot:handle>
              <span class="nav-item btn btn-round float-left mr-2">Cancel</span>
            </template>
            <template v-slot:content>
              <form>
                <h4>Are you sure want to cancel?</h4>
                <router-link to="/employeeManagement" class="btn btn-round btn-danger " tag="button">Yes</router-link>&nbsp;
                <button class="btn btn-round btn-info" type="submit" @click="closePopup">Close</button>&nbsp;
              </form>
            </template>
          </DetailsPopup>

          <button class="btn btn-round btn-info" type="submit">{{saveButtonTitle}}</button>&nbsp;
          
          <DetailsPopup v-if="isPageEditable" class ="float-right" ref="confirmDeletePopup" v-show="this.isPageEditable">
            <template v-slot:handle>
              <span class="nav-item btn btn-round btn-danger float-right mr-2">Delete</span>
            </template>
            <template v-slot:content>
              <form>
                <h4>Are you absolutely sure?</h4>
                This action cannot be undone. This will permanently delete the employee. 
                &nbsp;<br>
                Please type 'delete' to confirm.
                <input
                  name="confirm"
                  type="text"
                  class="form-control my-1"
                  @keyup="checkDelete"
                />
                <button v-if="isPageEditable" 
                  class="btn btn-round btn-danger" 
                  type="button"
                  :disabled = "isConfirmDeleteDisabled"
                  @click.prevent="deleteEmployee">
                  Delete this employee
                </button>
              </form>
            </template>
          </DetailsPopup>
          <!-- <button v-if="isPageEditable" class="btn btn-round btn-danger float-right" type="button">Delete</button> -->
        </div>
        <div class="clearfix"></div>
      </form>
    </div>
  </card>
</template>
<script>
import DetailsPopup from "../../components/Inputs/DetailsPopup"
import { first } from "lodash";
import axios from "axios";
import { constants } from "fs";
import DatePick from 'vue-date-pick';
import 'vue-date-pick/dist/vueDatePick.css';
import { required, alpha, email, minLength, numeric, maxLength, sameAs, helpers } from "vuelidate/lib/validators";
import Compressor from 'compressorjs';

const pan = helpers.regex('pan', /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/)
const bloodGroup = helpers.regex('bloodGroup', /^(A|B|AB|O)[+-]$/)
const qualification = helpers.regex('qualification', /^[A-Za-z\d\s]+$/)

export default {
  components: {
    DatePick,
    DetailsPopup
  },
  props: ['empId'],
  mounted() {
      if (this.empId) {
          this.isPageEditable = true;
          this.pageTitle = 'Edit Employee';
          this.saveButtonTitle = 'Update';
          this.fetch();
      }
      this.$refs['dob-date-picker'].$el.children[0].className = 'form-control';
      this.$refs['dob-date-picker'].$el.children[0].placeholder = 'Date of Birth'; 
  },
  data() {
    return {
      defaultPreviewImage: 'http://placehold.it/1',
      isConfirmDeleteDisabled: true,
      pageTitle: 'Add Employee',
      saveButtonTitle: 'Save',
      isPageEditable: false,
      tempImage: "",
      user: {
        firstName: "",
        lastName: "",
        middeName: "",
        email: "",
        phoneNum: "",
        emrgncyPhoneNum: "",
        aadhar: "",
        pan: "",
        photo: null,
        bloodGroup: "",
        qualification: "",
        dob: "",
        gender: "",
        martialStatus: "",
        address: {
          area: "",
          state: "",
          city: "",
          pincode: ""
        }
      },
      submitted: false,
      serverSideValidations: {
        isAadharValid: true,
        isPanValid: true
      },
      errorMsg: {
        firstName:{
          required: "First Name is required",
          alpha: "Only alphabets are allowed"
        },
        middleName:{
          required: "Middle Name is required",
          alpha: "Only alphabets are allowed"
        },
        lastName:{
          required: "Last Name is required",
          alpha: "Only alphabets are allowed"
        },
        email: {
          email: "should be valid email"
        },
        phoneNum: {
          required: "Phone Number is required",
          numeric: "Phone Number be numeric",
          minLength: "length must be equal to 10",
          maxLength: "length must be equal to 10"
        },
        emrgncyPhoneNum: {
          required: "Emergency Phone Number is required",
          numeric: "Emergency Phone Number must be numeric",
          minLength: "length must be equal to 10",
          maxLength: "length must be equal to 10"
        },
        aadhar: {
          required: "Aadhar Number is required",
          numeric: "Aadhar Number must be numeric",
          minLength: "length must be equal to 12",
          maxLength: "length must be equal to 12",
          aadharServersideRule: "Aadhar already Present"
        },
        pan: {
          pan: "Must be a valid PAN eg: ABCDE1234Z",
          panServersideRule: "Pan already Present"
        },
        bloodGroup: {
          bloodGroup: "Must be a valid Blood group eg: A, B+ ,O-, AB"
        },
        qualification: {
          required: "Qualification is required",
          qualification: "Qualification must be Alphanumeric",
        },
        photo:{
          required: "Photo is required"
        },
        dob:{
          required: "Date of Birth is required"
        },
        gender:{
          required: "Gender is required"
        },
        martialStatus:{
          required: "Martial Status is required"
        },
        area:{
          required: "Area Name is required",
        },
        state:{
          required: "State Name is required",
          alpha: "Only alphabets are allowed"
        },
        city:{
          required: "City Name is required",
          alpha: "Only alphabets are allowed"
        },
        pincode: {
          required: "Pincode is required",
          numeric: "Pincode be numeric",
          minLength: "length must be equal to 6",
          maxLength: "length must be equal to 6"
        }
      }
    };
  },
  validations: {
            user: {
                firstName: { required, alpha },
                middleName: { required, alpha },
                lastName: { required, alpha },
                email: { email },
                phoneNum: { required, numeric, minLength: minLength(10), maxLength: maxLength(10)},
                emrgncyPhoneNum: { required, numeric, minLength: minLength(10), maxLength: maxLength(10)},
                aadhar: { required, numeric, minLength: minLength(12), maxLength: maxLength(12), 
                  aadharServersideRule: function() {
                    return this.serverSideValidations.isAadharValid;
                  }},
                pan: { pan,
                  panServersideRule: function() {
                    return this.serverSideValidations.isPanValid;
                  }},
                bloodGroup: { bloodGroup },
                qualification: { required, qualification },
                photo: { required },
                dob: { required },
                gender: { required },
                martialStatus: { required },
                address: {
                  area: { required },
                  state: { required, alpha },
                  city: { required, alpha },
                  pincode: { required, numeric, minLength: minLength(6), maxLength: maxLength(6)}
                }
            }
        },
  methods: {
    
    getFromServer(path) {
      console.log("getFromServer path:", path);
      const url = `http://localhost:8090/api/employees/search${path}`;
      return axios.get(url);        
    },
    handleServerSideValidation(path, validationFlag) {
      console.log('validationFlag:', validationFlag)
      this.getFromServer(path)
        .then(response => {

          console.log("response.data:", response.data);
          const isFieldDuplicate = response.data;
          const fieldValidationSuccess = !isFieldDuplicate;
          this.serverSideValidations[validationFlag] = fieldValidationSuccess;
        })
        .catch(err => {
          console.log("handleServerSideValidation Error",  err);
        });
    },
    validateAadhar(aadhar) {
      const path = `/byAadhar?q=${aadhar}&id=${this.user.id}`;
      this.handleServerSideValidation(path,'isAadharValid');
    },
    validatePan(pan) {
      const path = `/byPan?q=${pan}&id=${this.user.id}`;
      this.handleServerSideValidation(path, 'isPanValid');
    },
    validatePhoneNum() {

    },
    validateEmail() {

    },
    closePopup(){
      this.$refs.confirmCancelPopup.close();
    },

    checkDelete(event) {
      
      if(event.target.value === 'delete'){
        this.isConfirmDeleteDisabled = false
      }else{
        this.isConfirmDeleteDisabled = true
      }
    },
    isFutureDate(date) {
            const currentDate = new Date();
            return date > currentDate;
    },
    previewImage(event) {
      const files = event.target.files;
      if (files && first(files)) {
        
          this.compressorImage(files[0], this);
        
      } else {
        this.clearImg();
      }
    },
    compressorImage(file, that) {
      
      new Compressor(file, {
          quality: 0.1,
          maxWidth: 500,
          maxHeight: 500,
          success(result) {
            const reader = new FileReader();
            reader.readAsDataURL(result); 

            reader.onload = evt => {
              console.log('onload',evt);
              that.user.photo = evt.target.result;
              that.$refs.imgPreview.src = evt.target.result 
            };
          },
          error(err) {
            console.log(err.message);
          },
        });
        
      
    },
    clearImg() {
      this.$refs.imageUpload.value = "";
      this.$refs.imgPreview.src = this.defaultPreviewImage;
    },
    deleteEmployee(){
      const url = `http://localhost:8090/api/employees/${this.empId}`;
      
      const router = this.$router;
      const notifyVue = this.notifyVue;
      let msg = 'Data deleted Successfully';

      axios.delete(url)
      .then((response) => {
        this.user = response.data;
        console.log(response.data);
        notifyVue(msg);
        router.push("employeeManagement");
      });        

    },
    fetch(){
      
      const url = `http://localhost:8090/api/employees/${this.empId}`;
      
      axios.get(url)
      .then((response) => {
        this.user = response.data;
        this.$refs.imgPreview.src = this.user.photo;
        console.log(response.data);
      });        
    
    },
    save() {
              
      this.submitted = true;

      // stop here if form is invalid
      this.$v.$touch();
      if (this.$v.$invalid) {
        console.log('not saving',  this.$v);
          return;
      }
      console.log("Saving ....")

      const userObj = this.user;
      const router = this.$router;
      const notifyVue = this.notifyVue;
      let msg = '';
      const url = "http://localhost:8090/api/employees";
      let res = null;
      if(this.isPageEditable){
        res = axios.put(url + `/${userObj.id}`, userObj);
        msg = 'Data updated successfully';
      }else{
        res = axios.post(url, userObj);
        msg = 'Data added successfully';
      }
      res
        .then(function(response) {
          //200
          console.log(response.data);
          console.log(response.status);
          notifyVue(msg);
          router.push("employeeManagement");
        })
        .catch(error => {
          if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log(error.response.data);
            console.log('api errors=====');
            console.log('this', this);
            console.log(error.response.headers);
            this.handleServerValidation(error);
          } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
            console.log(error.request);
          } else {
            // Something happened in setting up the request that triggered an Error
            console.log("Error", error.message);
          }
          console.log(error.config);
        });
    },
    handleServerValidation(error) {
      const errorRes = error.response.data;
      const errorMsg = errorRes.cause.cause.message;
      errorMsg.split
      console.log("only error", error.response.data);
      console.log('this.$v', this.$v);

    },
    notifyVue(msg) {
      this.$notify({
        timeout: 10000,
        message: msg,
        icon: "ti-check",
        horizontalAlign: 'center',
        verticalAlign: 'top',
        type: "success"
      });
    }
  }
};
</script>
<style>
img{
  max-width:100px;
}
input[type=file]{
  padding: 5px;
}
.hidden{
  display: none;
}

</style>
