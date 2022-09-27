import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        label: 'foo',
        text: 'bar'
    },
    getters: {
        label: state => state.label,
        text: state => state.text,
    },
    mutations: {
        setLabel(state, newLabel) {
            state.label = newLabel
        },
        setText(state, newText) {
            state.text = newText
        },
    },
    actions: {
        setLabelAsync({ commit }, newLabel) {
            commit('setLabel', newLabel)
        },
        setTextAsync({ commit }, newText) {
            commit('setText', newText)
        },
    }
})