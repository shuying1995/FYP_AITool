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

                <v-flex row wrap class="pb-6 justify-start">
                    <v-btn color="warning">
                        Application Scenario
                    </v-btn>
                    <v-btn color="warning">
                        Application Type
                    </v-btn>
                </v-flex>
        
                <v-carousel 
                 light 
                 hide-delimiters 
                 height="auto"
                 :continuous="false"
                 >
                    <v-carousel-item v-for="(item,index) in projectdetails" :key="index">
                    <v-flex row wrap class="ml-2 mr-2">
                    <v-col md="4">
                        <v-row justify="center">
                        <v-img v-bind:src="require('../assets/' + item.fairnesscardfront + '.jpg')" contain max-height="350"></v-img>
                        </v-row>
                    </v-col>
                    <v-col md="4">
                        <v-row justify="center">
                        <v-img v-bind:src="require('../assets/' + item.fairnesscardback + '.jpg')" contain max-height="350"></v-img>
                        </v-row>
                    </v-col>
                    <v-col md="4">
                        <v-row justify="center">
                        <v-img src="../assets/inputstakeholder.jpg" contain max-height="350">
                        <div class="vertical-bottom">
                        <v-row>
                            <v-card height="40px" width="185px">
                                <v-card-text class="text-center">
                                {{item.stakeholder}}
                                </v-card-text>
                            </v-card>
                        </v-row>
                        </div>
                        </v-img>
                        </v-row>
                    </v-col>
                    </v-flex>

                <v-flex row wrap class="justify-center">
                    <v-col md="5">
                        <v-row justify="center">
                        What can go right?
                        </v-row>
                        <v-row justify="center">
                        <v-card 
                         min-height="130px"
                         max-height="130px"
                         min-width="600px"
                         max-width="600px"
                         >
                         <v-card-text
                          class="text-center"
                         >
                         {{item.goright}}
                         </v-card-text>
                         </v-card>
                        </v-row>
                    </v-col>
                    <v-col md="5">
                        <v-row justify="center">
                        What can go wrong?
                        </v-row>
                        <v-row justify="center">
                        <v-card 
                         min-height="130px"
                         max-height="130px"
                         min-width="600px"
                         max-width="600px"
                         >
                         <v-card-text
                          class="text-center"
                          >
                          {{item.gowrong}}
                          </v-card-text>
                         </v-card>
                        </v-row>
                    </v-col>
                </v-flex>
            
            <v-row justify="center" class="mt-3">
                <div class="font-weight-bold">How important is this Fairness Principle to the Application Scenario?</div>
            </v-row>

            <v-row justify="center">
                <div class="caption">0-Not important at all; 3-Moderately Important; 5-Extremely Important</div>
            </v-row>

            <v-row justify="center" class="mt-4 mb-4">
                <v-rating
                v-model="item.rating"
                background-color="orange lighten-3"
                color="orange"
                />
            </v-row>

            <v-row justify="center">
                <div class="font-weight-bold">Why?</div>
            </v-row>

            <v-row justify="center">
                <v-col cols="7">
                <v-textarea
                 outlined
                 v-model="item.explainrating"
                 height="100px"
                 placeholder="Explain why."
                />
                </v-col>
            </v-row>
            </v-carousel-item>
        </v-carousel>

            <v-flex class="justify-end pa-2" row wrap>
                <v-dialog
                v-model="dialog"
                persistent
                max-width="290"
                >
                <template v-slot:activator="{ on, attrs }">
                    <v-btn
                    color="warning"
                    dark
                    v-bind="attrs"
                    v-on="on"
                    @click="submit"
                    >
                    Next
                    </v-btn>
                </template>
                <v-card>
                    <v-card-text class="text-center">Congrats on completing!</v-card-text>
                    <v-card-text class="text-center">We would love to hear your feedback! :)</v-card-text>
                    <v-card-text class="text-center">Help us make it better!</v-card-text>
                    <v-card-actions class="justify-center">
                    <v-btn
                        color="warning"
                        text
                        @click="survey"
                    >
                        Sure~
                    </v-btn>
                    </v-card-actions>
                </v-card>
                </v-dialog>
            </v-flex>   
            </v-card>
        </v-container>
    </v-main>
</template>

<script>
import HomePagePRVue from './HomePagePR.vue';
const axios = require('axios');
export default {
data(){
    return{
        projectdetails: [],
        goright: [],
        gowrong:[],
        dialog: false,
        surveydone: ''
    }
},
created(){
    axios
     .get('/api/projectdetails',{
         params: {
             projectid: window.$cookies.get("acceptedprojectid")
         }})
     .then((response)=>{
         this.projectdetails = response.data
         for(var i =0; i<this.projectdetails.length; i++){
             var image = this.projectdetails[i].fairnesscard
             image = image.toString().substring(5,12)
             image = image.replace('.','')
             this.projectdetails[i].fairnesscardfront=image
             var backimage = image.replace('f','b')
             this.projectdetails[i].fairnesscardback=backimage
         }
         axios.get('api/users')
            .then((response) => {
                let users = response.data
                for(var i=0; i<users.length; i++){
                    if(users[i]._id==window.$cookies.get("userid"))
                        this.surveydone = users[i].surveydone
                }
        })
     })
},
methods: {
    submit(){
        for(var i =0; i<this.projectdetails.length; i++){
        axios
         .post('/api/projectreviews',{
             projectid: window.$cookies.get("acceptedprojectid"),
             fairnesscard: this.projectdetails[i].fairnesscardfront,
             rating: this.projectdetails[i].rating,
             explainrating: this.projectdetails[i].explainrating
         })
        }
        let projectid = window.$cookies.get("acceptedprojectid")
        let userid = window.$cookies.get("userid")
            axios
            .put('/api/users/' + userid + '/review',{
                reviewedprojectid: projectid
            })
            .then((response)=>{
                axios
                .put('/api/create/' + projectid + '/review',{
                    userid: userid
                })
                .then((response)=>{
                    this.dialog = true
                })
            })
    },
    home(){
        this.$router.push({ name: "HomePagePR"});
    },
    survey(){
        if(this.surveydone == 0){
            this.dialog = false
            this.$router.push({ name: 'Survey1'})}
        else{
            this.dialog = false
            this.$router.push({ name: 'HomePagePR'})
        }
    }
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

.vertical-bottom {
  margin: 0;
  position: absolute;
  left: 30%;
  top: 80%;
  transform: translateY(-50%);
}
</style>