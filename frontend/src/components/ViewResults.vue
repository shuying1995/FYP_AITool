<template>
    <v-main>
        <v-container fluid>
            <v-card min-height="650px">
                <v-layout>
                    <v-flex row wrap class="custom ma-3">
                        <a @click="home">HOME</a>
                        <p>></p>
                        <p>VIEW RESULTS</p>
                    </v-flex>
                </v-layout>

                <v-layout justify-center class="pb-4">
                    <v-card
                     min-width="1000px"
                     min-height="60px"
                     color="orange"
                     class="d-flex align-center title"
                    >
                        <v-col cols="5">
                        <a class="pl-3">Fairness Principle</a>
                        </v-col>
                        <v-col cols="5">
                            <a>Ratings</a>
                        </v-col>
                    </v-card>
                </v-layout>

                <v-layout justify-center>
                    <v-expansion-panels style="maxWidth: 1000px;">
                        <v-expansion-panel
                        v-for="(item,i) in ratings"
                        :key="i"
                        >
                        <v-expansion-panel-header class="text">
                            <v-col cols="5">
                                <a>{{item.fairnesscard}}</a>
                            </v-col>
                            <v-col cols="5">
                                <a>{{item.rating}}</a>
                            </v-col>
                        </v-expansion-panel-header>
                        <v-expansion-panel-content>
                            This is not important to the prediction system as even though it is easy for us to remove
                            any sensitive attributes in the training data set, it is difficult for us to train the algorithm
                            as collecting meaningful data attributes is a tedious and costly process. Furthermore, there might
                            be highly correlated attributes (e.g. address), rendering this process useless.
                        </v-expansion-panel-content>
                        </v-expansion-panel>
                    </v-expansion-panels>
                </v-layout>
            </v-card>
        </v-container>
    </v-main>
</template>

<script>
const axios = require('axios');
export default {
data() {
    return {
        ratings: []
      }
},
created(){
    let selectedprojectid = window.$cookies.get("selectedprojectid")
      axios
      .get('api/projectreviews', { 
        params:{
          projectid: selectedprojectid
        }})
      .then((response) => {
          this.ratings = response.data
          for(var i = 0; i<this.ratings.length; i++){
              if(this.ratings[i].fairnesscard == 'fcard1')
                this.ratings[i].fairnesscard = 'Demographic Disparity'
              else if(this.ratings[i].fairnesscard == 'fcard2')
                this.ratings[i].fairnesscard = 'Treatment Equality'
              else if(this.ratings[i].fairnesscard == 'fcard3')
                this.ratings[i].fairnesscard = 'Equalized Odds'
              else if(this.ratings[i].fairnesscard == 'fcard4')
                this.ratings[i].fairnesscard = 'Test Fairness'
              else if(this.ratings[i].fairnesscard == 'fcard5')
                this.ratings[i].fairnesscard = 'Equal Opportunity'
              else if(this.ratings[i].fairnesscard == 'fcard6')
                this.ratings[i].fairnesscard = 'Conditional Statistical Party'
              else if(this.ratings[i].fairnesscard == 'fcard7')
                this.ratings[i].fairnesscard = 'Fairness Through Awareness'
              else if(this.ratings[i].fairnesscard == 'fcard8')
                this.ratings[i].fairnesscard = 'Fairness in Relational Domain'
              else if(this.ratings[i].fairnesscard == 'fcard9')
                this.ratings[i].fairnesscard = 'Counterfactual Fairness'
              else
                this.ratings[i].fairnesscard = 'Fairness Through Unawareness'
          }
      })
    },
methods:{
    home(){
        this.$router.push({ name: "HomePagePR" })
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
    color: orange;
    font-weight: bold;
}

.text a{
    color:orange;
    font-weight: bold;
    font-size: 18px;
}

.title a{
    color: white;
    font-weight: bold;
    font-size: 18px;
}
p{
    color:black;
    padding-left: 5px;
    padding-right: 5px;
    font-weight: bold;
}
</style>