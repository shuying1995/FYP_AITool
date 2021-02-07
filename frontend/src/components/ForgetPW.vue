<template>
    <v-main>
      <v-container fill-height fluid>
          <v-row align="center" justify="center">
          <v-card class="justify-center" min-width="600px" max-width="600px">
              <v-card-title>Find your account</v-card-title>
                <hr class="solid mx-4">  
                <v-card-text class="pb-0">Please enter your email address.</v-card-text>
                    <v-col cols="9">
                    <v-text-field 
                     placeholder="Email Address"
                     outlined
                     dense
                     ></v-text-field>
                    </v-col>
                    <v-flex class="justify-end pa-2" row wrap>
                        <v-btn 
                         color="success"
                         >
                         Submit
                         </v-btn>
                         <v-btn
                          @click="login"
                          >
                         Cancel
                         </v-btn>
                    </v-flex>
          </v-card>
          </v-row>
      </v-container>
    </v-main>  
</template>

<script>
export default {
methods:{
    login(){
        this.$router.push({ name: "LoginPage"})
    }
}
}
</script>

<style>
hr.solid {
  border-top: 2px solid lightgray;
}

.v-btn {
  margin-left: 10px;
}
</style>