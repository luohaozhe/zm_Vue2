"use strict";(self["webpackChunkproject"]=self["webpackChunkproject"]||[]).push([[121],{62121:function(e,r,t){t.r(r),t.d(r,{default:function(){return d}});var n=function(){var e=this,r=e._self._c;return r("div",{staticClass:"login"},[r("el-card",{staticClass:"box-card"},[r("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[r("span",{staticClass:"span"},[e._v("至美后台")]),r("el-form",{ref:"form",attrs:{"label-width":"80px",model:e.form,rules:e.rules}},[r("el-form-item",{attrs:{label:"用户名",prop:"username"}},[r("el-input",{model:{value:e.form.username,callback:function(r){e.$set(e.form,"username",r)},expression:"form.username"}})],1),r("el-form-item",{attrs:{label:"密码",prop:"password"}},[r("el-input",{attrs:{type:"password"},model:{value:e.form.password,callback:function(r){e.$set(e.form,"password",r)},expression:"form.password"}})],1),r("el-form-item",[r("el-button",{attrs:{type:"primary",icon:"el-icon-user-solid\n"},on:{click:function(r){return e.login("form")}}},[e._v("登录")])],1)],1)],1)])],1)},o=[];t(57658);function s(e,r,t){let n=/(^[a-zA-Z0-9]{4,10}$)/;""===r?t(new Error("请输入用户名")):n.test(r)?t():t(new Error("请输入4-10用户名"))}function a(e,r,t){let n=/^\S*(?=\S{6,})(?=\S*\d)(?=\S*[A-Z])(?=\S*[a-z])(?=\S*[!@#$%^&*? ])\S*$/;""===r?t(new Error("请输入密码")):n.test(r)?t():t(new Error("最少6位，包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符"))}var u=t(595),l=t(38898),i={name:"Login3",data(){return{form:{username:"",password:""},rules:{username:[{validator:s,trigger:"blur"}],password:[{validator:a,trigger:"blur"}]}}},methods:{login(e){this.$refs[e].validate((e=>{e?(console.log(this.form),(0,l.x4)(this.form).then((e=>{200===e.data.status&&((0,u.o4)("username",e.data.username),(0,u.o4)("token",e.data.token),this.$message({message:e.data.message,type:"success"}),this.$router.push("./home"))}))):console.error(this.form)}))}}},f=i,c=t(1001),m=(0,c.Z)(f,n,o,!1,null,null,null),d=m.exports},38898:function(e,r,t){t.d(r,{C5:function(){return u},VK:function(){return l},VO:function(){return i},nJ:function(){return a},qH:function(){return s},x4:function(){return o}});var n=t(37182);t(95410);function o(e){return(0,n.Z)({method:"post",url:"/login",data:e})}function s(e){return(0,n.Z)({method:"get",url:"/students",params:e})}function a(e){return(0,n.Z)({method:"delete",url:`/students/${e}`})}function u(){return(0,n.Z)({method:"get",url:"/info"})}function l(e){return(0,n.Z)({method:"delete",url:`/info/${e}`})}function i(){return(0,n.Z)({method:"get",url:"/dataview"})}}}]);
//# sourceMappingURL=121.6e3fe91c.js.map