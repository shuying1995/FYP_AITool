<template>
  <v-main>
    <v-container fluid>
      <v-card>
        <v-row class="mr-4">
          <v-col class="ml-8">
            <v-tabs v-model="activetab" color="orange">
              <v-tab v-for="tab of tabs" :key="tab.index">
              {{ tab.name }}
              </v-tab>
              
              <v-tab-item>
                <v-card flat>
                  <v-card-text>
                    <v-layout row wrap ml-3 mr-1>
                      <v-col class="text-right">
                        <v-menu offset-y>
                          <template v-slot:activator="{ on, attrs }">
                            <v-btn v-bind="attrs" v-on="on" rounded>
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

                    <v-layout row wrap ml-1>
                      <v-flex v-for="item in this.OnCards" :key="item.ID">
                        <v-card class="ma-2" max-width="370" outlined>
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
                                v-model="item.Progress"
                                color="amber"
                                height="25"
                                ><template>
                                  <strong>{{ item.Progress }}%</strong>
                                </template>
                              </v-progress-linear>
                            </v-list-item-content>
                          </v-list-item>
                        </v-card>
                      </v-flex>
                    </v-layout>
                  </v-card-text>
                </v-card>
              </v-tab-item>

              <v-tab-item>
                <v-layout row wrap ml-3 mr-1>
                  <v-col class="text-right">
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

                <v-layout row wrap ml-1>
                  <v-flex v-for="item in this.PRCards" :key="item.ID">
                    <v-card class="ma-2" max-width="370" outlined>
                      <v-list-item three-line>
                        <v-list-item-content>
                          <p class="pt-2">{{ item.Name }}</p>
                          <v-card class="my-3" outlined height="120px">
                            <p class="pt-2">{{ item.Message }}</p>
                          </v-card>
                          <v-flex row wrap class="justify-center">
                            <v-btn color="success" @click="desdesignproject">
                              Accept
                              <v-icon>mdi-check-circle-outline</v-icon>
                            </v-btn>
                            <v-btn color="error">
                              Reject
                              <v-icon>mdi-close-circle-outline</v-icon>
                            </v-btn>
                          </v-flex>
                        </v-list-item-content>
                      </v-list-item>
                    </v-card>
                  </v-flex>
                </v-layout>
              </v-tab-item>
            </v-tabs>
          </v-col>
        </v-row>
      </v-card>
    </v-container>
  </v-main>
</template>

<script>

export default {
  name: "HomePage",
  title: "Home",
  data() {
    return {
      activetab: 0,
      tabs: [
      { index: 0, name: "Ongoing Projects" },
      { index: 1, name: "Project Requests" },
    ],
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
      PRCards: [
        {
          ID: "1",
          Name: "XX",
          Message: "Project Description",
        },
        {
          ID: "2",
          Name: "XX",
          Message: "Project Description",
        },
        {
          ID: "3",
          Name: "YY",
          Message: "Project Description",
        },
      ],
    };
  },
  created: function(){
  this.activetab=JSON.parse(window.localStorage.getItem('activetab')); 
  },
  methods: {
        desdesignproject(){
        this.$router.push({ name:"DesDesignProject"});
        },
    }
};
</script>

<style scoped>
.v-btn {
  margin-left: 10px;
}

.custom .v-btn {
  width: 108px;
  min-width: 108px;
}
</style>
