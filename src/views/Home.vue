<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h1>{{ total }}</h1>
    <button v-on:click="increment(3)">I be adding</button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import store from "@/store";

export default Vue.extend({
  name: "Home",
  components: {},
  
  computed: {
    total() {
      return store.getters.totalCount;
    }
  },

  methods: {
    increment(num: number) {
      this.$store.dispatch("increment", num);
    }    
  }

});
</script>
