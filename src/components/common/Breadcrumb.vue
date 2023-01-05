<template>
  <el-card>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <!-- 遍历路由动态展示 -->
      <el-breadcrumb-item v-for="(item, index) in $route.matched" :key="index">{{item.name}}</el-breadcrumb-item>
    </el-breadcrumb>
  </el-card>
</template>

<script>
export default {
  name: "Breadcrumb",
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
</style>