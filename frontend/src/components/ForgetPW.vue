<template>
    <v-main>
      <v-container fill-height fluid>
          <v-row align="center" justify="center">
          <v-card class="justify-center" min-width="600px" max-width="600px">
              <v-card-title>Find your account</v-card-title>
                <hr class="solid mx-4">  
                <v-card-text class="pb-0">To reset password, please provide your email address.</v-card-text>
                    <v-col cols="9">
                    <v-text-field 
                     v-model="email"
                     placeholder="Email Address"
                     outlined
                     dense
                     v-on:keyup.enter="submit"
                     ></v-text-field>
                    </v-col>
                    <v-flex class="justify-end pa-2" row wrap>
                        <v-btn 
                         color="success"
                         @click="submit"
                         >
                         Send Reset Instruction
                         </v-btn>
                         <v-btn
                          @click="login"
                          >
                         Cancel
                         </v-btn>
                    </v-flex>
          </v-card>
          <v-dialog
              v-model="dialog"
              persistent
              max-width="290"
            >
              <v-card>
                <v-card-title class="headline">
                  Reset Password
                </v-card-title>
                <v-card-text>If we found an account associated with that email, we've sent password reset instructions to the email address.</v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                    color="green darken-1"
                    text
                    @click='login'
                  >
                    Close
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-row>
      </v-container>
    </v-main>  
</template>

<script>
const axios = require('axios');
export default {
data(){
    return{
        email: '',
        dialog: false
    }
},
methods:{
    login(){
        this.$router.push({ name: "LoginPage"})
    },
    submit(){
        axios
         .post('api/users/forget',{
             email: this.email
         })
         .then((response)=>{
             this.dialog=true;
         })
    }
}
}
</script>

<style>
hr.solid {
  border-top: 2px solid lightgray;
}

.v-btn {
  margin-left: 10px;
}
</style>