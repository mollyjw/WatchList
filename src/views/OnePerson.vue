<template>
  <div color="primary">
    <v-card color="secondary">
      
      <v-row dense>
        <v-col cols="5">
          <v-card>
            <v-img v-bind:src="person.image"></v-img>
          </v-card>
        </v-col>
        <v-col cols="7">
            <div style="padding: 2%" color="secondary">
                <div class="title" style="text-align: center">
                    <h1 style="text-align: center"> {{person.topic}} </h1>
                    <h2 style="margin: 2%"> {{person.name}}</h2>
                </div>
                <div>
                    <h1 color="secondary">Basic Facts</h1>
                    <h4>Date: {{person.date}}</h4>
                    <h4>Location: {{person.location}}</h4>
                </div>
                <div>
                    <h1>Details</h1>
                    <h4 style="text-align: left">{{person.details}}</h4>
                </div>
                <div>
                    <h1>Suspect(s) Description</h1>
                    <h4>{{person.suspects}}</h4>
                </div>
                <div>
                    <h1>Reward</h1>
                    <h4 style="text-align: left">{{person.reward}}</h4>
                    <h4 style="margin-top: 3%"> Please contact the {{person.fieldOffice}} field office if you have any information about this case.</h4>

                </div>
                <v-btn v-on:click="deletePerson(person.id)">Delete</v-btn>
            </div>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script lang="ts">
import router from "@/router";
import Vue from "vue";
import store from "../store/index";

export default Vue.extend({
  name: "OnePerson",
  data: function () {
    return {
      person: {},
    };
  },
  mounted() {
    var id: number = this.$route.params.id;
    console.log(id);
    this.getPersonInfo(id);
  },

  methods: {
    getPersonInfo(id: number) {
      this.person = store.getters.getPersonById(id);
      console.log(this.person);
    },
    deletePerson(id: number) {
        store.dispatch('deletePerson', id);
        router.go(-1)
    }
  },
});
</script>