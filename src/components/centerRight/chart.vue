<template>
  <div>
    <Echart :options="options" id="centerRight"></Echart>
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
            trigger: "item"
          },
          legend: {
            top: "6%",
            left: "center"
          },
          series: [
            {
              name: "访问来源",
              type: "pie",
              top: "18%",
              radius: ["40%", "70%"],
              avoidLabelOverlap: false,
              itemStyle: {
                borderRadius: 10,
                borderColor: "#fff",
                borderWidth: 2
              },
              label: {
                show: false,
                position: "center"
              },
              emphasis: {
                label: {
                  show: true,
                  fontSize: "40",
                  fontWeight: "bold"
                }
              },
              labelLine: {
                show: false
              },
              data: newData.radarData
            }
          ]
        };
      },
      immediate: true,
      deep: true
    }
  }
};
</script>
