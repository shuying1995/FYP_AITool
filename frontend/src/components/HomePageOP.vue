<template>
  <v-main>
    <v-container fluid>
      <v-card min-height="650px">
        <v-layout row wrap ml-7 mr-8>
            <v-flex row wrap class="custom ma-3 mt-6">
              <v-btn text class="orange--text">Ongoing Projects</v-btn>
              <v-btn text @click="homepagepr">Project Requests</v-btn>
            </v-flex>
                  
                  <v-col class="text-right mt-3">
                    <v-menu offset-y>
                      <template v-slot:activator="{ on, attrs }">
                        <v-btn v-bind="attrs" v-on="on" rounded text>
                          Sort by 
                          <v-icon>mdi-chevron-down</v-icon>
                        </v-btn>
                      </template>
                      <v-list>
                        <v-list-item v-for="(item, index) in items" :key="index" link>
                          <v-list-item-title>{{ item.title }}</v-list-item-title>
                        </v-list-item>
                      </v-list>
                    </v-menu>
                  </v-col>
              </v-layout>

                    <v-layout row wrap ml-8>
                      <v-flex v-for="item in this.OnCards" :key="item.ID">
                        <v-card 
                         class="ma-2" 
                         max-width="360" 
                         outlined
                         color="orange"
                         >
                          <v-list-item three-line>
                            <v-list-item-content>
                              <v-flex row wrap class="ma-0">
                                <p class="pt-2">{{ item.Name }}</p>
                                <v-spacer />
                                <v-btn icon @click="item.IsPinned = !item.IsPinned">
                                  <v-icon v-if="!item.IsPinned">mdi-pin-off</v-icon>
                                  <v-icon v-if="item.IsPinned">mdi-pin</v-icon>
                                </v-btn>
                                <v-btn icon @click="item.IsFavourite = !item.IsFavourite">
                                  <v-icon v-if="!item.IsFavourite">mdi-heart-outline</v-icon>
                                  <v-icon v-if="item.IsFavourite">mdi-heart</v-icon>
                                </v-btn>
                              </v-flex>
                              <p class="pt-2">Date of creation: {{ item.CreatedDate }}</p>
                              <p class="pt-2">Member: {{ item.Member }}</p>
                              <v-progress-linear
                                background-color="grey lighten-2"
                                color="red"
                                v-model="item.Progress"
                                height="10"
                                />
                            </v-list-item-content>
                          </v-list-item>
                        </v-card>
                      </v-flex>
                    </v-layout>
                </v-card>
    </v-container>
  </v-main>
</template>

<script>

export default {
  name: "HomePageOP",
  title: "Home",
  data() {
    return {
      items: [
        { title: "Date: New to old" },
        { title: "Date: Old to new" },
        { title: "Progress: High to low" },
        { title: "Progress: Low to high" },
        { title: "Favourited" },
      ],
      OnCards: [
        {
          ID: "1",
          Name: "XX",
          CreatedDate: "10 Oct",
          Member: "2",
          Progress: "30",
          IsPinned: false,
          IsFavourite: false,
        },
        {
          ID: "2",
          Name: "XX",
          CreatedDate: "10 Oct",
          Member: "2",
          Progress: "30",
          IsPinned: true,
          IsFavourite: true,
        },
        {
          ID: "2",
          Name: "XX",
          CreatedDate: "10 Oct",
          Member: "2",
          Progress: "50",
          IsPinned: true,
          IsFavourite: true,
        },
        {
          ID: "2",
          Name: "XX",
          CreatedDate: "10 Oct",
          Member: "2",
          Progress: "70",
          IsPinned: true,
          IsFavourite: true,
        },
        {
          ID: "2",
          Name: "XX",
          CreatedDate: "10 Oct",
          Member: "2",
          Progress: "100",
          IsPinned: true,
          IsFavourite: true,
        },
        {
          ID: "2",
          Name: "XX",
          CreatedDate: "10 Oct",
          Member: "2",
          Progress: "30",
          IsPinned: true,
          IsFavourite: true,
        },
        {
          ID: "2",
          Name: "XX",
          CreatedDate: "10 Oct",
          Member: "2",
          Progress: "0",
          IsPinned: true,
          IsFavourite: true,
        },
        {
          ID: "2",
          Name: "XX",
          CreatedDate: "10 Oct",
          Member: "2",
          Progress: "30",
          IsPinned: true,
          IsFavourite: true,
        },
        {
          ID: "2",
          Name: "XX",
          CreatedDate: "10 Oct",
          Member: "2",
          Progress: "30",
          IsPinned: true,
          IsFavourite: true,
        },
      ],
    };
  },
  methods:{
    homepagepr(){
      this.$router.push({ name: "HomePagePR" });
    }
  }
};
</script>

<style scoped>
.v-btn {
  margin-left: 10px;
}
</style>
