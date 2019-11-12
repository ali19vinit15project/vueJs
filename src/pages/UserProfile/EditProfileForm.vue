<template>
  <card class="card" title="Add Profile">
    <div>
      <form @submit.prevent>
        

        <div class="row">
          <div class="col-md-4">
            <fg-input type="text"
                      label="First Name"
                      placeholder="First Name"
                      v-model="user.firstName">
            </fg-input>
          </div>
          <div class="col-md-4">
            <fg-input type="text"
                      label="Middle Name"
                      placeholder="Middle Name"
                      v-model="user.middleName">
            </fg-input>
          </div>
           <div class="col-md-4">
            <fg-input type="text"
                      label="Last Name"
                      placeholder="Last Name"
                      v-model="user.lastName">
            </fg-input>
          </div>
        </div>


        <div class="row">
          <div class="col-md-4">
            <fg-input type="text"
                      label="Email"
                      placeholder="Email Address"
                      v-model="user.email">
            </fg-input>
          </div>
            <div class="col-md-4">
            <fg-input type="text"
                      label="Phome Number"
                      placeholder="Phone Number"
                      v-model="user.phoneNumber">
            </fg-input>
          </div>
               <div class="col-md-4">
            <fg-input type="text"
                      label="Emergency Phone Number"
                      placeholder="Emergency Phone"
                      v-model="user.emergencyphone">
            </fg-input>
          </div>
        </div>

        <div class="row">
          <div class="col-md-4">
            <fg-input type="text"
                      label="Aadhar"
                      placeholder="Aadhar Card"
                      v-model="user.aadhar">
            </fg-input>
          </div>
          <div class="col-md-4">
            <fg-input type="text"
                      label="PAN No."
                      placeholder="PAN No."
                      v-model="user.pan">
            </fg-input>
          </div>
          <div class="col-md-4">
            <fg-input type="text"
                      label="Blood Group"
                      placeholder="Blood Group"
                      v-model="user.bloodGroup">
            </fg-input>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <fg-input type="text"
                      label="Qualification"
                      placeholder="Qualification"
                      v-model="user.qualification">
            </fg-input>
          </div>
          <div class="col-md-4">
            <fg-input type="file"
                      label="Photo"
                      v-model="user.photo">
            </fg-input>
          </div>

        </div>
        <div class="row">
          <div class="col-md-4">
            <fg-input type="text"
                      label="D.O.B"
                      placeholder="D.O.B"
                      v-model="user.dob">
            </fg-input>
          </div>
          <div class="col-md-4">
          <label>Gender</label><br>
          <select v-model="user.gender">
            <option disabled selected value="">Select Gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Others</option>
           </select>
          </div>
          <div class="col-md-4">
          <label>Martial Status</label><br>
          <select v-model="user.martialStatus">
            <option disabled selected value="">Select Status</option>
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
              <textarea rows="3" class="form-control border-input"
                        placeholder="Address description"
                        v-model="user.address">

              </textarea>
            </div>
          </div>
        </div>

        <div class="text-center">
          <p-button type="info"
                    round
                    @click.native.prevent="updateProfile">
            Add Profile
          </p-button>
        </div>
        <div class="clearfix"></div>
      </form>
    </div>
  </card>
</template>
<script>
export default {
  data() {
    return {
      user: {
        firstName: "",
        lastName: "",
        middeName: "",
        email: "",
        phoneNumber: "",
        emergencyphone: "",
        aadhar: "",
        pan: "",
        bloodGroup: "",
        qualification: "",
        photo: "",
        dob: "",
        gender: "",
        martialStatus: "",
        address: ""
      }
    };
  },
  methods: {
    updateProfile() {
      alert("Your data: " + JSON.stringify(this.user));
    }
  }
};
</script>
<style>
</style>
