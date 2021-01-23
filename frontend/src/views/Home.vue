<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <LoginPage msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import LoginPage from "@/components/LoginPage.vue";

export default {
  name: "Home",
  components: {
    LoginPage,
  },
};
</script>
