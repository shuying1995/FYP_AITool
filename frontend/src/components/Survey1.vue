<template>
    <v-main>
        <v-container fluid>
        <v-card>
            <v-flex xs12 sm12 md12 class="px-7">
                <v-layout justify-center fill-height px-5>
                    <v-flex class="pt-8">
                        <v-flex class="pl-3">
                        <h2>Let us know your current experience!</h2>
                        <p>Rate how strongly you agree with each statement.</p>
                        </v-flex>
                        <v-flex class="pb-5">
                        <v-simple-table>
                            <thead>
                                <tr>
                                    <th></th>
                                    <th><v-layout justify-center><body>Strongly Disagree</body></v-layout></th>
                                    <th><v-layout justify-center><body>Disagree</body></v-layout></th>
                                    <th><v-layout justify-center><body>Neither agree nor disagree</body></v-layout></th>
                                    <th><v-layout justify-center><body>Agree</body></v-layout></th>
                                    <th><v-layout justify-center><body>Strongly agree</body></v-layout></th>
                                    <th><v-layout justify-center><body>N/A</body></v-layout></th>
                                </tr>
                            </thead>
                                <tbody>
                                    <tr>
                                        <td style="width:45%"><body>{{q1}}</body></td>
                                        <td>
                                            <v-layout justify-center>
                                            <v-checkbox
                                            v-model="checkboxq1"
                                            value="Strongly Disagree"
                                            />
                                            </v-layout>
                                        </td>
                                        <td>
                                            <v-layout justify-center>
                                            <v-checkbox
                                            v-model="checkboxq1"
                                            value="Disagree"
                                            />
                                            </v-layout>
                                        </td>
                                        <td>
                                            <v-layout justify-center>
                                            <v-checkbox
                                            v-model="checkboxq1"
                                            value="Neither agree nor disagree"
                                            />
                                            </v-layout>
                                        </td>
                                        <td>
                                            <v-layout justify-center>
                                            <v-checkbox
                                            v-model="checkboxq1"
                                            value="Agree"
                                            />
                                            </v-layout>
                                        </td>
                                        <td>
                                            <v-layout justify-center>
                                            <v-checkbox
                                            v-model="checkboxq1"
                                            value="Strongly agree"
                                            />
                                            </v-layout>
                                        </td>
                                        <td>
                                            <v-layout justify-center>
                                            <v-checkbox
                                            v-model="checkboxq1"
                                            value="N/A"
                                            />
                                            </v-layout>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td><body>{{q2}}</body></td>
                                        <td>
                                            <v-layout justify-center>
                                            <v-checkbox
                                            v-model="checkboxq2"
                                            value="Strongly Disagree"
                                            />
                                            </v-layout>
                                        </td>
                                        <td>
                                            <v-layout justify-center>
                                            <v-checkbox
                                            v-model="checkboxq2"
                                            value="Disagree"
                                            />
                                            </v-layout>
                                        </td>
                                        <td>
                                            <v-layout justify-center>
                                            <v-checkbox
                                            v-model="checkboxq2"
                                            value="Neither agree nor disagree"
                                            />
                                            </v-layout>
                                        </td>
                                        <td>
                                            <v-layout justify-center>
                                            <v-checkbox
                                            v-model="checkboxq2"
                                            value="Agree"
                                            />
                                            </v-layout>
                                        </td>
                                        <td>
                                            <v-layout justify-center>
                                            <v-checkbox
                                            v-model="checkboxq2"
                                            value="Strongly agree"
                                            />
                                            </v-layout>
                                        </td>
                                        <td>
                                            <v-layout justify-center>
                                            <v-checkbox
                                            v-model="checkboxq2"
                                            value="N/A"
                                            />
                                            </v-layout>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td><body>{{q3}}</body></td>
                                        <td>
                                            <v-layout justify-center>
                                            <v-checkbox
                                            v-model="checkboxq3"
                                            value="Strongly Disagree"
                                            />
                                            </v-layout>
                                        </td>
                                        <td>
                                            <v-layout justify-center>
                                            <v-checkbox
                                            v-model="checkboxq3"
                                            value="Disagree"
                                            />
                                            </v-layout>
                                        </td>
                                        <td>
                                            <v-layout justify-center>
                                            <v-checkbox
                                            v-model="checkboxq3"
                                            value="Neither agree nor disagree"
                                            />
                                            </v-layout>
                                        </td>
                                        <td>
                                            <v-layout justify-center>
                                            <v-checkbox
                                            v-model="checkboxq3"
                                            value="Agree"
                                            />
                                            </v-layout>
                                        </td>
                                        <td>
                                            <v-layout justify-center>
                                            <v-checkbox
                                            v-model="checkboxq3"
                                            value="Strongly agree"
                                            />
                                            </v-layout>
                                        </td>
                                        <td>
                                            <v-layout justify-center>
                                            <v-checkbox
                                            v-model="checkboxq3"
                                            value="N/A"
                                            />
                                            </v-layout>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td><body>{{q4}}</body></td>
                                        <td>
                                            <v-layout justify-center>
                                            <v-checkbox
                                            v-model="checkboxq4"
                                            value="Strongly Disagree"
                                            />
                                            </v-layout>
                                        </td>
                                        <td>
                                            <v-layout justify-center>
                                            <v-checkbox
                                            v-model="checkboxq4"
                                            value="Disagree"
                                            />
                                            </v-layout>
                                        </td>
                                        <td>
                                            <v-layout justify-center>
                                            <v-checkbox
                                            v-model="checkboxq4"
                                            value="Neither agree nor disagree"
                                            />
                                            </v-layout>
                                        </td>
                                        <td>
                                            <v-layout justify-center>
                                            <v-checkbox
                                            v-model="checkboxq4"
                                            value="Agree"
                                            />
                                            </v-layout>
                                        </td>
                                        <td>
                                            <v-layout justify-center>
                                            <v-checkbox
                                            v-model="checkboxq4"
                                            value="Strongly agree"
                                            />
                                            </v-layout>
                                        </td>
                                        <td>
                                            <v-layout justify-center>
                                            <v-checkbox
                                            v-model="checkboxq4"
                                            value="N/A"
                                            />
                                            </v-layout>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td><body>{{q5}}</body></td>
                                        <td>
                                            <v-layout justify-center>
                                            <v-checkbox
                                            v-model="checkboxq5"
                                            value="Strongly Disagree"
                                            />
                                            </v-layout>
                                        </td>
                                        <td>
                                            <v-layout justify-center>
                                            <v-checkbox
                                            v-model="checkboxq5"
                                            value="Disagree"
                                            />
                                            </v-layout>
                                        </td>
                                        <td>
                                            <v-layout justify-center>
                                            <v-checkbox
                                            v-model="checkboxq5"
                                            value="Neither agree nor disagree"
                                            />
                                            </v-layout>
                                        </td>
                                        <td>
                                            <v-layout justify-center>
                                            <v-checkbox
                                            v-model="checkboxq5"
                                            value="Agree"
                                            />
                                            </v-layout>
                                        </td>
                                        <td>
                                            <v-layout justify-center>
                                            <v-checkbox
                                            v-model="checkboxq5"
                                            value="Strongly agree"
                                            />
                                            </v-layout>
                                        </td>
                                        <td>
                                            <v-layout justify-center>
                                            <v-checkbox
                                            v-model="checkboxq5"
                                            value="N/A"
                                            />
                                            </v-layout>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td><body>{{q6}}</body></td>
                                        <td>
                                            <v-layout justify-center>
                                            <v-checkbox
                                            v-model="checkboxq6"
                                            value="Strongly Disagree"
                                            />
                                            </v-layout>
                                        </td>
                                        <td>
                                            <v-layout justify-center>
                                            <v-checkbox
                                            v-model="checkboxq6"
                                            value="Disagree"
                                            />
                                            </v-layout>
                                        </td>
                                        <td>
                                            <v-layout justify-center>
                                            <v-checkbox
                                            v-model="checkboxq6"
                                            value="Neither agree nor disagree"
                                            />
                                            </v-layout>
                                        </td>
                                        <td>
                                            <v-layout justify-center>
                                            <v-checkbox
                                            v-model="checkboxq6"
                                            value="Agree"
                                            />
                                            </v-layout>
                                        </td>
                                        <td>
                                            <v-layout justify-center>
                                            <v-checkbox
                                            v-model="checkboxq6"
                                            value="Strongly agree"
                                            />
                                            </v-layout>
                                        </td>
                                        <td>
                                            <v-layout justify-center>
                                            <v-checkbox
                                            v-model="checkboxq6"
                                            value="N/A"
                                            />
                                            </v-layout>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td><body>{{q7}}</body></td>
                                        <td>
                                            <v-layout justify-center>
                                            <v-checkbox
                                            v-model="checkboxq7"
                                            value="Strongly Disagree"
                                            />
                                            </v-layout>
                                        </td>
                                        <td>
                                            <v-layout justify-center>
                                            <v-checkbox
                                            v-model="checkboxq7"
                                            value="Disagree"
                                            />
                                            </v-layout>
                                        </td>
                                        <td>
                                            <v-layout justify-center>
                                            <v-checkbox
                                            v-model="checkboxq7"
                                            value="Neither agree nor disagree"
                                            />
                                            </v-layout>
                                        </td>
                                        <td>
                                            <v-layout justify-center>
                                            <v-checkbox
                                            v-model="checkboxq7"
                                            value="Agree"
                                            />
                                            </v-layout>
                                        </td>
                                        <td>
                                            <v-layout justify-center>
                                            <v-checkbox
                                            v-model="checkboxq7"
                                            value="Strongly agree"
                                            />
                                            </v-layout>
                                        </td>
                                        <td>
                                            <v-layout justify-center>
                                            <v-checkbox
                                            v-model="checkboxq7"
                                            value="N/A"
                                            />
                                            </v-layout>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td><body>{{q8}}</body></td>
                                        <td>
                                            <v-layout justify-center>
                                            <v-checkbox
                                            v-model="checkboxq8"
                                            value="Strongly Disagree"
                                            />
                                            </v-layout>
                                        </td>
                                        <td>
                                            <v-layout justify-center>
                                            <v-checkbox
                                            v-model="checkboxq8"
                                            value="Disagree"
                                            />
                                            </v-layout>
                                        </td>
                                        <td>
                                            <v-layout justify-center>
                                            <v-checkbox
                                            v-model="checkboxq8"
                                            value="Neither agree nor disagree"
                                            />
                                            </v-layout>
                                        </td>
                                        <td>
                                            <v-layout justify-center>
                                            <v-checkbox
                                            v-model="checkboxq8"
                                            value="Agree"
                                            />
                                            </v-layout>
                                        </td>
                                        <td>
                                            <v-layout justify-center>
                                            <v-checkbox
                                            v-model="checkboxq8"
                                            value="Strongly agree"
                                            />
                                            </v-layout>
                                        </td>
                                        <td>
                                            <v-layout justify-center>
                                            <v-checkbox
                                            v-model="checkboxq8"
                                            value="N/A"
                                            />
                                            </v-layout>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td><body>{{q9}}</body></td>
                                        <td>
                                            <v-layout justify-center>
                                            <v-checkbox
                                            v-model="checkboxq9"
                                            value="Strongly Disagree"
                                            />
                                            </v-layout>
                                        </td>
                                        <td>
                                            <v-layout justify-center>
                                            <v-checkbox
                                            v-model="checkboxq9"
                                            value="Disagree"
                                            />
                                            </v-layout>
                                        </td>
                                        <td>
                                            <v-layout justify-center>
                                            <v-checkbox
                                            v-model="checkboxq9"
                                            value="Neither agree nor disagree"
                                            />
                                            </v-layout>
                                        </td>
                                        <td>
                                            <v-layout justify-center>
                                            <v-checkbox
                                            v-model="checkboxq9"
                                            value="Agree"
                                            />
                                            </v-layout>
                                        </td>
                                        <td>
                                            <v-layout justify-center>
                                            <v-checkbox
                                            v-model="checkboxq9"
                                            value="Strongly agree"
                                            />
                                            </v-layout>
                                        </td>
                                        <td>
                                            <v-layout justify-center>
                                            <v-checkbox
                                            v-model="checkboxq9"
                                            value="N/A"
                                            />
                                            </v-layout>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td><body>{{q10}}</body></td>
                                        <td>
                                            <v-layout justify-center>
                                            <v-checkbox
                                            v-model="checkboxq10"
                                            value="Strongly Disagree"
                                            />
                                            </v-layout>
                                        </td>
                                        <td>
                                            <v-layout justify-center>
                                            <v-checkbox
                                            v-model="checkboxq10"
                                            value="Disagree"
                                            />
                                            </v-layout>
                                        </td>
                                        <td>
                                            <v-layout justify-center>
                                            <v-checkbox
                                            v-model="checkboxq10"
                                            value="Neither agree nor disagree"
                                            />
                                            </v-layout>
                                        </td>
                                        <td>
                                            <v-layout justify-center>
                                            <v-checkbox
                                            v-model="checkboxq10"
                                            value="Agree"
                                            />
                                            </v-layout>
                                        </td>
                                        <td>
                                            <v-layout justify-center>
                                            <v-checkbox
                                            v-model="checkboxq10"
                                            value="Strongly agree"
                                            />
                                            </v-layout>
                                        </td>
                                        <td>
                                            <v-layout justify-center>
                                            <v-checkbox
                                            v-model="checkboxq10"
                                            value="N/A"
                                            />
                                            </v-layout>
                                        </td>
                                    </tr>

                                </tbody>
                        </v-simple-table>
                        </v-flex>

                        <v-flex class="justify-end pl-3" row wrap>
                        <v-spacer/>
                        <v-btn @click="next" color="warning">Next</v-btn>
                    </v-flex>
                    </v-flex>
                </v-layout>
            </v-flex>
        </v-card>
        </v-container>
    </v-main>
</template>

<script>
export default {
data(){
    return{
        checkboxq1:null,
        checkboxq2:null,
        checkboxq3:null,
        checkboxq4:null,
        checkboxq5:null,
        checkboxq6:null,
        checkboxq7:null,
        checkboxq8:null,
        checkboxq9:null,
        checkboxq10:null,
        q1: 'I am able to navigate complex ethical choices around AI/ML fairness',
        q2: 'I am not sure which fairness criteria I should use for my AI/ML models',
        q3: 'I can prioritize which of the fairness issues I have found most needed to be addressed',
        q4: 'I have a process to help anticipate fairness issues I might otherwise miss',
        q5: 'I can figure out which subgroups of stakeholders are important to think about, in terms of fairness',
        q6: 'I can specify and enforce fairness criteria to train my AI/ML models',
        q7: 'I am able to detect potential fairness issues during the process of developing AI/ML models',
        q8: 'I am unsure of the repercussions on my users/customers when I use a certain fairness criteria to solve a fairness issue',
        q9: 'I do not know how to make decisions regarding fairness in AI/ML',
        q10: 'I am able to compare across different possible strategies for addressing a fairness issue in my application area',
        arrayq1to10:[]
    }
},

methods: {
    next(){
        this.arrayq1to10.push(this.checkboxq1,this.checkboxq2,this.checkboxq3,this.checkboxq4,this.checkboxq5,this.checkboxq6,this.checkboxq7,this.checkboxq8,this.checkboxq9,this.checkboxq10)
        this.$store
          .dispatch(
              "updateSurveys", this.arrayq1to10)
        .then(() => this.$router.push({ name: "Survey2"}))
    },
},
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
    padding:0;
    font-size: 18px;
}

body{
    font-size: 16px;
}
</style>>
