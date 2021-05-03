<template>
    <v-main>
        <v-container fluid>
            <v-card 
             min-height="650px"
             >
                <v-layout row wrap ml-7 mr-8>
                  <v-flex row wrap class="ma-3 mt-6">
                    <v-btn text class="orange--text">Requests</v-btn>
                    <v-btn @click="homepageop" text>In Progress</v-btn>
                    <v-btn @click="homepagenr" text>Needs Review</v-btn>
                    <v-btn @click="homepagecp" text>Completed</v-btn>
                  </v-flex>
                  
                  <v-col class="text-right mt-3">
                    <v-menu offset-y>
                      <template v-slot:activator="{ on, attrs }">
                        <v-btn v-bind="attrs" v-on="on" rounded text>
                          Sort by 
                          <v-icon>mdi-chevron-down</v-icon>
                        </v-btn>
                      </template>
                      <v-list>
                        <v-list-item v-for="(item, index) in items" :key="index" link>
                          <v-list-item-title>{{ item.title }}</v-list-item-title>
                        </v-list-item>
                      </v-list>
                    </v-menu>
                  </v-col>
                </v-layout>

                <v-layout row wrap ml-8>
                  <v-flex v-for="(item, e) in PRCards" :key="item.ID" class="custom">
                    <v-card 
                     class="ma-2" 
                     max-width="450"
                     min-height="200"
                     max-height="200" 
                     outlined
                     color="orange"
                     >
                      <v-list-item three-line>
                        <v-list-item-content>
                          <h3 class="pt-2 pb-2">{{ item.name }}</h3>
                          <p>{{ item.facilitator }}</p>
                          <v-sheet outlined color="white" rounded>
                          <v-card height="80px" color="orange">
                            <v-card-text class="text-center white--text">
                                {{ item.message }} 
                            </v-card-text>
                          </v-card>
                          </v-sheet>
                          <v-flex row wrap class="justify-center pt-2">
                            <v-btn 
                             color="success" 
                             @click="acceptproject(e)"
                             :key="item._id"
                             >
                              Accept
                              <v-icon>mdi-check-circle-outline</v-icon>
                            </v-btn>
                            <v-btn 
                             color="error"
                             @click="rejectproject(e)"
                             >
                              Reject
                              <v-icon>mdi-close-circle-outline</v-icon>
                            </v-btn>
                          </v-flex>
                        </v-list-item-content>
                      </v-list-item>
                    </v-card>
                  </v-flex>
                </v-layout> 
            </v-card>

            <v-dialog
              v-model="acceptdialog"
              persistent
              max-width="500"
            >
              <v-card>
                <v-card-text>Do you want to start on {{this.$store.getters.projectname}} now?</v-card-text>
                <v-card-actions class="justify-center">
                  <v-btn
                    text
                    color="warning"
                    @click='reload'
                  >
                    Later
                  </v-btn>
                  <v-btn
                    text
                    color="success"
                    @click='desdesignproject'
                  >
                    Yes
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>

            <v-dialog
              v-model="rejectdialog"
              persistent
              max-width="500"
            >
              <v-card>
                <v-card-text>Are you sure you want to reject project request from {{this.$store.getters.facilitatorname}}?</v-card-text>
                <v-card-actions class="justify-center">
                  <v-btn
                    text
                    color="error"
                    @click='rejectdialog = false'
                  >
                    Cancel
                  </v-btn>
                  <v-btn
                    text
                    color="success"
                    @click='confirmrejectproject'
                  >
                    Yes
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>

        </v-container>
</v-main>
</template>

<script>
const axios = require('axios');
export default {
  data(){
    return{
      items: [
      { title: "Date: New to old" },
      { title: "Date: Old to new" },
      { title: "Progress: High to low" },
      { title: "Progress: Low to high" },
      { title: "Favourited" }
      ],
      PRCards: [],
      acceptdialog: false,
      rejectdialog: false
    }
  },
  created(){
    axios
    .get('api/create/memberspr', { 
      params:{
        invitedmembers: window.$cookies.get("userid")
      }})
    .then((response) => {
        this.PRCards = response.data
    })
  },
  methods: {
    acceptproject(e){
      let projectid = this.PRCards[e]._id
      let projectname = this.PRCards[e].name
      window.$cookies.set("acceptedprojectid", projectid, Infinity)
      let userid = window.$cookies.get("userid")
      axios
        .put('api/users/' + userid + '/accept', {
            invitedprojectid: window.$cookies.get("acceptedprojectid"),
        })
        .then((response)=>{
          axios
          .put('api/create/' + projectid + '/accept', {
              userid: window.$cookies.get("userid") 
          })
          .then((response)=>{
            this.$store
            .dispatch(
                "updateProjectname", projectname)
            .then(() => this.acceptdialog=true)
          })
      })
    },
    rejectproject(e){
      let projectid = this.PRCards[e]._id
      let facilitatorname = this.PRCards[e].facilitator
      window.$cookies.set("acceptedprojectid", projectid, Infinity)
      this.$store
       .dispatch(
          "updateFacilitatorname",facilitatorname)
       .then(() => this.rejectdialog=true)
    },
    confirmrejectproject(){
       let projectid = window.$cookies.get("acceptedprojectid")
       let userid = window.$cookies.get("userid")
       axios
        .put('api/users/' + userid + '/reject', {
            invitedprojectid: window.$cookies.get("acceptedprojectid"),
        })
        .then((response)=>{
          axios
          .put('api/create/' + projectid + '/reject', {
              userid: window.$cookies.get("userid") 
          })
          .then((response)=>{
            this.$router.go()
          })
      })
    },
    desdesignproject(){
      this.$router.push({ name: "DesDesignProject" })
    },
    reload(){
      this.$router.go()
    },
    homepageop(){
      this.$router.push({ name: "HomePageOP" });
      },
    homepagenr(){
      this.$router.push({ name: "HomePageNR"});
    },
    homepagecp(){
      this.$router.push({ name: "HomePageCP" })
    }
  }
}
</script>

<style scoped>
.flex.custom{
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: 500px;
}

.v-btn {
  margin-left: 10px;
}
</style>