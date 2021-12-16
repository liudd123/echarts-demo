import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import highcharts from 'highcharts'
import VueHighCharts from 'vue-highcharts'
import highcharts3d from 'highcharts/highcharts-3d'


Vue.config.productionTip = false

highcharts3d(highcharts)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
