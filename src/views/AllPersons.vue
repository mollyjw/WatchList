<template>
  <div class="allpersons" style="margin: 3%">
    <v-expansion-panels>
      <v-expansion-panel v-for="person in persons" v-bind:key="person.id">
        <v-expansion-panel-header>
          <div style="display: block">
            <h1>{{ person.topic }}</h1>
            <router-link
              class="text-decoration-none"
              :to="{ name: 'One Person', params: { id: person.id } }"
            >
              <h3 style="margin-top: 1%">{{ person.name }}</h3>
            </router-link>
          </div>
        </v-expansion-panel-header>
        <v-expansion-panel-content style="text-align: left">
          {{ person.details }}
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
    <v-spacer></v-spacer>
    <router-link style="text-decoration: none" to="allpersons/add">
      <v-btn color="primary">Submit a Tip</v-btn>
    </router-link>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import store from "@/store";

export default Vue.extend({
  name: "AllPersons",
  components: {},
  computed: {
    persons() {
      return store.getters.getPersons;
    },
  },
});
</script>
