<template>
  <v-app>
    <div id="nav">
      <router-link
        v-if="authenticated"
        to="/homepage"
        v-on:click.native="logout()"
        replace
        >Logout</router-link
      >
    </div>
    <router-view @authenticated="setAuthenticated" />
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

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
