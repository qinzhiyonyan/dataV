<template>
  <div id="index">
    <dv-full-screen-container>
      <span style="color:#5cd9e8">
        <icon name="chart-bar"></icon>
      </span>
      <dv-loading v-if="loading">loading...</dv-loading>
      <div v-else class="main-body">
        <div class="left" @click="login">
          <CenterLeftChart />
        </div>
        <div class="right">
          <CenterRightChart />
        </div>
      </div>
    </dv-full-screen-container>
  </div>
</template>

<script>
import CenterLeftChart from "_c/centerLeft";
import CenterRightChart from "_c/centerRight";
import { login } from "@/api/login";
export default {
  name: "Home",
  components: {
    CenterLeftChart,
    CenterRightChart
  },
  data() {
    return {
      loading: true
    };
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener("keyup", e => {
        if (e.keyCode === 27) {
          this.$confirm("是否确认", "提示", {
            confirmButtonText: "确认",
            cancelButtonText: "取消",
            type: "warning"
          }).then(() => {
            this.$alert("111");
          });
        }
      });
    });
    this.cancelLoading();

    window.addEventListener("beforeunload", e => this.beforeunloadHandler(e));
    window.addEventListener("unload", e => this.unloadHandler(e));
    this.$on("hook:destroyed", () => {
      window.removeEventListener("beforeunload", e =>
        this.beforeunloadHandler(e)
      );
    });
    this.$on("hook:destroyed", () => {
      window.removeEventListener("unload", e => this.beforeunloadHandler(e));
    });
  },
  methods: {
    cancelLoading() {
      setTimeout(() => {
        this.loading = false;
      }, 1000);
    },
    beforeunloadHandler() {
      this._beforeUnload_time = new Date().getTime();
    },
    unloadHandler() {
      this._gap_time = new Date().getTime() - this._beforeUnload_time;
      //判断是窗口关闭还是刷新
      if (this._gap_time <= 5) {
        //如果是登录状态，关闭窗口前，移除用户
        debugger;
      }
    },
    async login() {
      const result = await this.m_apiFn(login, { userName: "1111" });
      console.log(result, this.appId);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/index.scss";
</style>
