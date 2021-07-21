import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/utils/flexible.js";

// 引入全局css
import "@/assets/scss/style.scss";

import vuePlugin from "@/vuePlugin";
Vue.use(vuePlugin);

// 按需引入element组件
import element from "@/plugins/element";
Vue.use(element);

// 按需引入vueAwesome
import vueAwesome from "@/plugins/vueAwesome";
Vue.use(vueAwesome);

// 按需引入dataV
import dataV from "@/plugins/dataV";
Vue.use(dataV);

// 导入topology-vue组件
import topology from "topology-vue";
Vue.use(topology);
// 需要导入topology-vue.css
import "topology-vue/topology-vue.css";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
