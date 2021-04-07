import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'

Vue.use(Vuex)


export default new Vuex.Store({
  state: {
    total: 8,
    persons: [
      {id: 1, name: "Molly", age: 26},
      {id: 2, name: "Pippi", age: 1}
    ],
    items: [],
    field_offices: []
  },
  getters: {
    totalCount: state => {
      return state.total
    },
    getPersonProp: (state) => (id: number) => {
      return state.persons.find(person => person.id === id)
    },
    allItems: state => {
      return state.items
    }
  },
  mutations: {
    increment(state, n) {
      state.total += n
    },
    addPerson(state, person) {
      state.persons.push(person)
    },
    getAllItems(state, items) {
      state.items = items
    }
  },

  actions: {
    increment (context, number) {
      context.commit('increment', number)
    },
    addPerson(context, person) {
      context.commit('addPerson', person)
    },
    // getAllItems({ commit }) {
    //   axios.get("https://api.fbi.gov/wanted/v1/list")
    //   .then(response => {
    //     commit('getAllItems', response.data)
    //   })
    // },
    getAllItems(context) {
      axios.get("https://api.fbi.gov/wanted/v1/list")
      .then(response => {
        context.commit('getAllItems', response.data)
      })
    }
  },
  modules: {
  }
})
