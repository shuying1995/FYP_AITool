export default {
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
        commit('resetState');
    },
}