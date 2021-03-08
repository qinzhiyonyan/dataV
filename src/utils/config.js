const { VUE_APP_TITLE } = process.env;
const devHost = "http://rap2api.taobao.org/app/mock/257682/post/"; // 本地开发环境
const testUrl = "http://127.0.0.1:8080/test/"; // 测试环境
const productionUrl = "http://127.0.0.1:8080/production/"; // 生产环境

// 退出登录路径默认
const loginOutUrl = VUE_APP_TITLE === "development" ? "/" : "./";
const httpObj = {
  development: devHost,
  test: testUrl,
  production: productionUrl
};

let baseURL = httpObj[VUE_APP_TITLE];

export default {
  baseURL,
  loginOutUrl
};
