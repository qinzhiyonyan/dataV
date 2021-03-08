export default {
  state: {
    workTableData: []
  },
  actions: {
    set_workTableData({ commit }, status) {
      commit("SET_WORKTABLEDATA", status);
    }
  },
  mutations: {
    SET_WORKTABLEDATA(state, value) {
      state.workTableData = value;
    }
  },
  getters: {
    workTableData: state => {
      return state.workTableData;
    }
  }
};
