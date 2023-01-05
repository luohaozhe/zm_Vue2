//接口请求的封装
//导入封装好的axios
import service from '../service.js'

//导入qs处理数据
import qs from 'qs'
//登录接口封装
export function login (data) {
    return service({
        // 请求方法
        method: 'post',
        url: '/login',
        data: data
    })
}

//学生列表查询接口封装
export function students (params) {
    return service({
        method: 'get',
        url: '/students',
        params: params
    })
}


//学生列表删除接口封装
export function studentDel (id) {
    return service({
        method: 'delete',
        url: `/students/${id}`,
       
        
    })
}

//信息列表新增接口封装
export function info (data) {
   data = qs.stringify(data) 
    return service({
        // 请求方法
        method: 'post',
        url: '/info',
        data: data,
    })
}

//信息列表修改接口的封装
export function upInfo (data) {
    data = qs.stringify(data) 
     return service({
         // 请求方法
         method: 'put',
         url: '/info',
         data: data,
     })
 }


//信息列表查询接口封装
export function getInfo () {
    
     return service({
         // 请求方法
         method: 'get',
         url: '/info',
         
     })
 }



//信息列表新增和修改接口封装
export function infos (type, data) {
   data = qs.stringify(data) 
   let obj = { method: type, url: '/info', data}
    return service({obj})
}





 //信息列表删除接口封装
export function deleteInfo (id) {
    
    return service({
        // 请求方法
        method: 'delete',
        url: `/info/${id}`,
        
    })
}
 



//数据概览接口方法的封装
export function DataView () {
    return service ({
        method: 'get',
        url: '/dataview'
    })
}
