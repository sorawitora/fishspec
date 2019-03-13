import axios from 'axios'
import _ from 'lodash'
import { make } from 'vuex-pathify'
const state = {
    testText:'Poi',
}
const getters = {

}

const mutations = make.mutations(state)

const actions = {

    async hello(){
        
    }

}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
    }