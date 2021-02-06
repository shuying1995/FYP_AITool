<template>
    <v-main>
        <v-container fluid>
            <v-card 
             min-height="650px"
             >
                <v-layout row wrap ml-7 mr-8>
                  <v-flex row wrap class="custom ma-3 mt-6">
                    <v-btn @click="homepageop" text>Ongoing Projects</v-btn>
                    <v-btn text class="orange--text">Project Requests</v-btn>
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
                  <v-flex v-for="(item, e) in PRCards" :key="item.ID">
                    <v-card 
                     class="ma-2" 
                     max-width="360"
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
                             @click="desdesignproject(e)"
                             :key="item._id"
                             >
                              Accept
                              <v-icon>mdi-check-circle-outline</v-icon>
                            </v-btn>
                            <v-btn color="error">
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
        { title: "Favourited" },
      ],
      PRCards: [],

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
        .catch((error) => {
            console.log(error)
        })
    },
methods: {
    desdesignproject(e){
        let projectid = this.PRCards[e]._id
        window.$cookies.set("acceptedprojectid", projectid, Infinity)
        this.$router.push({ name: "DesDesignProject" })
    },
    homepageop(){
        this.$router.push({ name: "HomePageOP" });
        },
    }
}
</script>

<style scoped>
.v-btn {
  margin-left: 10px;
}
</style>