import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import AllPersons from '../views/AllPersons.vue'
import AddPerson from '../views/AddPerson.vue'
import OnePerson from '../views/OnePerson.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/allpersons',
    name: 'All Persons',
    component: AllPersons
  },
  {
    path: '/allpersons/add',
    name: 'Add Persons',
    component: AddPerson
  },
  {
    path: '/allpersons/:id',
    name: 'One Person',
    component: OnePerson
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
