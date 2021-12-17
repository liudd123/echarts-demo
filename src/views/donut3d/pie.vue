<template>
  <div id="asd"></div>
 
</template>

<script>
import * as d3 from "d3";
import {draw} from "../../units/Donut3D.js";
export default {
  data() {
    return {
      salesData: [
        { label: "Basic", color: "#3366CC" },
        { label: "Plus", color: "#DC3912" },
        { label: "Lite", color: "#FF9900" },
        { label: "Elite", color: "#109618" },
        { label: "Delux", color: "#990099" },
      ],
    };
  },

  mounted() {
    var svg = d3
      .select("#asd")
      .append("svg")
      .attr("width", 700)
      .attr("height", 300);

    svg.append("g").attr("id", "salesDonut");
    svg.append("g").attr("id", "quotesDonut");

    draw("salesDonut", this.randomData(), 150, 150, 130, 100, 30, 0.4);
    draw("quotesDonut", this.randomData(), 450, 150, 130, 100, 30, 0);
  },

  methods: {
    randomData() {
      return this.salesData.map(function (d) {
        return { label: d.label, value: 1000 * Math.random(), color: d.color };
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
