<template>
  <v-main>
    <v-toolbar height="70%">
      <v-toolbar-side-icon>
        <v-img src="../assets/logo.png" width="25%"> </v-img>
      </v-toolbar-side-icon>
      <v-row justify="end">
        <v-btn icon>
          <v-icon>mdi-account-outline</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-home-outline</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-heart</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-bell-outline</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-help-circle-outline</v-icon>
        </v-btn>
      </v-row>
    </v-toolbar>

    <v-container fluid>
      <v-card>
        <v-row>
          <v-col class="ml-8">
            <v-tabs v-model="tab">
              <v-tab v-for="item in items" :key="item.tab">
                {{ item.tab }}
              </v-tab>
            </v-tabs>
          </v-col>
          <v-col class="text-right">
            <v-btn>
              Create New
            </v-btn>
          </v-col>
        </v-row>
        <v-tabs-items v-model="tab">
          <v-tab-item v-for="item in items" :key="item.tab">
            <v-card flat>
              <v-card-text>
                <component v-bind:is="item.content"></component>
              </v-card-text>
            </v-card>
          </v-tab-item>
        </v-tabs-items>
      </v-card>
    </v-container>
  </v-main>
</template>

<script>
import HomePageOngoingP from "../components/HomePageOngoingP";
import HomePagePReq from "../components/HomePagePReq";
import HomePageMyP from "../components/HomePageMyP";

export default {
  name: "HomePage",
  title: "Home",
  components: {
    HomePageOngoingP,
    HomePagePReq,
    HomePageMyP,
  },

  data() {
    return {
      tab: null,
      items: [
        { tab: "Ongoing Projects", content: "HomePageOngoingP" },
        { tab: "Project Requests", content: "HomePagePReq" },
        { tab: "My Projects", content: "HomePageMyP" },
      ],
    };
  },
};
</script>

<style scoped></style>
