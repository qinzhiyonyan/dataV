<template>
  <div>
    <Echart :options="options" id="centerLeft"></Echart>
  </div>
</template>

<script>
import Echart from "@/common/echarts";
export default {
  data() {
    return {
      options: {}
    };
  },
  components: {
    Echart
  },
  props: {
    cdata: {
      type: Object,
      default: () => ({})
    }
  },
  watch: {
    cdata: {
      handler(newData) {
        this.options = {
          tooltip: {
            trigger: "axis",
            axisPointer: {
              type: "cross",
              crossStyle: {
                color: "#999"
              }
            }
          },
          grid: {
            top: "30%"
          },
          toolbox: {
            feature: {
              dataView: { show: true, readOnly: false },
              magicType: { show: true, type: ["line", "bar"] },
              restore: { show: true },
              saveAsImage: { show: true }
            }
          },
          legend: {
            top: "6%",
            data: ["蒸发量", "降水量", "平均温度"]
          },
          xAxis: [
            {
              type: "category",
              data: [
                "1月",
                "2月",
                "3月",
                "4月",
                "5月",
                "6月",
                "7月",
                "8月",
                "9月",
                "10月",
                "11月",
                "12月"
              ],
              axisPointer: {
                type: "shadow"
              }
            }
          ],
          yAxis: [
            {
              type: "value",
              name: "水量",
              min: 0,
              max: 250,
              interval: 50,
              axisLabel: {
                formatter: "{value} ml"
              }
            },
            {
              type: "value",
              name: "温度",
              min: 0,
              max: 25,
              interval: 5,
              axisLabel: {
                formatter: "{value} °C"
              }
            }
          ],
          series: newData.seriesData
        };
      },
      immediate: true,
      deep: true
    }
  }
};
</script>
