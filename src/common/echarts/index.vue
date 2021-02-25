<template>
  <div :id="id" :class="className" :style="{ height: height, width: width }" />
</template>

<script>
import echarts from "@/utils/initEcharts";
import debounce from "@/utils";
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
      default: "2.5rem"
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
        this.initChart(this.$el, options);
      },
      deep: true
    }
  },
  mounted() {
    this.initChart();
  },
  beforeDestroy() {
    if (this.chart) {
      this.chart.clear();
    }
  },

  methods: {
    initChart() {
      // 初始化echart
      this.chart = echarts.init(this.$el);
      this.chart.setOption(this.options);
      window.addEventListener(
        "resize",
        () => {
          debounce(this.chart.resize());
        },
        300
      );
    }
  }
};
</script>

<style></style>
