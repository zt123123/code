<template>
  <div>
    <el-row>
      <el-col :span="8">
        <div class="main1 grid-content bg-purple"></div>
      </el-col>
      <el-col :span="8">
        <div class="main2 grid-content bg-purple-light"></div>
      </el-col>
      <el-col :span="8">
        <div class="main3 grid-content bg-purple"></div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="8">
        <div class="main4 grid-content bg-purple"></div>
      </el-col>
      <el-col :span="8">
        <div class="main5 grid-content bg-purple-light"></div>
      </el-col>
      <el-col :span="8">
        <div class="main6 grid-content bg-purple"></div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  //   引入 ECharts 主模块
  var echarts = require('echarts')

  export default {
    name: 'hello',
    mounted () {
      this.setCharts('.main1', 'bar')
      this.setCharts('.main2', 'pie', {x: {}, y: {}})
      this.setCharts('.main3', 'line')
      this.setCharts('.main4', 'funnel', {x: {}, y: {}})
      this.setCharts('.main5', 'bar')
      this.setCharts('.main6', 'pie', {x: {}, y: {}})
    },
    data () {
      return {
        msg: 'count'
      }
    },
    methods: {
      setCharts (ele, type, option) {
        let domNode = document.querySelector(ele)
        domNode.style.height = (document.body.clientHeight / 2 - 30) + 'px'

        let myChart = echarts.init(domNode)

        let opt = {
          title: {text: 'ECharts 入门示例'},
          tooltip: {},
          legend: {
            orient: 'vertical',
            left: 'left',
            data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
          },
          xAxis: {
            data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
          },
          yAxis: {},
          series: [{
            type: type,
            name: '销量',
            data: [
              {value: 335, name: '衬衫'},
              {value: 310, name: '羊毛衫'},
              {value: 234, name: '雪纺衫'},
              {value: 135, name: '裤子'},
              {value: 1548, name: '高跟鞋'},
              {value: 1548, name: '袜子'}
            ]
          }]
        }
        if (option) {
          opt.xAxis = option.x
          opt.yAxis = option.y
        }
        myChart.setOption(opt)
      }
    }
  }
</script>


<style scoped>

</style>
