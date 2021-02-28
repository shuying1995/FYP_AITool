<template>
    <v-main>
        <v-container fluid>
            <v-card>
                <v-layout>
                    <v-flex row wrap class="custom ma-3">
                        <a @click="home">HOME</a>
                        <p>></p>
                        <p>ACCOUNT</p>
                        <p>></p>
                        <p>MY PROFILE</p>
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
                            >
                            <v-list-item-icon>
                                <v-icon>{{ item.icon }}</v-icon>
                            </v-list-item-icon>

                            <v-list-item-content>
                                <v-list-item-title>{{ item.title }}</v-list-item-title>
                            </v-list-item-content>
                            </v-list-item>
                            </v-list>
                        </v-navigation-drawer>
                    </v-col>

                <v-col md="9">
                    <v-row>
                        <v-col md='1'>
                        <v-avatar color="grey lighten-2">
                        <v-icon>mdi-account-outline</v-icon>
                        </v-avatar>
                        </v-col>
                        <v-col md='4'>
                        <h2>{{firstname}}</h2>
                    </v-col>
                    </v-row>

                    <v-row>
                        Email
                    </v-row>

                    <v-row>
                        <v-col cols='6'>
                        <v-text-field filled rounded dense></v-text-field>
                        </v-col>
                    </v-row>

                    <v-row>
                        Reset Password
                    </v-row>

                    <v-row>
                        <v-col cols='6'>
                        <v-text-field filled rounded dense placeholder="Old password"></v-text-field>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col cols='6'>
                        <v-text-field filled rounded dense placeholder="New password"></v-text-field>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col cols='6'>
                        <v-text-field filled rounded dense placeholder="Confirm new password"></v-text-field>
                        </v-col>
                    </v-row>
                    <v-btn @click="logout">Log out</v-btn>
                </v-col>
                </v-row>
            </v-card>
        </v-container>
    </v-main>
</template>

<script>
export default {
    data() {
    return {
        dialog: false,
        items: [
          { title: 'My Profile', icon: 'mdi-account-outline', action: this.profile},
          { title: 'Completed Project', icon: 'mdi-calendar-check', action: this.completedprojects},
          { title: 'FAQs', icon: 'mdi-help-circle-outline', action: this.faqs}
        ],
        firstname: window.$cookies.get("firstname")
      }
    },
    methods: {
        home() {
            if(window.$cookies.get('role')=='Facilitator')
                this.$router.push({ name: "FacilitatorHomePage" })
            else
                this.$router.push({ name: "HomePagePR" });
        },
        account() {
            this.$router.push({ name: "Account"});
        },
        completedprojects(){
            this.$router.push({ name: "CompletedProjects"});
        },
        logout(){
            window.$cookies.remove("userid")
            window.$cookies.remove("email")
            window.$cookies.remove("roles")
            window.$cookies.remove("firstname")
            window.$cookies.remove("fullname")
            window.$cookies.remove("authenticated");
            window.$cookies.remove("acceptedprojectappscenario");
            window.$cookies.remove("acceptedprojectapptype");
            this.$router.push({ name: "LoginPage"})
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
    color:orange;
    font-weight: bold;
}

p{
    color:black;
    padding-left: 5px;
    padding-right: 5px;
    font-weight: bold;
}

</style>>
