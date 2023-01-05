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
              <el-button type="primary" @click="login('form')" icon="el-icon-user-solid
">登录</el-button> 
            </el-form-item>

          </el-form>
    </div>
  </el-card>
      
</div>

</template>

<script>
//导入封装的方法模块
import  { NameRule, PassRule } from '../utils/vaildate.js'
import { setToken } from '@/utils/Token.js'

//导入封装好的登录请求方法
import { login } from '@/api/api.js'
export default {
  name: 'Login3',
    data() {
        return {
         //放入校验规则
            form: {
                username: '',
                password: '',
            },
            rules: {
              username: [{validator: NameRule, trigger: 'blur'}],
              password: [{validator: PassRule, trigger: 'blur'}],
            }
            
        }
    },
    methods: {
      login(form) {
        this.$refs[form].validate((valid) => {
          //符合规则
          if (valid) {
            console.log(this.form)
            //把这个登录方法封装成api进行调用
            // 发送请求
            // this.service.post('/login', this.form)
            // .then((res) => {
            //   console.log(res)
            //   //判断状态码
            //   if(res.data.status === 200) {
            //     //调用方法存储用户名、Token
            //    setToken('username',res.data.username)
            //    setToken('token',res.data.token)
            //     //提示成功
            //     this.$message({ message: res.data.message, type:'success'})
            //     //路由跳转
            //     this.$router.push('./home')
            //   }
            // })
            // .catch(err => {
            //   console.error(err)
            // })
            // console.log(this.form)

           //使用封装好的api模块调用login发请求
           login(this.form).then(res => {
            if(res.data.status === 200) {
                //调用方法存储用户名、Token
               setToken('username',res.data.username)
               setToken('token',res.data.token)
                //提示成功
                this.$message({ message: res.data.message, type:'success'})
                //路由跳转
                this.$router.push('./home')
              }
           })

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