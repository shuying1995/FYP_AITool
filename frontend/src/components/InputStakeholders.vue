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
                          {{appscenario}}
                      <v-row justify="end" class="ma-0">
                        <v-btn icon @click="asdialog = false"><v-icon>mdi-close-circle</v-icon></v-btn>
                      </v-row>
                      </v-card>
                    </v-dialog>

                    <v-dialog v-model="apdialog" persistent max-width="400px">
                      <template v-slot:activator="{ on, attrs }">
                        <v-btn color="warning" dark v-bind="attrs" v-on="on">
                          Application Type
                        </v-btn>
                      </template>
                      <v-img v-bind:src="require('../assets/' + image)" contain max-height="350">
                      <v-row justify="end" class="ma-0">
                        <v-btn icon @click="apdialog = false"><v-icon>mdi-close-circle</v-icon></v-btn>
                      </v-row>
                       </v-img>
                    </v-dialog>


                    <v-dialog v-model="dsdialog" persistent max-width="400px">
                      <template v-slot:activator="{ on, attrs }">
                        <v-btn color="warning" dark v-bind="attrs" v-on="on">
                          Direct Stakeholder
                        </v-btn>
                      </template>
                      <v-img src="../assets/direct.jpg" contain max-height="350">
                      <v-row justify="end" class="ma-0">
                        <v-btn icon @click="dsdialog = false"><v-icon>mdi-close-circle</v-icon></v-btn>
                      </v-row>
                       </v-img>
                    </v-dialog>

                    <v-dialog v-model="isdialog" persistent max-width="400px">
                      <template v-slot:activator="{ on, attrs }">
                        <v-btn color="warning" dark v-bind="attrs" v-on="on">
                          Indirect Stakeholder
                        </v-btn>
                      </template>
                      <v-img src="../assets/indirect.jpg" contain max-height="350">
                      <v-row justify="end" class="ma-0">
                        <v-btn icon @click="isdialog = false"><v-icon>mdi-close-circle</v-icon></v-btn>
                      </v-row>
                       </v-img>
                    </v-dialog>
                </v-flex>

                <v-row justify="center">
                    <h3>Input a stakeholder that comes to your mind. Try to understand</h3>
                </v-row>

                <v-row justify="center" class="pb-4">
                    <h3>about this stakeholder's concerns and painpoints.</h3>
                </v-row>

                <v-flex row wrap class="justify-center">
                    <v-img src="../assets/inputstakeholder.jpg" contain max-height="300" max-width="400">
                    <v-row justify="center">
                    <v-col cols="7">
                    <v-text-field 
                     v-model="stakeholder"
                    />
                    </v-col>
                    </v-row>
                    </v-img>
                </v-flex>

                <v-flex class="justify-end pa-2" row wrap>
                        <v-btn color="warning" @click="randomfairness">Next</v-btn>
                </v-flex>
            </v-card>
        </v-container>
    </v-main>
</template>

<script>
export default {
data() {
    return {
        apdialog: false,
        asdialog: false,
        dsdialog: false,
        isdialog: false,
        appscenario: window.$cookies.get("acceptedprojectappscenario"),
        apptype: window.$cookies.get("acceptedprojectapptype"),
        stakeholder: ''
        }
    },
computed:{
    image(){
        return this.apptype
    }
},
methods:{
    home(){
        this.$router.push({ name: "HomePageOP"});
    },
    randomfairness(){
        this.$store
        .dispatch("updateStakeholder",this.stakeholder)
        .then(()=>this.$router.push({ name: "RandomFairness"}))
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
</style>