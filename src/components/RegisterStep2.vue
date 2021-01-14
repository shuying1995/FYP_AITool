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
                        <v-btn text>
                            <v-icon left color="warning">mdi-arrow-down-bold-circle-outline</v-icon>
                            YOUR OPINIONS
                            </v-btn>
                        <v-btn text disabled>
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
                        <h3>We want to know your thoughts.</h3>
                        <p>To what extend do you currently prioritize fairness in AI/ML?</p>
                        <v-select
                        v-model="q5"
                        :items="q5items" 
                        outlined 
                        dense
                        placeholder="Not at all"
                        :rules="[rules.required]"
                        />

                        <p>How long ago did your team begin prioritizing fairness in AI/ML?</p>
                        <v-select
                        v-model="q6"
                        :items="q6items" 
                        outlined 
                        dense
                        placeholder="We are just beginning to"
                        :rules="[rules.required]"
                        />

                        <p>Is fairness in AI/ML something you would like your team to prioritize more?</p>
                        <v-select
                        v-model="q7"
                        :items="q7items" 
                        outlined 
                        dense
                        placeholder="No"
                        :rules="[rules.required]"
                        />

                        <p>In general, do you think other people on your team would like to prioritize fairness more?</p>
                        <v-select
                        v-model="q8"
                        :items="q8items" 
                        outlined 
                        dense
                        placeholder="Definitely not"
                        :rules="[rules.required]"
                        />

                        <v-flex class="justify-end" row wrap>
                        <v-btn @click="registerstep1" color="#757575" class="white--text">Previous step</v-btn>
                        <v-spacer/>
                        <v-btn @click="registerstep3" color="warning">Next</v-btn>
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
        q5items: ['Not at all','A little','A moderate amount','A lot','A great deal'],
        q5:'',
        q6items: ['We are just beginning to','Within the last 6 months','6 months to a year ago','1 to 2 years ago','2 to 5 years ago','More than 5 years ago'],
        q6:'',
        q7items: ['No','Maybe','Yes'],
        q7:'',
        q8items: ['Definitely not','Probably not','Might or might not','Probably yes','Definitely yes'],
        q8:'',
        rules: {required: value=> !!value || 'Required'},
    }
},
methods: {
    registerstep1(){
        this.$router.push({ name: "RegisterStep1"})
    },
    registerstep3(){
        this.$router.push({ name:"RegisterStep3"})
    }
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
