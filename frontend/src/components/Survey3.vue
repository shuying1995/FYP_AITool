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
                                        <td style="width:45%"><body>{{q21}}</body></td>
                                        <td>
                                            <v-layout justify-center>
                                            <v-checkbox
                                            v-model="checkboxq21"
                                            value="Strongly Disagree"
                                            />
                                            </v-layout>
                                        </td>
                                        <td>
                                            <v-layout justify-center>
                                            <v-checkbox
                                            v-model="checkboxq21"
                                            value="Disagree"
                                            />
                                            </v-layout>
                                        </td>
                                        <td>
                                            <v-layout justify-center>
                                            <v-checkbox
                                            v-model="checkboxq21"
                                            value="Neither agree nor disagree"
                                            />
                                            </v-layout>
                                        </td>
                                        <td>
                                            <v-layout justify-center>
                                            <v-checkbox
                                            v-model="checkboxq21"
                                            value="Agree"
                                            />
                                            </v-layout>
                                        </td>
                                        <td>
                                            <v-layout justify-center>
                                            <v-checkbox
                                            v-model="checkboxq21"
                                            value="Strongly agree"
                                            />
                                            </v-layout>
                                        </td>
                                        <td>
                                            <v-layout justify-center>
                                            <v-checkbox
                                            v-model="checkboxq21"
                                            value="N/A"
                                            />
                                            </v-layout>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td><body>{{q22}}</body></td>
                                        <td>
                                            <v-layout justify-center>
                                            <v-checkbox
                                            v-model="checkboxq22"
                                            value="Strongly Disagree"
                                            />
                                            </v-layout>
                                        </td>
                                        <td>
                                            <v-layout justify-center>
                                            <v-checkbox
                                            v-model="checkboxq22"
                                            value="Disagree"
                                            />
                                            </v-layout>
                                        </td>
                                        <td>
                                            <v-layout justify-center>
                                            <v-checkbox
                                            v-model="checkboxq22"
                                            value="Neither agree nor disagree"
                                            />
                                            </v-layout>
                                        </td>
                                        <td>
                                            <v-layout justify-center>
                                            <v-checkbox
                                            v-model="checkboxq22"
                                            value="Agree"
                                            />
                                            </v-layout>
                                        </td>
                                        <td>
                                            <v-layout justify-center>
                                            <v-checkbox
                                            v-model="checkboxq22"
                                            value="Strongly agree"
                                            />
                                            </v-layout>
                                        </td>
                                        <td>
                                            <v-layout justify-center>
                                            <v-checkbox
                                            v-model="checkboxq22"
                                            value="N/A"
                                            />
                                            </v-layout>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td><body>{{q23}}</body></td>
                                        <td>
                                            <v-layout justify-center>
                                            <v-checkbox
                                            v-model="checkboxq23"
                                            value="Strongly Disagree"
                                            />
                                            </v-layout>
                                        </td>
                                        <td>
                                            <v-layout justify-center>
                                            <v-checkbox
                                            v-model="checkboxq23"
                                            value="Disagree"
                                            />
                                            </v-layout>
                                        </td>
                                        <td>
                                            <v-layout justify-center>
                                            <v-checkbox
                                            v-model="checkboxq23"
                                            value="Neither agree nor disagree"
                                            />
                                            </v-layout>
                                        </td>
                                        <td>
                                            <v-layout justify-center>
                                            <v-checkbox
                                            v-model="checkboxq23"
                                            value="Agree"
                                            />
                                            </v-layout>
                                        </td>
                                        <td>
                                            <v-layout justify-center>
                                            <v-checkbox
                                            v-model="checkboxq23"
                                            value="Strongly agree"
                                            />
                                            </v-layout>
                                        </td>
                                        <td>
                                            <v-layout justify-center>
                                            <v-checkbox
                                            v-model="checkboxq23"
                                            value="N/A"
                                            />
                                            </v-layout>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td><body>{{q24}}</body></td>
                                        <td>
                                            <v-layout justify-center>
                                            <v-checkbox
                                            v-model="checkboxq24"
                                            value="Strongly Disagree"
                                            />
                                            </v-layout>
                                        </td>
                                        <td>
                                            <v-layout justify-center>
                                            <v-checkbox
                                            v-model="checkboxq24"
                                            value="Disagree"
                                            />
                                            </v-layout>
                                        </td>
                                        <td>
                                            <v-layout justify-center>
                                            <v-checkbox
                                            v-model="checkboxq24"
                                            value="Neither agree nor disagree"
                                            />
                                            </v-layout>
                                        </td>
                                        <td>
                                            <v-layout justify-center>
                                            <v-checkbox
                                            v-model="checkboxq24"
                                            value="Agree"
                                            />
                                            </v-layout>
                                        </td>
                                        <td>
                                            <v-layout justify-center>
                                            <v-checkbox
                                            v-model="checkboxq24"
                                            value="Strongly agree"
                                            />
                                            </v-layout>
                                        </td>
                                        <td>
                                            <v-layout justify-center>
                                            <v-checkbox
                                            v-model="checkboxq24"
                                            value="N/A"
                                            />
                                            </v-layout>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td><body>{{q25}}</body></td>
                                        <td>
                                            <v-layout justify-center>
                                            <v-checkbox
                                            v-model="checkboxq25"
                                            value="Strongly Disagree"
                                            />
                                            </v-layout>
                                        </td>
                                        <td>
                                            <v-layout justify-center>
                                            <v-checkbox
                                            v-model="checkboxq25"
                                            value="Disagree"
                                            />
                                            </v-layout>
                                        </td>
                                        <td>
                                            <v-layout justify-center>
                                            <v-checkbox
                                            v-model="checkboxq25"
                                            value="Neither agree nor disagree"
                                            />
                                            </v-layout>
                                        </td>
                                        <td>
                                            <v-layout justify-center>
                                            <v-checkbox
                                            v-model="checkboxq25"
                                            value="Agree"
                                            />
                                            </v-layout>
                                        </td>
                                        <td>
                                            <v-layout justify-center>
                                            <v-checkbox
                                            v-model="checkboxq25"
                                            value="Strongly agree"
                                            />
                                            </v-layout>
                                        </td>
                                        <td>
                                            <v-layout justify-center>
                                            <v-checkbox
                                            v-model="checkboxq25"
                                            value="N/A"
                                            />
                                            </v-layout>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td><body>{{q26}}</body></td>
                                        <td>
                                            <v-layout justify-center>
                                            <v-checkbox
                                            v-model="checkboxq26"
                                            value="Strongly Disagree"
                                            />
                                            </v-layout>
                                        </td>
                                        <td>
                                            <v-layout justify-center>
                                            <v-checkbox
                                            v-model="checkboxq26"
                                            value="Disagree"
                                            />
                                            </v-layout>
                                        </td>
                                        <td>
                                            <v-layout justify-center>
                                            <v-checkbox
                                            v-model="checkboxq26"
                                            value="Neither agree nor disagree"
                                            />
                                            </v-layout>
                                        </td>
                                        <td>
                                            <v-layout justify-center>
                                            <v-checkbox
                                            v-model="checkboxq26"
                                            value="Agree"
                                            />
                                            </v-layout>
                                        </td>
                                        <td>
                                            <v-layout justify-center>
                                            <v-checkbox
                                            v-model="checkboxq26"
                                            value="Strongly agree"
                                            />
                                            </v-layout>
                                        </td>
                                        <td>
                                            <v-layout justify-center>
                                            <v-checkbox
                                            v-model="checkboxq26"
                                            value="N/A"
                                            />
                                            </v-layout>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td><body>{{q27}}</body></td>
                                        <td>
                                            <v-layout justify-center>
                                            <v-checkbox
                                            v-model="checkboxq27"
                                            value="Strongly Disagree"
                                            />
                                            </v-layout>
                                        </td>
                                        <td>
                                            <v-layout justify-center>
                                            <v-checkbox
                                            v-model="checkboxq27"
                                            value="Disagree"
                                            />
                                            </v-layout>
                                        </td>
                                        <td>
                                            <v-layout justify-center>
                                            <v-checkbox
                                            v-model="checkboxq27"
                                            value="Neither agree nor disagree"
                                            />
                                            </v-layout>
                                        </td>
                                        <td>
                                            <v-layout justify-center>
                                            <v-checkbox
                                            v-model="checkboxq27"
                                            value="Agree"
                                            />
                                            </v-layout>
                                        </td>
                                        <td>
                                            <v-layout justify-center>
                                            <v-checkbox
                                            v-model="checkboxq27"
                                            value="Strongly agree"
                                            />
                                            </v-layout>
                                        </td>
                                        <td>
                                            <v-layout justify-center>
                                            <v-checkbox
                                            v-model="checkboxq27"
                                            value="N/A"
                                            />
                                            </v-layout>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td><body>{{q28}}</body></td>
                                        <td>
                                            <v-layout justify-center>
                                            <v-checkbox
                                            v-model="checkboxq28"
                                            value="Strongly Disagree"
                                            />
                                            </v-layout>
                                        </td>
                                        <td>
                                            <v-layout justify-center>
                                            <v-checkbox
                                            v-model="checkboxq28"
                                            value="Disagree"
                                            />
                                            </v-layout>
                                        </td>
                                        <td>
                                            <v-layout justify-center>
                                            <v-checkbox
                                            v-model="checkboxq28"
                                            value="Neither agree nor disagree"
                                            />
                                            </v-layout>
                                        </td>
                                        <td>
                                            <v-layout justify-center>
                                            <v-checkbox
                                            v-model="checkboxq28"
                                            value="Agree"
                                            />
                                            </v-layout>
                                        </td>
                                        <td>
                                            <v-layout justify-center>
                                            <v-checkbox
                                            v-model="checkboxq28"
                                            value="Strongly agree"
                                            />
                                            </v-layout>
                                        </td>
                                        <td>
                                            <v-layout justify-center>
                                            <v-checkbox
                                            v-model="checkboxq28"
                                            value="N/A"
                                            />
                                            </v-layout>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td><body>{{q29}}</body></td>
                                        <td>
                                            <v-layout justify-center>
                                            <v-checkbox
                                            v-model="checkboxq29"
                                            value="Strongly Disagree"
                                            />
                                            </v-layout>
                                        </td>
                                        <td>
                                            <v-layout justify-center>
                                            <v-checkbox
                                            v-model="checkboxq29"
                                            value="Disagree"
                                            />
                                            </v-layout>
                                        </td>
                                        <td>
                                            <v-layout justify-center>
                                            <v-checkbox
                                            v-model="checkboxq29"
                                            value="Neither agree nor disagree"
                                            />
                                            </v-layout>
                                        </td>
                                        <td>
                                            <v-layout justify-center>
                                            <v-checkbox
                                            v-model="checkboxq29"
                                            value="Agree"
                                            />
                                            </v-layout>
                                        </td>
                                        <td>
                                            <v-layout justify-center>
                                            <v-checkbox
                                            v-model="checkboxq29"
                                            value="Strongly agree"
                                            />
                                            </v-layout>
                                        </td>
                                        <td>
                                            <v-layout justify-center>
                                            <v-checkbox
                                            v-model="checkboxq29"
                                            value="N/A"
                                            />
                                            </v-layout>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td><body>{{q30}}</body></td>
                                        <td>
                                            <v-layout justify-center>
                                            <v-checkbox
                                            v-model="checkboxq30"
                                            value="Strongly Disagree"
                                            />
                                            </v-layout>
                                        </td>
                                        <td>
                                            <v-layout justify-center>
                                            <v-checkbox
                                            v-model="checkboxq30"
                                            value="Disagree"
                                            />
                                            </v-layout>
                                        </td>
                                        <td>
                                            <v-layout justify-center>
                                            <v-checkbox
                                            v-model="checkboxq30"
                                            value="Neither agree nor disagree"
                                            />
                                            </v-layout>
                                        </td>
                                        <td>
                                            <v-layout justify-center>
                                            <v-checkbox
                                            v-model="checkboxq30"
                                            value="Agree"
                                            />
                                            </v-layout>
                                        </td>
                                        <td>
                                            <v-layout justify-center>
                                            <v-checkbox
                                            v-model="checkboxq30"
                                            value="Strongly agree"
                                            />
                                            </v-layout>
                                        </td>
                                        <td>
                                            <v-layout justify-center>
                                            <v-checkbox
                                            v-model="checkboxq30"
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
        checkboxq21:null,
        checkboxq22:null,
        checkboxq23:null,
        checkboxq24:null,
        checkboxq25:null,
        checkboxq26:null,
        checkboxq27:null,
        checkboxq28:null,
        checkboxq29:null,
        checkboxq30:null,
        q21: 'I think that I would like to use this tool frequently',
        q22: 'I found the tool unneccessarily complex',
        q23: 'I thought the tool was easy to use',
        q24: 'I think that I would need the support of a facilitator to be able to use this tool',
        q25: 'I found the various components in this tool were well integrated',
        q26: 'I thought there was too much inconsistency in this tool',
        q27: 'I would imagine that most people would learn to use this tool very quickyl',
        q28: 'I found the tool very cumbersome to use',
        q29: 'I felt very confident using the tool',
        q30: 'I needed to learn a lot of things before I could get going with this tool'
    }
},

methods: {
    back(){
        this.$router.push({ name: "Survey2"})
    },
    next(){
        this.$router.push({ name: "Survey4"})
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
