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
          <el-menu-item index="bard">3D柱状图</el-menu-item>
          <el-menu-item index="scatter3D">3D散点图</el-menu-item>
          
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
         <el-submenu index="videoplayer">
          <template slot="title">
            <i class="el-icon-video-camera-solid"></i>
            <span>视频播放</span>
          </template>
          <el-menu-item index="videoplayer">videoplayer</el-menu-item>
          <el-menu-item index="video">video</el-menu-item>
        </el-submenu>
        <el-menu-item index="doc">文档预览</el-menu-item>
      </el-menu>
      </el-aside>
    <el-main><router-view /></el-main>
  </el-container>
</template>

<style>

</style>
