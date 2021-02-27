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
        state.stakeholder.push(stakeholder)
    },
    updateFairnesscard(state, fairnesscard){
        state.fairnesscard=fairnesscard
    },
    updateFairnesscards(state, fairnesscards){
        state.fairnesscards.push(fairnesscards)
    },
    updateGoright(state, goright){
        state.goright.push(goright)
    },
    updateGowrong(state, gowrong){
        state.gowrong.push(gowrong)
    }
}