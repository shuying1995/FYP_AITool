<template>
    <v-main>
        <v-container fluid>
            <v-card min-height="650px">
                <v-layout row wrap ml-7 mr-8>
                  <v-flex row wrap class="custom ma-3 mt-6">
                    <v-btn text class="orange--text">My Projects</v-btn>
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

                    <v-btn 
                     @click="create" 
                     class="ml-4" 
                     color="success"
                     >
                     <v-icon>mdi-plus</v-icon>
                     New Project
                     </v-btn>
                  </v-col>
                </v-layout>

                <v-layout row wrap ml-8>
                  <v-flex v-for="item in this.MyCards" :key="item.ID" row wrap>
                    <v-card 
                     class="ma-2" 
                     max-width="350" 
                     outlined 
                     @contextmenu="show" 
                     color="orange"
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
                          <div class="pb-3">
                          <v-progress-linear
                            background-color="grey lighten-2"
                            color="red"
                            v-model="item.Progress"
                            height="10"
                            />
                          </div>
                            <hr class="solid">
                          <v-flex row wrap class="pt-2">
                          <p class="pt-2 ml-4 underline">Member: {{ item.Member }}</p>
                          <v-spacer/>
                          <p class="pt-2 round orange--text">{{ item.Dayleft }} Days Left</p>
                          </v-flex>
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
data(){
    return{
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
          Dayleft:"2",
          IsPinned: false,
          IsFavourite: false,
        },
        {
          ID: "2",
          Name: "Project 2",
          CreatedDate: "10 Oct",
          Member: "2",
          Progress: "30",
          Dayleft:"3",
          IsPinned: true,
          IsFavourite: true,
        },
        {
          ID: "2",
          Name: "Project 3",
          CreatedDate: "10 Oct",
          Member: "2",
          Progress: "50",
          Dayleft:"6",
          IsPinned: true,
          IsFavourite: true,
        },
        {
          ID: "2",
          Name: "Project 4",
          CreatedDate: "10 Oct",
          Member: "2",
          Progress: "70",
          Dayleft:"8",
          IsPinned: true,
          IsFavourite: true,
        },
      ],
    }
},
 methods: {
        create() {
            this.$router.push({ name: "Create" });
        },
        editteam(){
        this.$router.push({ name: "ProjectSettings"});
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
p.round{
  border-radius: 8px;
  background-color: white;
  width: 90px;
  height: 30px;
  padding-left: 5px;
}

p.underline{
  text-decoration: underline;
}

hr.solid {
  border-top: 3px solid white;
}

.v-btn {
  margin-left: 10px;
}
</style>>
