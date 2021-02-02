<template>
    <v-main>
        <v-container fluid>
            <v-card min-height="650px">
                <v-layout>
                    <v-flex row wrap class="custom ma-3">
                        <a @click="home">HOME</a>
                        <p>></p>
                        <a @click="myprojects">MY PROJECTS</a>
                        <p>></p>
                        <p>TEAM MANAGEMENT</p>
                    </v-flex>
                </v-layout>

        <v-row no-gutters>
          <v-col md="3">
            <v-navigation-drawer
              floating
              permanent
            >
              <v-list
                two-line
                rounded
              >
                <v-list-item
                  v-for="item in items"
                  :key="item.title"
                  link
                >
                  <v-list-item-icon>
                    <v-icon color="orange">{{ item.icon }}</v-icon>
                  </v-list-item-icon>

                  <v-list-item-content>
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-navigation-drawer>
          </v-col>
          
          <v-col md="9">
            <v-main>
              <v-layout>
                <v-flex row wrap class="ml-3">
                  <v-col class="pa-0">
                    <p>Project 1</p>
                  </v-col>
                  <v-col class="pa-0">
                    <p class="font-weight-light">Date Created:31/12/2020</p>
                  </v-col>
                </v-flex>
              </v-layout>

              <v-layout>
                <v-flex row wrap class="ml-4 mt-4">
                  <v-col md="6" class="pa-0 mb-4">
                    <v-card max-width="600" height="100" outlined class="scroll rounded-card text-center">
                      Application scenario
                    </v-card>
                  </v-col>
                </v-flex>
              </v-layout>
              <p>Progress</p>

              <hr class="solid">

              <p>Deadline</p>

              <v-row>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-menu
                  ref="menu1"
                  v-model="menu1"
                  :close-on-content-click="false"
                  :return-value.sync="date"
                  transition="scale-transition"
                  offset-y
                  min-width="auto"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="date"
                      label="Picker in menu"
                      prepend-icon="mdi-calendar"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    v-model="date"
                    no-title
                    scrollable
                  >
                    <v-spacer/>
                    <v-btn
                      text
                      color="primary"
                      @click="menu1=false"
                    >
                      Cancel
                    </v-btn>
                    <v-btn
                      text
                      color="primary"
                      @click="$refs.menu1.save(date)"
                    >
                      OK
                    </v-btn>
                  </v-date-picker>
                </v-menu>
              </v-col>
              </v-row>

              <p>Minimum number of fairness cards given to each member</p>
              <div class="border">
              <p class="font-weight-regular caption">
              There are a total of 10 fairness cards in the library. You can choose how many cards each member
              has to go through. The default is minimum 1 card per member. All cards should ideally be 
              </p>
              <p class="font-weight-regular caption">
              For example, if you want all cards to be attempted at least once, and you have 2 members, you can choose 5. 
              Or if you have 6 members, you can choose 2. 
              </p>
              <p class="font-weight-regular caption">
              If you do not wish to have a minimum number, you can choose 1 which is the default. 
              </p> 
              </div>

              <v-row class="pl-0">
              <v-col
                cols="12"
                sm="3"
              >
              <v-select 
                v-model="numcards"
                :items="num" 
                outlined 
                dense
                placeholder="1"
              />
              </v-col>
              </v-row>

              <p>Minimum reviews for each fairness cards</p>
              <div class="border">
              <p class="font-weight-regular caption">
              There are a total of 10 fairness cards in the library. You can choose how many reviews you want for
              each fairness card. The default will be 1 review for each fairness card. 
              </p>
              <p class="font-weight-regular caption">
              For example, if you want each card to get at least 2 reviews, you can choose 2. 
              </p>
              <p class="font-weight-regular caption">
              If you do not wish to have a minimum number, you can choose 1 which is the default.
              </p>
              </div>

              <v-row class="pl-0">
              <v-col
                cols="12"
                sm="3"
              >
              <v-text-field 
              placeholder="Input a number"
              v-model="numreviews"
              outlined
              dense
              />
              </v-col>
              </v-row>

              <v-flex class="justify-end pa-2" row wrap>
                        <v-btn 
                         @click="savechanges" 
                         color="warning"
                         >
                         Save changes
                         </v-btn>
                    </v-flex>
            </v-main>
          </v-col>
        </v-row>
      </v-card>
    </v-container>
  </v-main>
</template>

<script>
export default {
    data() {
    return {
        dialog: false,
        date: new Date().toISOString().substr(0, 10),
        menu1:false,
        num: ['1','2','3','4','5','6','7','8','9','10'],
        numcards: '',
        numreviews: '',
        items: [
          { title: 'Settings', icon: 'mdi-cog', action: this.projectsettings},
          { title: 'Team Management', icon: 'mdi-account-multiple-plus', action: this.teammanagement},
        ],
      }
    },
    methods: {
        home() {
            //set active tab in local storage
            //window.localStorage.setItem('activetab', 0);
            this.$router.push({ name: "FacilitatorHomePage" });
        },
        myprojects() {
            //window.localStorage.setItem('activetab', 0);
            this.$router.push({ name: "FacilitatorHomePage"});
        },
        savechanges(){
        },
    },
}
</script>

<style scoped>
.custom a:hover {
  color: navy;
}

.custom a{
    padding-right: 5px;
    padding-left: 5px;
    color: orange;
    font-weight: bold;
}

p{
    color:black;
    padding-left: 5px;
    padding-right: 5px;
    font-weight: bold;
}

.scroll {
      overflow-y: auto;
}

.rounded-card{
    border-radius:30px;
}

hr.solid {
  border-top: 3px solid lightgrey;
  width: 800px;
}

div.border{
    border-style: ridge;;
    width: 700px;
    background-color: #CFD8DC;
    text-align: center;
}
</style>