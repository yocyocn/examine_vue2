import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        text: 'hoge'
    },
    getters: {
        text: state => state.text,
    },
    mutations: {
        setText(state, newText) {
            state.text = newText
        },
    },
    actions: {
        setTextAction({ commit }, newText) {
            commit('setText', newText)
        },
    }
})