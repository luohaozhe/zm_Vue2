// 引入Vue
import Vue from 'vue'
// 引入APP组件
import App from './App.vue'

//引入element-ui
// import '../element/element.js'
// 全局引入element-ui步骤
// 引入element-ui
import ElementUI from 'element-ui'
// 导入element-ui样式
import 'element-ui/lib/theme-chalk/index.css'
// 使用
Vue.use(ElementUI)
//引入字体图标库文件
import 'font-awesome/css/font-awesome.min.css'
//导入axiuos
// import axios from 'axios'
//导入路由
import router from './router'

//导入封装好的axios
import service from '@/service'

//导入echart
import echarts from 'echarts'


//将axios 挂载到原型对象身上
// Vue.prototype.axios = axios
//将封装好的axios 挂载到原型对象身上
Vue.prototype.service = service
Vue.config.productionTip = false
//将echart挂载到原型对象上
Vue.prototype.$echarts = echarts

//路由导航守卫
//路由跳转之前
router.beforeEach((to, form, next) => {
  //如果本地存储没有用户名 也可以换成token
  if (!localStorage.getItem('username')) {
    //且访问路径不为login
    if (to.path !== '/login' ) {
      //直接跳转到login
      next('/login')
    }else next() 
  } next()
}) 

new Vue({
  // 路由挂载
  router,
  render: h => h(App),
}).$mount('#app')
