<template>
  <div class="User">
    <el-tree
  :data="menus" 
  show-checkbox
  node-key="name"
  :props="defaultProps"
  ref= "tree"
  >
</el-tree>
 <!-- 创建单击获取路由勾选菜单方法 -->
<el-button @click="getCheckedNodes">通过node获取</el-button>
  </div>
</template>

<script>
export default {
    name: 'User',
    data() {
        return {
            // 定义数组
            menus: [],
           //通过defaultProps绑定数组进行展示 
            defaultProps: {
                label: 'name', //标题
                children: 'children', //层级

            },
        }  
    },
     methods: {
        //获取是否勾选路由菜单结果
      getCheckedNodes() {
        let arr = this.$refs.tree.getCheckedNodes()
          console.log(arr)
      }
    },
    created( ) {
      //将路由信息赋值给数组
      this.menus = [...this.$router.options.routes]
      //输出路由信息
      //  console.log(this.$router.options.routes)
    },
      
};
</script>
<style lang="scss" scoped>
</style>