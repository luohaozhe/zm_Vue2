
// 全局引入element-ui步骤
// 引入element-ui
// import ElementUI from 'element-ui'
// 导入element-ui样式
// import 'element-ui/lib/theme-chalk/index.css'
// 使用
// Vue.use(ElementUI)

//按需引入element-ui 先导入再使用  新建element模块在里面进行引入操作
//引入button
// import { Button, Tag } from 'element-ui'
// //使用Button
// Vue.use(Button)
// Vue.use(Tag)
import Vue from 'vue'

import { Button, Tag } from 'element-ui'

Vue.use(Button)
Vue.use(Tag)