import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    total: 8,
    persons: [
      {id: 1, name: "Molly", age: 26},
      {id: 2, name: "Pippi", age: 1}
    ],
    field_offices: []
  },
  getters: {
    totalCount: state => {
      return state.total
    },
    getPersonProp: (state) => (id: number) => {
      return state.persons.find(person => person.id === id)
    }
  },
  mutations: {
    increment(state, n) {
      state.total += n
    },
    addPerson(state, person) {
      state.persons.push(person)
    }
  },

  actions: {
    increment (context, number) {
      context.commit('increment', number)
    },
    addPerson(context, person) {
      context.commit('addPerson', person)
    }
  },
  modules: {
  }
})
