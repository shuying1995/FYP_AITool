<template>
    <v-main>
        <v-container fluid>
            <v-card v-if="!showComponent">
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

                <v-row justify="center">
                    <h3>Read and understand this fairness principle. Click for the flip side.</h3>
                </v-row>

                <v-row justify="center" class="pb-4">
                    <h3>Press next when done.</h3>
                </v-row>

                <v-flex row wrap class="justify-center">
                     <v-img :src="selectedImage.front" contain max-height="300" max-width="450" @click="Flip" v-if="showFront"></v-img>
                     <v-img :src="selectedImage.back" contain max-height="300" max-width="450" @click="Flip" v-if="!showFront"></v-img>
                </v-flex>

                <v-flex class="justify-end pa-2" row wrap>
                        <v-btn color="warning" @click="inputfairness">Next</v-btn>
                </v-flex>
            </v-card>

            <InputFairness v-if="showComponent" v-bind:selectedImage="selectedImage" />
        </v-container>
    </v-main>
</template>

<script>
import InputFairness from '@/components/InputFairness.vue';
export default {
components: {
    InputFairness,
},
data() {
    return {
    showFront:true,
    showComponent:false,
    images: [
      {index: 1, front: require('../assets/fcard1.jpg'), back: require('../assets/fcardb1.jpg')},
      {index: 2, front: require('../assets/fcard2.jpg'), back: require('../assets/fcardb2.jpg')},
      {index: 3, front: require('../assets/fcard3.jpg'), back: require('../assets/fcardb3.jpg')},
      {index: 4, front: require('../assets/fcard4.jpg'), back: require('../assets/fcardb4.jpg')},
      {index: 5, front: require('../assets/fcard5.jpg'), back: require('../assets/fcardb5.jpg')},
      {index: 6, front: require('../assets/fcard6.jpg'), back: require('../assets/fcardb6.jpg')},
      {index: 7, front: require('../assets/fcard7.jpg'), back: require('../assets/fcardb7.jpg')},
      {index: 8, front: require('../assets/fcard8.jpg'), back: require('../assets/fcardb8.jpg')},
      {index: 9, front: require('../assets/fcard9.jpg'), back: require('../assets/fcardb9.jpg')},
      {index: 10, front: require('../assets/fcard10.jpg'), back: require('../assets/fcardb10.jpg')},
    ],
    selectedImage: null
  }
},
  methods: {
    randomItem (items) {
      return items[Math.floor(Math.random()*items.length)];
    },
    home(){
        this.$router.push({ name: "HomePageOP"});
    },
    inputfairness(){
        this.showComponent=!this.showComponent;
    },
    flip(){
        this.showFront=!this.showFront;
    }
  },
  created() {
    this.selectedImage = this.randomItem(this.images)
  },
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
</style>>
