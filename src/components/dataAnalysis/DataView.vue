<template>
  <div class="DataView">
    <el-card>
      <div id="main1"></div>
    </el-card>
     <el-card>
      <div id="main2"></div>
    </el-card>
  </div>
</template>

<script>
//导入封装好的数据概览接口方法
import { DataView } from '@/api/api'
export default {
    name: 'DataView',
    data() {
        return {
            
        }
    },
    created() {
     //调用封装好的获取图表信息的方法
     DataView().then(res =>{
      console.log(res)
      if(res.data.status ===200){
        //解构赋值
        let {legend, xAxis, series} = res.data.data
        //调用方法
        this.draw(legend, xAxis, series)
      }
     }).catch(err=> {
      throw err
     })
    },
    // 第一个图表绘制
    mounted() {
      //调用 在main.js上挂载到原型对象身上   初始化
    let myChart = this.$echarts.init(document.getElementById('main1'))
     //调用方法 setOption
    //  myChart.setOption({
    //   title: {
    //        text: '至美优品'
    //   },
    //   tooltip: {

    //   },
    //   xAxis: {
    //     //X 轴
    //     data:['一班', '二班', '三班', '四班', '五班', '六班']
    //   },
    //   yAxis: {

    //   },
    //   series: [{
    //     name: '人数',
    //     type: 'bar' , //类型 柱状图bar line 线图
    //     data: [45, 42, 46, 48, 52, 47 ]
    //   }]

    //  })
    // },
    let option = {
  title: {
    text: '降水vs蒸发',
    subtext: 'Fake Data'
  },
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    data: ['Rainfall', 'Evaporation']
  },
  toolbox: {
    show: true,
    feature: {
      dataView: { show: true, readOnly: false },
      magicType: { show: true, type: ['line', 'bar'] },
      restore: { show: true },
      saveAsImage: { show: true }
    }
  },
  calculable: true,
  xAxis: [
    {
      type: 'category',
      // prettier-ignore
      data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    }
  ],
  yAxis: [
    {
      type: 'value'
    }
  ],
  series: [
    {
      name: 'Rainfall',
      type: 'bar',
      data: [
        2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3
      ],
      markPoint: {
        data: [
          { type: 'max', name: 'Max' },
          { type: 'min', name: 'Min' }
        ]
      },
      markLine: {
        data: [{ type: 'average', name: 'Avg' }]
      }
    },
    {
      name: 'Evaporation',
      type: 'bar',
      data: [
        2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3
      ],
      markPoint: {
        data: [
          { name: 'Max', value: 182.2, xAxis: 7, yAxis: 183 },
          { name: 'Min', value: 2.3, xAxis: 11, yAxis: 3 }
        ]
      },
      markLine: {
        data: [{ type: 'average', name: 'Avg' }]
      }
    }
  ]
};
 //设置传递
 myChart.setOption(option)
    },
    methods: {
//封装图表显示方法  根据返回数据传递参数
       draw(legend, xAxis, series) {
     //初始化echarts 获取容器2
     let myChart1 = this.$echarts.init(document.getElementById('main2'))
     //定义option
     let option = {
          title: {
            text:'会话' //标题
          }, 
          tooltip: {
            trigger: 'axis' //鼠标移动提示信息
          },    
          legend: {
            data: legend
          },
          xAxis: {
            type: 'category', //类目轴
            data: xAxis
          },
          yAxis:{
            type: 'value'
          },
          series: series
     }
     //设置传递
      myChart1.setOption(option)
       }
    },
};
</script>
<style lang="scss" scoped>
// 图表必须设置宽高否则无显示
.DataView{
  width: 100%;
  display: flex;
  justify-content: space-between;
  .el-card{
    width: 50%;
    #main1,#main2{
      height: 500px;
    }
  }
}
</style>