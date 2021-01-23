<template>
    <v-main>
        <v-container fluid>
            <v-card>
                <v-layout>
                    <v-flex row wrap class="custom ma-3">
                        <a @click="Home">HOME</a>
                        <p>></p>
                        <p>CREATE NEW</p>
                    </v-flex>
                </v-layout>
                
                    <v-row justify="center">
                    <p>Project Name*</p>
                    </v-row>

                    <v-row justify="center">
                        <v-col cols="5">
                            <v-text-field
                            v-model="projectname"
                            class="centered-input" 
                            placeholder="Eg. Design Project 1" 
                            filled 
                            />
                        </v-col>
                    </v-row>

                     <v-row justify="center">
                    <p>Application Scenario*</p>
                    </v-row>

                    <v-row justify="center">
                        <v-col cols="5">
                            <v-textarea 
                            placeholder="What is the application that will be the focus of the discussion? It can be your product or a fictional one. Indicate which component of the product is related to the fairness." 
                            filled 
                            v-model="appscenario"
                            required
                            />
                        </v-col>
                    </v-row>
					

                    <v-flex class="justify-end pa-2" row wrap>
                        <v-btn @click="designproject" color="success">Create</v-btn>
                    </v-flex>
            </v-card>
        </v-container>
    </v-main>
</template>

<script>
export default {
    methods:{
        home(){
        this.$router.push({ name: "FacilitatorHomePage"});
        },
        designproject(){
          let projectname = this.projectname
          let appscenario = this.appscenario
          this.$store
          .dispatch(
              "updateProjects", {projectname, appscenario})
          .then(() => this.$router.push({ name: "DesignProject" }))
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
    color: orange;
    font-weight: bold;
}

p{
    color:black;
    padding-left: 5px;
    padding-right: 5px;
    font-weight: bold;
}

.v-text-field{
      width: 700px;
}

/*
/deep/ .centered-input input {
  text-align: center
}*/

</style>