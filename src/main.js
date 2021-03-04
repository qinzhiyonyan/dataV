import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/utils/flexible.js";

// 引入全局css
import "@/assets/scss/style.scss";
// 按需引入element组件
import element from "@/plugins/element";
Vue.use(element);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
