<template>
  <div class="WorkList">
      <!--         表格数据       加载动画             边框   样式 -->
     <el-table :data="tableData" v-loading="loading" border style="width: 100%">
      <el-table-column prop="id" label="用户ID" align="center">
      </el-table-column>
      <el-table-column prop="userId" label="所属班级" align="center" >
      </el-table-column>
      <el-table-column prop="title" label="作业名称" align="center" >
      </el-table-column>
      <el-table-column prop="completed_text" label="完成情况" align="center">
      </el-table-column>
    </el-table>
     <!-- 分页器 -->
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="Page"
      :page-sizes="[5, 10, 20, 30, 50]"
      :page-size="size"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
    >
    </el-pagination>
  </div>
</template>

<script>
//导入封装好的获取作业列表数据的方法
import { getTableData } from '@/utils/table'
export default {
    name: 'WorkList',
    data() {
      return {
        tableData: [],
        Page: 1, //当前页数
        size: 5, //每页显示条数
        total: 0, //总条数
        loading: true //加载动画
      }
    },
    created() {
      //后端分页请求传入page 和size
      getTableData(this, '/works', {page: this.page, size: this.size}, ['completed'])
    },
    methods: {
      // 分页器实现方法
    handleSizeChange(val) {
      //动态更新每页显示条数
      this.size = val;
      this.Page = 1;
      // 重新发请求
      getTableData(this, '/works', {page: this.page, size: val}, ['completed'])
      // console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      //动态更新显示第几页数据信息
      this.Page = val;
       // 重新发请求
      getTableData(this, '/works', {page: val, size: this.size}, ['completed'])
      // console.log(`当前页: ${val}`);
    },
    }
};
</script>
<style lang="scss" scoped>
.WorkList{
  .el-pagination{
    text-align: left;
    margin-top: 20px;
  }
}
</style>