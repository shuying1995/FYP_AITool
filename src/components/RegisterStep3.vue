<template>
    <v-main style="height: 100% !important">
        <v-container pa-0 fluid fill-height>
        <v-layout>
            <v-row>
            <v-flex xs12 sm6 md3>
                <v-layout fill-height justify-center>
                    <v-layout style="background-color: #EEEEEE" column class="pt-15">
                        <v-btn text @click="registerstep1">
                            <v-icon left color="warning">mdi-check-circle-outline</v-icon>
                            INTRODUCTION
                            </v-btn>
                        <v-btn text @click='registerstep2'>
                            <v-icon left color="warning">mdi-check-circle-outline</v-icon>
                            YOUR OPINIONS
                            </v-btn>
                        <v-btn text>
                            <v-icon left color="warning">mdi-arrow-down-bold-circle-outline</v-icon>
                            CURRENT PRACTICES
                            </v-btn>
                        <v-btn text disabled>
                            <v-icon left color="warning">mdi-arrow-down-bold-circle-outline</v-icon>
                            EXPERIENCE LEVEL
                            </v-btn>
                        <v-btn text disabled>
                            <v-icon left color="warning">mdi-arrow-down-bold-circle-outline</v-icon>
                            ACCOUNT SETTING
                            </v-btn>
                    </v-layout>
                </v-layout>
            </v-flex>

            <v-flex xs12 sm6 md9 class="px-7">
                <v-layout justify-center fill-height px-5>
                    <v-flex class="pt-8">
                        <h3>Share with us your current practices.</h3>
                        <p>Does your team consider fairness when collecting data or designing training/test</p>
                        <p>datasets></p>
                        <p>(If our team has no control over data collection and training/test set design,</p>
                        <p>please select 'N/A')</p>
                        <v-select
                        v-model="q9"
                        :items="q910items" 
                        outlined 
                        dense
                        placeholder="No"
                        />

                        <p>How often does your team typically consider fairness at each of the following</p>
                        <p>steps of the data pipeline?</p>
                        <p>(If your team has no control over a given step, please select 'N/A')</p>
                        
                        <v-flex class="pb-5">
                        <v-simple-table>
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Never</th>
                                    <th>Rarely</th>
                                    <th>Sometimes</th>
                                    <th>Very Often</th>
                                    <th>Always</th>
                                    <th>N/A</th>
                                </tr>
                            </thead>
                                <tbody>
                                    <tr>
                                        <td>Before collecting data</td>
                                        <td>
                                            <v-checkbox
                                            v-model="checkboxq1"
                                            value="Never"
                                            />
                                        </td>
                                        <td>
                                            <v-checkbox
                                            v-model="checkboxq1"
                                            value="Rarely"
                                            />
                                        </td>
                                        <td>
                                            <v-checkbox
                                            v-model="checkboxq1"
                                            value="Sometimes"
                                            />
                                        </td>
                                        <td>
                                            <v-checkbox
                                            v-model="checkboxq1"
                                            value="Very Often"
                                            />
                                        </td>
                                        <td>
                                            <v-checkbox
                                            v-model="checkboxq1"
                                            value="Always"
                                            />
                                        </td>
                                        <td>
                                            <v-checkbox
                                            v-model="checkboxq1"
                                            value="N/A"
                                            />
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>During data collection</td>
                                        <td>
                                            <v-checkbox
                                            v-model="checkboxq2"
                                            value="Never"
                                            />
                                        </td>
                                        <td>
                                            <v-checkbox
                                            v-model="checkboxq2"
                                            value="Rarely"
                                            />
                                        </td>
                                        <td>
                                            <v-checkbox
                                            v-model="checkboxq2"
                                            value="Sometimes"
                                            />
                                        </td>
                                        <td>
                                            <v-checkbox
                                            v-model="checkboxq2"
                                            value="Very Often"
                                            />
                                        </td>
                                        <td>
                                            <v-checkbox
                                            v-model="checkboxq2"
                                            value="Always"
                                            />
                                        </td>
                                        <td>
                                            <v-checkbox
                                            v-model="checkboxq2"
                                            value="N/A"
                                            />
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>When designing training dataset</td>
                                        <td>
                                            <v-checkbox
                                            v-model="checkboxq3"
                                            value="Never"
                                            />
                                        </td>
                                        <td>
                                            <v-checkbox
                                            v-model="checkboxq3"
                                            value="Rarely"
                                            />
                                        </td>
                                        <td>
                                            <v-checkbox
                                            v-model="checkboxq3"
                                            value="Sometimes"
                                            />
                                        </td>
                                        <td>
                                            <v-checkbox
                                            v-model="checkboxq3"
                                            value="Very Often"
                                            />
                                        </td>
                                        <td>
                                            <v-checkbox
                                            v-model="checkboxq3"
                                            value="Always"
                                            />
                                        </td>
                                        <td>
                                            <v-checkbox
                                            v-model="checkboxq3"
                                            value="N/A"
                                            />
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>When designing testing dataset</td>
                                        <td>
                                            <v-checkbox
                                            v-model="checkboxq4"
                                            value="Never"
                                            />
                                        </td>
                                        <td>
                                            <v-checkbox
                                            v-model="checkboxq4"
                                            value="Rarely"
                                            />
                                        </td>
                                        <td>
                                            <v-checkbox
                                            v-model="checkboxq4"
                                            value="Sometimes"
                                            />
                                        </td>
                                        <td>
                                            <v-checkbox
                                            v-model="checkboxq4"
                                            value="Very Often"
                                            />
                                        </td>
                                        <td>
                                            <v-checkbox
                                            v-model="checkboxq4"
                                            value="Always"
                                            />
                                        </td>
                                        <td>
                                            <v-checkbox
                                            v-model="checkboxq4"
                                            value="N/A"
                                            />
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>When developing AI/ML models</td>
                                        <td>
                                            <v-checkbox
                                            v-model="checkboxq5"
                                            value="Never"
                                            />
                                        </td>
                                        <td>
                                            <v-checkbox
                                            v-model="checkboxq5"
                                            value="Rarely"
                                            />
                                        </td>
                                        <td>
                                            <v-checkbox
                                            v-model="checkboxq5"
                                            value="Sometimes"
                                            />
                                        </td>
                                        <td>
                                            <v-checkbox
                                            v-model="checkboxq5"
                                            value="Very Often"
                                            />
                                        </td>
                                        <td>
                                            <v-checkbox
                                            v-model="checkboxq5"
                                            value="Always"
                                            />
                                        </td>
                                        <td>
                                            <v-checkbox
                                            v-model="checkboxq5"
                                            value="N/A"
                                            />
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>When evaluationg AI/ML models</td>
                                        <td>
                                            <v-checkbox
                                            v-model="checkboxq6"
                                            value="Never"
                                            />
                                        </td>
                                        <td>
                                            <v-checkbox
                                            v-model="checkboxq6"
                                            value="Rarely"
                                            />
                                        </td>
                                        <td>
                                            <v-checkbox
                                            v-model="checkboxq6"
                                            value="Sometimes"
                                            />
                                        </td>
                                        <td>
                                            <v-checkbox
                                            v-model="checkboxq6"
                                            value="Very Often"
                                            />
                                        </td>
                                        <td>
                                            <v-checkbox
                                            v-model="checkboxq6"
                                            value="Always"
                                            />
                                        </td>
                                        <td>
                                            <v-checkbox
                                            v-model="checkboxq6"
                                            value="N/A"
                                            />
                                        </td>
                                    </tr>
                                </tbody>
                        </v-simple-table>
                        </v-flex>

                        <p>Has your team ever found fairness issues(or potential fairness issues) in your</p>
                        <p>products/services(at any stage of development or deployment)?</p>
                        <v-select
                        v-model="q10"
                        :items="q910items" 
                        outlined 
                        dense
                        placeholder="No"
                        />

                        <v-flex class="justify-end pl-3" row wrap>
                        <v-btn @click="registerstep2" color="#757575" class="white--text">Previous step</v-btn>
                        <v-spacer/>
                        <v-btn @click="registerstep4" color="warning">Next</v-btn>
                    </v-flex>
                    </v-flex>
                </v-layout>
            </v-flex>
            </v-row>
        </v-layout>
        </v-container>
    </v-main>
</template>

<script>
export default {
data(){
    return{
        q910items: ['No','Yes','N/A'],
        q9:'',
        q10:'',
        checkboxq1:null,
        checkboxq2:null,
        checkboxq3:null,
        checkboxq4:null,
        checkboxq5:null,
        checkboxq6:null,
    }
},

methods: {
    registerstep1(){
        this.$router.push({ name: "RegisterStep1"})
    },
    registerstep2(){
        this.$router.push({ name:"RegisterStep2"})
    },
    registerstep4(){
        this.$router.push({ name:"RegisterStep4"})
    },
}
}
</script>

<style scoped>
.v-btn{
    margin-bottom: 60px;
}

.v-text-field{
    width: 500px;
}

p{
    margin:0;
    padding:0
}
</style>>
