<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h1>{{ total }}</h1>
    <button v-on:click="increment(3)">I be adding</button>
   
    <div v-for="person in $store.state.persons" v-bind:key="person.id">
      <v-card>
        <v-card-title> {{ person.name }}</v-card-title>
        <v-card-subtitle> {{ person.age }}</v-card-subtitle>
      </v-card>
    </div>

    <v-form>
      <v-text-field v-model="person.id" label="ID"> </v-text-field>
      <v-text-field v-model="person.name" label="name"> </v-text-field>
      <v-text-field v-model="person.age" label="age"> </v-text-field>
      <v-btn v-on:click="addPerson(person)">Add Person</v-btn>
    </v-form>

    <p>{{items}}</p>
    <div v-for='item in $store.state.items' :key='item.uid'>
      <h3>Name: {{item.title}}</h3>
      <h3>Details: {{item.details}}</h3>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import store from "@/store";

export default Vue.extend({
  name: "Home",
  components: {},
  data: function () {
    return {
      person: {
        id: null,
        name: "",
        age: null,
      },
    };
  },
  computed: {
    total() {
      return store.getters.totalCount;
    },
    items(){
      return store.getters.allItems;
    }
  },

  methods: {
    increment(num: number) {
      this.$store.dispatch("increment", num);
    },
    getPerson(id: number) {
      return store.getters.getPersonProp(id);
    },
  
    addPerson(person: any) {
      this.$store.dispatch("addPerson", {id: person.id, name: person.name, age: person.age}) ;
    },

    getAllItems() {
      this.$store.dispatch("getAllItems");
    }
    
  },

  created() {
    this.getAllItems
  }
});
</script>
