function drawPie(id){
	var pieChart = echarts.init(document.getElementById(id));
	pieChart.setOption(pie_option);
}

function drawLine(id){
	var lineChart = echarts.init(document.getElementById(id));
	lineChart.setOption(line_option);
}

var colors = ['#5793f3', '#d14a61', '#675bba'];

var bar_option = {
	title: {
		text: '柱状图',
		x: 'center'
	},
	color: ['#3398DB'],
	legend: {
		orient: 'vertical',
		left: 'left',
		data: ['直接访问']
	},
	tooltip: {
		trigger: 'axis',
		axisPointer: { // 坐标轴指示器，坐标轴触发有效
			type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
		}
	},
	grid: {
		left: '3%',
		right: '5%',
		bottom: '3%',
		containLabel: true
	},
	toolbox: {
		feature: {
			saveAsImage: {}
		}
	},
	xAxis: [{
		type: 'category',
		data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
		axisTick: {
			alignWithLabel: true
		}
	}],
	yAxis: [{
		type: 'value'
	}],
	series: [{
		name: '直接访问',
		type: 'bar',
		barWidth: '60%',
		data: [10, 52, 200, 334, 390, 330, 220]
	}]
};

var line_option = {
	tooltip: {
		trigger: 'axis'
	},
	legend: {
		orient: 'vertical',
		left: 'left',
		data: ['收入(元)']
	},
	grid: {
		left: '5%',
		right: '5%',
		bottom: '10%',
		containLabel: true
	},
	toolbox: {
		feature: {}
	},
	xAxis: {
		type: 'category',
		boundaryGap: false,
		data: ['0点', '3点', '6点', '9点', '12点', '15点', '18点', '21点']
	},
	yAxis: {
		type: 'value'
	},
	series: [{
		name: '收入(元)',
		type: 'line',
		stack: '总量',
		data: [120, 132, 101, 134, 90, 300, 210]
	}]
};

var smline_option = {
	color: colors,
	title: {
		text: "曲线图",
		x: 'center'
	},
	tooltip: {
		trigger: 'none',
		axisPointer: {
			type: 'cross'
		}
	},
	legend: {
		orient: 'vertical',
		left: 'left',
		data: ['2015 降水量', '2016 降水量']
	},
	grid: {
		top: 70,
		right: '5%',
		bottom: 50
	},
	toolbox: {
		feature: {
			saveAsImage: {}
		}
	},
	xAxis: [{
			type: 'category',
			axisTick: {
				alignWithLabel: true
			},
			axisLine: {
				onZero: false,
				lineStyle: {
					color: colors[1]
				}
			},
			axisPointer: {
				label: {
					formatter: function(params) {
						return '降水量  ' + params.value +
							(params.seriesData.length ? '：' + params.seriesData[0].data : '');
					}
				}
			},
			data: ["2016-1", "2016-2", "2016-3", "2016-4", "2016-5", "2016-6", "2016-7", "2016-8", "2016-9", "2016-10", "2016-11", "2016-12"]
		},
		{
			type: 'category',
			axisTick: {
				alignWithLabel: true
			},
			axisLine: {
				onZero: false,
				lineStyle: {
					color: colors[0]
				}
			},
			axisPointer: {
				label: {
					formatter: function(params) {
						return '降水量  ' + params.value +
							(params.seriesData.length ? '：' + params.seriesData[0].data : '');
					}
				}
			},
			data: ["2015-1", "2015-2", "2015-3", "2015-4", "2015-5", "2015-6", "2015-7", "2015-8", "2015-9", "2015-10", "2015-11", "2015-12"]
		}
	],
	yAxis: [{
		type: 'value'
	}],
	series: [{
			name: '2015 降水量',
			type: 'line',
			xAxisIndex: 1,
			smooth: true,
			data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
		},
		{
			name: '2016 降水量',
			type: 'line',
			smooth: true,
			data: [3.9, 5.9, 11.1, 18.7, 48.3, 69.2, 231.6, 46.6, 55.4, 18.4, 10.3, 0.7]
		}
	]
};
var free = 105, full = 18;
var pie_option = {
	title: {
		text: '宏业楼停车场',
		subtext: '今日收入：78元',
		x: 20,
		y: 20
	},
	color: ['#00a996', '#3298da'],
	legend: {
		orient: 'vertical',
		x: 20,
		y: 'center',
		data: ['占用'+free, '空闲'+full]
	},
	tooltip: {
		trigger: 'item',
		formatter: "{a} <br/>{b} : {c} ({d}%)"
	},
	calculable: false,
	series: [{
		name: '比例',
		type: 'pie',
		center: ['60%', '50%'],
		radius: ['45%', '80%'],
		itemStyle: {
			normal: {
				label: {
					formatter: "{d}%",
					show: true,
					position: "inner"
				},
				labelLine: {
					show: false
				}
			},
			emphasis: {
				label: {
					show: true,
					position: 'center',
					textStyle: {
						fontSize: '18',
						fontWeight: 'normal'
					}
				}
			}
		},
		data: [
			{ value: free, name: '占用'+free},
			{ value: full, name: '空闲'+full}
		]
	}]

	//	  title : {
	//		    text: '宏业楼停车场',
	//		    subtext: '今日收入：78元',
	//		    x: 20,
	//		    y:20
	//	  },
	//	  legend: {
	//		    orient: 'vertical',
	//		    x: 20,
	//		    y:'center',
	//		    data:['占用','空闲']
	//	  },
	//		 tooltip : {
	//	      trigger: 'item',
	//	      formatter: "{a} <br/>{b} : {c} ({d}%)"
	//	  },
	//		color:['#00a996','#3298da'],
	//	  toolbox: {
	//	      show : true,
	//	      feature : {}
	//	  },
	//	  calculable : true,
	//	  series : [
	//	      {
	//	          name:'占用率',
	//	          type:'pie',
	//	          radius : ['50%', '40%'],
	//	  		center: ['50%', '60%'],
	//	          itemStyle : {
	//	              normal : {
	//	                  label : {
	//	                      show : true,
	//	                      position: "inner"
	//	                  },
	//	                  labelLine : {
	//	                      show : false
	//	                  }
	//	              },
	//	              emphasis : {
	//	                  label : {
	//	                      show : true,
	//	                      position : 'center',
	//	                      textStyle : {
	//	                          fontSize : '10',
	//	                          fontWeight : 'bold'
	//	                      }
	//	                  }
	//	              }
	//	          },
	//	          data:[
	//		            {value:39, name:'占用'},
	//	              {value:61, name:'空闲'}
	//	          ]
	//	      }
	//	  ]
};

//barChart.setOption(bar_option);
//lineChart.setOption(line_option);
//smlineChart.setOption(smline_option);
