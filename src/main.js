import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import highcharts from 'highcharts'
import VueHighCharts from 'vue-highcharts'
import highcharts3d from 'highcharts/highcharts-3d'
import ElementUI  from "element-ui";
import 'element-ui/lib/theme-chalk/index.css';
import * as echarts from "echarts";
import "echarts-gl";
import request from "./units/request.js"
import VideoPlayer from 'vue-video-player'
import 'vue-video-player/src/custom-theme.css'
import 'video.js/dist/video-js.css'
import "videojs-contrib-hls"

import axios from 'axios'
Vue.prototype.$axios = axios
Vue.use(ElementUI);
Vue.config.productionTip = false

Vue.use(VideoPlayer)
highcharts3d(highcharts)
Vue.prototype.$echarts=echarts;
Vue.prototype.rq=request;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
