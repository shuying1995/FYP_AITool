<template>
    <v-main>
        <v-container fluid>
        <v-card>
            <v-flex xs12 sm12 md12 class="px-7">
                <v-layout fill-height px-5>
                    <v-flex class="pt-8">
                        <v-row justify="center">
                        <h2>Let us know your current experience!</h2>
                        </v-row>
                        
                        <v-row justify="center" class="pt-7">
                        <p>Is fairness in AI/ML something you would like your team to prioritize more?</p>
                        </v-row>
                        
                        <v-row justify="center">
                            <v-col cols="5">
                        <v-select
                        v-model="q31"
                        :items="q31items" 
                        outlined 
                        placeholder="No"
                        />
                            </v-col>
                        </v-row>

                        <v-row justify="center">
                        <p>To what extend will you want to prioritize fairness in AI/ML in the future?</p>
                        </v-row>

                        <v-row justify="center">
                            <v-col cols="5">
                        <v-select
                        v-model="q32"
                        :items="q32items" 
                        outlined 
                        placeholder="Not at all"
                        />
                            </v-col>
                        </v-row>

                        <v-row justify="center">
                        <p>List the most positive aspect(s) of your experience:</p>
                        </v-row>

                        <v-row justify="center">
                            <v-col cols="5">
                        <v-textarea
                        v-model="q33"
                        outlined
                        dense
                        placeholder="placeholder"
                        />
                            </v-col>
                        </v-row>

                        <v-row justify="center">
                        <p>List the most negative aspect(s) of your experience:</p>
                        </v-row>

                        <v-row justify="center">
                            <v-col cols="5">
                        <v-textarea
                        v-model="q34"
                        outlined
                        dense
                        placeholder="placeholder"
                        />
                            </v-col>
                        </v-row>

                        <v-flex class="justify-end pl-3" row wrap>
                        <v-spacer/>
                        <v-btn @click="back">Back</v-btn>
                        <v-btn @click="submit" color="warning">Done</v-btn>
                    </v-flex>
                    </v-flex>
                </v-layout>
            </v-flex>
        </v-card>
        </v-container>
    </v-main>
</template>

<script>
const axios = require('axios');
export default {
data(){
    return{
        q31items: ['No','Maybe','Yes'],
        q31:'',
        q32items: ['Not at all','A little','A moderate amount','A lot','A great deal'],
        q32:'',
        q33:'',
        q34:'',
        surveydone: '1'
    }
},
methods: {
    submit(){
        let userid = window.$cookies.get("userid")
        axios
            .post('api/survey',{
                userid: userid,
                answerq1: this.$store.getters.surveys[0][0],
                answerq2: this.$store.getters.surveys[0][1],
                answerq3: this.$store.getters.surveys[0][2],
                answerq4: this.$store.getters.surveys[0][3],
                answerq5: this.$store.getters.surveys[0][4],
                answerq6: this.$store.getters.surveys[0][5],
                answerq7: this.$store.getters.surveys[0][6],
                answerq8: this.$store.getters.surveys[0][7],
                answerq9: this.$store.getters.surveys[0][8],
                answerq10: this.$store.getters.surveys[0][9],
                answerq11: this.$store.getters.surveys[1][0],
                answerq12: this.$store.getters.surveys[1][1],
                answerq13: this.$store.getters.surveys[1][2],
                answerq14: this.$store.getters.surveys[1][3],
                answerq15: this.$store.getters.surveys[1][4],
                answerq16: this.$store.getters.surveys[1][5],
                answerq17: this.$store.getters.surveys[1][6],
                answerq18: this.$store.getters.surveys[1][7],
                answerq19: this.$store.getters.surveys[1][8],
                answerq20: this.$store.getters.surveys[1][9],
                answerq21: this.$store.getters.surveys[2][0],
                answerq22: this.$store.getters.surveys[2][1],
                answerq23: this.$store.getters.surveys[2][2],
                answerq24: this.$store.getters.surveys[2][3],
                answerq25: this.$store.getters.surveys[2][4],
                answerq26: this.$store.getters.surveys[2][5],
                answerq27: this.$store.getters.surveys[2][6],
                answerq28: this.$store.getters.surveys[2][7],
                answerq29: this.$store.getters.surveys[2][8],
                answerq30: this.$store.getters.surveys[2][9],
                answerq31: this.q31,
                answerq32: this.q32,
                answerq33: this.q33,
                answerq34: this.q34
            })
            .then((response)=>{
                let userid = window.$cookies.get("userid")
                axios
                    .put('api/users/' + userid + '/survey', {
                        surveydone: this.surveydone,
                    })
                    .then((response)=>{
                        this.$store
                        .dispatch('resetSurvey')
                        .then(this.$router.push({ name: "HomePagePR" })) 
                    })
            })
    },
    back(){
        this.$router.push({ name: "Survey3"})
    }
}
}
</script>

<style scoped>
.v-btn{
    margin-bottom: 60px;
}

p{
    margin:0;
    padding:0;
    font-size: 20px;
}
</style>>
