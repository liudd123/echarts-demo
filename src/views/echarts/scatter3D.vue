<template>
  <div>
    <div id="main"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  mounted() {
    this.init();
  },

  methods: {
    init() {
      let dom = document.getElementById("main");
      this.$echarts.dispose(dom);
      let myChart = this.$echarts.init(dom);
      let option;
      const symbolSize = 2.5;
      this.rq
        .get(
          "https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data/asset/data/life-expectancy-table.json"
        )
        .then((data) => {
          option = {
            tooltip: {},
            grid3D: {},
            xAxis3D: {
              type: "category",
            },
            yAxis3D: {},
            zAxis3D: {},
            dataset: {
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
                type: "scatter3D",
                symbolSize: symbolSize,
                encode: {
                  x: "Country",
                  y: "Life Expectancy",
                  z: "Income",
                  tooltip: [],
                },
              },
            ],
          };
          myChart.setOption(option);
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
