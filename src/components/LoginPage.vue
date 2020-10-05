<template>
  <v-app>
    <v-container fill-height>
      <v-layout align-center justify-center fill-height>
        <v-flex xs12 sm6 class="login-bg"> </v-flex>
      </v-layout>
      <v-layout align-center justify-end>
        <v-flex xs12 sm8 md4>
          <v-col>
            <v-row>
              <p>Sign in with your organizational account</p>
              <v-flex xs12 class="login-form">
                <v-form>
                  <v-text-field
                    label="Username"
                    outlined
                    full-width
                    single-line
                    prepend-inner-icon="mdi-account-outline"
                  ></v-text-field>
                </v-form>
              </v-flex>
            </v-row>
            <v-row>
              <v-flex xs12>
                <v-text-field
                  label="Password"
                  outlined
                  full-width
                  single-line
                  prepend-inner-icon="mdi-lock-outline"
                ></v-text-field>
              </v-flex>
            </v-row>
            <v-row>
              <v-flex class="text-center">
                <v-btn label="Signin">Signin</v-btn>
              </v-flex>
            </v-row>
          </v-col>
          <v-layout>
            <v-flex xs12> </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: "LoginPage",
  title: "Login",
};
</script>

<style scoped>
.login-bg {
  min-height: 1000px;
  min-width: 600px;
  background-image: url(../assets/loginimage.png);
  background-repeat: no-repeat;
  background-size: cover;
  color: white;
}

.login-form {
  min-width: 50%;
}
</style>>