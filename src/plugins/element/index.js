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
  Col,
  Notification,
  Message,
  MessageBox
} from "element-ui";
// 引入自定义主题色
import "@/assets/scss/element-variables.scss";

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
    Vue.prototype.$notify = Notification;
    Vue.prototype.$message = Message;
    Vue.prototype.$alert = MessageBox.alert;
    Vue.prototype.$confirm = MessageBox.confirm;
    Vue.prototype.$prompt = MessageBox.prompt;
  }
};
export default element;
