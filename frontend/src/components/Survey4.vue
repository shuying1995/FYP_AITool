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
                        v-model="q5"
                        :items="q5items" 
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
                        v-model="q6"
                        :items="q6items" 
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
                        v-model="q7"
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
                        v-model="q8"
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
    submit(){
        this.$router.push({ name: "HomePagePR"})
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
