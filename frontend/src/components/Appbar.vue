<template>
  <v-main>
    <v-toolbar fixed height="70%">
      <v-toolbar-side-icon class="ml-4">
        <v-img src="../assets/logo.png" width="25%"> </v-img>
      </v-toolbar-side-icon>
      <v-row justify="end">
        <v-btn icon>
          <v-icon @click="home" color="orange">mdi-home-outline</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon color="orange">mdi-message-bulleted</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon color="orange">mdi-bell-outline</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon @click="profile" color="orange">mdi-account-outline</v-icon>
        </v-btn>

        <v-col 
         cols="2"
         class="pb-0">
        <v-select
          v-model="select"
          :items="items"
          single-line
        ></v-select>
      </v-col>
      <v-btn @click="logout">Log out</v-btn>

      </v-row>
    </v-toolbar>
  </v-main>
</template>

<script>
export default {
    name: "Appbar",
    data() {
    return {
      select: 'Facilitator',
      items: window.$cookies.get("roles"),
      }
    },
    methods: {
        home() {
            this.$router.push({ name: "HomePageOP" });
        },
        profile() {
            this.$router.push({ name: "Profile"});
        },
        logout(){
          window.$cookies.remove("userid")
          window.$cookies.remove("email")
          window.$cookies.remove("roles")
          window.$cookies.remove("firstname")
          window.$cookies.remove("fullname")
          window.$cookies.remove("authenticated");
          this.$router.push({ name: "LoginPage"})
        }
    },
}
</script>  