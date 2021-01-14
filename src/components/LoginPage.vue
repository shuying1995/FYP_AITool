<template>
  <v-main style="height: 100% !important">
    <v-container pa-0 fluid fill-height>
      <v-layout>
        <v-row>
          <v-flex xs12 sm6 md8 class="login-bg">
            <v-layout align-center justify-center fill-height pa-3>
              <div
                class="text-xs-center mb-3 pa-4"
                style="background-color: rgba(0, 0, 0, 0.5)"
              >
                <div class="display-1 font-weight-black mb-3">
                  Marketing information!
                </div>
              </div>
            </v-layout>
          </v-flex>
          <v-flex xs12 sm6 md4 class="active px-5">
            <v-layout justify-center fill-height px-5>
              <v-layout column>
                <v-flex xs12>
                  <div class="text-xs-center">
                    <div class="login-title">AI Tool Name</div>
                    <div class="login-header mt-2">
                      Sign in with your organizational account
                    </div>
                  </div>
                  <v-form class="mt-10">
                    <v-text-field
                      class="pa-0 ma-0"
                      name="username"
                      v-model="username"
                      placeholder="Username"
                      filled
                      full-width
                      single-line
                      background-color="#f4f8f7"
                      color="grey darken-2"
                      prepend-inner-icon="mdi-account-outline"
                      v-on:keyup.enter="login"
                    />
                    <v-text-field
                      class="pa-0 ma-0"
                      name="password"
                      v-model="password"
                      placeholder="Password"
                      :append-icon="
                        show ? 'mdi-eye-outline' : 'mdi-eye-off-outline'
                      "
                      :type="show ? 'text' : 'password'"
                      filled
                      single-line
                      full-width
                      background-color="#f4f8f7"
                      color="grey darken-2"
                      prepend-inner-icon="mdi-lock-outline"
                      autocomplete="password"
                      @click:append="show = !show"
                      v-on:keyup.enter="login"
                    />
                    <v-btn
                      rounded
                      dark
                      ripple
                      color="teal"
                      class="mt-4 mb-5"
                      style="width: 200px"
                      @click="login"
                      v-on:keyup.enter="login"
                    >
                      Log in
                    </v-btn>
                  </v-form>
                  <v-row class="justify-end mt-2">
                    <span><a href="/forgot">Forget password?</a></span>
                  </v-row>
                  <v-row class="justify-center mt-8">
                    <span
                      >Don't have an account?<a @click="register">
                        Sign up!</a
                      ></span
                    >
                  </v-row>
                </v-flex>
              </v-layout>
            </v-layout>
          </v-flex>
        </v-row>
      </v-layout>
      <v-snackbar
        v-model="snackbar"
        :color="color"
        :top="true"
      >
        {{ errorMessages }}
        <v-btn
          dark
          text
          @click="snackbar = false"
        >
          Close
        </v-btn>
      </v-snackbar>
    </v-container>
  </v-main>
</template>

<script>
const axios = require('axios');
export default {
  name: "LoginPage",
  title: "Login",
  data() {
    return {
        show:false,
        username: "",
        password: "",
        errorMessages: "Incorrect login info",
        snackbar: false,
        color: "general"
      }
  },
  methods: {
    login(){
            axios
            .post('api/login', {
                username: this.username,
                password: this.password
            })
            .then((response) => {
                if(response.data=="Member")
                this.$router.push({ name: "HomePage"})
                else
                this.$router.push({ name: "FacilitatorHomePage"})
            })
            .catch((error) => {
              this.snackbar = true;
              this.color = "error";
                console.log(error)
            })
    },
    register(){
      this.$router.push({ name: "Register"});
    }
  },
};
</script>

<style scoped>
.login-bg {
  min-height: 100%;
  background-image: url(../assets/loginimage.png);
  background-repeat: no-repeat;
  background-size: cover;
  color: white;
}

.login-title {
  font-size: 24px;
  font-weight: bold !important;
  padding-top: 25%;
  margin-bottom: -5px;
  overflow: hidden;
}

.login-header {
  color: #000000;
  font-weight: normal;
  font-size: 0.9em;
}
</style>
