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

Vue.use(ElementUI);
Vue.config.productionTip = false

highcharts3d(highcharts)
Vue.prototype.$echarts=echarts;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
