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

                <v-row justify="center">
                    <h3>Click on the Application Type and read the descriptions</h3>
                </v-row>

                <v-row justify="center" class="pb-4">
                    <h3>Choose the most suitable one to your application scenario and press next</h3>
                </v-row>
                
                <v-tabs vertical color="purple" icons-and-text v-model="apptype" fixed-tabs>
                    <v-tab>Life-Critical System</v-tab>
                    <v-tab>Industrial and Commercial Uses</v-tab>
                    <v-tab>Office,Home,Entertainment</v-tab>
                    <v-tab>Exploratory,Creative,Collaborative</v-tab>
                    <v-tab>Sociotechnical Systems</v-tab>

                    <v-tab-item>
                        <v-img src="../assets/appcard1.jpg" contain max-height="500" max-width="1200"/> 
                    </v-tab-item>

                    <v-tab-item>
                       <v-img src="../assets/appcard2.jpg" contain max-height="500" max-width="1200"/> 
                    </v-tab-item>
                    
                    <v-tab-item>
                        <v-img src="../assets/appcard3.jpg" contain max-height="500" max-width="1200"/> 
                    </v-tab-item>

                    <v-tab-item>
                        <v-img src="../assets/appcard4.jpg" contain max-height="500" max-width="1200"/> 
                    </v-tab-item>

                    <v-tab-item>
                        <v-img src="../assets/appcard5.jpg" contain max-height="500" max-width="1200"/> 
                    </v-tab-item>
                </v-tabs>

            <v-flex class="justify-end pa-2" row wrap>
                        <v-btn color="warning" @click="invitemembers">Next</v-btn>
                    </v-flex>
            </v-card>
        </v-container>
    </v-main>
</template>

<script>
export default {
data(){
    return{
        apptype: this.$store.getters.apptype
    }
},
methods:{
    home(){
        this.$store
        .dispatch('resetState')
        .then(this.$router.push({ name: "FacilitatorHomePage"}))
        },
    invitemembers() {
        this.$store
        .dispatch("updateApptype", this.apptype)
        .then(() => this.$router.push({ name: 'InviteMembers'}))
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

.v-tabs{
    height: 500px;
}
</style>