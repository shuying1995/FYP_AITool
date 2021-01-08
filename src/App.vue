<template>
  <v-app>
    <div id="nav">
      <AppBar />
      <router-link
        v-if="authenticated"
        to="/homepage"
        v-on:click.native="logout()"
        replace
      ></router-link>
    </div>
    <router-view @authenticated="setAuthenticated" />
  </v-app>
</template>

<script>
import AppBar from "./components/Appbar";
export default {
  name: "App",

  components: {
    AppBar,
  },

  data() {
    return {
      authenticated: false,
      mockAccount: {
        username: "username",
        password: "password",
      },
    };
  },

  methods: {
    setAuthenticated(status) {
      this.authenticated = status;
    },
    logout() {
      this.authenticated = false;
    },
  },
};
</script>
