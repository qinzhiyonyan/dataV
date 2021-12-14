import Vue from "vue";
import upperFirst from "lodash/upperFirst";
import camelCase from "lodash/camelCase";
const componentsContext = require.context("../components", true, /\index.vue$/);

componentsContext.keys().forEach(fileName => {
  // 获取组件配置
  const componentConfig = componentsContext(fileName);
  // 兼容 import export 和 require module.export 两种规范
  const ctrl = componentConfig.default || componentConfig;
  const componentName = upperFirst(
    camelCase(
      ctrl.name
        .split("/")
        .pop()
        .replace(/\.\w+$/, "")
    )
  );
  Vue.component(componentName, ctrl);
});
