//  分页器的封装
<template>
  <div class="Paging">
    <!-- 分页器 -->
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="Page"
      :page-sizes="[5, 10, 20, 30, 50]"
      :page-size="size"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
      :url= "url"
    >
    </el-pagination>
  </div>
</template>

<script>
//导入封装好的获取作业列表信息
import { getTableData } from "@/utils/table";
export default {
    //接受传递过来的参数
    props:{
        "total": Number,
        "url": String,
    },
    data() {
    return {
     
      Page: 1, //当前页数
      size: 5, //每页显示条数
      // total: 0, //总条数
      loading: true, //加载动画
      // url: '/works'
    };
  },
  created() {
    //后端分页请求传入page 和size
    //使用this.$parent
    getTableData(this.$parent, "/works", { page: this.page, size: this.size }, [
      "completed",
    ]);
  },
  methods: {
    // 分页器实现方法
    handleSizeChange(val) {
      //动态更新每页显示条数
      this.size = val;
      this.Page = 1;
      // 重新发请求
      getTableData(this.$parent, "/works", { page: this.page, size: val }, [
        "completed",
      ]);
      // console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      //动态更新显示第几页数据信息
      this.Page = val;
      // 重新发请求
      getTableData(this.$parent, "/works", { page: val, size: this.size }, [
        "completed",
      ]);
      // console.log(`当前页: ${val}`);
    },
  },
};
</script>
<style lang="less" scoped>
.paging {
  .el-pagination {
    text-align: left;
    margin-top: 20px;
  }
}
</style>