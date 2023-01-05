//axios 二次封装
//导入 axios
import axios from 'axios'
//导入 Message
import { Message } from 'element-ui'

//导入获取Token方法
import { getToken } from '@/utils/Token.js'

const service = axios.create({
    baseURL: 'api',
    timeout: 3000,

})

//请求拦截器
service.interceptors.request.use((config) => {
    //在请求之前做some this (获取设置token)
   //请求头携带Token、
    config.headers['token'] = getToken('token')
   
    return config

}, (error) => {
    return Promise.reject(error)
})

//响应拦截器
service.interceptors.response.use((response) => {
    //对响应数据做些事情 （状态码判断提示）
    let { status, message } = response.data
    if (status !== 200) {
        Message({message: message || 'error', type: 'warning'})
    }
    return response
},(error) => {
    return Promise.reject(error)
})


//对外暴露

export default service