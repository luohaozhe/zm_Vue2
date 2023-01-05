//登录表单Token的封装      键值对
export function setToken(tokenKey, token) {
    //本地化存储 token
     return localStorage.setItem(tokenKey, token)
}
export function getToken(tokenKey) {
     //获取Token
     return localStorage.getItem(tokenKey)
}
export function removeToken(tokenKey) {
      //清除Token
     return localStorage.removeItem(tokenKey)
}