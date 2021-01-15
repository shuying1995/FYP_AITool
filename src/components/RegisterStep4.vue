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
                        <v-btn text @click='registerstep3'>
                            <v-icon left color="warning">mdi-check-circle-outline</v-icon>
                            CURRENT PRACTICES
                            </v-btn>
                        <v-btn text>
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
                        <h3>Let us know your current experience!</h3>
                        <p>Rate how strongly you agree with each statement.</p>
                        
                        <v-flex class="pb-5">
                        <v-simple-table>
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Strongly Disagree</th>
                                    <th>Disagree</th>
                                    <th>Neither agree nor disagree</th>
                                    <th>Agree</th>
                                    <th>Strongly agree</th>
                                    <th>N/A</th>
                                </tr>
                            </thead>
                                <tbody>
                                    <tr>
                                        <td>{{selectedquestion1.q}}</td>
                                        <td>
                                            <v-checkbox
                                            v-model="checkboxq1"
                                            value="Strongly Disagree"
                                            />
                                        </td>
                                        <td>
                                            <v-checkbox
                                            v-model="checkboxq1"
                                            value="Disagree"
                                            />
                                        </td>
                                        <td>
                                            <v-checkbox
                                            v-model="checkboxq1"
                                            value="Neither agree nor disagree"
                                            />
                                        </td>
                                        <td>
                                            <v-checkbox
                                            v-model="checkboxq1"
                                            value="Agree"
                                            />
                                        </td>
                                        <td>
                                            <v-checkbox
                                            v-model="checkboxq1"
                                            value="Strongly agree"
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
                                        <td>{{selectedquestion2.q}}</td>
                                        <td>
                                            <v-checkbox
                                            v-model="checkboxq2"
                                            value="Strongly Disagree"
                                            />
                                        </td>
                                        <td>
                                            <v-checkbox
                                            v-model="checkboxq2"
                                            value="Disagree"
                                            />
                                        </td>
                                        <td>
                                            <v-checkbox
                                            v-model="checkboxq2"
                                            value="Neither agree nor disagree"
                                            />
                                        </td>
                                        <td>
                                            <v-checkbox
                                            v-model="checkboxq2"
                                            value="Agree"
                                            />
                                        </td>
                                        <td>
                                            <v-checkbox
                                            v-model="checkboxq2"
                                            value="Strongly agree"
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
                                        <td>{{selectedquestion3.q}}</td>
                                        <td>
                                            <v-checkbox
                                            v-model="checkboxq3"
                                            value="Strongly Disagree"
                                            />
                                        </td>
                                        <td>
                                            <v-checkbox
                                            v-model="checkboxq3"
                                            value="Disagree"
                                            />
                                        </td>
                                        <td>
                                            <v-checkbox
                                            v-model="checkboxq3"
                                            value="Neither agree nor disagree"
                                            />
                                        </td>
                                        <td>
                                            <v-checkbox
                                            v-model="checkboxq3"
                                            value="Agree"
                                            />
                                        </td>
                                        <td>
                                            <v-checkbox
                                            v-model="checkboxq3"
                                            value="Strongly agree"
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
                                        <td>{{selectedquestion4.q}}</td>
                                        <td>
                                            <v-checkbox
                                            v-model="checkboxq4"
                                            value="Strongly Disagree"
                                            />
                                        </td>
                                        <td>
                                            <v-checkbox
                                            v-model="checkboxq4"
                                            value="Disagree"
                                            />
                                        </td>
                                        <td>
                                            <v-checkbox
                                            v-model="checkboxq4"
                                            value="Neither agree nor disagree"
                                            />
                                        </td>
                                        <td>
                                            <v-checkbox
                                            v-model="checkboxq4"
                                            value="Agree"
                                            />
                                        </td>
                                        <td>
                                            <v-checkbox
                                            v-model="checkboxq4"
                                            value="Strongly agree"
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
                                        <td>{{selectedquestion5.q}}</td>
                                        <td>
                                            <v-checkbox
                                            v-model="checkboxq5"
                                            value="Strongly Disagree"
                                            />
                                        </td>
                                        <td>
                                            <v-checkbox
                                            v-model="checkboxq5"
                                            value="Disagree"
                                            />
                                        </td>
                                        <td>
                                            <v-checkbox
                                            v-model="checkboxq5"
                                            value="Neither agree nor disagree"
                                            />
                                        </td>
                                        <td>
                                            <v-checkbox
                                            v-model="checkboxq5"
                                            value="Agree"
                                            />
                                        </td>
                                        <td>
                                            <v-checkbox
                                            v-model="checkboxq5"
                                            value="Strongly agree"
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
                                        <td>{{selectedquestion6.q}}</td>
                                        <td>
                                            <v-checkbox
                                            v-model="checkboxq6"
                                            value="Strongly Disagree"
                                            />
                                        </td>
                                        <td>
                                            <v-checkbox
                                            v-model="checkboxq6"
                                            value="Disagree"
                                            />
                                        </td>
                                        <td>
                                            <v-checkbox
                                            v-model="checkboxq6"
                                            value="Neither agree nor disagree"
                                            />
                                        </td>
                                        <td>
                                            <v-checkbox
                                            v-model="checkboxq6"
                                            value="Agree"
                                            />
                                        </td>
                                        <td>
                                            <v-checkbox
                                            v-model="checkboxq6"
                                            value="Strongly agree"
                                            />
                                        </td>
                                        <td>
                                            <v-checkbox
                                            v-model="checkboxq6"
                                            value="N/A"
                                            />
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>{{selectedquestion7.q}}</td>
                                        <td>
                                            <v-checkbox
                                            v-model="checkboxq7"
                                            value="Strongly Disagree"
                                            />
                                        </td>
                                        <td>
                                            <v-checkbox
                                            v-model="checkboxq7"
                                            value="Disagree"
                                            />
                                        </td>
                                        <td>
                                            <v-checkbox
                                            v-model="checkboxq7"
                                            value="Neither agree nor disagree"
                                            />
                                        </td>
                                        <td>
                                            <v-checkbox
                                            v-model="checkboxq7"
                                            value="Agree"
                                            />
                                        </td>
                                        <td>
                                            <v-checkbox
                                            v-model="checkboxq7"
                                            value="Strongly agree"
                                            />
                                        </td>
                                        <td>
                                            <v-checkbox
                                            v-model="checkboxq7"
                                            value="N/A"
                                            />
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>{{selectedquestion8.q}}</td>
                                        <td>
                                            <v-checkbox
                                            v-model="checkboxq8"
                                            value="Strongly Disagree"
                                            />
                                        </td>
                                        <td>
                                            <v-checkbox
                                            v-model="checkboxq8"
                                            value="Disagree"
                                            />
                                        </td>
                                        <td>
                                            <v-checkbox
                                            v-model="checkboxq8"
                                            value="Neither agree nor disagree"
                                            />
                                        </td>
                                        <td>
                                            <v-checkbox
                                            v-model="checkboxq8"
                                            value="Agree"
                                            />
                                        </td>
                                        <td>
                                            <v-checkbox
                                            v-model="checkboxq8"
                                            value="Strongly agree"
                                            />
                                        </td>
                                        <td>
                                            <v-checkbox
                                            v-model="checkboxq8"
                                            value="N/A"
                                            />
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>{{selectedquestion9.q}}</td>
                                        <td>
                                            <v-checkbox
                                            v-model="checkboxq9"
                                            value="Strongly Disagree"
                                            />
                                        </td>
                                        <td>
                                            <v-checkbox
                                            v-model="checkboxq9"
                                            value="Disagree"
                                            />
                                        </td>
                                        <td>
                                            <v-checkbox
                                            v-model="checkboxq9"
                                            value="Neither agree nor disagree"
                                            />
                                        </td>
                                        <td>
                                            <v-checkbox
                                            v-model="checkboxq9"
                                            value="Agree"
                                            />
                                        </td>
                                        <td>
                                            <v-checkbox
                                            v-model="checkboxq9"
                                            value="Strongly agree"
                                            />
                                        </td>
                                        <td>
                                            <v-checkbox
                                            v-model="checkboxq9"
                                            value="N/A"
                                            />
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>{{selectedquestion10.q}}</td>
                                        <td>
                                            <v-checkbox
                                            v-model="checkboxq10"
                                            value="Strongly Disagree"
                                            />
                                        </td>
                                        <td>
                                            <v-checkbox
                                            v-model="checkboxq10"
                                            value="Disagree"
                                            />
                                        </td>
                                        <td>
                                            <v-checkbox
                                            v-model="checkboxq10"
                                            value="Neither agree nor disagree"
                                            />
                                        </td>
                                        <td>
                                            <v-checkbox
                                            v-model="checkboxq10"
                                            value="Agree"
                                            />
                                        </td>
                                        <td>
                                            <v-checkbox
                                            v-model="checkboxq10"
                                            value="Strongly agree"
                                            />
                                        </td>
                                        <td>
                                            <v-checkbox
                                            v-model="checkboxq10"
                                            value="N/A"
                                            />
                                        </td>
                                    </tr>

                                </tbody>
                        </v-simple-table>
                        </v-flex>

                        <v-flex class="justify-end pl-3" row wrap>
                        <v-btn @click="registerstep3" color="#757575" class="white--text">Previous step</v-btn>
                        <v-spacer/>
                        <v-btn @click="registerstep5" color="warning">Next</v-btn>
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
        selectedquestion1:null,
        selectedquestion2:null,
        selectedquestion3:null,
        selectedquestion4:null,
        selectedquestion5:null,
        selectedquestion6:null,
        selectedquestion7:null,
        selectedquestion8:null,
        selectedquestion9:null,
        selectedquestion10:null,
        q1:[
            {q: 'I am able to navigate complex ethical choices around AI/ML fairness'},
            {q: 'I do not know how to make decisions regarding fairness in AI/ML'}
        ],
        q2:[
            {q: 'I can specify and enforce fairness criteria to train my AI/ML models'},
            {q: 'I am not sure which fairness criteria I should use for my AI/ML models'}
        ],
        q3:[
            {q: 'I am able to compare across different possible strategies for addressing a fairness issue in my application area'},
            {q: 'I do not know how to evaluate different fairness solutions'}
        ],
        q4:[
            {q: 'I can prioritize which of the fairness issues I have found most needed to be addressed'},
            {q: 'I am unable to determine which fairness issues are more important to focus on first'}
        ],
        q5:[
            {q: 'I understand what kinds of fairness issues can arise in my application area'},
            {q: 'I am not sure of the implication of fairness in my application area'}
        ],
        q6:[
            {q: 'I am able to detect potential fairness issues during the process of developing AI/ML models'},
            {q: 'I am unable to identify fairness issues that might occur when creating AI/ML models'}
        ],
        q7:[
            {q: 'I have a process to help anticipate fairness issues I might otherwise miss'},
            {q: 'I do not know how to surface fairness issues that I might have neglected or overlooked'}
        ],
        q8:[
            {q: 'I am able to understand what side effects a particular “fix” for a fairness issue might have on my users’/customers’ experience'},
            {q: 'I am unsure of the repercussions on my users/customers when I use a certain fairness criteria to solve a fairness issue'}
        ],
        q9:[
            {q: 'I can figure out which subgroups of stakeholders are important to think about, in terms of fairness'},
            {q: 'I am unsure of which stakeholders to prioritise when it comes to fairness'}
        ],
        q10:[
            {q: 'I can understand what stakeholders of my products and services will consider fair vs unfair'},
            {q: 'I do not know how my stakeholders might interpret fairness'}
        ]
    }
},

methods: {
    randomItem (items) {
      return items[Math.floor(Math.random()*items.length)];
    },
    registerstep1(){
        this.$router.push({ name: "RegisterStep1"})
    },
    registerstep2(){
        this.$router.push({ name:"RegisterStep2"})
    },
    registerstep3(){
        this.$router.push({ name:"RegisterStep3"})
    },
    registerstep5(){
        this.$router.push({ name:"RegisterStep5"})
    },
},
created() {
    this.selectedquestion1 = this.randomItem(this.q1)
    this.selectedquestion2 = this.randomItem(this.q2)
    this.selectedquestion3 = this.randomItem(this.q3)
    this.selectedquestion4 = this.randomItem(this.q4)
    this.selectedquestion5 = this.randomItem(this.q5)
    this.selectedquestion6 = this.randomItem(this.q6)
    this.selectedquestion7 = this.randomItem(this.q7)
    this.selectedquestion8 = this.randomItem(this.q8)
    this.selectedquestion9 = this.randomItem(this.q9)
    this.selectedquestion10 = this.randomItem(this.q10)
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
    padding:0
}
</style>>
