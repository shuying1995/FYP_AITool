<template>
    <v-main>
      <v-container>
          <v-card class="justify-center">
            <validation-observer
                ref="observer"
                v-slot="{ invalid }"
            >
            <v-form @submit.prevent="register">
            <v-card-text class="text-center">
            <h3>Create your account</h3>

            </v-card-text>
            <validation-provider
                v-slot="{ errors }"
                name="First Name"
                rules="required"
            >
            <v-text-field 
            placeholder="First Name"
            label="First Name" 
            v-model="firstname"
            outlined
            dense
            :error-messages="errors"
            v-on:keyup.enter="register"
            />
            </validation-provider>

            <validation-provider
                v-slot="{ errors }"
                name="Last Name"
                rules="required"
            >
            <v-text-field 
            placeholder="Last Name"
            label="Last Name" 
            v-model="lastname"
            outlined
            dense
            :error-messages="errors"
            v-on:keyup.enter="register"
            />
            </validation-provider>

             <validation-provider
                v-slot="{ errors }"
                name="Username"
                rules="required|min:5"
            >
            <v-text-field 
            placeholder="Username"
            label="Username"
            v-model="username"
            outlined
            dense
            :error-messages="errors"
            v-on:keyup.enter="register"
            />
             </validation-provider>

            <validation-provider
                v-slot="{ errors }"
                name="Email"
                rules="required|email"
            >
            <v-text-field 
            placeholder="Email" 
            label="Email"
            v-model="email"
            outlined
            dense
            :error-messages="errors"
            v-on:keyup.enter="register"
            />
            </validation-provider>
            
            <validation-provider
                v-slot="{ errors }"
                name="Password"
                :rules="{
                    required:true,
                    min:8,
                    regex:'^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})'
                }"
            >
            <v-text-field 
            placeholder="Password" 
            label="Password"
            v-model="password"
            :append-icon="showpw ? 'mdi-eye-outline' : 'mdi-eye-off-outline'"
            :type="showpw ? 'text' : 'password'"
            @click:append="showpw = !showpw"
            outlined
            dense
            :error-messages="errors"
            v-on:keyup.enter="register"
            />
            </validation-provider>


            <validation-provider
                v-slot="{ errors }"
                name="Confirm Password"
                rules="required"
            >
            <v-text-field 
            placeholder="Re-enter password" 
            label="Re-enter password"
            v-model="repassword"
            :append-icon="showcpw ? 'mdi-eye-outline' : 'mdi-eye-off-outline'"
            :type="showcpw ? 'text' : 'password'"
            @click:append="showcpw = !showcpw"
            :rules="[passwordConfirmationRule]"
            :error-messages="errors"
            outlined
            dense
            v-on:keyup.enter="register"
            />
            </validation-provider>

            <v-card-text class="text-center">
            <p>Do you want to open a facilitator or member account? Or both?</p>
            </v-card-text>

                        <v-card-text class="pt-0">
                        <v-flex row wrap class="justify-center pl-4 pb-2">
                        <div class="border">
                           Facilitator account allows you to create projects and invite members only. 
                           Member account allows you to participate in projects only. 
                           Having both facilitator and member account gives you the flexibility to do both and 
                           you can switch between the accounts using the same username.
                        </div>
                        </v-flex>
                        </v-card-text>

                        <validation-provider
                            v-slot="{ errors }"
                            name="Roles"
                            rules="required"
                        >
                        <v-select 
                            v-model="roles"
                            :items="roleitems" 
                            label="Roles"
                            outlined 
                            dense
                            placeholder="Facilitator Only"
                            :error-messages="errors"
                            v-on:keyup.enter="register"
                        />
                        </validation-provider>

            <v-card-text class="text-center pt-0">
            <p class="padding">Have an account? <a @click="login">Sign in</a> instead</p>
            <v-btn
             @click="register"
             :disabled="invalid"
             >Submit</v-btn>
            </v-card-text>
        </v-form>
    </validation-observer>
          </v-card>

          <v-dialog
            v-model="successdialog"
            width="500"
            >
          <v-card>
              <v-card-title class="headline success justify-center">
              Successfully registered!
              </v-card-title>

                <v-card-actions>
                <v-btn
                    color="primary"
                    text
                    @click="login"
                >
                    Login Now!
                </v-btn>
                <v-spacer></v-spacer>
                <v-btn
                    color="primary"
                    text
                    @click="successdialog = false"
                >
                    Close
                </v-btn>
                </v-card-actions>
          </v-card>
          </v-dialog>

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

      </v-container>
    </v-main>
</template>

<script>
const axios = require('axios');
import { required, email, min, regex } from 'vee-validate/dist/rules'
import { extend, ValidationObserver, ValidationProvider, setInteractionMode } from 'vee-validate'

  setInteractionMode('eager')

  extend('required', {
    ...required,
    message: '{_field_} can not be empty',
  })

  extend('min', {
    ...min,
    message: '{_field_} need to be at least {length} characters',
  })

  extend('regex', {
    ...regex,
    message: '{_field_} must contain at least: 1 uppercase letter, 1 lowercase letter, 1 number, and one special character',
  })

  extend('email', {
    ...email,
    message: 'Email must be valid',
  })

export default {
    components:{
        ValidationProvider,
        ValidationObserver
    },
    data(){
        return{
            successdialog:false,
            showpw:false,
            showcpw:false,
            name: '',
            username:'',
            email:'',
            password:'',
            repassword:'',
            roles:[],
            roleitems:['Facilitator','Member','Facilitator, Member'],
            errorMessages: "Username or email already registered",
            snackbar: false,
            color: 'general'
        }
    },

    computed: {
    passwordConfirmationRule() {
      return this.password === this.repassword || 'Password do not match'
    }
},

    methods: {
        login(){
            this.$router.push({ name: 'LoginPage' })
        },
        register(){
            this.$refs.observer.validate()
            axios
            .post('api/register', {
                firstname: this.firstname,
                lastname: this.lastname,
                username: this.username,
                email: this.email,
                password: this.password,
                roles: this.roles
            })
            .then((response) => {
                this.dialog=true;
                console.log(response)
            })
            .catch((error) => {
                this.snackbar=true;
                this.color="error";
                console.log(error)
            })
        }
    }
}
</script>

<style scoped>
.v-text-field{
    width: 800px;
    padding-left: 350px;
}

p{
    margin:0;
    padding:0
}

div.border{
    border-style: ridge;;
    width: 500px;
    background-color: #CFD8DC;
    text-align: center;
}

p.padding{
    padding-bottom: 10px;
}
</style>