//导入vue
import Vue from 'vue'
//导入vue-router
import Router from 'vue-router'
//导入组件 路由懒加载可在挂载时直接导入
// import LoGin fro../components/LoGinOne.vue'
//使用
Vue.use(Router)
//对外暴露
export default new Router({
    routes: [
        {
            path: '/',
            // component: LoGin,
            redirect: '/login',
            //隐藏不显示到menu中
            hidden: true,
            name: '首页',
            component: () => import('@/components/Login3') //路由懒加载
           
        },
        {
            path: '/login',
            // component: HoMe
             //隐藏不显示到menu中
             name: 'Login',
             hidden: true,
            component: () => import('@/components/Login3') //路由懒加载
            // component: resolve => require(['@/components/LoGinOne'], resolve) //异步组件懒加载
        },
        {
            path: '*',
            // component: HoMe
             //隐藏不显示到menu中
             hidden: true,
             name: 'NotFound',
            component: () => import('@/components/NotFound') //路由懒加载
            // component: resolve => require(['@/components/HoMe'], resolve) //异步组件懒加载
        },
        // {
        //     path: '/home',
        //     // component: HoMe
        //     component: () => import('@/components/HoMe') //路由懒加载
        //     // component: resolve => require(['@/components/HoMe'], resolve) //异步组件懒加载
        // },
        //学生页面
        {
            path: '/home',
            // component: HoMe
            name: '学生管理',
            //定义图标
            iconClass: 'fa fa-user',
            //路由重定向到学生信息页面
            redirect: '/student',
            component: () => import('@/components/HoMe'), //路由懒加载
            // component: resolve => require(['@/components/HoMe'], resolve) //异步组件懒加载
            //二级路由
            children: [
                  {
                    path: '/student',
                    name: '学生列表',
                    iconClass: 'el-icon-user',
                    component: () => import('@/components/students/StudentList'), //；路由懒加载
                  },
                  {
                    path: '/info',
                    name: '信息列表',
                    iconClass: 'el-icon-s-operation',
                    component: () => import('@/components/students/InfoList'), //；路由懒加载
                  },
                  {
                    path: '/infos',
                    name: '信息管理',
                    iconClass: 'el-icon-setting',
                    component: () => import('@/components/students/SetInfoList'), //；路由懒加载
                  },
                  {
                    path: '/work',
                    name: '作业列表',
                    iconClass: 'el-icon-date',
                    component: () => import('@/components/students/WorkList'), //；路由懒加载
                  },
                  {
                    path: '/works',
                    name: '作业管理',
                    iconClass: 'el-icon-edit-outline',
                    component: () => import('@/components/students/SetWork'), //；路由懒加载
                  },
            ]

        },
        //数据页面
        {
            path: '/home',
            // component: HoMe
            name: '数据分析',
            //定义图标
            iconClass: 'fa fa-bar-chart',
            
            component: () => import('@/components/HoMe'), //路由懒加载
            // component: resolve => require(['@/components/HoMe'], resolve) //异步组件懒加载
            //二级路由
            children: [
                  {
                    path: '/dataview',
                    name: '数据概览',
                    iconClass: 'fa fa-line-chart',
                    component: () => import('@/components/dataAnalysis/DataView'), //；路由懒加载
                  },
                  {
                    path: '/map-view',
                    name: '地图概览',
                    iconClass: 'el-icon-place',
                    component: () => import('@/components/dataAnalysis/MapView'), //；路由懒加载
                  },
                  {
                    path: '/travel-map',
                    name: '旅游地图',
                    iconClass: 'el-icon-picture-outline-round',
                    component: () => import('@/components/dataAnalysis/TravelMap'), //；路由懒加载
                  },
                  {
                    path: '/score-map',
                    name: '分数地图',
                    iconClass: 'el-icon-data-line',
                    component: () => import('@/components/dataAnalysis/ScoreMap'), //；路由懒加载
                  },
                  
            ]
            
        },
        
        {
          path: '/home',
          name: '用户中心',
          iconClass: 'fa fa-user',
          component: () => import('@/components/HoMe'), //；路由懒加载
          children: [
            {
            path: '/user',
            name: '权限管理',
            iconClass: 'el-icon-s-tools',
            component: () => import('@/components/users/User')
            }
          ]
        }, 
    ],
    // 模式
    mode: 'history'
})
