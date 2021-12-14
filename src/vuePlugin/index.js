import Vue from "vue";
import axios from "@/utils/axios";
import { cloneDeep } from "lodash";
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
        return new Promise((resolve, reject) => {
          api(params).then(data => {
            if (data.statusCode === "200") {
              resolve(data);
            } else {
              reject(data);
            }
          });
        });
      },

      /**
       * 下载excel文件
       * @param {url} 下载地址
       * @param {params} 参数
       * @param {fileName} 下载excel名称
       * @param {methods} 请求方式
       */
      downloadExcel(url, params, fileName = "导出表格", methods = "post") {
        let axiosParams = {
          methods,
          url,
          responseType: "blob"
        };
        if (methods === "get") {
          axiosParams.params = params;
        } else {
          axiosParams.data = params;
        }
        axios(axiosParams)
          .then(res => {
            const blob = new Blob([res.data], {
              type: "application/vnd.ms-excel"
            });
            let url = window.URL.createObjectURL(blob);
            let a = document.createElement("a");
            a.href = url;
            a.download = `${fileName}.xlsx`;
            a.click();
            window.URL.revokeObjectURL(url);
          })
          .catch(err => {
            console.log(err);
          });
      },
      /**
       * 深拷贝
       */
      m_copy(v) {
        return cloneDeep(v);
      },
      /**
       * 重置表单操作
       * @param {formName} 表单ref名
       */
      m_resetForm(formName) {
        this.$refs[formName].resetFields();
        this.$refs[formName].clearValidate();
      }
    }
  });
};

export default vuePlugin;
