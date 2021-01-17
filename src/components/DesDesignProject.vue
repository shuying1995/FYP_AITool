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

                <v-flex row wrap>
                    <v-col md="6">
                        <h3>This is your application scenario.</h3>
                    </v-col>
                    <v-col md="6">
                        <h3>This is your application type that can guide you later on.</h3>
                    </v-col>
                </v-flex>

                <v-flex class="justify-end pa-2" row wrap>
                    <v-btn color="warning" @click="desstakeholders">Next</v-btn>
                </v-flex>
            </v-card>
        </v-container>
    </v-main>
</template>

<script>
export default {
methods:{
    home(){
        this.$router.push({ name: "HomePageOP"});
        },
    desstakeholders() {
        this.$router.push({ name: "DesStakeholders"});  
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
</style>