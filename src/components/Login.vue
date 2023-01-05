<template>
  <div class="login">
  <el-card class="box-card">
    <div slot="header" class="clearfix">
        <span class="span">至美后台</span>
        <el-form 
        label-width="80px" 
        :model="form" 
        ref="form"
        :rules="rules">
            <el-form-item label="用户名" prop="username">
              <el-input v-model="form.username"></el-input>
            </el-form-item>

            <el-form-item label="密码" prop="password">
              <el-input type="password" v-model="form.password"></el-input>
            </el-form-item>

            <el-form-item>
              <el-button type="primary" @click="login('form')">登录</el-button> 
            </el-form-item>

          </el-form>
    </div>
  </el-card>
      
</div>

</template>

<script>
export default {
  name: 'LoGinOne',
    data() {
      //定义姓名校验函数       校验规则  值    回调函数
      const validateName = (rule, value, callback) => {
      //          请输入四到十位的昵称  正则 安装插件 any-r 按下F1
      let reg = /(^[a-zA-Z0-9]{4,10}$)/
      if(value === ''){
        callback(new Error('请输入用户名'))
      } else if (!reg.test(value)) {
        callback(new Error('请输入4-10用户名'))
      } else {
        callback()
      }
      }
       //定义 密码校验函数   校验规则  值    回调函数
        const validatePass = (rule, value, callback) => {
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
       

        return {
         //放入校验规则
            form: {
                username: '',
                password: '',
            },
            rules: {
              username: [{validator: validateName, trigger: 'blur'}],
              password: [{validator: validatePass, trigger: 'blur'}],
            }
            
        }
    },
    methods: {
      login(form) {
        this.$refs[form].validate((valid) => {
          //符合规则
          if (valid) {
            //发送请求
            this.axios.post('http://1.116.64.64:5004/api2/login', this.form)
            .then(res => {
              console.log(res)
              //判断状态码
              if(res.data.status == 200) {
                localStorage.setItem('username',res.data.username)
                //提示成功
                this.$message({ message: res.data.message, type:'success'})
                //路由跳转
                this.$router.push('./home')
              }
            })
            .catch(err => {
              console.error(err)
            } )
            console.log(this.form)
          }else{
            console.error(this.form)
          }
        } )
      }
    }

};
</script>
<style lang="scss">
.login {
      width: 100%;
      height: 100%;
      position: absolute;
      background-image: linear-gradient(to right, rgb(248, 121, 242) ,skyblue ,pink);
     .box-card{
        width: 450px;
        margin: 200px auto;
        .span{
            font-size: 22px;
            color: rgba(13, 92, 251, 0.741);
            margin: 5px;
        }
        .el-button {
            width: 100%;
        }
      }
    }
</style>