<template>
    <v-main>
        <v-container fluid>
            <v-card>
                <v-layout>
                    <v-flex row wrap class="custom ma-3">
                        <a @click="home">HOME</a>
                        <p>></p>
                        <p>DESIGN PROJECT</p>
                    </v-flex>
                </v-layout>  

                <v-flex row wrap class="pb-6 justify-start">
                    <v-btn color="warning">
                        Application Scenario
                    </v-btn>
                    <v-btn color="warning">
                        Application Type
                    </v-btn>
                </v-flex>

                <v-row>
                    <v-col md="4">
                        H
                    </v-col>
                    <v-col md="4">
                        H
                    </v-col>
                    <v-col md="4">
                        H
                    </v-col>
                </v-row>

                <v-flex row wrap class="justify-center">
                    <v-col md="4">
                        What can go right?
                    </v-col>
                    <v-col md="4">
                        What can go wrong?
                    </v-col>
                </v-flex>

            <v-row justify="center">
                <v-dialog
                v-model="dialog"
                persistent
                max-width="290"
                >
                <template v-slot:activator="{ on, attrs }">
                    <v-btn
                    color="warning"
                    dark
                    v-bind="attrs"
                    v-on="on"
                    >
                    Next
                    </v-btn>
                </template>
                <v-card>
                    <v-card-text class="text-center">Congrats on completing!</v-card-text>
                    <v-card-text class="text-center">We would love to hear your feedback! :)</v-card-text>
                    <v-card-text class="text-center">Help us make it better!</v-card-text>
                    <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                        color="warning"
                        text
                        @click="survey"
                    >
                        Sure~
                    </v-btn>
                    </v-card-actions>
                </v-card>
                </v-dialog>
            </v-row>    
            </v-card>
        </v-container>
    </v-main>
</template>

<script>
export default {
data(){
    return{
        dialog: false
    }
},
methods: {
    home(){
        this.$router.push({ name: "HomePagePR"});
    },
    survey(){
        this.dialog = false
        this.$router.push({ name: 'Survey1'})
    }
}
}
</script>

<style scoped>
.custom a:hover {
  color: navy;
}

.custom a{
    padding-right: 5px;
    padding-left: 5px;
    color:orange;
    font-weight: bold;
}

p{
    color:black;
    padding-left: 5px;
    padding-right: 5px;
    font-weight: bold;
}

.v-btn {
  margin-left: 20px;
}
</style>