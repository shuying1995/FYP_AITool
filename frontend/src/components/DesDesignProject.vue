<template>
    <v-main>
        <v-container fluid>
            <v-card min-height="650px">
                <v-layout>
                    <v-flex row wrap class="custom ma-3">
                        <a @click="home">HOME</a>
                        <p>></p>
                        <p>DESIGN PROJECT</p>
                    </v-flex>
                </v-layout>

                <v-flex row wrap>
                    <v-flex xs12 sm6 md6 class="pl-7">
                        <div>
                        <h3>This is your application scenario.</h3>
                        <div class="pl-15 pt-4">
                        <v-card 
                         min-height="400px" 
                         max-width="600px"
                         color="grey"
                         >
                            <v-card-text class="text-center white--text headline">
                                {{appscenario}}
                            </v-card-text>
                          </v-card>
                        </div>
                        </div>
                    </v-flex>
                    
                    <v-flex xs12 sm6 md6 class="pr-7">
                        <div>
                        <h3>This is your application type that can guide you later on.</h3>
                        <div class="pt-4">
                        </div>
                            <v-img :src="this.apptype" contain max-height="400" max-width="1200"/> 
                        </div>
                    </v-flex>
                </v-flex>

                <v-flex class="justify-end pa-2" row wrap>
                    <v-btn color="warning" @click="desstakeholders">Next</v-btn>
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
    appscenario: '',
    apptype: ''
    }
},
/*computed: {
    image(){
        return require('../assets/' + this.apptype + '.jpg')
    }
},*/
created(){
    const projectid = window.$cookies.get("acceptedprojectid")
        axios
        .get('api/create/' + projectid)
        .then((response) => {
            this.appscenario = response.data.appscenario
            let apptype = response.data.apptype
            if(apptype == '0')
                apptype = "appcard1"
            else if(apptype == '1')
                apptype = "appcard2"
            else if(apptype == '2')
                apptype = "appcard3"
            else if(apptype == '3')
                apptype = "appcard4"
            else
                apptype = "appcard5" 
            this.apptype = apptype
            this.apptype = require('../assets/' + this.apptype + '.jpg')
        })
},
methods:{
    home(){
        this.$router.push({ name: "HomePagePR"});
        },
    desstakeholders() {
        window.$cookies.set("acceptedprojectappscenario", this.appscenario, Infinity)
        window.$cookies.set("acceptedprojectapptype", this.apptype, Infinity)
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

div {
    text-align: center;
}
</style>