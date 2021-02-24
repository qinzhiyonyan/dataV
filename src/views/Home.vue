<template>
  <div class="home">
    <div class="left" id="cw"></div>
    <div class="right" id="rz"></div>
  </div>
</template>

<script>
import echarts from "@/utils/initEcharts";
import { options_line, options_pie } from "./options";
export default {
  name: "Home",
  components: {},
  data() {
    return {
      charts_line: null,
      charts_pie: null,
      options_line,
      options_pie
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.drawLine();
      this.drawSline();
    });
  },
  beforeDestroy() {
    this.charts_line.dispose();
    this.charts_pie.dispose();
    this.charts_line = null;
    this.charts_pie = null;
  },
  methods: {
    drawSline() {
      // 基于准备好的dom，初始化echarts实例
      this.charts_line = echarts.init(document.getElementById("rz"));
      // 绘制图表
      this.charts_line.setOption(options_pie);
      // 监听窗口缩放
      window.addEventListener("resize", () => {
        this.charts_line.resize();
      });
      console.log(1111);
    },
    drawLine() {
      this.charts_pie = echarts.init(document.getElementById("cw"));
      this.charts_pie.setOption(options_line);
      window.addEventListener("resize", () => {
        this.charts_pie.resize();
      });
    }
  }
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
