<template>
  <el-container>
    <el-aside width="200px"
      ><el-menu default-active="2" class="el-menu-vertical-demo" :router="true">
        <el-submenu index="echarts">
          <template slot="title">
            <i class="el-icon-pie-chart"></i>
            <span>echarts</span>
          </template>
          <el-menu-item index="piedd">饼状图</el-menu-item>
          <!-- <el-menu-item index="1-2">选项2</el-menu-item>
          <el-menu-item-group title="分组2">
            <el-menu-item index="1-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="1-4">
            <template slot="title">选项4</template>
            <el-menu-item index="1-4-1">选项1</el-menu-item>
          </el-submenu> -->
        </el-submenu>
         <el-submenu index="highcharts">
          <template slot="title">
            <i class="el-icon-pie-chart"></i>
            <span>highcharts</span>
          </template>
          <el-menu-item index="pie">3D饼状图</el-menu-item>
        </el-submenu>
         <el-submenu index="donut3d">
          <template slot="title">
            <i class="el-icon-pie-chart"></i>
            <span>donut3d</span>
          </template>
          <el-menu-item index="pied">3D饼状图</el-menu-item>
        </el-submenu>
      </el-menu>
      </el-aside>
    <el-main><router-view /></el-main>
  </el-container>
</template>

<style>

</style>
