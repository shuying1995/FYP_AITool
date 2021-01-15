<template>
  <v-app>
    <div id="nav" v-if="!['LoginPage','Register'].includes($route.name)">
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
