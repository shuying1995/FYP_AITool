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
                                        <td style="width:45%"><body>{{q11}}</body></td>
                                        <td>
                                            <v-layout justify-center>
                                            <v-checkbox
                                            v-model="checkboxq11"
                                            value="Strongly Disagree"
                                            />
                                            </v-layout>
                                        </td>
                                        <td>
                                            <v-layout justify-center>
                                            <v-checkbox
                                            v-model="checkboxq11"
                                            value="Disagree"
                                            />
                                            </v-layout>
                                        </td>
                                        <td>
                                            <v-layout justify-center>
                                            <v-checkbox
                                            v-model="checkboxq11"
                                            value="Neither agree nor disagree"
                                            />
                                            </v-layout>
                                        </td>
                                        <td>
                                            <v-layout justify-center>
                                            <v-checkbox
                                            v-model="checkboxq11"
                                            value="Agree"
                                            />
                                            </v-layout>
                                        </td>
                                        <td>
                                            <v-layout justify-center>
                                            <v-checkbox
                                            v-model="checkboxq11"
                                            value="Strongly agree"
                                            />
                                            </v-layout>
                                        </td>
                                        <td>
                                            <v-layout justify-center>
                                            <v-checkbox
                                            v-model="checkboxq11"
                                            value="N/A"
                                            />
                                            </v-layout>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td><body>{{q12}}</body></td>
                                        <td>
                                            <v-layout justify-center>
                                            <v-checkbox
                                            v-model="checkboxq12"
                                            value="Strongly Disagree"
                                            />
                                            </v-layout>
                                        </td>
                                        <td>
                                            <v-layout justify-center>
                                            <v-checkbox
                                            v-model="checkboxq12"
                                            value="Disagree"
                                            />
                                            </v-layout>
                                        </td>
                                        <td>
                                            <v-layout justify-center>
                                            <v-checkbox
                                            v-model="checkboxq12"
                                            value="Neither agree nor disagree"
                                            />
                                            </v-layout>
                                        </td>
                                        <td>
                                            <v-layout justify-center>
                                            <v-checkbox
                                            v-model="checkboxq12"
                                            value="Agree"
                                            />
                                            </v-layout>
                                        </td>
                                        <td>
                                            <v-layout justify-center>
                                            <v-checkbox
                                            v-model="checkboxq12"
                                            value="Strongly agree"
                                            />
                                            </v-layout>
                                        </td>
                                        <td>
                                            <v-layout justify-center>
                                            <v-checkbox
                                            v-model="checkboxq12"
                                            value="N/A"
                                            />
                                            </v-layout>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td><body>{{q13}}</body></td>
                                        <td>
                                            <v-layout justify-center>
                                            <v-checkbox
                                            v-model="checkboxq13"
                                            value="Strongly Disagree"
                                            />
                                            </v-layout>
                                        </td>
                                        <td>
                                            <v-layout justify-center>
                                            <v-checkbox
                                            v-model="checkboxq13"
                                            value="Disagree"
                                            />
                                            </v-layout>
                                        </td>
                                        <td>
                                            <v-layout justify-center>
                                            <v-checkbox
                                            v-model="checkboxq13"
                                            value="Neither agree nor disagree"
                                            />
                                            </v-layout>
                                        </td>
                                        <td>
                                            <v-layout justify-center>
                                            <v-checkbox
                                            v-model="checkboxq13"
                                            value="Agree"
                                            />
                                            </v-layout>
                                        </td>
                                        <td>
                                            <v-layout justify-center>
                                            <v-checkbox
                                            v-model="checkboxq13"
                                            value="Strongly agree"
                                            />
                                            </v-layout>
                                        </td>
                                        <td>
                                            <v-layout justify-center>
                                            <v-checkbox
                                            v-model="checkboxq13"
                                            value="N/A"
                                            />
                                            </v-layout>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td><body>{{q14}}</body></td>
                                        <td>
                                            <v-layout justify-center>
                                            <v-checkbox
                                            v-model="checkboxq14"
                                            value="Strongly Disagree"
                                            />
                                            </v-layout>
                                        </td>
                                        <td>
                                            <v-layout justify-center>
                                            <v-checkbox
                                            v-model="checkboxq14"
                                            value="Disagree"
                                            />
                                            </v-layout>
                                        </td>
                                        <td>
                                            <v-layout justify-center>
                                            <v-checkbox
                                            v-model="checkboxq14"
                                            value="Neither agree nor disagree"
                                            />
                                            </v-layout>
                                        </td>
                                        <td>
                                            <v-layout justify-center>
                                            <v-checkbox
                                            v-model="checkboxq14"
                                            value="Agree"
                                            />
                                            </v-layout>
                                        </td>
                                        <td>
                                            <v-layout justify-center>
                                            <v-checkbox
                                            v-model="checkboxq14"
                                            value="Strongly agree"
                                            />
                                            </v-layout>
                                        </td>
                                        <td>
                                            <v-layout justify-center>
                                            <v-checkbox
                                            v-model="checkboxq14"
                                            value="N/A"
                                            />
                                            </v-layout>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td><body>{{q15}}</body></td>
                                        <td>
                                            <v-layout justify-center>
                                            <v-checkbox
                                            v-model="checkboxq15"
                                            value="Strongly Disagree"
                                            />
                                            </v-layout>
                                        </td>
                                        <td>
                                            <v-layout justify-center>
                                            <v-checkbox
                                            v-model="checkboxq15"
                                            value="Disagree"
                                            />
                                            </v-layout>
                                        </td>
                                        <td>
                                            <v-layout justify-center>
                                            <v-checkbox
                                            v-model="checkboxq15"
                                            value="Neither agree nor disagree"
                                            />
                                            </v-layout>
                                        </td>
                                        <td>
                                            <v-layout justify-center>
                                            <v-checkbox
                                            v-model="checkboxq15"
                                            value="Agree"
                                            />
                                            </v-layout>
                                        </td>
                                        <td>
                                            <v-layout justify-center>
                                            <v-checkbox
                                            v-model="checkboxq15"
                                            value="Strongly agree"
                                            />
                                            </v-layout>
                                        </td>
                                        <td>
                                            <v-layout justify-center>
                                            <v-checkbox
                                            v-model="checkboxq15"
                                            value="N/A"
                                            />
                                            </v-layout>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td><body>{{q16}}</body></td>
                                        <td>
                                            <v-layout justify-center>
                                            <v-checkbox
                                            v-model="checkboxq16"
                                            value="Strongly Disagree"
                                            />
                                            </v-layout>
                                        </td>
                                        <td>
                                            <v-layout justify-center>
                                            <v-checkbox
                                            v-model="checkboxq16"
                                            value="Disagree"
                                            />
                                            </v-layout>
                                        </td>
                                        <td>
                                            <v-layout justify-center>
                                            <v-checkbox
                                            v-model="checkboxq16"
                                            value="Neither agree nor disagree"
                                            />
                                            </v-layout>
                                        </td>
                                        <td>
                                            <v-layout justify-center>
                                            <v-checkbox
                                            v-model="checkboxq16"
                                            value="Agree"
                                            />
                                            </v-layout>
                                        </td>
                                        <td>
                                            <v-layout justify-center>
                                            <v-checkbox
                                            v-model="checkboxq16"
                                            value="Strongly agree"
                                            />
                                            </v-layout>
                                        </td>
                                        <td>
                                            <v-layout justify-center>
                                            <v-checkbox
                                            v-model="checkboxq16"
                                            value="N/A"
                                            />
                                            </v-layout>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td><body>{{q17}}</body></td>
                                        <td>
                                            <v-layout justify-center>
                                            <v-checkbox
                                            v-model="checkboxq17"
                                            value="Strongly Disagree"
                                            />
                                            </v-layout>
                                        </td>
                                        <td>
                                            <v-layout justify-center>
                                            <v-checkbox
                                            v-model="checkboxq17"
                                            value="Disagree"
                                            />
                                            </v-layout>
                                        </td>
                                        <td>
                                            <v-layout justify-center>
                                            <v-checkbox
                                            v-model="checkboxq17"
                                            value="Neither agree nor disagree"
                                            />
                                            </v-layout>
                                        </td>
                                        <td>
                                            <v-layout justify-center>
                                            <v-checkbox
                                            v-model="checkboxq17"
                                            value="Agree"
                                            />
                                            </v-layout>
                                        </td>
                                        <td>
                                            <v-layout justify-center>
                                            <v-checkbox
                                            v-model="checkboxq17"
                                            value="Strongly agree"
                                            />
                                            </v-layout>
                                        </td>
                                        <td>
                                            <v-layout justify-center>
                                            <v-checkbox
                                            v-model="checkboxq17"
                                            value="N/A"
                                            />
                                            </v-layout>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td><body>{{q18}}</body></td>
                                        <td>
                                            <v-layout justify-center>
                                            <v-checkbox
                                            v-model="checkboxq18"
                                            value="Strongly Disagree"
                                            />
                                            </v-layout>
                                        </td>
                                        <td>
                                            <v-layout justify-center>
                                            <v-checkbox
                                            v-model="checkboxq18"
                                            value="Disagree"
                                            />
                                            </v-layout>
                                        </td>
                                        <td>
                                            <v-layout justify-center>
                                            <v-checkbox
                                            v-model="checkboxq18"
                                            value="Neither agree nor disagree"
                                            />
                                            </v-layout>
                                        </td>
                                        <td>
                                            <v-layout justify-center>
                                            <v-checkbox
                                            v-model="checkboxq18"
                                            value="Agree"
                                            />
                                            </v-layout>
                                        </td>
                                        <td>
                                            <v-layout justify-center>
                                            <v-checkbox
                                            v-model="checkboxq18"
                                            value="Strongly agree"
                                            />
                                            </v-layout>
                                        </td>
                                        <td>
                                            <v-layout justify-center>
                                            <v-checkbox
                                            v-model="checkboxq18"
                                            value="N/A"
                                            />
                                            </v-layout>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td><body>{{q19}}</body></td>
                                        <td>
                                            <v-layout justify-center>
                                            <v-checkbox
                                            v-model="checkboxq19"
                                            value="Strongly Disagree"
                                            />
                                            </v-layout>
                                        </td>
                                        <td>
                                            <v-layout justify-center>
                                            <v-checkbox
                                            v-model="checkboxq19"
                                            value="Disagree"
                                            />
                                            </v-layout>
                                        </td>
                                        <td>
                                            <v-layout justify-center>
                                            <v-checkbox
                                            v-model="checkboxq19"
                                            value="Neither agree nor disagree"
                                            />
                                            </v-layout>
                                        </td>
                                        <td>
                                            <v-layout justify-center>
                                            <v-checkbox
                                            v-model="checkboxq19"
                                            value="Agree"
                                            />
                                            </v-layout>
                                        </td>
                                        <td>
                                            <v-layout justify-center>
                                            <v-checkbox
                                            v-model="checkboxq19"
                                            value="Strongly agree"
                                            />
                                            </v-layout>
                                        </td>
                                        <td>
                                            <v-layout justify-center>
                                            <v-checkbox
                                            v-model="checkboxq19"
                                            value="N/A"
                                            />
                                            </v-layout>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td><body>{{q20}}</body></td>
                                        <td>
                                            <v-layout justify-center>
                                            <v-checkbox
                                            v-model="checkboxq20"
                                            value="Strongly Disagree"
                                            />
                                            </v-layout>
                                        </td>
                                        <td>
                                            <v-layout justify-center>
                                            <v-checkbox
                                            v-model="checkboxq20"
                                            value="Disagree"
                                            />
                                            </v-layout>
                                        </td>
                                        <td>
                                            <v-layout justify-center>
                                            <v-checkbox
                                            v-model="checkboxq20"
                                            value="Neither agree nor disagree"
                                            />
                                            </v-layout>
                                        </td>
                                        <td>
                                            <v-layout justify-center>
                                            <v-checkbox
                                            v-model="checkboxq20"
                                            value="Agree"
                                            />
                                            </v-layout>
                                        </td>
                                        <td>
                                            <v-layout justify-center>
                                            <v-checkbox
                                            v-model="checkboxq20"
                                            value="Strongly agree"
                                            />
                                            </v-layout>
                                        </td>
                                        <td>
                                            <v-layout justify-center>
                                            <v-checkbox
                                            v-model="checkboxq20"
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
                        <v-btn @click="back">Back</v-btn>
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
        checkboxq11:null,
        checkboxq12:null,
        checkboxq13:null,
        checkboxq14:null,
        checkboxq15:null,
        checkboxq16:null,
        checkboxq17:null,
        checkboxq18:null,
        checkboxq19:null,
        checkboxq20:null,
        q11: 'I understand what kinds of fairness issues can arise in my application area',
        q12: 'I do not know how my stakeholders might interpret fairness',
        q13: 'I am unsure of which stakeholders to prioritise when it comes to fairness',
        q14: 'I do not know how to evaluate different fairness solutions',
        q15: 'I am unable to determine which fairness issues are more important to focus on first',
        q16: 'I am able to understand what side effects a particular “fix” for a fairness issue might have on my users’/customers’ experience',
        q17: 'I am unable to identify fairness issues that might occur when creating AI/ML models',
        q18: 'I am not sure of the implication of fairness in my application area',
        q19: 'I do not know how to surface fairness issues that I might have neglected or overlooked',
        q20: 'I can understand what stakeholders of my products and services will consider fair vs unfair',
        arrayq11to20: []
    }
},

methods: {
    back(){
        this.$router.push({ name: "Survey1"})
    },
    next(){
        this.arrayq11to20.push(this.checkboxq11,this.checkboxq12,this.checkboxq13,this.checkboxq14,this.checkboxq15,this.checkboxq16,this.checkboxq17,this.checkboxq18,this.checkboxq19,this.checkboxq20)
        this.$store
          .dispatch(
              "updateSurveys", this.arrayq11to20)
        .then(() => this.$router.push({ name: "Survey3"}))
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
