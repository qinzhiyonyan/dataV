<template>
  <div :id="id" :class="className" :style="{ height: height, width: width }" />
</template>

<script>
import echarts from "@/utils/initEcharts";
import { debounce } from "@/utils";
export default {
  name: "echart",
  props: {
    className: {
      type: String,
      default: "chart"
    },
    id: {
      type: String,
      default: "chart"
    },
    width: {
      type: String,
      default: "100%"
    },
    height: {
      type: String,
      default: "2.3rem"
    },
    options: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      chart: null
    };
  },
  watch: {
    options: {
      handler(options) {
        // 设置true清空echart缓存
        this.chart.setOption(options, true);
      },
      deep: true
    }
  },
  mounted() {
    this.initChart();
  },
  activated() {
    // 防止 keep-alive 之后图表变形
    if (this.chart) {
      this.chart.resize();
    }
  },
  beforeDestroy() {
    if (this.chart) {
      this.chart.dispose();
    }
    window.removeEventListener(
      "resize",
      debounce(() => {
        this.chart.resize();
      }, 300)
    );
  },

  methods: {
    initChart() {
      // 初始化echart
      this.chart = echarts.init(this.$el);
      this.chart.setOption(this.options);
      window.addEventListener(
        "resize",
        debounce(() => {
          this.chart.resize();
        }, 300)
      );
    }
  }
};
</script>

<style></style>
