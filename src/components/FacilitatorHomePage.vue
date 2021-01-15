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

                    <v-btn 
                     @click="createproject" 
                     class="ml-4" 
                     color="success"
                     >
                     <v-icon>mdi-plus</v-icon>
                     New Project
                     </v-btn>
                  </v-col>
                </v-layout>

                <v-layout row wrap ml-1>
                  <v-flex v-for="item in this.MyCards" :key="item.ID" row wrap>
                    <v-card 
                     class="ma-2" 
                     max-width="330" 
                     outlined 
                     @contextmenu="show" 
                     color="amber darken-1"
                     >
                      <v-menu
                        v-model="showMenu"
                        :position-x="x"
                        :position-y="y"
                        absolute
                        offset-y
                      >
                        <v-list>
                          <v-list-item
                            v-for="(item, index) in menuitems"
                            :key="index"
                            link
                            @click="item.action"
                          >
                            <v-list-item-title>{{ item.title }}</v-list-item-title>
                          </v-list-item>
                        </v-list>
                      </v-menu>
                      
                      <v-list-item three-line>
                        <v-list-item-content>
                          <v-flex row wrap class="ma-0">
                            <p class="pt-2">Date created: {{ item.CreatedDate }}</p>
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
                          <v-flex row wrap class="justify-center">
                            <h2>{{item.Name}}</h2>
                          </v-flex>
                          <p>Progress</p>
                          <v-progress-linear
                            background-color="grey lighten-2"
                            color="red"
                            v-model="item.Progress"
                            height="15"
                            />
                            <v-divider></v-divider>
                          <p class="pt-2">Member: {{ item.Member }}</p>
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
data(){
    return{
    activetab: 0,
      tabs: [
      { index: 0, name: "My Projects" },
    ],
    showMenu: false,
        x: 0,
        y: 0,
    menuitems: [
        { title: 'Edit', action: this.editteam },
        { title: 'Delete', action: this.deleteteam },
        ],
    items: [
        { title: "Date: New to old" },
        { title: "Date: Old to new" },
        { title: "Progress: High to low" },
        { title: "Progress: Low to high" },
        { title: "Favourited" },
      ],
        MyCards: [
        {
          ID: "1",
          Name: "Project 1",
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
    }
},
 methods: {
        createproject() {
            this.$router.push({ name: "CreateProject" });
        },
        editteam(){
        this.$router.push({ name: "EditProjects"});
        },
        deleteteam(){
        this.$router.push({ name: "DeleteProjects"});
        },
        show (e) {
        e.preventDefault()
        this.showMenu = false
        this.x = e.clientX
        this.y = e.clientY
        this.$nextTick(() => {
          this.showMenu = true
        })
      },
    }
}
</script>

<style scoped>

</style>>
