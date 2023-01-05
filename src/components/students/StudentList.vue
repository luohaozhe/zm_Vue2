<template>
  <div class="studentList">
    <!-- 查询 重置表单 -->
    <el-form :inline="true" :model="formInline" class="demo-form-inline" size="small">
      <el-form-item label="姓名">
        <el-input
          v-model="formInline.name"
          placeholder="请输入姓名查询"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="find">查询</el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="reset">重置</el-button>
      </el-form-item>
    </el-form>

    <!--表单分页 第一组： 1-10 第二组 11-20 规律 slice(当前页数 - 1)* 每页条数, 当前页数*当前条数 -->
    <!-- <el-table :data="tableData.slice((currentPage - 1)* pageSize, currentPage * pageSize)" border style="width: 100%"> -->
    <el-table :data="compData" border style="width: 100%">
      <el-table-column prop="name" label="姓名" align="center">
      </el-table-column>
      <el-table-column prop="sex_text" label="性别" align="center" width="70px">
      </el-table-column>
      <el-table-column prop="age" label="年龄" align="center" width="70px">
      </el-table-column>
      <el-table-column prop="number" label="学号" align="center">
      </el-table-column>
      <el-table-column prop="class" label="班级" align="center">
      </el-table-column>
      <el-table-column prop="state_text" label="状态" align="center">
      </el-table-column>
      <el-table-column prop="address" label="地址" align="center">
      </el-table-column>
      <el-table-column
        prop="phone"
        label="联系方式"
        align="center"
        width="110px"
      >
      </el-table-column>
      <el-table-column label="操作" align="center">
        <!-- 传递每一行数据 -->
        <template slot-scope="scope">
          <el-button
            type="danger"
            size="mini"
            icon="el-icon-delete"
            @click="del(scope.row)"
          >
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页器 -->
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[5, 10, 20, 30, 50]"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
    >
    </el-pagination>
  </div>
</template>
s
<script>
//导入封装好的查询学生列表信息方法
import { students } from "@/api/api.js";
//导入封装好的删除学生列表信息方法
import { studentDel } from "@/api/api.js";

import { FormItem } from "element-ui";
export default {
  name: "StudentList",
  data() {
    return {
      tableData: [], //表格数据
      currentPage: 1, //当前页数
      pageSize: 10, //每页显示条数
      total: 0, //总条数
      formInline: {
        name: ''
      }
    };
  },
  computed: {
    compData() {
      return this.tableData.slice(
        (this.currentPage - 1) * this.pageSize,
        this.currentPage * this.pageSize
      );
    },
  },
  created() {
    this.getData();
  },
  methods: {
    //数据查询方法
    find () {
      console.log(this.formInline)
      this.getData(this.formInline);
    },
    //数据重置方法
    reset() {
      console.log(this.formInline)
      this.formInline = {}
      this.getData(this.formInline);
    },
    // 分页器实现方法
    handleSizeChange(val) {
      //动态更新每页显示条数
      this.pageSize = val;
      this.currentPage = 1;
      // console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      //动态更新显示第几页数据信息
      this.currentPage = val;
      // console.log(`当前页: ${val}`);
    },
    //封装获取学生信息方法
    getData(params) {
      students(params).then((res) => {
        if (res.data.status === 200) {
          //将获取的数据赋值给tableData: [],
          this.tableData = res.data.data;
          this.total = res.data.total;
          console.log(res);
          //foreach遍历tableData: []表格数据转换
          this.tableData.forEach((item) => {
            // 尽量不要修改原数据 使用item.sex_text字段
            item.sex === 1 ? (item.sex_text = "男") : (item.sex_text = "女");
            item.state === 1
              ? (item.state_text = "已入学")
              : item.state === 2
              ? (item.state_text = "未入学")
              : (item.state_text = "休学中");
          });
        }
      });
    },
    //删除学生数据方法
    del(row) {
      console.log(row);
      studentDel(row.id).then((res) => {
        console.log(res);
        if (res.data.status === 200) {
          // 删除成功提示
          this.$message({ message: "删除数据成功", type: "success" });
          //刷新数据
          this.getData();
        }
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.studentList {
 .demo-form-inline, .el-form-item{
    text-align: left;
    margin: 5px;
  }
  .el-pagination {
    text-align: left;
    margin: 20px;
  }
}
</style>