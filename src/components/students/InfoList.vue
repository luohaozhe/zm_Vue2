
<template>
  <div class="infoList">
    <!--新增表单 -->
    <el-form
      :inline="true"
      class="demo-form-inline"
      size="small"
    >
      <el-form-item class="add">
        <el-button type="primary" @click="addStudent">新增</el-button>
      </el-form-item>
    </el-form>

    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="name" label="姓名" align="center">
      </el-table-column>
      <el-table-column prop="sex" label="性别" align="center" width="60px">
      </el-table-column>
      <el-table-column prop="age" label="年龄" align="center" width="60px">
      </el-table-column>
      <el-table-column prop="father" label="父亲" align="center">
      </el-table-column>
      <el-table-column prop="mather" label="母亲" align="center">
      </el-table-column>
      <el-table-column prop="address" label="家庭住址" align="center">
      </el-table-column>
      <el-table-column prop="time" label="入校时间" align="center">
      </el-table-column>
      <el-table-column
        prop="phone"
        label="联系方式"
        align="center"
        width="110px">
      </el-table-column>
      <el-table-column label="操作" align="center" width="200px">
        <!-- 传递每一行数据 -->
        <template slot-scope="scope">
          <el-button
            type="danger"
            size="mini"
            icon="el-icon-edit"
            @click="edit(scope.row)"
          >
          </el-button>
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

    <!-- 新增功能弹出表单 -->
    <!-- Form  设置state动态显示title -->
    <el-dialog :title="state ? '添加学生信息' : '修改学生信息' " :visible.sync="dialogFormVisible" width="500px">
      <el-form :model="form" :rules="rules" ref="form">
        <el-form-item label="姓名" :label-width="formLabelWidth" prop="name">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="性别" :label-width="formLabelWidth" prop="sex">
          <el-radio v-model="form.sex" label="1">男</el-radio>
          <el-radio v-model="form.sex" label="2">女</el-radio>
        </el-form-item>
        <el-form-item label="年龄" :label-width="formLabelWidth" prop="age">
          <el-input v-model="form.age" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item
          label="父亲姓名"
          :label-width="formLabelWidth"
          prop="father"
        >
          <el-input v-model="form.father" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item
          label="母亲姓名"
          :label-width="formLabelWidth"
          prop="mather"
        >
          <el-input v-model="form.mather" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item
          label="家庭住址"
          :label-width="formLabelWidth"
          prop="address"
        >
          <el-input v-model="form.address" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item
          label="入校时间"
          :label-width="formLabelWidth"
          prop="time"
        >
          <el-date-picker
            v-model="form.time"
            format="yyyy 年 MM 月 dd 日"
            value-format="yyyy-MM-dd"
            type="date"
            placeholder="选择日期"
          >
          </el-date-picker>
        </el-form-item>
        <el-form-item
          label="联系方式"
          :label-width="formLabelWidth"
          prop="phone"
        >
          <el-input v-model="form.phone" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="closeInfo('form')">取 消</el-button>
        <el-button 
        type="primary" 
        @click="sure('form')">
        确 定
        </el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
//导入新增 更新 删除信息方法
import {  getInfo, deleteInfo} from '@/api/api'
//导入封装好的新增和修改 查询数据方法
import { changeInfo, getData } from '@/utils/table'
export default {
  name: "InfoList",
  data() {
    return {
      tableData: [],
      dialogFormVisible: false,
      form: {
        name: "",
        sex: "1",
        age: "",
        father: "",
        mather: "",
        address: "",
        time: "",
        phone: "",
       
      },
      formLabelWidth: "80px",
       
      rules: {
        name: [{required: true, message:'请输入姓名', trigger: 'blur'}],
        sex: [{required: true}],
        age: [{required: true, message:'请输入年龄', trigger: 'blur'}],
        address: [{required: true, message:'请输入地址', trigger: 'blur'}],
        time: [{required: true, message:'请选择入学时间', trigger: 'blur'}],
        phone: [{required: true, message:'请输入联系方式', trigger: 'blur'}],

      },
      state: true,
      total: 0,
    };
  },
  //调用获取数据方法加载数据
   created () {
    this.getData();
  },
  methods: {
    //编辑方法
    edit(row) {
      this.state = false
      //展示数据信息(通过扩展赋值)
      this.form = {...row}
      this.dialogFormVisible = true;
    },
    //取消按钮
    closeInfo(form) {
    this.dialogFormVisible = false
    this.$refs[form].resetFields()
    },
    //删除方法
    del(row) {
      console.log(row)
      //弹出提示框确认是否删除
      this.$alert('你确定要删除吗？', '提示', {
        confirmButtonText: '确定',
        callback: () =>{
          deleteInfo(row.id).then(res =>{
           if(res.data.status === 200) {
            //重新加载数据
            this.getData()
            //删除成功弹出消息框
            this.$message({message: res.data.message, type: 'success'})
           }
      })
        }
      })
     
    },
    
    //新增方法
    addStudent() {
       // 表格数据置空
     this.form = {
        name: "",
        sex: "1",
        age: "",
        father: "",
        mather: "",
        address: "",
        time: "",
        phone: "",
        
      }
      
      //动态title
      this.state = true
      
      //弹出框
      this.dialogFormVisible = true;
      //校验清空
      // this.$refs['form'].resetFields()
     
     
    },
    
    //封装获取信息列表数据方法
    getData () {
       getInfo().then(res => {
        if(res.data.status === 200) {
          // 数据赋值
           this.tableData = res.data.data
          //总条数更新
           this.total = res.data.total
        }
       
       }) 
    },
    //确认按钮
    sure(form) {
      //信息检验
      this.$refs[form].validate((valid) => {
        if (valid) {
          // 定义请求方法
          let methods = ''
          // 判断新增还是修改
          this.state ? methods = 'post' : methods = 'put'
          //调用封装好的新增修改方法:参数 this 请求方法 请求数据 回调函数 
          changeInfo(this, methods, '/info', this.form, getData)

        }
       })
    },
  },
 
};
</script>
<style lang="scss" scoped>
.infoList {
  
  .demo-form-inline,
  .el-form-item {
    .add{
    margin: 0;
  }
    text-align: left;
    margin: 18px;
  }
 
    .el-pagination {
    text-align: left;
    margin: 20px;
  }
}
</style>