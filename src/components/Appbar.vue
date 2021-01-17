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

        <v-col cols="2" class="pb-0">
        <v-select
          :items="items"
          menu-props="auto"
          single-line
        ></v-select>
      </v-col>

      </v-row>
    </v-toolbar>
  </v-main>
</template>

<script>
export default {
    name: "Appbar",
    methods: {
        home() {
            this.$router.push({ name: "HomePageOP" });
        },
        profile() {
            this.$router.push({ name: "Profile"});
        }
    },
    data() {
    return {
      items: ['Member', 'Facilitator'],
  }
}
}
</script>  