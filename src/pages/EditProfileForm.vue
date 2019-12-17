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
            <div v-if="submitted && !$v.user.firstName.required" class="invalid-feedback" style="display: block" >First Name is required</div>  
          </div>
          <div class="col-md-4">
            <fg-input
              type="text"
              label="Middle Name"
              placeholder="Middle Name"
              v-model="user.middleName"
              
            ></fg-input>
          </div>
          <div class="col-md-4">
            <fg-input type="text" label="Last Name" placeholder="Last Name" v-model="user.lastName"></fg-input>
          </div>
        </div>

        <div class="row">
          <div class="col-md-4">
            <fg-input type="text" label="Email" placeholder="Email Address" v-model="user.email"></fg-input>
          </div>
          <div class="col-md-4">
            <fg-input
              type="text"
              label="Phome Number"
              placeholder="Phone Number"
              v-model="user.phoneNum"
            ></fg-input>
          </div>
          <div class="col-md-4">
            <fg-input
              type="text"
              label="Emergency Phone Number"
              placeholder="Emergency Phone"
              v-model="user.emrgncyPhoneNum"
            ></fg-input>
          </div>
        </div>

        <div class="row">
          <div class="col-md-4">
            <fg-input type="text" label="Aadhar" placeholder="Aadhar Card" v-model="user.aadhar"></fg-input>
          </div>
          <div class="col-md-4">
            <fg-input type="text" label="PAN No." placeholder="PAN No." v-model="user.pan"></fg-input>
          </div>
          <div class="col-md-4">
            <fg-input
              type="text"
              label="Blood Group"
              placeholder="Blood Group"
              v-model="user.bloodGroup"
            ></fg-input>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <fg-input
              type="text"
              label="Qualification"
              placeholder="Qualification"
              v-model="user.qualification"
            ></fg-input>
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
            >
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
              ></date-pick>
          </div>
          <div class="col-md-4">
            <label>Gender</label>
            <br>
            <select v-model="user.gender">
              <option disabled selected value>Select Gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Others</option>
            </select>
          </div>
          <div class="col-md-4">
            <label>Martial Status</label>
            <br>
            <select v-model="user.martialStatus">
              <option disabled selected value>Select Status</option>
              <option>Married</option>
              <option>UnMarried</option>
              <option>Divorce</option>
            </select>
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
              ></textarea>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <fg-input type="text" label="State" placeholder="State" v-model="user.address.state"></fg-input>
          </div>
          <div class="col-md-4">
            <fg-input type="text" label="City" placeholder="City" v-model="user.address.city"></fg-input>
          </div>
          <div class="col-md-4">
            <fg-input
              type="text"
              label="Pin Code"
              placeholder="Pin Code"
              v-model="user.address.pincode"
            ></fg-input>
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
import { required, email, minLength, sameAs } from "vuelidate/lib/validators";

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
      submitted: false
    };
  },
  validations: {
            user: {
                firstName: { required, alpha }
            }
        },
  methods: {
    
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
                  console.log('here',  this.$v);
                    return;
                }

                alert("SUCCESS!! :-)\n\n" + JSON.stringify(this.user));


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
