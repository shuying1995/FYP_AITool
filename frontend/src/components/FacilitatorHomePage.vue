<template>
    <v-main>
        <v-container fluid grid-list-md>
            <v-card min-height="650px">
                <v-layout row wrap ml-7 mr-8>
                  <v-flex row wrap class="custom ma-3 mt-6">
                    <v-btn text class="orange--text">My Projects</v-btn>
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
                        <v-list-item v-for="(item, index) in items" :key="index" link @click="item.action">
                          <v-list-item-title>{{ item.title }}</v-list-item-title>
                        </v-list-item>
                      </v-list>
                    </v-menu>

                    <v-btn 
                     @click="create" 
                     class="ml-4" 
                     color="success"
                     >
                     <v-icon>mdi-plus</v-icon>
                     New Project
                     </v-btn>
                  </v-col>
                </v-layout>

                <v-layout row wrap ml-8>
                  <v-flex v-for="(item, e) in MyCards" :key="item.ID">
                    <v-card 
                     class="ma-2" 
                     max-width="450"
                     max-height="200" 
                     min-height="200"
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
                            <v-menu>
                              <template v-slot:activator="{ on, attrs }">
                                <v-btn
                                  icon
                                  dark
                                  v-bind="attrs"
                                  v-on="on"
                                >
                                <v-icon>mdi-dots-horizontal</v-icon>
                                </v-btn>
                              </template>
                              <v-list>
                                <v-list-item-group>
                                <v-list-item
                                  link
                                  @click="editteam(e)"
                                >
                                  <v-list-item-title>Edit</v-list-item-title>
                                </v-list-item>
                                <v-list-item
                                  :key="item._id"
                                  link
                                >
                                  <v-list-item-title>Delete</v-list-item-title>
                                </v-list-item>
                                </v-list-item-group>
                              </v-list>
                            </v-menu>
                          </v-flex>

                          <v-flex row wrap class="justify-center">
                            <h2>{{item.name}}</h2>
                          </v-flex>
                          <p>Progress</p>
                          <div class="pb-3">
                          <v-progress-linear
                            background-color="grey lighten-2"
                            color="red"
                            v-model="item.progress"
                            height="10"
                            />
                          </div>
                            <hr class="solid">
                          <v-flex row wrap class="pt-2">
                          <p class="pt-2 ml-4 underline">Member: {{ Math.max(item.acceptedmembers.length,item.inputtedmembers.length)}}</p>
                          <v-spacer/>
                          <p class="pt-2 round orange--text">{{ Math.ceil(parseInt((new Date(item.deadline)-new Date(item.createdate))/(24*3600*1000))) }} Days Left</p>
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
      { title: "Progress: Low to high", action: this.ascendingProgress },
      { title: "Favourited" },
    ],
      MyCards: [],
  }
},
created(){
  axios
  .get('api/create/facilitator', { 
    params:{
      facilitator: window.$cookies.get("fullname")
    }})
  .then((response) => {
      this.MyCards = response.data
  })
},
 methods: {
  create() {
    this.$router.push({ name: "Create" });
  },
  editteam(e){
    let selectedprojectid = this.MyCards[e]._id
    window.$cookies.set("selectedprojectid", selectedprojectid, Infinity)
    this.$router.push({ name: "ProjectSettings"});
  },
  ascendingProgress(){
    console.log(this.MyCards.slice().sort((a,b)=>a.progress - b.progress))
    return this.MyCards.slice().sort((a,b)=>a.progress - b.progress)
  },
  descendingProgress(){
    return this.MyCards.slice().sort((a,b)=>b.progress - a.progress)
  },
  ascendingDate(){
    return this.MyCards.slice().sort((a,b)=>new Date(a.createdate) - new Date(b.createdate))
  },
  descendingDate(){
    return this.MyCards.slice().sort((a,b)=>new Date(b.createdate)-new Date(a.createdate))
  }
  }
}
</script>

<style scoped>
.flex{
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: 500px;
}

p.round{
  border-radius: 8px;
  background-color: white;
  width: 100px;
  height: 30px;
  padding-left: 5px;
}

p.underline{
  text-decoration: underline;
}

hr.solid {
  border-top: 3px solid white;
}

.v-btn {
  margin-left: 10px;
}
</style>>
