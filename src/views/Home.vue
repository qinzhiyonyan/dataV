<template>
  <div class="home">
    <div class="left">
      <CenterLeftChart />
    </div>
    <div class="right">
      <CenterRightChart />
    </div>
  </div>
</template>

<script>
import CenterLeftChart from "@/components/centerLeft";
import CenterRightChart from "@/components/centerRight";
export default {
  name: "Home",
  components: {
    CenterLeftChart,
    CenterRightChart
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
}
.left,
.right {
  box-sizing: border-box;
  display: inline-block;
  width: 50%;
  height: 200px;
  border: 1px solid #ccc; /*no*/
}
</style>
