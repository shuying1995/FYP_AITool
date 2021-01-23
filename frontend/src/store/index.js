import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        apptype:'',
        projects: '',
    },
    getters: {
        apptype(state) {
            return state.apptype
        },
        projects(state) {
            return state.projects
        },
    },
    mutations: {
        updateApptype(state, apptype){
            state.apptype=apptype
        },
        updateProjects(state, projects){
            state.projects=projects
        },
    },
    actions: {
        updateApptype({commit},apptype){
            commit('updateApptype',apptype);
        },
        updateProjects({commit},projects){
            commit('updateProjects',projects);
        },
    }
})