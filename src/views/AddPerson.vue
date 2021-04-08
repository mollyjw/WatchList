<template>
<div>
  <h1>Add a Case</h1>
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-container>
      <v-row>
        <v-col cols="12" md="4">
          <v-text-field
            v-model="person.name"
            label="Name of Victim or Wanted Person"
            prepend-icon="mdi-account-box"
            :rules="lengthRules"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="4">
          <v-menu
            ref="menu"
            v-model="menu"
            :close-on-content-click="false"
            :return-value.sync="person.date"
            :nudge-right="40"
            transition="scale-transition"
            offset-y
            min-width="auto"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="person.date"
                label="Date of Crime"
                prepend-icon="mdi-calendar"
                readonly
                v-bind="attrs"
                v-on="on"
                :rules="lengthRules"
                required
              ></v-text-field>
            </template>
            <v-date-picker v-model="person.date" @input="menu2 = false">
              <v-spacer></v-spacer>
              <v-btn text color="primary" @click="menu = false"> Cancel </v-btn>
              <v-btn text color="primary" @click="$refs.menu.save(person.date)">
                OK
              </v-btn>
            </v-date-picker>
          </v-menu>
        </v-col>

        <v-col cols="12" md="4">
          <v-text-field
            v-model="person.location"
            label="Location of Crime"
            prepend-icon="mdi-map-marker-alert"
            :rules="lengthRules"
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="12">
          <v-text-field
            v-model="person.suspects"
            label="Description of Suspect(s)"
            prepend-icon="mdi-glasses"
            :rules="lengthRules"
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="12">
          <v-text-field
            v-model="person.details"
            label="Details of Crime"
            prepend-icon="mdi-text-box"
            :rules="lengthRules"
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="4">
          <v-select
            :items="crimeCategories"
            v-model="person.topic"
            label="Category of Crime"
            prepend-icon="mdi-format-list-bulleted"
            :rules="lengthRules"
            required
          ></v-select>
        </v-col>

        <v-col cols="12" md="4">
          <v-select
            :items="fieldOffices"
            v-model="person.fieldOffice"
            label="Field Office"
            prepend-icon="mdi-format-list-bulleted"
            :rules="lengthRules"
            required
          ></v-select>
        </v-col>

        <v-col cols="12" md="4">
          <v-text-field
            v-model="person.reward"
            label="Possible Reward"
            prepend-icon="mdi-currency-usd"
            :rules="lengthRules"
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="12">
          <v-text-field
            v-model="person.image"
            label="Image URL"
            prepend-icon="mdi-image"
          ></v-text-field>
        </v-col>
      </v-row>

      <v-btn v-on:click="addPerson" :disabled="!valid">
        Add
      </v-btn>
      <v-btn v-on:click="reset"> Clear </v-btn>
    </v-container>
  </v-form>
</div>
</template>

<script lang="ts">
import Person from "@/models/person-model";
import store from "@/store";
import Vue from "vue";
export default Vue.extend({
  name: "AddPerson",
  data() {
    return {
      menu: false,
      valid: true,
      lengthRules: [
        (v) => !!v || "This is required",
        (v) => (v && v.length >= 5) || "This must be at least 5 characters",
      ],
      person: {
        id: Math.floor(Math.random() * (201 - 9) + 10),
        name: "",
        suspects: "",
        topic: "",
        date: new Date().toISOString().substr(0, 10),
        location: "",
        details: "",
        reward: "",
        fieldOffice: "",
        image: ""
      },
    };
  },
  computed: {
    fieldOffices() {
      return store.getters.getFieldOffices;
    },
    crimeCategories() {
      return store.getters.getCrimeCategories;
    },
  },
  methods: {
    addPerson(person: Person) {
      const result = this.validate()
      if (result === true) {
          this.$store.dispatch("addPerson", {
            id: this.person.id,
            name: this.person.name,
            suspects: this.person.suspects,
            topic: this.person.topic,
            date: this.person.date,
            location: this.person.location,
            details: this.person.details,
            reward: this.person.reward,
            fieldOffice: this.person.fieldOffice,
            image: this.person.image,
          });
          console.log("successfully added!")
          this.reset()
      } 
      else {
          console.log("please fix")
      }
      
    },
    validate() {
      return this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
  },
});
</script>