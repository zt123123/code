<template>
    <div>
        <el-row :gutter="20">
            <el-col :span="12">
                <div id="line" class="chart"></div>
            </el-col>
            <el-col :span="12">
                <div id="pie" class="chart"></div>
            </el-col>
        </el-row>

        <el-row :gutter="20">
            <el-col :span="12">
                <div id="bar" class="chart"></div>
            </el-col>
            <el-col :span="12">
                <div id="funnel" class="chart"></div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import echarts from 'echarts';

    export default {
        name: 'hello',
        data () {
            return {
                msg: '111111',
                chartArr: [
                    {
                        id: "line",
                        title: "折线图",
                        type: "line",
                        xAxisData: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎'],
                        seriesData: [10, 52, 200, 334, 390, 330, 220]
                    },
                    {
                        id: "pie",
                        title: "饼图",
                        type: "pie",
                        xAxisData: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎'],
                        seriesData: [10, 52, 200, 334, 390, 330, 220]
                    },
                    {
                        id: "bar",
                        title: "条形图",
                        type: "bar",
                        xAxisData: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎'],
                        seriesData: [10, 52, 200, 334, 390, 330, 220]
                    },
                    {
                        id: "funnel",
                        title: "漏斗图",
                        type: "funnel",
                        xAxisData: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎'],
                        seriesData: [10, 52, 200, 334, 390, 330, 220]
                    }
                ]
            }
        },
        mounted(){
            this.renderChart(this.chartArr);
        },
        methods: {
            handleClick: () => {
                alert('111111111')
            },
            renderChart(option){
                let myChart;
                // 基于准备好的dom，初始化echarts实例
                for (let i = 0, len = option.length; i < len; i++) {
                    myChart = echarts.init(document.getElementById(option[i].id));
                    // 绘制图表
                    myChart.setOption({
                        title: {
                            text: option[i].title
                        },
                        tooltip: {},
                        xAxis: {
                            data: option[i].xAxisData
                        },
                        yAxis: {},
                        series: [{
                            name: '销量',
                            type: option[i].type,
                            data: option[i].seriesData
                        }]
                    });
                }
            }
        }
    }
</script>


<style scoped>
    .chart {
        height: 400px;
    }
</style>