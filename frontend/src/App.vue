<template>
  <v-app>
    <div id="nav" v-if="!['LoginPage','Register','ForgetPW','ResetPW','Survey1','Survey2','Survey3','Survey4'].includes($route.name)">
      <AppBar />
    </div>
    <router-view/>
  </v-app>
</template>

<script>
import AppBar from "./components/Appbar";
export default {
  name: "App",
  components: {
    AppBar,
  },
};
</script>
