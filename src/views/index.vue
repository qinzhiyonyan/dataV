<template>
  <div id="index">
    <dv-full-screen-container>
      <dv-loading v-if="loading">Loading...</dv-loading>
      <div v-else class="main-body">
        <div class="left">
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
    this.cancelLoading();
  },
  methods: {
    cancelLoading() {
      setTimeout(() => {
        this.loading = false;
      }, 1000);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/index.scss";
</style>
