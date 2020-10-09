<template>
  <v-main>
    <v-layout row wrap ml-3 mr-1>
      <v-col cols="12" sm="6">
        <v-row>
          <v-text-field
            v-model="searchText"
            placeholder="Search"
            solo
            hide-details
            single-line
          ></v-text-field>
          <v-btn icon>
            <v-icon>mdi-magnify</v-icon>
          </v-btn>
        </v-row>
      </v-col>
      <v-col cols="12" sm="6" class="text-right">
        <v-btn icon>
          <v-icon>mdi-filter-outline</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-sort-descending</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-sort-ascending</v-icon>
        </v-btn>
      </v-col>
    </v-layout>

    <v-layout row wrap ml-1>
      <v-flex v-for="item in this.Cards" :key="item.ID">
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
  </v-main>
</template>

<script>
export default {
  name: "HomePage",
  title: "Home",
  data() {
    return {
      Cards: [
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
};
</script>

<style scoped></style>
