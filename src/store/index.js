import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        tabs:'',
        projects: '',
    },
    getters: {
        tabs(state) {
            return state.tabs
        },
        projects(state) {
            return state.projects
        },
    },
    mutations: {
        updateTabs(state, tabs){
            state.tabs=tabs
        },
        updateProjects(state, projects){
            state.projects=projects
        },
    },
    actions: {
        updateTabs({commit},tabs){
            commit('updateTabs',tabs);
        },
        updateProjects({commit},projects){
            commit('updateProjects',projects);
        },
    }
})