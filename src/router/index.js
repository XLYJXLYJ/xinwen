import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import Video from '../components/Video'
import Find from '../components/Find'
import Mine from '../components/Mine'
import Login from '../components/Mine/Login'
import Register from '../components/Mine/Register'
import Loginout from '../components/Mine/Loginout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Home',
      component:Home
    },
    {
      path: '/Video',
      component: Video
    },
    {
      path: '/Find',
      component: Find
    },
    {
      path: '/Mine',
      component: Mine,
    //   children: [
    //     {
    //         path: '/Login', //登录
    //         component: Login
    //     },
    //     {
    //         path: '/Register', //注册
    //         component: Register
    //     }
    // ]
    },
    {
      path: '/Login', //登录
      component: Login
    },
    {
      path: '/Register', //注册
      component: Register
    },
  ]
})