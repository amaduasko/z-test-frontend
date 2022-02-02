import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import getters from './getters'
import news from './modules/news'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        app,
        news
    },
    state: {

    },
    mutations: {

    },
    actions: {

    },
    getters
})
