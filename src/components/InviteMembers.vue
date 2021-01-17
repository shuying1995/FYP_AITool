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

                <v-row justify="center" class="mb-4">
                    <h3>Invite your Team Members</h3>
                </v-row>

                <v-row justify="center">
                    <p>Input in their names or username</p>
                </v-row>

               <v-row justify="center">
                    <v-col cols="4">
                        <v-autocomplete
                            v-model="value"
                            :items="items"
                            outlined
                            dense
                            placeholder="Placeholder"
                        ></v-autocomplete>
                    </v-col>
               </v-row>

               <v-row justify="center">
                    <v-col cols="4">
                        <v-autocomplete
                            v-model="value"
                            :items="items"
                            outlined
                            dense
                            placeholder="Placeholder"
                        ></v-autocomplete>
                    </v-col>
               </v-row>

               <v-row justify="center">
                    <v-col cols="4">
                        <v-autocomplete
                            v-model="value"
                            :items="items"
                            outlined
                            dense
                            placeholder="Placeholder"
                        ></v-autocomplete>
                    </v-col>
               </v-row>

               <v-row justify="center" class="mb-4">
                   <v-btn>
                    <v-icon>mdi-plus</v-icon>
                    Add Members
                    </v-btn>
               </v-row>

               <v-row justify="center">
                   Message (Optional):
               </v-row>

               <v-row justify="center">
                   <v-col cols="4">
                   <v-textarea placeholder="Placeholder" outlined>
                   </v-textarea>
                   </v-col>
               </v-row>

               <v-row justify="center">
                   <v-btn color="warning">
                    <v-icon>mdi-email-outline</v-icon>
                    Send Invitation
                    </v-btn>
               </v-row>
            </v-card>
        </v-container>
    </v-main> 
</template>

<script>
export default {
    data() {
        return {
        items: ['Martin James', 'Marsgirl', 'Danielle Mardina'],
        }
    },
    methods: {
        home() {
            this.$router.push({ name: "HomePageOP" });
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