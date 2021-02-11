<template>
    <v-main style="height: 100% !important">
        <v-container pa-0 fluid fill-height>
        <v-layout>
            <v-row>
            <v-flex xs12 sm6 md9 class="px-7">
                <v-layout justify-center fill-height px-5>
                    <v-flex class="pt-8">
                        <h3>Let us know your current experience!</h3>

                        <p>Is fairness in AI/ML something you would like your team to prioritize more?</p>
                        <v-select
                        v-model="q5"
                        :items="q5items" 
                        outlined 
                        dense
                        placeholder="No"
                        />

                        <p>To what extend will you want to prioritize fairness in AI/ML in the future?</p>
                        <v-select
                        v-model="q6"
                        :items="q6items" 
                        outlined 
                        dense
                        placeholder="Not at all"
                        />

                        <p>List the most positive aspect(s) of your experience:</p>
                        <v-textarea
                        v-model="q7"
                        outlined
                        dense
                        placeholder="placeholder"
                        />

                        <p>List the most negative aspect(s) of your experience:</p>
                        <v-textarea
                        v-model="q8"
                        outlined
                        dense
                        placeholder="placeholder"
                        />

                        <v-flex class="justify-end pl-3" row wrap>
                        <v-btn 
                         @click="survey1" 
                         color="#757575" 
                         class="white--text"
                         >
                         Previous step
                         </v-btn>
                        <v-spacer/>
                        <v-btn @click="registerstep3" color="warning">Done</v-btn>
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
        q5items: ['No','Maybe','Yes'],
        q5:'',
        q6items: ['Not at all','A little','A moderate amount','A lot','A great deal'],
        q6:'',
        q7:'',
        q8:'',
    }
},
methods: {
    survey1(){
        this.$router.push({ name: "Survey1"})
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
