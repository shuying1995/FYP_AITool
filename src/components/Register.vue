<template>
    <v-main>
      <v-container pa-0 fluid fill-height>
        <v-layout fill-height justify-center>
        <v-form>
            <v-text-field 
            placeholder="Name" 
            v-model="name"
            outlined
            dense
            />
            <v-text-field 
            placeholder="Username"
            v-model="username"
            outlined
            dense
            />
            <v-text-field 
            placeholder="Email" 
            v-model="email"
            outlined
            dense
            />
            <v-text-field 
            placeholder="Password" 
            v-model="password"
            outlined
            dense
            />
            <v-text-field 
            placeholder="Re-enter password" 
            v-model="repassword"
            :rules="[passwordConfirmationRule]"
            outlined
            dense
            />

            <p>Do you want to open a facilitator or member account? Or both?</p>
                       <v-card 
                        outlined 
                        max-width="700px" 
                        color="#E0E0E0"
                        class="mb-4 mt-2"
                        >
                        <v-card-text>
                           Facilitator account allows you to create projects and invite members only. 
                           Member account allows you to participate in projects only. 
                           Having both facilitator and member account gives you the flexibility to do both and 
                           you can switch between the accounts using the same username.
                        </v-card-text>
                       </v-card>
                        <v-select 
                            v-model="role"
                            :items="roleitems" 
                            outlined 
                            dense
                            placeholder="Facilitator Only"
                        />

            <v-btn @click="register">Submit</v-btn>
        </v-form>
        </v-layout>
      </v-container>
    </v-main>
</template>

<script>
const axios = require('axios');
export default {
    data(){
        return{
            name: '',
            username:'',
            email:'',
            password:'',
            repassword:'',
            role:'',
            roleitems:['Facilitator only','Member only','Both facilitator and member'],
        }
    },

    computed: {
    passwordConfirmationRule() {
      return this.password === this.repassword || 'Password must match'
    }
},

    methods: {
        register(){
            axios
            .post('api/register', {
                name: this.name,
                username: this.username,
                email: this.email,
                password: this.password
            })
            .then((response) => {
                console.log(response)
            })
            .catch((error) => {
                console.log(error)
            })
        }
    }
}
</script>

<style scoped>
.v-text-field{
    width: 400px;
}

p{
    margin:0;
    padding:0
}
</style>