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
                         height="150px"
                         />
                        <h3>What can go wrong?</h3>
                        <v-textarea 
                         v-model="gowrong"
                         placeholder="Placeholder" 
                         outlined 
                         height="150px"
                         />
                        <v-btn color="warning" @click="extradialog" class="custom">Next</v-btn>
                    </v-col>
                </v-row>
            </v-card>
            
            <v-dialog
              v-model="moredialog"
              persistent
              max-width="350"
            >
              <v-card>
                <v-card-text class="text-center">Congrats on completing!</v-card-text>
                <v-card-text class="text-center">Let's go with another stakeholder role!</v-card-text>
                <v-card-actions class="justify-center">
                  <v-btn
                    text
                    color="warning"
                    @click='nextdialog'
                    :disabled="this.$store.getters.stakeholder.length < this.mincards"
                  >
                    Next
                  </v-btn>
                  <v-btn
                    text
                    color="warning"
                    @click='insertmore'
                  >
                    Okay!
                  </v-btn>
                </v-card-actions>
                <v-card-text class="caption pb-0 font-weight-bold">
                  Stakeholder role count:
                </v-card-text>
                <v-card-text class="caption font-weight-bold">
                  {{this.$store.getters.stakeholder.length}}/{{this.mincards}}
                </v-card-text>
              </v-card>
            </v-dialog>

            <v-dialog
              v-model="dialog"
              persistent
              max-width="500"
            >
              <v-card>
                <v-card-text class="text-center">We will notify you of the next step.</v-card-text>
                <v-card-actions class="justify-center">
                  <v-btn
                    text
                    @click='complete'
                  >
                    Okay!
                  </v-btn>
                </v-card-actions>
                <v-card-text class="caption pb-0 font-weight-bold">
                  Stakeholder role count:
                </v-card-text>
                <v-card-text class="caption font-weight-bold">
                  {{this.$store.getters.stakeholder.length}}/{{this.mincards}}
                </v-card-text>
              </v-card>
            </v-dialog>

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
        gowrong: '',
        mincards: '',
        arrayfc:[],
        arraygr:[],
        arraygw:[],
        moredialog: false,
        dialog: false
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
created(){
    const projectid = window.$cookies.get("acceptedprojectid")
        axios
        .get('api/create/' + projectid) 
        .then((response) => {
            this.mincards = response.data.mincards
        })
},
  methods:{
    home(){
        this.$router.push({ name: "HomePagePR"});
        },
    inputstakeholder(){
        this.$router.push({name: "InputStakeholders"})
    },
    extradialog(){
        this.moredialog=true;
    },
    insertmore(){
        this.arrayfc.push(this.selectedimage)
        this.$store
          .dispatch(
              "updateFairnesscards", this.arrayfc)
        this.arraygr.push(this.goright)
        this.$store
          .dispatch(
              "updateGoright", this.goright)
        this.arraygw.push(this.gowrong)
        this.$store
          .dispatch(
              "updateGowrong",this.gowrong)
        this.$router.push({name: "InputStakeholders"})
    },
    nextdialog(){
      this.dialog=true;
      this.arrayfc.push(this.selectedimage)
        this.$store
          .dispatch(
              "updateFairnesscards", this.arrayfc)
        this.arraygr.push(this.goright)
        this.$store
          .dispatch(
              "updateGoright", this.goright)
        this.arraygw.push(this.gowrong)
        this.$store
          .dispatch(
              "updateGowrong",this.gowrong)
    },
    complete(){
      axios
        .post('api/projectdetails', {
          userid: window.$cookies.get("userid"),
          projectid: window.$cookies.get("acceptedprojectid"),
          stakeholder: this.$store.getters.stakeholder,
          fairnesscard: this.$store.getters.fairnesscards,
          goright: this.$store.getters.goright,
          gowrong: this.$store.getters.gowrong
        })
        .then((response) => {
          let projectid = window.$cookies.get("acceptedprojectid")
          let userid = window.$cookies.get("userid")
          this.$store
          .dispatch('resetState')
          .then(()=>{
            axios
              .put('api/users/' + userid + '/input',{
                acceptedprojectid: projectid
              })
              .then((response)=>{
                axios
                  .put('api/create/' + projectid + '/input',{
                    userid: userid
                  })
                  .then(()=>{
                    this.$router.push({ name: "HomePagePR" })
                  })
              })
          })
        })
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
  margin-left: 7%;
}

.v-btn.custom {
  margin-left: 85%;
}

</style>