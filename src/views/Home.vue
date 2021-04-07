<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h1>{{ total }}</h1>
    <button v-on:click="increment(3)">I be adding</button>
    <h1>{{ getPerson(2).name }}</h1>

    <v-form>
      <v-text-field v-model="person.id" label="ID"> </v-text-field>
      <v-text-field v-model="person.name" label="name"> </v-text-field>
      <v-text-field v-model="person.age" label="age"> </v-text-field>
    </v-form>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import store from "@/store";

export default Vue.extend({
  name: "Home",
  components: {},
  data: function() {
    return {
      person: {
        id: null,
        name: '',
        age: null
      }
    }
  },
  computed: {
    total() {
      return store.getters.totalCount;
    }
  },

  methods: {
    increment(num: number) {
      this.$store.dispatch("increment", num);
    },
    getPerson(id: number) {
      return store.getters.getPersonProp(id);
    },
  },
});
</script>
