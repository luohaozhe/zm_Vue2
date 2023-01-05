<template>
  <div class="SetWork">
    <!--         表格数据       加载动画             边框   样式 -->
    <el-table :data="tableData" v-loading="loading" border style="width: 100%">
      <el-table-column prop="id" label="用户ID" align="center">
      </el-table-column>
      <el-table-column prop="userId" label="所属班级" align="center">
      </el-table-column>
      <el-table-column prop="title" label="作业名称" align="center">
      </el-table-column>
      <el-table-column prop="completed_text" label="完成情况" align="center">
      </el-table-column>
    </el-table>
   <Page :total="total" :url="url"/>
  </div>
</template>

<script>
// 导入封装好的分页器组件
import Page from '../common/Pageing.vue'
export default {
  name: "SetWork",
  // 注册组件
  components:{
    Page
  },
  data() {
    return {
      tableData: [],
      total: 0, //总条数
      loading: true, //加载动画
      url: '/works'
    };
  },

};
</script>
<style lang="scss" scoped>
.SetWork {
  .el-pagination {
    text-align: left;
    margin-top: 20px;
  }
}
</style>