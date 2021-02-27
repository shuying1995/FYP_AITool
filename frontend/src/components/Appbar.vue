<template>
  <v-main>
    <v-toolbar fixed height="70%">
        <v-avatar class="ml-6">
        <v-img src="../assets/logo.png"> </v-img>
        </v-avatar>
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
          v-model="item[0]"
          :items="item"
          single-line
          @change="changerole"
        ></v-select>
      </v-col>

      </v-row>
    </v-toolbar>
  </v-main>
</template>

<script>
export default {
name: "Appbar",
data() {
  return {
    items: window.$cookies.get("roles")
    }
  },
computed:{
    item(){
      return this.items.split(',')
    }
},
methods: {
  home() {
    if(this.item[0] == 'Facilitator')
      this.$router.push({ name: "FacilitatorHomePage"})
    else
      this.$router.push({ name: "HomePagePR" });
    },
  changerole(role){
     if(role == 'Facilitator')
      this.$router.push({ name: "FacilitatorHomePage"})
    else
      this.$router.push({ name: "HomePagePR" });
    },
  profile() {
    window.$cookies.set("role", this.item[0], Infinity)
    this.$router.push({ name: "Profile"});
    },
    },
}
</script>  