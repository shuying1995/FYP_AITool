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
                    <p>Input in their names or email</p>
                </v-row>

               <v-row justify="center">
                    <v-col cols="4">
                        
            <v-autocomplete
            v-model="members"
            :items="memberlist"
            filled
            chips
            label="Type or select members"
            item-text="firstname"
            item-value="_id"
            multiple
          >
          <template v-slot:selection="data">
               <v-chip
                  v-bind="data.attrs"
                  :input-value="data.selected"
                  close
                  @click="data.select"
                  @click:close="remove(data.item._id)"
                >
                  {{ data.item.firstname }}
                </v-chip>
              </template>

                <template v-slot:item="data">
                    {{ data.item.firstname }} {{ data.item.lastname }} ({{ data.item.email}})
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

            <v-snackbar
            v-model="failsnackbar"
            :color="color"
            :top="true"
            >
            {{ errorMessages }}

            <template v-slot:action="{ attrs }">
                <v-btn
                dark
                text
                v-bind="attrs"
                @click="failback"
                >
                Head back to change
                </v-btn>
            </template>
            </v-snackbar>

            <v-dialog
            v-model="successdialog"
            width="500"
            >
          <v-card>
              <v-card-title class="headline success justify-center">
              Project has been created!
              </v-card-title>

                <v-card-actions>
                <v-btn
                    color="primary"
                    text
                    @click="successback"
                >
                    Create another project!
                </v-btn>
                <v-spacer></v-spacer>
                <v-btn
                    color="primary"
                    text
                    @click="home"
                >
                    Back to home
                </v-btn>
                </v-card-actions>
          </v-card>
          </v-dialog>
        </v-container>
    </v-main> 
</template>

<script>
const axios = require('axios');
export default {
    data() {
        return {
        memberlist: [],
        members: this.$store.getters.members.members,
        message: this.$store.getters.members.message,
        errorMessages: "Project name has been taken",
        failsnackbar: false,
        color: 'general',
        successMessages: "Project created successfully",
        successdialog:false,
        }
    },
    created(){
        axios.get('api/users')
        .then((response) => {
            this.memberlist = response.data
        })
    },
    methods: {
        home() {
            this.$store
            .dispatch('resetState')
            .then(this.$router.push({ name: "FacilitatorHomePage" }));
        },
        remove (item) {
        const index = this.members.indexOf(item)
        this.members.splice(index, 1)
        this.members = [...this.members]
        },
        failback(){
            this.$router.push({ name: "Create"})
        },
        successback(){
            this.$store
            .dispatch('resetState')
            .then(this.$router.push({ name: "Create"}))
        },
        //create project
        create(){
            let members = this.members
            let message = this.message
            this.$store
            .dispatch(
              "updateMembers", {members, message})
            .then( axios
            .post('api/create', {
                name: this.$store.getters.projects.projectname,
                appscenario: this.$store.getters.projects.appscenario,
                apptype: this.$store.getters.apptype,
                invitedmembers: members,
                message: message,
                facilitator: window.$cookies.get("fullname")
            })
            .then((response) => {
                const projectid = response.data
                this.successdialog=true;
                for (var i =0; i<members.length; i++){
                    axios
                    .put('api/users/' + members[i], {
                        invitedprojectid: projectid
                    })
                    .then((response) => {
                    })
                }
            })
            .catch((error) => {
                this.failsnackbar=true;
                this.color="error";
            }))
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