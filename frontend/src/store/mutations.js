export default {
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
        state.members = [];
        state.projects = '';
    },
    updateAcceptProjectid(state, acceptprojectid){
        state.acceptprojectid = acceptprojectid
    }
}