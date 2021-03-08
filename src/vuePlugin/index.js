import Vue from "vue";
import { mapGetters, mapMutations } from "vuex";

const vuePlugin = () => {
  Vue.mixin({
    data() {
      return {};
    },
    computed: {
      ...mapGetters(["token", "difTime", "userId", "appId"])
    },
    methods: {
      ...mapMutations({
        setToken: "SET_TOKEN",
        set_difTime: "SET_DIFTIME",
        set_appId: "SET_APPID",
        set_userId: "SET_USERID"
      }),
      /**
       * api请求(promise统一封装)
       * @param {api} 方法
       * @param {params} 参数
       * @param {message} 回调提示信息
       */
      m_apiFn(api, params) {
        return new Promise(resolve => {
          api(params).then(data => {
            if (data.statusCode === "200" || data.statusCode === "708") {
              resolve(data);
            }
          });
        });
      }
    }
  });
};

export default vuePlugin;
