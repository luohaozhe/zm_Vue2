//表格增删改查操作方法的封装

//获取信息表格数据
export function getData(root, url, params) {
    root.service.get(url, {params: params || {} })
      .then(res => {
        if(res.data.status === 200) {
           // 数据赋值
           root.tableData = res.data.data
          //总条数更新
          root.total = res.data.total
       
        }
      })
      .catch(err => {
        //错误扑捉
        throw err
      })
}



//信息列表新增、修改方法封装
import qs from 'qs'
export function changeInfo(root, method, url, form, callback) {
//    参数转换
   let data = qs.stringify(form)
   root.service[method] (url, data)
   .then(res => {
    if (res.data.status === 200){
        //调用回调函数方法更新新增的数据
       callback(root, url)
        //隐藏弹出框
        root.dialogFormVisible = false
        //清空验证
        root.$refs['form'].resetFields()
        //成功弹窗
        root.$message({type: 'success', message:res.data.message})
       
      }
   })
   .catch(err => {
    //错误扑捉
    throw err
  })
}



//信息列表删除方法的封装
//将 this 改成 root --全局使用
export function delData (root, url, id, callFun) {
//弹出提示框确认是否删除
root.$alert('你确定要删除吗？', '提示', {
    confirmButtonText: '确定',
    callback: () =>{
      root.service.delete(`${url}/${id}`).then(res => {
        if(res.data.status === 200) {
            //重新加载数据
            callFun(root, url)
            //删除成功弹出消息框
            root.$message({message: res.data.message, type: 'success'})
           }    
      })
      .catch(err => {
        //错误扑捉
        throw err
      })
    }
  })
}


//作业列表数据查询封装          this 地址  参数    定义数组解析completed
export function getTableData (root, url, params, arr) {
  root.service.get(url, {params: params || {} })
  .then(res => {
    if(res.data.status === 200) {
      //赋值
      root.tableData = res.data.data
      //总条数
      root.total = res.data.total
      //遍历表格数据
      root.tableData.map(item => {
        //遍历数组arr
        arr.map(aItem => [
          //如果为true 则为是 否则为否
          item[aItem] ? item[aItem + '_text'] = '是' : item[aItem + '_text'] = '否'
        ])
      })
       //关闭加载动画
       root.loading = false
    }
  })
  .catch(err => {
    throw err
  })
}