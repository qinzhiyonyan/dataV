import Icon from "vue-awesome/components/Icon";
import "vue-awesome/icons/chart-bar.js";
import "vue-awesome/icons/chart-area.js";
import "vue-awesome/icons/chart-pie.js";
import "vue-awesome/icons/chart-line.js";
import "vue-awesome/icons/align-left.js";

const vueAwesome = {
  install: function(Vue) {
    Vue.component("icon", Icon);
  }
};

export default vueAwesome;
