<template>
    <v-main>
        <v-form>
            <v-text-field 
            placeholder="name" 
            v-model="name"
            :rules="[rules.required]"
            />
            <v-text-field 
            placeholder="username"
            :rules="[rules.required,rules.usernamemin]" 
            hint="At least 5 characters"
            v-model="username"
            />
            <v-text-field 
            placeholder="email" 
            v-model="email"
            :rules="[rules.required]"
            />
            <v-text-field 
            placeholder="password" 
            v-model="password"
            :rules="[rules.required,rules.passwordmin]"
            hint="At least 8 characters"
            />

            <v-btn @click="register">Submit</v-btn>
        </v-form>
    </v-main>
</template>

<script>
const axios = require('axios');
export default {
    data(){
        return{
            rules:{
            required: value => !!value || 'Required',
            usernamemin: v => v.length >= 5 || 'Minimum 5 characters',
            passwordmin: v => v.length >= 8 || 'Minimum 8 characters',
            passwordMatch: () => ('Password you entered does not match')
            },
            name: '',
            username:'',
            email:'',
            password:'',
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

</style>