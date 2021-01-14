<template>
  <v-app>
    <div id="nav" v-if="!['LoginPage','RegisterStep1','RegisterStep2','RegisterStep3','RegisterStep4','RegisterStep5'].includes($route.name)">
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
