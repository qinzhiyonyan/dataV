import { borderBox1, fullScreenContainer, loading } from "@jiaminghi/data-view";
const dataV = {
  install: function(Vue) {
    Vue.use(loading);
    Vue.use(borderBox1);
    Vue.use(fullScreenContainer);
  }
};
export default dataV;
