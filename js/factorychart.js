$(function(){
	pieChar();
	barChar([20,60,82,60]);
	linchar();
	barschar();
	radarchar();
	progress1char();
	progress2char();
	mapchar();
});
window.onresize = function(){
    pieChart.resize();
    barChart.resize();    //若有多个图表变动，可多写
    linchart.resize();
    barschart.resize();
    radarchart.resize();
    progress1chart.resize();
	 progress2chart.resize();
	 mapchart.resize()

}
//饼状图
var pieChart="";
function pieChar(){
	pieChart= echarts.init(document.getElementById("pie-chart"));
	option = {
		color:["#3285ff","#d14a61","#aaa"],
	    tooltip: {
	        trigger: 'item',
	        formatter: "{a} <br/>{b}: {c} ({d}%)"
	    },
	    series: [
	        {
	            name:'访问来源',
	            type:'pie',
	            selectedMode: 'single',
	            radius: [0, '60%'],
				center:["50%","42%"],
	           label: {
	                normal: {
	                    position: 'outside',
	                    formatter: "{b}:{d}%"    
	                }
	            }, 
	            data:[
	                {value:556, name:'正常'},
	                {value:100, name:'告警',selected:true},
	                {value:30, name:'离线'}
	            ]
	        }
	    ]
	};
	pieChart.setOption(option);
}
//柱状图
var barChart="";
function barChar(data){
	barChart= echarts.init(document.getElementById("bar-chart"));
	 option = {
	 	tooltip: {
	        formatter:'{b}:{c}'
	    },
	 	grid: {
	        left: '15%',
	        right: '15%',
	        bottom: '20%',
	        top: '20%',
	       
	        containLabel: true,
	        z: 22
	    },
	    xAxis: {
	        data: ["NHN","TP","NP","COD"],       //横坐标
	        axisLabel:{
	            textStyle: {
	                color:'#fff',
	                 fontSize:12,
	            }
	        },
	        axisLine: {
	            lineStyle: {
	                type: 'dashed',
	                color:'#24214e',
	                width:'1  ',                                                //坐标线的宽度
	            }
	        },
	    },
	    yAxis: {
	    	name: "（数次）",
	    	nameTextStyle:{
	    		color:"#fff"
	    	},
	    	nameLocation:"center",
	    	nameGap:30,
	    	nameRotate:-270,
	        axisLabel: {
	            textStyle: {
	                color: '#fff',
	                 fontSize:12,//坐标值得具体的颜色
	            }
	        },
	        axisLine: {
	             lineStyle: {
	                type: 'dashed',
	                color:'#24214e',
	                width:'1  ',                                                //坐标线的宽度
	              
	            }
	        },
	        splitLine: {
	            lineStyle: {
	                color: "#24214e",
	            }
	        }
	    },
	    series: [{
	        type: 'bar',
	        barWidth:20,
	        data:data,
	        /*label: {
                normal: {
                    show: true,
                    position: "top",
                    textStyle: {
                        color: "#fffff",
                        fontSize: 12
                    }
                }
            },*/
	        itemStyle: {
	            normal: {
	                color: new echarts.graphic.LinearGradient(
	                    0, 0, 0, 1,
	                    [
	                        {offset: 0, color: '#4f92fa'},                   //柱图渐变色
	                        {offset: 0.5, color: '#565cf8'},                 //柱图渐变色
	                        {offset: 1, color: '#5d29f7'},                   //柱图渐变色
	                    ]
	                )
	            }
	        },
	    }]
	};
barChart.setOption(option)	
	
}
//折线图
var linchart="";
function linchar(){
	linchart= echarts.init(document.getElementById("line-chart"));
	option = {
		tooltip: {
	        formatter:'{b}&nbsp; {c}次'
	    },
		grid: {
	        left: '15%',
	        right: '15%',
	        bottom: '20%',
	        top: '20%',
	       
	        containLabel: true,
	        z: 22
	    },
	    xAxis: {
	        data: ['00:00', '06:00', '12:00', '18:00','24:00'],
	        axisLabel:{
	            textStyle: {
	                color:'#fff',
	                 fontSize:12,
	            }
	        },
	        axisLine: {
	            lineStyle: {
	                type: 'dashed',
	                color:'#24214e',
	                width:'1  ',                                                //坐标线的宽度
	            }
	        },
	    },
	    yAxis: {
	    	name: "（数次）",
	    	nameTextStyle:{
	    		color:"#fff"
	    	},
	    	nameLocation:"center",
	    	nameGap:30,
	    	nameRotate:-270,
	        axisLabel: {
	            textStyle: {
	                color: '#fff',
	                 fontSize:12,//坐标值得具体的颜色
	            }
	        },
	        axisLine: {
	             lineStyle: {
	                type: 'dashed',
	                color:'#24214e',
	                width:'1  ',                                                //坐标线的宽度
	              
	            }
	        },
	        splitLine: {
	            lineStyle: {
	                color: "#24214e",
	            }
	        }
	        
	    },
	    series: [{
	        type: 'line',
	        data:[40, 182, 191, 234, 290],
	        itemStyle : {
	            normal : {
	                lineStyle:{
	                    width:3,//折线宽度
	                },
	                 color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
	                    offset: 1,
	                    color: '#508ff6' // 0% 处的颜色
	                }, {
	                    offset: 0,
	                    color: '#2c137a' // 100% 处的颜色
	                }], false),
	                opacity: 0.4
	            }
	        },
	    }]
	};
	linchart.setOption(option)	
}
//柱状图2
var barschart=""
function barschar(){
     barschart = echarts.init(document.getElementById("bars-chart"));
     option = {
     	color:["#fd8f1e","#7cb5ec","#4280f1","#FF768F"],
	    tooltip: {
	        trigger: 'axis',
	        axisPointer: { // 坐标轴指示器，坐标轴触发有效
	            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
	        }
	    },
   		grid: {
	        left: '10%',
	        right: '15%',
	        bottom: '20%',
	        top: '20%',
	        containLabel: true,
	        z: 22
	    },
   
	    legend: {
	        data: ['进样异常', '缺试剂A', '缺试剂B', '消解异常'],
	        textStyle: {
	            fontSize: 12,
	            color:"#fff"
	        },
	        icon:"rect",
	        itemWidth:10,
	        itemHeight:10,
	        bottom:"3%"
	    },
   
	    xAxis: {
	    	name:'次数',
	    	nameTextStyle:{
	    		color:"#fff"
	    	},
	        axisLabel:{
	            textStyle: {
	                color:'#fff',
	                 fontSize:12,
	            }
	        },
	        splitLine: {
	            lineStyle: {
					color: "#24214e",
					type: 'dashed',
	            }
	        },
			 axisLine: {
	            lineStyle: {
	                type: 'dashed',
	                color:'#24214e',
	                width:'1  ',                                                //坐标线的宽度
	            }
	        }
	    },
	    yAxis: {
	        data: ['2018.11', '2018.12', '2019.01', '2019.02', '2019.03'],
	        axisLabel: {
		            textStyle: {
		                color: '#fff',
		                 fontSize:12,//坐标值得具体的颜色
		            }
		        },
		        axisLine: {
		             lineStyle: {
		                type: 'dashed',
		                color:'#24214e',
		                width:'1  ',                                                //坐标线的宽度
		              
		            }
		        },
	    },
	    series: [{
	            name: '进样异常',
	            type: 'bar',
	            stack: '总量',
	            barWidth:20,
	            label: {
	                normal: {
	                    show: false,
	                    position: 'insideRight'
	                }
	            },
	            data: [6, 4, 10, 8, 7]
	        }, {
	            name: '缺试剂A',
	            type: 'bar',
	            barWidth:20,
	            stack: '总量',
	            label: {
	                normal: {
	                    show: false,
	                    position: 'insideRight'
	                }
	            },
	            data: [8, 10, 4, 5, 6]
	        }, {
	            name: '缺试剂B',
	            type: 'bar',
	            stack: '总量',
	            barWidth:20,
	            label: {
	                normal: {
	                    show: false,
	                    position: 'insideRight'
	                }
	            },
	            data: [6, 4, 10, 8, 7]
	        }, {
	            name: '消解异常',
	            type: 'bar',
	            stack: '总量',
	            barWidth:20,
	            label: {
	                normal: {
	                    show: false,
	                    position: 'insideRight'
	                }
	            },
	            data: [6, 4, 10, 8, 7]
	        },
	
	    ]
	    
	};
     barschart.setOption(option)	     
};
//雷达图
var radarchart="";
function radarchar(){
	radarchart = echarts.init(document.getElementById("radar-chart"));
	option = {
	    color: ['#654DDF', '#3383fc'],
	    tooltip: {},
	    radar: [{
	        indicator: [{
	                text: '进样异常',
	                max: 100
	            },
	            {
	                text: '缺试剂A',
	                max: 100
	            },
	            {
	                text: '消解异常',
	                max: 100
	            },
	            {
	                text: '缺纯水',
	                max: 100
	            },
	            {
	                text: '缺试剂B',
	                max: 100
	            }
	        ],
	        center: ['50%', '60%'],
	        radius: '65%',
	        startAngle: 90,
	        name: {
	            formatter: '{value}',
	            textStyle: {
	                fontSize: 12, //外圈标签字体大小
	                color: '#FFF' //外圈标签字体颜色
	            }
	        },
	        splitArea: { // 坐标轴在 grid 区域中的分隔区域，默认不显示。
	            show: true,
	            areaStyle: { // 分隔区域的样式设置。
	                color: [], // 分隔区域颜色。分隔区域会按数组中颜色的顺序依次循环设置颜色。默认是一个深浅的间隔色。
	            }
	        },
	        axisLine: { //指向外圈文本的分隔线样式
	            lineStyle: {
	                color: '#24214e'
	            }
	        },
	        splitLine: {
	            lineStyle: {
	                color: '#24214e', // 分隔线颜色
	                width: 1, // 分隔线线宽
	            }
	        }
	    }, ],
	    series: [{
	        name: '雷达图',
	        type: 'radar',
	        data: [
	        {
	            name: '2016',
	            value: [85, 65, 55, 90, 82],
	            areaStyle: {
	                normal: { // 单项区域填充样式
	                    opacity: 1 // 区域透明度
	                }
	            },
	            symbolSize: 0, // 单个数据标记的大小，可以设置成诸如 10 这样单一的数字，也可以用数组分开表示宽和高，例如 [20, 10] 表示标记宽为20，高为10。
	        }, {
	            name: '2017',
	            value: [50, 80, 45, 30, 75],
	            symbolSize:0,
	            areaStyle: {
	                normal: { // 单项区域填充样式
	                    color: {
	                        type: 'linear',
	                        x: 0, //右
	                        y: 0, //下
	                        x2: 1, //左
	                        y2: 1, //上
	                        colorStops: [{
	                            offset: 0,
	                            color: '#3cd2f3'
	                        }, 
	                        {
	                            offset: 1,
	                            color: '#306eff'
	                        }],
	                        globalCoord: false
	                    },
	                    opacity: 1 // 区域透明度
	                    
	                }
	            },
	        }]
	    }]
	};
	radarchart.setOption(option)		
}
//进度条1
var progress1chart="";
function progress1char(){
	progress1chart = echarts.init(document.getElementById("progress1-chart"));
	var baifenbi = [0.333, 0.444, 0.555, 0.777, 0.888];
	var grayBar = [1, 1, 1, 1, 1, ];
	var paiming = [ 5, 4, 3, 2, 1];
	var xingm = ['车间E1', '车间D1', '车间C1', '车间B1', '车间A1'];
	option = {
	    title: {
	        text: '2019年 第一季度',
	        left: '75%',
	        top:"20",
	        textStyle:{
	        	color:"#fff",
	        	fontSize:12
	        }
	    },
	     grid: {
	         left: '15%',  //如果离左边太远就用这个......
	         right: '15%',
	         bottom: '5%',
	         top: '20%',
	         containLabel: true
	     },
	    xAxis: [{
	            show: false,
	       },
	        {
	            show: false,
	        }
	    ],
	    yAxis: {
	        type: 'category',
	        axisLabel: {
	            show: true, //让Y轴数据不显示
	        },

	        axisTick: {
	            show: false, //隐藏Y轴刻度
	        },
	        axisLine: {
	            show: false, //隐藏Y轴线段
	        },
	    },
	    series: [
	        //背景色
	        {
	            show: true,
	            type: 'bar',
	            barGap: '-100%',
	            barWidth: '20%', //统计条宽度 
	            itemStyle: {
	                normal: {
	                    barBorderRadius: 50,
	                    color: 'rgba(41, 55, 94)'
	                },
	            },
	            z: 1,
	            data: grayBar,
	        },
	        //蓝条
	        {
	            show: true,
	            type: 'bar',
	            barGap: '-100%',
	            barWidth: '15%', //统计条宽度
	            itemStyle: {
	                normal: {
	                    barBorderRadius: 50, //统计条弧度
	                    color: {
	                        colorStops: [{
	                             offset: 0,
	                             color: '#5d29f7' // 0% 处的颜色
	                         }, {
	                             offset: 1,
	                             color: '#5093fb' // 100% 处的颜色
	                         }],
	                        globalCoord: false, // 缺省为 false
	
	                    }
	                },
	            },
	            max: 1,
	            label: {
	                normal: {
	                    show: true,
	                    textStyle: {
	                        color: '#fff', //百分比颜色
	                    },
	                    position: [0, '-20'],
	                    rich: { //富文本
	                        yellow: {
	                            color: '#FEC735',
	                        }
	                    },
	                    formatter: function(data) {
	                        //富文本固定格式{colorName|这里填你想要写的内容}
	                        if(paiming[data.dataIndex] == 1||paiming[data.dataIndex] == 2||paiming[data.dataIndex] == 3){
	                        	return '{yellow|' + paiming[data.dataIndex] + '  ' + xingm[data.dataIndex] + '}';
	                        }else{
	                        	return paiming[data.dataIndex] + '  ' + xingm[data.dataIndex] 
	                        }
	                       
	                    },
	                    
	                }
	            },
	          data: baifenbi,
	        },
	        
	    ]
	};
	
	progress1chart.setOption(option)
}
//点击切换数据
function DataSwitch(obj,num){
	$(obj).removeClass("Datasame");
	$(obj).siblings().addClass("Datasame")
	if(num==1){
		$(obj).parent().prev().addClass("Defaultgray");
		$(obj).parent().next().removeClass("Defaultgray");
		
		barChar([100,20,60,81])
		
		
	}else{
		barChar()
		$(obj).parent().prev().removeClass("Defaultgray");
		$(obj).parent().next().addClass("Defaultgray");
		barChar([10,20,50,81])
	}
		
	
}





var progress2chart="";
function progress2char(){
	progress2chart = echarts.init(document.getElementById("progress2-chart"));
	var baifenbi = [0.333, 0.444, 0.555, 0.777, 0.888];
	var grayBar = [1, 1, 1, 1, 1, ];
	var xingm = ['园区一', '园区二', '园区三', '园区四', '园区五'];
	option = {
	    title: {
	        text: '设备故障率排名',
	        left: '10%',
	        top:"10%",
	        textStyle:{
	        	color:"#a1addc",
	        	fontSize:14
	        }
	    },
	     grid: {
	         left: '30%',  //如果离左边太远就用这个......
	         right: '25%',
	         bottom: '20%',
	         top: '20%',
	         containLabel: true
	     },
	    xAxis: [{
	            show: false,
	       },
	        {
	            show: false,
	        }
	    ],
	    yAxis: {
	        type: 'category',
	        axisLabel: {
	            show: true, //让Y轴数据不显示
	        },

	        axisTick: {
	            show: false, //隐藏Y轴刻度
	        },
	        axisLine: {
	            show: false, //隐藏Y轴线段
	        },
	    },
	    series: [
	        //背景色
	        {
	            show: true,
	            type: 'bar',
	            barGap: '-100%',
	            barWidth: '10%', //统计条宽度 
	            itemStyle: {
	                normal: {
	                    barBorderRadius: 50,
	                    color: 'rgba(41, 55, 94)'
	                },
	            },
	            label: {
	                normal: {
	                    show: true,
	                    textStyle: {
	                        color: '#fff', //百分比颜色
	                    },
	                     position: 'right',
	                    formatter: function(data) {
	                    	return baifenbi[data.dataIndex]+'%'  
	                    },
	                    
	                }
	            },
	            z: 1,
	            data: grayBar,
	        },
	        //蓝条
	        {
	            show: true,
	            type: 'bar',
	            barGap: '-100%',
	            barWidth: '10%', //统计条宽度
	            itemStyle: {
	                normal: {
	                    barBorderRadius: 50, //统计条弧度
	                    color:"#ffa322"
	                },
	            },
	            max: 1,
	            label: {
	                normal: {
	                    show: true,
	                    textStyle: {
	                        color: '#fff', //百分比颜色
	                    },
	                    position:"left",
	                    formatter: function(data) {
	                        //富文本固定格式{colorName|这里填你想要写的内容}
	                        		return  xingm[data.dataIndex]      
	                    },
	                    
	                }
	            },
	          data: baifenbi,
	        },
	        
	    ]
	};
	progress2chart.setOption(option)
}



//地图
var mapchart="";
function mapchar(){
    var convertData = [
        { name: '园区一', value: [120.745907,27.973363, 75] },
	    { name: '园区二', value: [120.736589,27.877478, 75] },
	    { name: '园区三', value: [120.808308,27.831611, 75] },
	    { name: '园区四', value: [120.84366,27.941286, 75] },
	    { name: '园区五', value: [120.880392,27.882515, 75] },
    ]
    console.log(convertData);
    var uploadedDataURL = "../js/3303.json";
   		mapchart= echarts.init(document.getElementById("map-chart"));
	$.getJSON(uploadedDataURL, function(geoJson) {
    	echarts.registerMap('zhongguo', geoJson);
	    option = {
	        tooltip: {
	            trigger: 'item',
	            formatter: function(params) {
	                if (typeof(params.value)[2] == "undefined") {
	                    return params.name
	                } else {
	                    return params.name + ' : ' + params.value[2];
	                }
	            }
	        },
	        geo: {
	            show: true,
                map: 'zhongguo',
                nameProperty: 'name',
	            label: {
                    normal: {
                        color: 'rgba(0,0,0,0.5)',
                        fontSize: 16,
                        show: true
	                },
	                emphasis: {
						show: false,
						color: 'rgba(0,0,0,0.5)',
	                }
	            },
				roam: true,
				left: '45%',
	            itemStyle: {
	                normal: {
	                    borderColor: 'rgba(255,255,255,0.5)',
		                borderWidth: 2,
		                areaColor: 'rgba(50,133,255,0.5)',
	                },
	                emphasis: {
	                    areaColor: 'rgba(50,133,255,0.6)'  //鼠标移上每一省份的颜色
	                }
	            }
	        },
	        series: [
	           
	            {
	                name: 'Tooltip Test',
	                type: 'effectScatter',
	                coordinateSystem: 'geo',
	                data: convertData,
	                symbolSize: function (val) {
	                    return val[2] / 5;
	                },
	                showEffectOn: 'render',
	                rippleEffect: {
	                    brushType: 'stroke'
	                },
	                hoverAnimation: true,
	                label: {
	                    normal: {
	                        formatter: '{b}',
	                        position: 'right',
	                        show: true
	                    }
	                },
	                itemStyle: {
	                    normal: {
	                        color: '#fff',
	                        shadowBlur: 10,
	                        shadowColor: '#fff'
	                    }
	                },
	                zlevel: 1
	            }

	        ]
	    };
    	//myChart.setOption(option);
    	mapchart.setOption(option);
	});	
};


