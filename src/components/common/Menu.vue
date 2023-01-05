<template>
  <div class="menu">
    <el-aside width="200px">
      <el-menu
        router
        default-active="2"
        class="el-menu-vertical-demo"
        background-color="#2578b5"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <!-- 遍历数组中一级路由的数据 -->
        <template v-for="(item, index) in menus">
          <!-- 动态绑定数据 -->
          <el-submenu :index="index + ''" :key="index" v-if="!item.hidden">
            <template slot="title">
              <!-- 动态绑定图标 -->
              <i :class="item.iconClass"></i>
              <span>{{item.name}}</span>
            </template>
            <!-- 遍历数组中二级路由的数据 -->
            <el-menu-item-group v-for="(child, index) in item.children" :key="index">
              <el-menu-item :index="child.path">
                <!-- 动态绑定图标 -->
              <i :class="child.iconClass"></i>
                {{ child.name }}
                </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </template>
      </el-menu>
    </el-aside>
  </div>
</template>

<script>
export default {
  name: "Menu",
  data() {
    return {
      menus: [],
    };
  },
  created() {
    //获取路由传递的数据
    console.log(this.$router.options.routes);
    //传递给menus
    this.menus = [...this.$router.options.routes];
  },
};
</script>
<style lang="less">
.menu {
  .el-aside {
    // 去除上下滚动条
    height: 100%;
    .el-menu {
      height: 100%;
       // 设置图标样式
      i{
        color: aliceblue;
        margin-right: 20px;
      }
     
      // .fa{
      //   color: aliceblue;
      //   margin-right: 10px;
      // }
    }
    .el-submenu .el-menu-item {
      // 取消左右滚动条
      min-width: 0;
    }
  }
}
</style>