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
              v-model="members"
              :items="memberlist"
              filled
              chips
              multiple
            >
              <template v-slot:selection="data">
                <v-chip
                  v-bind="data.attrs"
                  :input-value="data.selected"
                  close
                  @click="data.select"
                  @click:close="remove(data.item)"
                >
                  {{ data.item}}
                </v-chip>
              </template>
              <template v-slot:item="data">
                <template v-if="typeof data.item !== 'object'">
                  <v-list-item-content v-text="data.item"></v-list-item-content>
                </template>
              </template>
            </v-autocomplete>

                    </v-col>
               </v-row>


               <v-row justify="center">
                   Message (Optional):
               </v-row>

               <v-row justify="center">
                   <v-col cols="4">
                   <v-textarea 
                    placeholder="Placeholder" 
                    outlined 
                    v-model="message"
                    />
                   </v-col>
               </v-row>

               <v-row justify="center">
                   <v-btn 
                    color="warning"
                    @click="create"
                    >
                    <v-icon>mdi-email-outline</v-icon>
                    Send Invitation
                    </v-btn>
               </v-row>
            </v-card>
        </v-container>
    </v-main> 
</template>

<script>
const axios = require('axios');
export default {
    data() {
        return {
        memberlist: ['Martin James', 'Marsgirl', 'Danielle Mardina'],
        members: '',
        message: ''
        }
    },
    methods: {
        home() {
            this.$router.push({ name: "FacilitatorHomePage" });
        },
        remove (item) {
        const index = this.members.indexOf(item)
        if (index >= 0) this.members.splice(index, 1)
        },
        create(){
            axios
            .post('api/create', {
                name: this.$store.getters.projects.projectname,
                appscenario: this.$store.getters.projects.appscenario,
                apptype: this.$store.getters.apptype,
                members: this.members,
                message: this.message,
            })
            .then((response) => {
                console.log(response)
            })
            .catch((error) => {
                console.log(error)
            })
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

</style>