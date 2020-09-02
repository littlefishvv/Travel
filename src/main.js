/* eslint-disable */
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
// import style
import 'swiper/dist/css/swiper.css'
import 'styles/reset.css'
import 'styles/border.css'
import 'styles/iconfont.css'
Vue.config.productionTip = false
fastClick.attach(document.body)
/* eslint-disable */
/* eslint-disable no-new */
//创建了一个 Vue 对象，并把 App.vue 模板的内容  挂载到 index.html 的 id 为 app 的 div 标签下（显示还是在html页面显示）， 并绑定了一个路由配置。
Vue.use(VueAwesomeSwiper)
new Vue({
  el: '#app',
  //等价于router:router  引用了一个router，并使用了这个router  从./router自动引入index.js文件

  router,
  render: h => h(App)
})
