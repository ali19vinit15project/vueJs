<template>
  <card class="card" title="Add Profile">
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
            <fg-input type="text" 
            label="Email" placeholder="Email Address" 
            v-model="user.email"
            :validationFlag="submitted && $v.user.email.$error"
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
            <fg-input type="text" label="Aadhar" placeholder="Aadhar Card" v-model="user.aadhar"
            :validationFlag="submitted && $v.user.aadhar.$error"
            ></fg-input>
            <div v-if="submitted && !$v.user.aadhar.required" class="invalid-feedback" style="display: block">{{errorMsg.aadhar.required}}</div> 
            <div v-if="submitted && !$v.user.aadhar.numeric" class="invalid-feedback" style="display: block">{{errorMsg.aadhar.numeric}}</div> 
            <div v-if="submitted && !$v.user.aadhar.minLength" class="invalid-feedback" style="display: block">{{errorMsg.aadhar.minLength}}</div>
            <div v-if="submitted && !$v.user.aadhar.maxLength" class="invalid-feedback" style="display: block">{{errorMsg.aadhar.maxLength}}</div>

          </div>
          <div class="col-md-4">
            <fg-input type="text" label="PAN No." placeholder="PAN No." v-model="user.pan"
            :validationFlag="submitted && $v.user.pan.$error"
            ></fg-input>
          <div v-if="submitted && !$v.user.pan.pan" class="invalid-feedback" style="display: block">{{errorMsg.pan.pan}}</div>        
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
              ref="imageUpload"
              label="Photo"
              id="tempImage"
              @change="previewImage($event)"
              accept="image/*"
              :class="{ 'is-invalid': 'submitted && $v.user.photo.$error' }">
              <div v-if="submitted && !$v.user.photo.required" class="invalid-feedback" style="display: block">{{errorMsg.photo.required}}</div>           
          </div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <label>Date Of Birth</label>
            <br>
            <date-pick
              v-model="user.dob"
              :displayFormat="'DD-MM-YYYY'"
              :format="'DD-MM-YYYY'"
              :isDateDisabled="isFutureDate"
              :class="{ 'is-invalid': 'submitted && $v.user.dob.$error' }"
            ></date-pick>
          <div v-if="submitted && !$v.user.dob.required" class="invalid-feedback" style="display: block">{{errorMsg.dob.required}}</div>
          </div>
          <div class="col-md-4">
            <label>Gender</label>
            <br>
            <select v-model="user.gender" :class="{ 'is-invalid': 'submitted && $v.user.gender.$error' }">
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
            <select v-model="user.martialStatus" :class="{ 'is-invalid': 'submitted && $v.user.martialStatus.$error' }">
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
                :validationFlag="submitted && $v.user.address.area.$error"
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
          <button class="btn btn-round btn-info" type="submit">Enter</button>
        </div>
        <div class="clearfix"></div>
      </form>
    </div>
  </card>
</template>
<script>
import { first } from "lodash";
import axios from "axios";
import { constants } from "fs";
import DatePick from 'vue-date-pick';
import 'vue-date-pick/dist/vueDatePick.css';
import { required, alpha, email, minLength, numeric, maxLength, sameAs, helpers } from "vuelidate/lib/validators";

const pan = helpers.regex('pan', /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/)
const bloodGroup = helpers.regex('bloodGroup', /^(A|B|AB|O)[+-]$/)
const qualification = helpers.regex('qualification', /^[A-Za-z\d\s]+$/)
//const MAX_IMG_SIZE : 500;

export default {
  components: {
    DatePick
  },
  data() {
    return {
      tempImage: "",
      isFileExist: false,
      maxImageSie: false,
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
          required: "phoneNum is required",
          numeric: "phoneNum must be numeric",
          minLength: "length must be equal to 10",
          maxLength: "length must be equal to 10"
        },
        emrgncyPhoneNum: {
          required: "Emergency PhoneNum is required",
          numeric: "Emergency PhoneNum must be numeric",
          minLength: "length must be equal to 10",
          maxLength: "length must be equal to 10"
        },
        aadhar: {
          required: "Aadhar is required",
          numeric: "Aadhar must be numeric",
          minLength: "length must be equal to 12",
          maxLength: "length must be equal to 12"
        },
        pan: {
          pan: "Must be a valid PAN eg: ABCDE1234Z"
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
                aadhar: { required, numeric, minLength: minLength(12), maxLength: maxLength(12)},
                pan: { pan },
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
    isFutureDate(date) {
            const currentDate = new Date();
            return date > currentDate;
    },
    previewImage(event) {
      const files = event.target.files;
      if (files && first(files)) {
        this.isFileExist = true;
        if (files[0].size / 1024 > 500) {
          this.maxImageSie = true;
        } else {
          this.maxImageSie = false;
          const reader = new FileReader();
          reader.onload = evt => {
            this.user.photo = evt.target.result;
          };
          reader.readAsDataURL(first(files));
        }
      } else {
        this.clearImg();
      }
    },
    
    clearImg() {
      this.$refs.imageUpload.value = "";
      this.isFileExist = false;
      this.maxImageSie = false;
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
      const url = "http://localhost:8090/api/employees";
      const res = axios.post(url, userObj);
      res
        .then(function(response) {
          console.log(response.data);
          console.log(response.status);
          console.log(response.statusText);
          console.log(response.headers);
          console.log(response.config);
        })
        .catch(function(error) {
          if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
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
    }
  }
};
</script>
<style>
</style>
