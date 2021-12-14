const { VUE_APP_TITLE, VUE_APP_BASE_URL } = process.env;
const devHost = "http://rap2api.taobao.org/app/mock/257682/post/"; // 本地开发环境

// 退出登录路径默认
const loginOutUrl = VUE_APP_TITLE === "development" ? "/" : "./";
const httpObj = {
  development: devHost,
  test: VUE_APP_BASE_URL,
  production: VUE_APP_BASE_URL
};

let baseURL = httpObj[VUE_APP_TITLE];

export default {
  baseURL,
  loginOutUrl
};
