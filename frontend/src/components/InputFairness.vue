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

                <v-flex row wrap class="justify-start pb-6">
                    <v-btn color="warning">
                        Application Scenario
                    </v-btn>
                    <v-btn color="warning">
                        Application Type
                    </v-btn>
                    <v-btn color="warning"> 
                        Stakeholder Role
                    </v-btn>
                </v-flex>

                <v-row>
                    <v-col md="6">
                        <v-img :src="selectedImage.front" contain max-height="350px"></v-img>
                    </v-col>
                    <v-col md="5">
                        <h3>Using the perspective of your Stakeholder role,</h3>
                        <h3 class="pb-2">If this definition is used, think deeply about</h3>
                        <h3>What can go right?</h3>
                        <v-textarea placeholder="Placeholder" outlined height="70px"></v-textarea>
                        <h3>What can go wrong?</h3>
                        <v-textarea placeholder="Placeholder" outlined height="70px"></v-textarea>
                        <v-btn color="warning" @click="ratingfairness">Next</v-btn>
                    </v-col>
                </v-row>
            </v-card>
        </v-container>
    </v-main>
</template>

<script>
export default {
name: 'InputFairness',
props: {
    selectedImage: {
        type: String
    }
},
methods:{
    home(){
        this.$router.push({ name: "HomePageOP"});
        },
    ratingfairness(){
        this.$router.push({ name: "RatingFairness"});
        },
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