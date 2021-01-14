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
                        :items="q9items" 
                        outlined 
                        dense
                        placeholder="No"
                        :rules="[rules.required]"
                        />

                        <p>How often does your team typically consider fairness at each of the following</p>
                        <p>steps of the data pipeline?</p>
                        <p>(If your team has no control over a given step, please select 'N/A')</p>
                        

                        <v-flex class="justify-end" row wrap>
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
        q9items: ['No','Yes','N/A'],
        q9:'',
        rules: {required: value=> !!value || 'Required'},
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
