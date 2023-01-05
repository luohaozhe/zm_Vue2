<template>
  <div class="login">
  <el-card class="box-card">
    <div slot="header" class="clearfix">
        <span class="span">至美后台</span>
        <el-form 
        label-width="80px" 
        :model="form" 
        ref="form">
            <el-form-item label="用户名" prop="username"
            :rules="[
           
            {required: true, message: '请输入用户名', trigger: 'blur'},
            {min:4, max: 10, message: '长度在4-10位字符之间', trigger: 'blur'},
            ]"
            >
              <el-input v-model="form.username"></el-input>
            </el-form-item>

            <el-form-item label="密码" prop="password"
            :rules="[
           
            {required: true, message: '请输入密码', trigger: 'blur'},
            {min:6, max: 12, message: '长度在6-12位字符之间', trigger: 'blur'},
            ]"
            >
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
        return {
            form: {
                username: '',
                password: '',
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