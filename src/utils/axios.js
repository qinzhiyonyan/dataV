import axios from "axios";
// 注意此处this为undefined，不指向Vue示例
import { Loading, Message, MessageBox } from "element-ui";
import store from "@/store";
import crypto from "./crypto";
import config from "./config";

let loadingInstance;

const service = axios.create({
  baseURL: config.baseURL,
  timeout: 10000
});

service.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded;charset=UTF-8";

// request拦截器
service.interceptors.request.use(
  config => {
    // 请求头携带token
    const { token, difTime } = store.state;
    if (token.accessToken) config.headers["accessToken"] = token.accessToken;
    // sign 签名
    if (difTime && difTime != "undefined") {
      let str = config.url.split("?")[0].subst(1);
      let time = new Date().getTime() + Number(difTime);
      let sign = `/${str}${time}${token.accessToken}`;
      let key = "abcdefgabcdefg";
      let s = crypto.encrypt(sign, key);
      config.headers["sign"] = s;
      config.headers["sysTime"] = time;
    }
    // loading 开启
    loadingInstance = Loading.service({
      fullscreen: true,
      lock: true,
      text: "loading",
      spinner: "el-icon-loading",
      background: "rgba(0, 0, 0, 0.7)"
    });
    return config;
  },
  error => {
    Promise.resolve(error);
  }
);

service.interceptors.response.use(
  response => {
    // loading关闭
    loadingInstance.close();
    const { statusCode, message } = response.data;
    if (statusCode === "603") {
      MessageBox.confirm(message, "请求失败", {
        confirmButtonText: "重新登录",
        type: "error",
        showClose: false,
        showCancelButton: false,
        closeOnClickModal: false,
        closeOnPressEscape: false
      }).then(() => {
        window.location.href = config.loginOutUrl;
        store.commit("SET_RESET");
      });
    }
    if (statusCode !== "200" && statusCode != "708") {
      Message({
        message,
        type: "error",
        duration: 1000
      });
    }
    if (statusCode === "200") {
      Message({
        message,
        type: "success",
        duration: 1000
      });
    }
    return response;
  },
  error => {
    loadingInstance.close();
    if (!error.response) {
      // 请求状态超时
      if (error.message.includes("timeout")) {
        Message.error("请求超时");
      } else {
        Message.error("请求失败");
      }
      return;
    }
    // 拦截响应
    return Promise.reject(error);
  }
);

export default service;
