import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
  {
    path:'/pie',
    component:()=>import('../views/highcharts/charts-pie.vue')
  },
  {
    path:'/pied',
    component:()=>import('../views/donut3d/pie.vue')
  },
  {
    path:'/piedd',
    component:()=>import('../views/echarts/pie.vue')
  },
  {
    path:"/bard",
    component:()=>import("../views/echarts/bar3D.vue")
  },
  {
    path:'/scatter3D',
    component:()=>import("../views/echarts/scatter3D.vue")
  },
  {
    path:'/videoplayer',
    component:()=>import("../views/videoplayer/videoplayer.vue")
  },
  {
    path:'/video',
    component:()=>import("../views/videoplayer/video.vue")
  },
  {
    path:'/doc',
    component:()=>import("../components/docPreview.vue")
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
