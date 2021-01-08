<template>
    <v-main>
        <v-container fluid>
            <v-card>
                <v-layout>
                    <v-flex row wrap class="custom ma-3">
                        <a @click="Home">HOME</a>
                        <p>></p>
                        <a @click="MyProjects">MY PROJECTS</a>
                        <p>></p>
                        <p>TEAM MANAGEMENT</p>
                    </v-flex>
                </v-layout>

        <v-row no-gutters>
          <v-col md="3">
            <v-navigation-drawer
              floating
              permanent
            >
              <v-list
                two-line
                rounded
              >
                <v-list-item
                  v-for="item in items"
                  :key="item.title"
                  link
                  @click="item.action"
                >
                  <v-list-item-icon>
                    <v-icon color="orange">{{ item.icon }}</v-icon>
                  </v-list-item-icon>

                  <v-list-item-content>
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-navigation-drawer>
          </v-col>
          
          <v-col md="9">
            <v-main>
              <v-layout>
                <v-flex row wrap class="ml-3">
                  <v-col class="pa-0">
                    <p>Project 1</p>
                  </v-col>
                  <v-col class="pa-0">
                    <p class="font-weight-light">Date Created:31/12/2020</p>
                  </v-col>
                  <v-col class="pa-0">
                    <v-dialog v-model="dialog" persistent max-width="400px">
                      <template v-slot:activator="{ on, attrs }">
                        <v-btn color="success" dark v-bind="attrs" v-on="on">
                          <v-icon>mdi-plus</v-icon>
                          Invite Members
                        </v-btn>
                      </template>
                      <v-card>
                        <v-card-title>
                          <span class="headline">Invite Members</span>
                        </v-card-title>
                        <v-card-text>
                          <a>Username/Email*</a>
                          <v-text-field filled required></v-text-field>
                          <a>Message (Optional)</a>
                          <v-text-field filled required></v-text-field>
                          <small>*indicates required field</small>
                        </v-card-text>
                        <v-card-actions>
                          <v-spacer></v-spacer>
                          <v-btn color="red" text @click="dialog = false"
                            >Cancel</v-btn
                          >
                          <v-btn color="green" text @click="dialog = false"
                            >Invite</v-btn
                          >
                        </v-card-actions>
                      </v-card>
                    </v-dialog>
                  </v-col>
                </v-flex>
              </v-layout>

              <v-layout>
                <v-flex row wrap class="ml-4 mt-4">
                  <v-col md="6" class="pa-0 mb-4">
                    <v-card max-width="600" height="100" outlined class="scroll rounded-card text-center">
                      Application scenario
                    </v-card>
                  </v-col>

                </v-flex>
              </v-layout>
              <v-layout>
                    <v-flex row wrap class="ml-4">
                        <v-card max-width="200" height="150" outlined class="mb-4">
                            Hello there ~~~~~~~~~~~~~
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-main>
          </v-col>
        </v-row>
      </v-card>
    </v-container>
  </v-main>
</template>

<script>
export default {
    methods: {
        Home() {
            window.localStorage.setItem('activetab', 0);
            this.$router.push({ name: "HomePage" });
        },
        MyProjects() {
            window.localStorage.setItem('activetab', 2);
            this.$router.push({ name: "HomePage"});
        },
        InviteMembers() {
            this.$router.push({ name: "InviteMembers"});
        },
        Profile() {
            this.$router.push({ name:"Profile"});
        },
        CompletedProjects() {
            this.$router.push({ name: "CompletedProjects"});
        }
    },
    data() {
    return {
        dialog: false,
        items: [
          { title: 'My Profile', icon: 'mdi-account-outline', action: this.Profile},
          { title: 'My Projects', icon: 'mdi-folder-outline', action: this.MyProjects},
          { title: 'Team Management', icon: 'mdi-account-multiple-plus', action: this.TeamManagement},
          { title: 'Completed Projects', icon: 'mdi-calendar-check', action: this.CompletedProjects},
          { title: 'FAQs', icon: 'mdi-help-circle-outline', action: this.FAQs}
        ],
      }
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
    color: orange;
    font-weight: bold;
}

p{
    color:black;
    padding-left: 5px;
    padding-right: 5px;
    font-weight: bold;
}

.scroll {
      overflow-y: auto;
}

.rounded-card{
    border-radius:30px;
}
</style>