<template>
    <v-main>
        <v-container fluid>
            <v-card>
                <v-layout>
                    <v-flex row wrap class="custom ma-3">
                        <a @click="home">HOME</a>
                        <p>></p>
                        <p>DESIGN PROJECT</p>
                    </v-flex>
                </v-layout>  

                <v-flex row wrap class="justify-start pb-6">
                    <v-dialog v-model="asdialog" persistent max-width="400px">
                      <template v-slot:activator="{ on, attrs }">
                        <v-btn color="warning" dark v-bind="attrs" v-on="on">
                          Application Scenario
                        </v-btn>
                      </template>
                      <v-card 
                       class="text-center white--text headline"
                       min-height="270px"
                       color="grey"
                       >
                       <v-row justify="end" class="ma-0">
                        <v-btn icon @click="asdialog = false"><v-icon>mdi-close-circle</v-icon></v-btn>
                      </v-row>
                          {{appscenario}}
                      </v-card>
                    </v-dialog>

                    <v-dialog v-model="atdialog" persistent max-width="400px">
                      <template v-slot:activator="{ on, attrs }">
                        <v-btn color="warning" dark v-bind="attrs" v-on="on">
                          Application Type
                        </v-btn>
                      </template>
                      <v-img v-bind:src="require('../assets/' + image + '.jpg')" contain max-height="350">
                      <v-row justify="end" class="ma-0">
                        <v-btn icon @click="atdialog = false"><v-icon>mdi-close-circle</v-icon></v-btn>
                      </v-row>
                       </v-img>
                    </v-dialog>

                    <v-btn color="warning"> 
                        Stakeholder Role
                    </v-btn>
                </v-flex>

                <v-row>
                    <v-col md="6">
                        <v-img :src="fairnesscard" contain max-height="450"></v-img>
                    </v-col>
                    <v-col md="5">
                        <h3>Using the perspective of your Stakeholder role,</h3>
                        <h3 class="pb-2">If this definition is used, think deeply about</h3>
                        <h3>What can go right?</h3>
                        <v-textarea
                         v-model="goright"
                         placeholder="Placeholder" 
                         outlined 
                         height="70px"
                         />
                        <h3>What can go wrong?</h3>
                        <v-textarea 
                         v-model="gowrong"
                         placeholder="Placeholder" 
                         outlined 
                         height="70px"
                         />
                        <v-btn color="warning" @click="ratingfairness">Next</v-btn>
                    </v-col>
                </v-row>
            </v-card>
        </v-container>
    </v-main>
</template>

<script>
const axios = require('axios');
export default {
name: 'InputFairness',
data(){
    return { 
        selectedimage: this.$store.getters.fairnesscard,
        asdialog: false,
        atdialog: false,
        appscenario: window.$cookies.get("acceptedprojectappscenario"),
        apptype: window.$cookies.get("acceptedprojectapptype"), 
        goright: '',
        gowrong: ''
    }
},
computed: {
    fairnesscard(){
        return this.selectedimage
    },
    image(){
        return this.apptype
    }
},
methods:{
    home(){
        this.$router.push({ name: "HomePageOP"});
        },
    ratingfairness(){
        const projectid = window.$cookies.get("acceptedprojectid")
        axios
        .post('api/projectdetails', {
                        userid: window.$cookies.get("userid"),
                        projectid: window.$cookies.get("acceptedprojectid"),
                        stakeholder: this.$store.getters.stakeholder,
                        fairnesscard: this.selectedimage,
                        goright: this.goright,
                        gowrong: this.gowrong
                    })
                    .then((response) => {
                        console.log(response)
                        this.$router.push({ name: "RatingFairness"});
                    })
                    .catch((error) =>{
                        console.log(error)
                    })
        },
    }
}
</script>

<style scoped>
.custom a:hover {
  color: navy;
}

.custom a{
    padding-right: 5px;
    padding-left: 5px;
    color:orange;
    font-weight: bold;
}

p{
    color:black;
    padding-left: 5px;
    padding-right: 5px;
    font-weight: bold;
}

.v-btn {
  margin-left: 20px;
}

</style>