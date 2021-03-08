import {
  Icon,
  Button,
  Select,
  Option,
  OptionGroup,
  Input,
  Tree,
  Dialog,
  Row,
  Col
} from "element-ui";
const element = {
  install: function(Vue) {
    Vue.use(Icon);
    Vue.use(Button);
    Vue.use(Select);
    Vue.use(Option);
    Vue.use(OptionGroup);
    Vue.use(Input);
    Vue.use(Tree);
    Vue.use(Dialog);
    Vue.use(Row);
    Vue.use(Col);
  }
};
export default element;
