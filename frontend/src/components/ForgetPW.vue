<template>
    <v-main>
      <v-container fill-height fluid>
          <v-row align="center" justify="center">
          <v-card class="justify-center" min-width="600px" max-width="600px">
              <v-card-title>Find your account</v-card-title>
                <hr class="solid mx-4">  
                <v-card-text class="pb-0">Please enter your email address.</v-card-text>
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
                         Submit
                         </v-btn>
                         <v-btn
                          @click="login"
                          >
                         Cancel
                         </v-btn>
                    </v-flex>
          </v-card>
          <v-snackbar
        v-model="snackbar"
        :color="color"
        :top="true"
      >
        {{ errorMessages }}
        <template v-slot:action="{ attrs }">
        <v-btn
          dark
          text
          v-bind="attrs"
          @click="snackbar = false"
        >
          Close
        </v-btn>
        </template>
      </v-snackbar>
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
        snackbar: false,
        color: 'general',
        errorMessages: 'An email would be sent to this email address if there is an account with this email address found'
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
             this.snackbar=true;
             this.color='success'
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