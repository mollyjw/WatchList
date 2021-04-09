import Vue from 'vue';
import Vuex from 'vuex';
import { PersonList } from './persons'
import { FieldOffices } from './field-office'
import { CrimeCategories } from './categories'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    total: 8,
    persons: PersonList,
    field_offices: FieldOffices,
    crimeCategories: CrimeCategories
  },
  getters: {
    totalCount: state => {
      return state.total
    },
    getFieldOffices: state => {
      return state.field_offices
    },
    getCrimeCategories: state => {
      return state.crimeCategories
    },
    getPersons: (state) => {
      return state.persons
    },
    getPersonById: (state) => (id: number) => {
      const result = state.persons.filter(obj => {
        return obj.id ===id
      })[0]
      return result
    }
    
  },
  mutations: {
    increment(state, n) {
      state.total += n
    },
    addPerson(state, person) {
      state.persons.push(person)
    },
    deletePerson(state, id) {
      state.persons.splice(state.persons.findIndex(person => person.id === id), 1)
    },
    updatePerson(state, payload) {
      const { id, name, suspects, topic, date, location, details, reward, fieldOffice, image} = payload
      const person = state.persons.find(p => p.id === id)
      person.name = name,
      person.suspects = suspects,
      person.topic = topic,
      person.date = date,
      person.location = location,
      person.details = details,
      person.reward = reward,
      person.fieldOffice = fieldOffice,
      person.image = image
    }
  },

  actions: {
    increment (context, number) {
      context.commit('increment', number)
    },
    addPerson(context, person) {
      context.commit('addPerson', person)
    },
    deletePerson(context, id) {
      context.commit('deletePerson', id)
    }
  },
})
