<template>
  <div class="header">
    <el-header>
    <div class="title">至美后台管理系统</div>
    <div>{{username}}</div>
 </el-header>
  </div>
</template>

<script>
//导入获取token 和用户名方法
import { getToken } from '@/utils/Token.js'
export default {
    name: 'Header',
    data() {
      return {
        username: ''
      }
    },
    created() {
     //将获取的用户名赋值给username
     this.username = getToken('username')
    }
};
</script>
<style lang="scss" scoped>
.header {
  .el-header{
    width: 1200px;
    background: #409EFF;
    color: rgb(240, 243, 248);
    line-height: 60px;
    display: flex;
    justify-content: space-between;
    .title {
      width: 200px;
      font-size: 24px;
    }
  }
}
</style>