//用户名表单校验匹配
export function NameRule(rule, value, callback) {
  //          请输入四到十位的昵称  正则 安装插件 any-r 按下F1
  let reg = /(^[a-zA-Z0-9]{4,10}$)/;
  if (value === "") {
    callback(new Error("请输入用户名"));
  } else if (!reg.test(value)) {
    callback(new Error("请输入4-10用户名"));
  } else {
    callback();
  }
}


//登录表单密码封装
export function PassRule( rule, value, callback) {
    // 密码强度校验，最少6位，包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符"
    let pass = /^\S*(?=\S{6,})(?=\S*\d)(?=\S*[A-Z])(?=\S*[a-z])(?=\S*[!@#$%^&*? ])\S*$/
    if(value === ''){
      callback(new Error('请输入密码'))
      //取反
    } else if (!pass.test(value)) {
      callback(new Error('最少6位，包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符'))
    } else {
      callback()
    }
    }
     