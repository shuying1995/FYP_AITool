import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        apptype:'',
        projects: '',
        members: ''
    },
    getters: {
        apptype(state) {
            return state.apptype
        },
        projects(state) {
            return state.projects
        },
        members(state) {
            return state.members
        },
    },
    mutations: {
        updateApptype(state, apptype){
            state.apptype=apptype
        },
        updateProjects(state, projects){
            state.projects=projects
        },
        updateMembers(state, members){
            state.members=members
        },
        resetState(state){
            state.apptype = '';
            state.members = '';
            state.projects = '';
        }
    },
    actions: {
        updateApptype({commit},apptype){
            commit('updateApptype',apptype);
        },
        updateProjects({commit},projects){
            commit('updateProjects',projects);
        },
        updateMembers({commit},members){
            commit('updateMembers',members);
        },
        resetState({commit}){
            commit('resetState')
        }
    }
})