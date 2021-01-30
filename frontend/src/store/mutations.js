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
    updateStakeholder(state, stakeholder){
        state.stakeholder=stakeholder
    }
}