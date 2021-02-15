<template>
    <v-main>
      <v-container fill-height fluid>
          <v-row align="center" justify="center">
          <v-card class="justify-center" min-width="600px" max-width="600px">
              <v-card-title>Reset Password</v-card-title>
                <hr class="solid mx-4">  
                <v-card-text class="pb-0">Please enter your email and new password.</v-card-text>
                    <v-col cols="9">
                    <v-text-field 
                     v-model="password"
                     placeholder="New Password"
                     outlined
                     dense
                     :append-icon="showpw ? 'mdi-eye-outline' : 'mdi-eye-off-outline'"
                     :type="showpw ? 'text' : 'password'"
                     @click:append="showpw = !showpw"
                     v-on:keyup.enter="submit"
                     ></v-text-field>
                     <v-text-field 
                     v-model="repassword"
                     placeholder="Confirm New Password"
                     outlined
                     dense
                     :append-icon="showcpw ? 'mdi-eye-outline' : 'mdi-eye-off-outline'"
                     :type="showcpw ? 'text' : 'password'"
                     @click:append="showcpw = !showcpw"
                     :rules="[passwordConfirmationRule]"
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
          @click="login"
        >
          Login Now!
        </v-btn>
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

      <v-snackbar
        v-model="failsnackbar"
        :color="color"
        :top="true"
      >
        {{ failErrorMessages }}
        <template v-slot:action="{ attrs }">
        <v-btn
          dark
          text
          v-bind="attrs"
          @click="forget"
        >
          Forget Password
        </v-btn>
        <v-btn
          dark
          text
          v-bind="attrs"
          @click="failsnackbar = false"
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
import axios from 'axios'
export default {
data(){
    return{
        password: '',
        repassword: '',
        showpw: false,
        showcpw: false,
        snackbar: false,
        color: 'general',
        errorMessages: 'Password successfully changed!',
        failsnackbar: false,
        failErrorMessages: 'Reset password has expired please submit your email address again.'
    }
},
methods:{
    submit(){
        axios
         .post('api/users/reset/'+ this.$route.params.token,{
             password: this.password
         })
         .then((response)=>{
             this.snackbar=true;
             this.color='success'
         })
         .catch((error)=>{
             this.failsnackbar=true;
             this.color='error'
         })
    },
    login(){
        this.$router.push({ name: "LoginPage"})
        this.snackbar=false;
    },
    forget(){
      this.failsnackbar=false;
      this.$router.push({ name: 'ForgetPW'})
    }
},
computed: {
    passwordConfirmationRule() {
      return this.password === this.repassword || 'Password do not match'
    }
},
}
</script>

<style>

</style>