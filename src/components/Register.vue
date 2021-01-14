<template>
<v-main>
    <v-form>
        <v-text-field placeholder="name" v-model="name"></v-text-field>
        <v-text-field placeholder="username" v-model="username"></v-text-field>
        <v-text-field placeholder="email" v-model="email"></v-text-field>
        <v-text-field placeholder="password" v-model="password"></v-text-field>

        <v-btn @click="register">Submit</v-btn>
    </v-form>
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
        }
    },
    methods: {
        register(){
            console.log("Hi")
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