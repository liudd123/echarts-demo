<template>
  <div id="main" style="height: 800px; width: 800px"></div>
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
      var myChart = this.$echarts.init(document.getElementById("main"));
      let option = {
        title: {
          text: "ECharts pie 入门示例",
          left: 'center'
        },
        tooltip: {},
        series: [
          {
            name: "Access From",
            type: "pie",
            radius: "50%",
            data: [
              { value: 1048, name: "Search Engine" },
              { value: 735, name: "Direct" },
              { value: 580, name: "Email" },
              { value: 484, name: "Union Ads" },
              { value: 300, name: "Video Ads" },
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
          },
        ],
      };
      myChart.setOption(option);
    },
  },
};
</script>
