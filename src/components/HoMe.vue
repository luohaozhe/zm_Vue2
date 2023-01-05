<template>
  <div class="home">
    <el-container>
  <Header></Header>
  <el-container class="content">
    <Menu></Menu>
    <el-container>
      <el-main>
        <Breadcrumb/>
        <div class="cont">
            <router-view></router-view>
        </div>
      </el-main>
      <el-footer><Footer></Footer></el-footer>
    </el-container>
  </el-container>
</el-container>
  </div>
</template>

<script>
//导入 header footer menu 组件
import Header from "./common/Header.vue";
import Footer from "./common/Footer.vue";
import Menu from "./common/Menu.vue";
import Breadcrumb from "./common/Breadcrumb.vue";
export default {
  name: "HoMe",
  // 注册组件
  components: {
    Header,
    Footer,
    Menu,
    Breadcrumb,
  },
  data() {
    return {};
  },
};
</script>
<style lang="scss">
.home {
  width: 100%;
  height: 100%;
  .content{
  position: absolute;
  width: 100%;
  top: 60px;
  bottom: 0; 
  .cont{
    margin: 20px, 0;
  }
  }
}
</style>