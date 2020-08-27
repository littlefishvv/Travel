import Vue from 'vue'
import Router from 'vue-router'
/* eslint-disable */
//@符是指src目录

import HelloWorld from '@/components/HelloWorld'
import Home from '@/pages/home/Home'
import List from '@/pages/list/List'

Vue.use(Router)
//整个路由的配置都放在router下的app.js下
export default new Router({
  //这个的意思是，当我访问/根目录时，显示的home组件的内容，并给他起一个名字叫home，当然这个home需要在上面声明引入

  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },{
      path: '/list',
      name: "List",
      component: List
    }
  ]
})
