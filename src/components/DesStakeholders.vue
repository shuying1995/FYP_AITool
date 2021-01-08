<template>
    <v-main>
        <v-container fluid>
            <v-card>
                <v-layout>
                    <v-flex row wrap class="custom ma-3">
                        <a @click="Home">HOME</a>
                        <p>></p>
                        <p>DESIGN PROJECT</p>
                    </v-flex>
                </v-layout>

                <v-row justify="center">
                    <h3>Read through the description of direct and indirect stakeholders</h3>
                </v-row>

                <v-row>
                    <v-col cols="6" md="6">
                        <v-img src="../assets/direct.jpg" contain max-height="350"> </v-img>
                    </v-col>
                    <v-col cols="6" md="6">
                        <v-img src="../assets/indirect.jpg" contain max-height="350" max-width="700"> </v-img>
                    </v-col>
                </v-row>

                <v-flex class="justify-end pa-2" row wrap>
                        <v-btn color="warning" @click="InputStakeholders">Next</v-btn>
                </v-flex>
            </v-card>
        </v-container>
    </v-main>  
</template>

<script>
export default {
methods:{
    Home(){
        this.$router.push({ name: "HomePage"});
        },
    InputStakeholders(){
        this.$router.push({ name: "InputStakeholders"});
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
</style>>

