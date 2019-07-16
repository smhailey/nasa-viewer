import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

let api = axios.create({
  baseURL: 'https://api.nasa.gov/planetary/apod?api_key=Yv4Bal2HaprOxVA9ZTW1V0OBembeEXhykz6UWfwl'
})

export default new Vuex.Store({
  state: {

  },
  mutations: {

  },
  actions: {

  }
})
