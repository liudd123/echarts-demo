<template>
  <div>
    <div id="main"></div>
  </div>
</template>

<script>
import "echarts-gl";
export default {
  data() {
    return {};
  },

  mounted() {
    this.init();
  },

  methods: {
    init() {
      this.$echarts.dispose(document.getElementById("main"));
      let myChart = this.$echarts.init(document.getElementById("main"));
      let option;
      this.rq
        .get(
          "https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data/asset/data/life-expectancy-table.json"
        )
        .then((data) => {
          option = {
            grid3D: {},
            tooltip: {},
            xAxis3D: {
              type: "category",
            },
            yAxis3D: {
              type: "category",
            },
            zAxis3D: {
              axisPointer: {
                show: false,
              },
            },
            //图示
            visualMap: {
              max: 1e8,
              dimension: "Population",
            },
            dataset: {
              //数据别名
              dimensions: [
                "Income",
                "Life Expectancy",
                "Population",
                "Country",
                { name: "Year", type: "ordinal" },
              ],
              source: data,
            },
            series: [
              {
                type: "bar3D",
                // symbolSize: symbolSize,
                shading: "lambert",
                encode: {
                  x: "Year",
                  y: "Country",
                  z: "Life Expectancy",
                  tooltip: [0, 1, 2, 3, 4],
                },
              },
            ],
          };
          option && myChart.setOption(option);
        });
      option && myChart.setOption(option);
    },
  },
};
</script>

<style scoped>
#main {
  width: 1000px;
  height: 800px;
}
</style>
