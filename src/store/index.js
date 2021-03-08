import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from "vuex-persist";
import state from "./state";
import * as actions from "./actions";
import * as getters from "./getters";
import mutations from "./mutations";
import modules from "./modules";

//日志打印
import createLogger from "vuex/dist/logger";

const vuexLocal = new VuexPersistence({
  storage: window.sessionStorage,
  reducer: state => {
    return {
      token: state.token,
      difTime: state.difTime,
      appId: state.appId,
      userId: state.userId
    };
  }
});

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== "production"; // 本地开发的话，为严格模式

export default new Vuex.Store({
  state,
  actions,
  getters,
  mutations,
  modules,
  strict: debug,
  plugins: debug ? [createLogger(), vuexLocal.plugin] : [vuexLocal.plugin]
});
