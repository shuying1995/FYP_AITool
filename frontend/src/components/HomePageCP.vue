<template>
  <v-main>
    <v-container fluid>
      <v-card min-height="650px">
        <v-layout row wrap ml-7 mr-8>
            <v-flex row wrap class="ma-3 mt-6">
              <v-btn @click="homepagepr" text>Requests</v-btn>
              <v-btn @click="homepageop" text>In Progress</v-btn>
              <v-btn @click="homepagenr" text>Needs Review</v-btn>
              <v-btn class="orange--text" text>Completed</v-btn>
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
                      <v-flex v-for="(item,e) in CPCards" :key="item.ID" class="custom">
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
                              <v-flex row wrap class="ma-0">
                            <p class="pt-2">Date created: {{ item.createdate }}</p>
                            <v-spacer />
                            <v-btn icon @click="item.IsPinned = !item.IsPinned">
                              <v-icon v-if="!item.IsPinned">mdi-pin-off</v-icon>
                              <v-icon v-if="item.IsPinned">mdi-pin</v-icon>
                            </v-btn>
                            <v-btn icon @click="item.IsFavourite = !item.IsFavourite">
                              <v-icon v-if="!item.IsFavourite">mdi-heart-outline</v-icon>
                              <v-icon v-if="item.IsFavourite">mdi-heart</v-icon>
                            </v-btn>
                              </v-flex>

                          <v-flex row wrap class="justify-center">
                            <h2>{{item.name}}</h2>
                          </v-flex>
                        
                        <v-flex row wrap class="justify-center pt-3 pb-4">
                            <v-btn
                             class="orange--text"
                             color="grey lighten-3"
                             @click="viewresults(e)"
                             :key="item._id"
                             >
                              Review Results
                              <v-icon>mdi-google-analytics</v-icon>
                            </v-btn>
                            <v-btn 
                             class="orange--text"
                             color="grey lighten-3"
                             @click="rejectproject(e)"
                             >
                              Export Results
                              <v-icon>mdi-export</v-icon>
                            </v-btn>
                          </v-flex>
                            <hr class="solid">
                          <v-flex row wrap class="pt-2">
                          <p class="pt-2 ml-4 underline">Member: {{ item.acceptedmembers.length }}</p>
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
  name: "HomePageCP",
  title: "Home",
  data() {
    return {
      items: [
        { title: "Date: New to old" },
        { title: "Date: Old to new" },
        { title: "Progress: High to low" },
        { title: "Progress: Low to high" },
        { title: "Favourited" },
      ],
      CPCards: [],
    }
  },
  created(){
      axios
      .get('api/create/memberscp', { 
        params:{
          reviewedmembers: window.$cookies.get("userid")
        }})
      .then((response) => {
          this.CPCards = response.data
      })
    },
  methods:{
    homepagepr(){
      this.$router.push({ name: "HomePagePR" });
    },
    homepagenr(){
    this.$router.push({ name: "HomePageNR"});
    },
    homepageop(){
      this.$router.push({ name: "HomePageOP" })
    },
    viewresults(e){
      let projectid = this.CPCards[e]._id
      window.$cookies.set("acceptedprojectid", projectid, Infinity)
      this.$router.push({ name: "ViewResults" })
    }
  }
};
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

p.round{
  border-radius: 8px;
  background-color: white;
  width: 100px;
  height: 30px;
  padding-left: 5px;
}

p.round1{
  border-radius: 8px;
  background-color: white;
  width: 50px;
  height: 20px;
  padding-left: 5px;
}
</style>
