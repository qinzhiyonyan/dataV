import * as types from "./mutationTypes";

const mutations = {
  [types.SET_TOKEN](state, value) {
    state.token = value;
  },
  [types.SET_DIFTIME](state, value) {
    state.difTime = value;
  },
  [types.SET_APPID](state, value) {
    state.appId = value;
  },
  [types.SET_USERID](state, value) {
    state.userId = value;
  },
  [types.SET_RESET](state) {
    state.token = {};
    state.difTime = null;
    state.appId = "";
    state.userId = "";
  }
};

export default mutations;
