import Vue from 'vue'
import Vuex from 'vuex'
import  {tasksModule}  from './tasksModule.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    task: tasksModule,
  }
})
