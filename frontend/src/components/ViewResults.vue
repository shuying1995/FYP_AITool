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
                        v-for="(item,i) in fairnesscard"
                        :key="i"
                        >
                        <v-expansion-panel-header class="text">
                            <v-col cols="5">
                                <a>{{item.name}}</a>
                            </v-col>
                            <v-col cols="5">
                                <a>Ratings</a>
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
export default {
data() {
    return {
        fairnesscard: [
          { name: 'Demographic Disparity'},
          { name: 'Treatment Equality'},
          { name: 'Equalized Odds'},
          { name: 'Test Fairness'},
          { name: 'Equal Opportunity'},
          { name: 'Conditional Statistical Party'},
          { name: 'Fairness Through Awareness'},
          { name: 'Fairness in Relational Domain'},
          { name: 'Counterfactual Fairness'},
          { name: 'Fairness Through Unawareness'},
        ],
      }
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