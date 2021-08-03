// ceshis1();
// ceshi2();
// ceshi3();
// ceshi4();
// ceshi5();
// ceshi6();
// ceshi7();

// echart_map();


function ceshis1() {
    var myChart = echarts.init(document.getElementById('ceshi'));

    var ydata = [{
            name: '银材料',
            value: 18
        },
        {
            name: '铆钉触头',
            value: 16
        },
        {
            name: 'AgCu/Cu',
            value: 15
        },
        {
            name: 'Ag/Cu',
            value: 14
        },
        {
            name: 'AgZnO/Cu',
            value: 10
        },
        {
            name: 'AgCuO/Cu',
            value: 7.9
        },
        {
            name: 'C',
            value: 6.7
        },
        {
            name: 'AgSnO₂/Cu',
            value: 6
        },
        {
            name: 'A',
            value: 4.5
        },
        {
            name: 'B',
            value: 3
        }
    ];
    var color = ["#8d7fec", "#5085f2", "#e75fc3", "#f87be2", "#f2719a", "#fca4bb", "#f59a8f", "#fdb301", "#57e7ec", "#cf9ef1"]
    var xdata = ['银材料', "铆钉触头", "AgCu/Cu", "Ag/Cu", 'AgZnO/Cu', 'AgCuO/Cu', 'C', 'AgSnO₂/Cu', 'A', 'B'];


    option = {
        /*backgroundColor: "rgba(255,255,255,1)",*/
        color: color,
        legend: {
            orient: "vartical",
            x: "left",
            top: "center",
            left: "53%",
            bottom: "0%",
            data: xdata,
            itemWidth: 8,
            itemHeight: 8,
            textStyle: {
                color: '#fff'
            },
            /*itemGap: 16,*/
            /*formatter:function(name){
              var oa = option.series[0].data;
              var num = oa[0].value + oa[1].value + oa[2].value + oa[3].value+oa[4].value + oa[5].value + oa[6].value + oa[7].value+oa[8].value + oa[9].value ;
              for(var i = 0; i < option.series[0].data.length; i++){
                  if(name==oa[i].name){
                      return ' '+name + '    |    ' + oa[i].value + '    |    ' + (oa[i].value/num * 100).toFixed(2) + '%';
                  }
              }
            }*/

            formatter: function (name) {
                return '' + name
            }
        },
        series: [{
            type: 'pie',
            clockwise: false, //饼图的扇区是否是顺时针排布
            minAngle: 2, //最小的扇区角度（0 ~ 360）
            radius: ["20%", "60%"],
            center: ["30%", "45%"],
            avoidLabelOverlap: false,
            itemStyle: { //图形样式
                normal: {
                    borderColor: '#ffffff',
                    borderWidth: 1,
                },
            },
            label: {
                normal: {
                    show: false,
                    position: 'center',
                    formatter: '{text|{b}}\n{c} ({d}%)',
                    rich: {
                        text: {
                            color: "#fff",
                            fontSize: 14,
                            align: 'center',
                            verticalAlign: 'middle',
                            padding: 8
                        },
                        value: {
                            color: "#8693F3",
                            fontSize: 24,
                            align: 'center',
                            verticalAlign: 'middle',
                        },
                    }
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: 24,
                    }
                }
            },
            data: ydata
        }]
    };
    myChart.setOption(option);

    setTimeout(function () {
        myChart.on('mouseover', function (params) {
            if (params.name == ydata[0].name) {
                myChart.dispatchAction({
                    type: 'highlight',
                    seriesIndex: 0,
                    dataIndex: 0
                });
            } else {
                myChart.dispatchAction({
                    type: 'downplay',
                    seriesIndex: 0,
                    dataIndex: 0
                });
            }
        });

        myChart.on('mouseout', function (params) {
            myChart.dispatchAction({
                type: 'highlight',
                seriesIndex: 0,
                dataIndex: 0
            });
        });
        myChart.dispatchAction({
            type: 'highlight',
            seriesIndex: 0,
            dataIndex: 0
        });
    }, 1000);

    myChart.currentIndex = -1;

    setInterval(function () {
        var dataLen = option.series[0].data.length;
        // 取消之前高亮的图形
        myChart.dispatchAction({
            type: 'downplay',
            seriesIndex: 0,
            dataIndex: myChart.currentIndex
        });
        myChart.currentIndex = (myChart.currentIndex + 1) % dataLen;
        // 高亮当前图形
        myChart.dispatchAction({
            type: 'highlight',
            seriesIndex: 0,
            dataIndex: myChart.currentIndex
        });
    }, 1000);

    // 使用刚指定的配置项和数据显示图表。
    /*myChart.setOption(option);*/
    window.addEventListener("resize", function () {
        myChart.resize();
    });
}

function ceshi2() {
    var myChart = echarts.init($("#ceshi2")[0]);
    option = {
        /*backgroundColor: '#05163B',*/
        tooltip: {
            trigger: 'axis'
        },

        grid: {
            top: 'middle',
            left: '3%',
            right: '4%',
            bottom: '3%',
            top: '20%',
            containLabel: true
        },
        legend: {
            data: ['产量', '种植面积', '同比增加', '平均产量'],
            textStyle: {
                color: "#fff"
            }
        },
        xAxis: [{
            type: 'category',
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月',
                '12月'
            ],

            nameTextStyle: {
                color: "rgba(255,255,255,.6)",
                fontSize: "12"
            },
            axisTick: {
                alignWithLabel: true
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: "rgba(255,255,255,.6)",
                    fontSize: "12"
                }
            },
            axisLine: {
                show: false
            }
        }],
        yAxis: [{
                type: 'value',
                name: '产量',
                nameTextStyle: {
                    color: "rgba(255,255,255,.6)",
                    fontSize: "12"
                },
                axisLabel: {
                    formatter: '{value} 吨',
                    textStyle: {
                        color: "rgba(255,255,255,.6)",
                        fontSize: "12"
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: "rgba(255,255,255,.1)"
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: "rgba(255,255,255,.1)",
                        type: "dashed"
                    }
                }
            },
            {
                type: 'value',
                name: '点亮',
                nameTextStyle: {
                    color: "rgba(255,255,255,.6)",
                    fontSize: "12"
                },
                axisLabel: {
                    formatter: '{value} kw',
                    textStyle: {
                        color: "rgba(255,255,255,.6)",
                        fontSize: "12"
                    }
                },
                splitLine: {
                    show: false
                    
                  }
            }
        ],
        series: [

            {
                name: '产量',
                type: 'bar',
                itemStyle: {
                    normal: {
                        barBorderRadius: 5,
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: "#0b54a3"
                            },
                            {
                                offset: 1,
                                color: "#3285ff"
                            }
                        ])
                    }
                },
                data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
            },
            {
                name: '生产量',
                type: 'bar',
                itemStyle: {
                    normal: {
                        barBorderRadius: 5,
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: "#FE4365"
                            },
                            {
                                offset: 1,
                                color: "#8362C6"
                            }
                        ])
                    }
                },
                data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
            },
            {
                name: '同比增加',
                type: 'line',
                yAxisIndex: 1,
                data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2],
                lineStyle: {
                    normal: {
                        width: 5,
                        color: {
                            type: 'linear',

                            colorStops: [{
                                    offset: 0,
                                    color: '#0b54a3' // 0% 处的颜色
                                },
                                {
                                    offset: 0.4,
                                    color: '#47D8BE' // 100% 处的颜色
                                }, {
                                    offset: 1,
                                    color: '#3285ff' // 100% 处的颜色
                                }
                            ],
                            globalCoord: false // 缺省为 false
                        },
                        shadowColor: 'rgba(71,216,190, 0.5)',
                        shadowBlur: 5,
                        shadowOffsetY: 2
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#AAF487',
                        borderWidth: 10,
                        /*shadowColor: 'rgba(72,216,191, 0.3)',
                         shadowBlur: 100,*/
                        borderColor: "#3285ff"
                    }
                },
                smooth: true,
            },
            {
                name: '平均产量',
                type: 'line',
                yAxisIndex: 1,
                data: [4.0, 3.2, 2.3, 5.5, 4.3, 11.2, 15.3, 22.4, 21.0, 13.5, 12.0, 10.2],
                lineStyle: {
                    normal: {
                        width: 5,
                        color: {
                            type: 'linear',

                            colorStops: [{
                                    offset: 0,
                                    color: '#F8B854' // 0% 处的颜色
                                },
                                {
                                    offset: 0.4,
                                    color: '#DE801C' // 100% 处的颜色
                                }, {
                                    offset: 1,
                                    color: '#DE801C' // 100% 处的颜色
                                }
                            ],
                            globalCoord: false // 缺省为 false
                        },
                        shadowColor: '#ff980087',
                        shadowBlur: 5,
                        shadowOffsetY: 2
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#F7AD3E',
                        borderWidth: 10,
                        /*shadowColor: 'rgba(72,216,191, 0.3)',
                         shadowBlur: 100,*/
                        borderColor: "#F7AD3E"
                    }
                },
                smooth: true,
            }
        ]
    };


    myChart.setOption(option);
    window.addEventListener('resize', function () {
        myChart.resize();
    })

}

function ceshi3() {
    var myChart = echarts.init($("#ceshi3")[0]);
    /**
     * 图标所需数据
     */
    var data = {
        value: 20.2,
        text: '-',
        color: '#3285ff',
        xAxis: ['批发'],
        values: ['76'],
    }

    var seriesData = []
    var titleData = []
    data.values.forEach(function(item, index) {
        titleData.push({
            text: data.xAxis[index],
            left: 50 * (index + 1) - .5 + '%',
            top: '60%',

            textAlign: 'center',
            textStyle: {
                fontSize: '12',
                color: '#ffffff',
                fontWeight: '400',
            },
        })
        seriesData.push({
            type: 'pie',
            radius: ['35', '45'],

            center: [50 * (index + 1) + '%', '30%'],
            hoverAnimation: false,
            label: {
                normal: {
                    position: 'center'
                },
            },
            data: [{
                value: item,
                name: data.text,
                itemStyle: {
                    normal: {
                        color: data.color,
                    }
                },
                label: {
                    normal: {
                        show: false,
                    }
                }
            },
                {
                    value: 100 - item,
                    name: '占位',
                    tooltip: {
                        show: false
                    },
                    itemStyle: {
                        normal: {
                            color: '#edf1f4',
                        }
                    },
                    label: {
                        normal: {
                            formatter: item + '',
                            textStyle: {
                                fontSize: 36,
                                color: data.color
                            }
                        },

                    }
                }
            ]
        })
    })

////////////////////////////////////////

    let value = data.value || 0
    option = {
        /*backgroundColor: '#fff',*/
        title: titleData,
        series: seriesData
    }

    myChart.setOption(option);
    window.addEventListener('resize', function () {myChart.resize();})

}

function ceshi4() {
    var myChart = echarts.init($("#ceshi4")[0]);
    /**
     * 图标所需数据
     */
    var data = {
        value: 20.2,
        text: '-',
        color: '#3285ff',
        xAxis: ['批发'],
        values: ['46'],
    }

    var seriesData = []
    var titleData = []
    data.values.forEach(function (item, index) {
        titleData.push({
            text: data.xAxis[index],
            left: 50 * (index + 1) - .5 + '%',
            top: '60%',

            textAlign: 'center',
            textStyle: {
                fontSize: '12',
                color: '#ffffff',
                fontWeight: '400',
            },
        })
        seriesData.push({
            type: 'pie',
            radius: ['35', '45'],
            center: [50 * (index + 1) + '%', '30%'],
            hoverAnimation: false,
            label: {
                normal: {
                    position: 'center'
                },
            },
            data: [{
                    value: item,
                    name: data.text,
                    itemStyle: {
                        normal: {
                            color: data.color,
                        }
                    },
                    label: {
                        normal: {
                            show: false,
                        }
                    }
                },
                {
                    value: 100 - item,
                    name: '占位',
                    tooltip: {
                        show: false
                    },
                    itemStyle: {
                        normal: {
                            color: '#edf1f4',
                        }
                    },
                    label: {
                        normal: {
                            formatter: item + '',
                            textStyle: {
                                fontSize: 36,
                                color: data.color
                            }
                        },

                    }
                }
            ]
        })
    })

    ////////////////////////////////////////

    let value = data.value || 0
    option = {
        /*backgroundColor: '#fff',*/
        title: titleData,
        series: seriesData
    }

    myChart.setOption(option);
    window.addEventListener('resize', function () {
        myChart.resize();
    })

}

function ceshi5() {
    var myChart = echarts.init($("#ceshi5")[0]);
    /**
     * 图标所需数据
     */
    var data = {
        value: 20.2,
        text: '-',
        color: '#ffff43',
        xAxis: ['批发'],
        values: ['76'],
    }

    var seriesData = []
    var titleData = []
    data.values.forEach(function (item, index) {
        titleData.push({
            text: data.xAxis[index],
            left: 50 * (index + 1) - .5 + '%',
            top: '60%',

            textAlign: 'center',
            textStyle: {
                fontSize: '12',
                color: '#ffffff',
                fontWeight: '400',
            },
        })
        seriesData.push({
            type: 'pie',
            radius: ['35', '45'],
            center: [50 * (index + 1) + '%', '30%'],
            hoverAnimation: false,
            label: {
                normal: {
                    position: 'center'
                },
            },
            data: [{
                    value: item,
                    name: data.text,
                    itemStyle: {
                        normal: {
                            color: data.color,
                        }
                    },
                    label: {
                        normal: {
                            show: false,
                        }
                    }
                },
                {
                    value: 100 - item,
                    name: '占位',
                    tooltip: {
                        show: false
                    },
                    itemStyle: {
                        normal: {
                            color: '#edf1f4',
                        }
                    },
                    label: {
                        normal: {
                            formatter: item + '',
                            textStyle: {
                                fontSize: 36,
                                color: data.color
                            }
                        },

                    }
                }
            ]
        })
    })

    ////////////////////////////////////////

    let value = data.value || 0
    option = {
        /*backgroundColor: '#fff',*/
        title: titleData,
        series: seriesData
    }

    myChart.setOption(option);
    window.addEventListener('resize', function () {
        myChart.resize();
    })

}

function ceshi6() {
    var myChart = echarts.init($("#ceshi6")[0]);

    var data = [110, 20, 36, 10, 50, 80, 100, 60];
    var sum = 0;
    var percentdata = [];
    for (var i = 0; i < data.length; i++) {
        sum += data[i];
    };
    for (var j = 0; j < data.length; j++) {
        percentdata.push((((data[j] / sum) * 100).toFixed(2)));
    };
    // console.log(percentdata);
    option = {
        color: ['#0035f9', '#f36f8a', '#ffff43', '#25f3e6'],
        grid: {
            left: '8%',
            right: '10%',
            top: '10%',
            bottom: '0%',
            containLabel: true
        },
        yAxis: {
            data: ["A", "B", "C",
                "D", "E", "F", "G",
                "H",
            ],
            axisTick: {
                show: false
            },
            axisLabel: {
                formatter: '{value} ',
                textStyle: {
                    color: "rgba(255,255,255,0.6)" //X轴文字颜色
                }
            },
            axisLine: {
                lineStyle: {
                    color: 'rgba(255,255,255,0.2)'
                }
            },

        },

        xAxis: [{
            axisTick: {
                show: false
            },
            type: 'value',
            // max: 100,
            splitNumber: 5,
            axisLabel: {
                formatter: '{value}%',
                show: true,
                textStyle: {
                    color: "rgba(255,255,255,0.6)" //X轴文字颜色
                }
            },
            axisLine: {
                lineStyle: {
                    color: 'rgba(255,255,255,0.2)'
                }
            },
        }],
        series: [{
            name: '销量',
            type: 'bar',
            itemStyle: {
                normal: {
                    barBorderRadius: 5,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: "#3291FF"
                        },
                        {
                            offset: 1,
                            color: "#1b7ef0"
                        }
                    ])
                }
            },
            barWidth: '55%',
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    formatter: '{c}%',
                    textStyle: {
                        color: '#ffffff'
                    }
                }
            },
            data: percentdata
        }]
    };

    myChart.setOption(option);
    window.addEventListener('resize', function () {
        myChart.resize();
    })
}

function ceshi7() {
    var myChart = echarts.init($("#ceshi7")[0]);
    option = {
        /*backgroundColor: '#031845',*/
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)",
        },
        graphic: {
            elements: [{
                type: 'image',
                style: {
                    width: 50,
                    height: 50
                },
                left: 'center',
                top: 'center'
            }]
        },
        title: {
            text: '产量分析',
            left: 'center',
            top: '0',
            padding: [24, 0],
            textStyle: {
                color: '#fff',
                fontSize: 18,
                align: 'center'
            }
        },
        legend: {

            orient: 'horizontal',
            icon: 'circle',
            bottom: 0,
            x: 'center',
            data: ['一号车间', '二号车间', '三号车间', '四号车间', '五号车间', '六号车间', '七号车间'],
            textStyle: {
                color: '#fff'
            }
        },
        series: [{
            name: '产量',
            type: 'pie',
            radius: ['25%', '35%'],
            color: ['#00FFFF', '#44EAB1', '#7BDD43', '#FEBE12', '#EBEC2F', '#FF7C44', '#FA3E5F', '#6635EF', '#FFAFDA'],
            labelLine: {
                normal: {
                    show: true,
                    length: 10,
                    length2: 10,
                    lineStyle: {
                        width: 1
                    }
                }
            },
            label: {
                normal: {
                    formatter: '{c|{c}}\n{hr|}\n{d|{d}%}',
                    rich: {
                        b: {
                            fontSize: 12,
                            color: '#12EABE',
                            align: 'left',
                            padding: 4
                        },
                        hr: {
                            borderColor: '#12EABE',
                            width: '80%',
                            borderWidth: 2,
                            height: 0
                        },
                        d: {
                            fontSize: 12,
                            color: '#fff',
                            align: 'left',
                            padding: 4
                        },
                        c: {
                            fontSize: 12,
                            color: '#fff',
                            align: 'left',
                            padding: 4
                        }
                    }
                }
            },
            data: [{
                    value: 100,
                    name: '一号车间'
                },
                {
                    value: 100,
                    name: '二号车间'
                },
                {
                    value: 100,
                    name: '三号车间'
                },
                {
                    value: 100,
                    name: '四号车间'
                },
                {
                    value: 100,
                    name: '五号车间'
                },
                {
                    value: 100,
                    name: '六号车间'
                },
                {
                    value: 100,
                    name: '七号车间'
                },

            ]
        }]
    };
    myChart.currentIndex = -1;
    myChart.setOption(option);
    console.log(option.series[0].data[0]);
    setInterval(function () {
        var dataLen = option.series[0].data.length;
        // 取消之前高亮的图形
        myChart.dispatchAction({
            type: 'downplay',
            seriesIndex: 0,
            dataIndex: myChart.currentIndex
        });
        myChart.currentIndex = (myChart.currentIndex + 1) % dataLen;
        // 高亮当前图形
        myChart.dispatchAction({
            type: 'highlight',
            seriesIndex: 0,
            dataIndex: myChart.currentIndex
        });
    }, 1000);





    window.addEventListener('resize', function () {
        myChart.resize();
    })
}


function echart_map() {
    var myChart = echarts.init(document.getElementById('ceshi8'));
    var geoCoordMap = {
        '新疆玛纳斯基地': [86.22, 44.30],
        '九江': [116.00, 29.70],
        '新乡': [116.402217, 35.311657],
        ' ': [79.92, 37.12],
        '  ': [86.85, 47.70],
        '若羌县': [88.17, 39.02],
        '上海': [121.4648, 31.2891],
        '东莞': [113.8953, 22.901],
        '东营': [118.7073, 37.5513],
        '中山': [113.4229, 22.478],
        '临汾': [111.4783, 36.1615],
        '临沂': [118.3118, 35.2936],
        '丹东': [124.541, 40.4242],
        '丽水': [119.5642, 28.1854],
        '乌鲁木齐': [87.9236, 43.5883],
        '佛山': [112.8955, 23.1097],
        '保定': [115.0488, 39.0948],
        '兰州': [103.5901, 36.3043],
        '包头': [110.3467, 41.4899],
        '北京': [116.4551, 40.2539],
        '北海': [109.314, 21.6211],
        '南京': [118.8062, 31.9208],
        '南宁': [108.479, 23.1152],
        '南昌': [116.0046, 28.6633],
        '南通': [121.1023, 32.1625],
        '厦门': [118.1689, 24.6478],
        '台州': [121.1353, 28.6688],
        '合肥': [117.29, 32.0581],
        '呼和浩特': [111.4124, 40.4901],
        '咸阳': [108.4131, 34.8706],
        '哈尔滨': [127.9688, 45.368],
        '唐山': [118.4766, 39.6826],
        '嘉兴': [120.9155, 30.6354],
        '大同': [113.7854, 39.8035],
        '大连': [122.2229, 39.4409],
        '天津': [117.4219, 39.4189],
        '太原': [112.3352, 37.9413],
        '威海': [121.9482, 37.1393],
        '宁波': [121.5967, 29.6466],
        '宝鸡': [107.1826, 34.3433],
        '宿迁': [118.5535, 33.7775],
        '常州': [119.4543, 31.5582],
        '广州': [113.5107, 23.2196],
        '廊坊': [116.521, 39.0509],
        '延安': [109.1052, 36.4252],
        '张家口': [115.1477, 40.8527],
        '徐州': [117.5208, 34.3268],
        '德州': [116.6858, 37.2107],
        '惠州': [114.6204, 23.1647],
        '成都': [103.9526, 30.7617],
        '扬州': [119.4653, 32.8162],
        '承德': [117.5757, 41.4075],
        '拉萨': [91.1865, 30.1465],
        '无锡': [120.3442, 31.5527],
        '日照': [119.2786, 35.5023],
        '昆明': [102.9199, 25.4663],
        '杭州': [119.5313, 29.8773],
        '枣庄': [117.323, 34.8926],
        '柳州': [109.3799, 24.9774],
        '株洲': [113.5327, 27.0319],
        '武汉': [114.3896, 30.6628],
        '汕头': [117.1692, 23.3405],
        '江门': [112.6318, 22.1484],
        '沈阳': [123.1238, 42.1216],
        '沧州': [116.8286, 38.2104],
        '河源': [114.917, 23.9722],
        '泉州': [118.3228, 25.1147],
        '泰安': [117.0264, 36.0516],
        '泰州': [120.0586, 32.5525],
        '济南': [117.1582, 36.8701],
        '济宁': [116.8286, 35.3375],
        '海口': [110.3893, 19.8516],
        '淄博': [118.0371, 36.6064],
        '淮安': [118.927, 33.4039],
        '深圳': [114.5435, 22.5439],
        '清远': [112.9175, 24.3292],
        '温州': [120.498, 27.8119],
        '渭南': [109.7864, 35.0299],
        '湖州': [119.8608, 30.7782],
        '湘潭': [112.5439, 27.7075],
        '滨州': [117.8174, 37.4963],
        '潍坊': [119.0918, 36.524],
        '烟台': [120.7397, 37.5128],
        '玉溪': [101.9312, 23.8898],
        '珠海': [113.7305, 22.1155],
        '盐城': [120.2234, 33.5577],
        '盘锦': [121.9482, 41.0449],
        '石家庄': [114.4995, 38.1006],
        '福州': [119.4543, 25.9222],
        '秦皇岛': [119.2126, 40.0232],
        '绍兴': [120.564, 29.7565],
        '聊城': [115.9167, 36.4032],
        '肇庆': [112.1265, 23.5822],
        '舟山': [122.2559, 30.2234],
        '苏州': [120.6519, 31.3989],
        '莱芜': [117.6526, 36.2714],
        '菏泽': [115.6201, 35.2057],
        '营口': [122.4316, 40.4297],
        '葫芦岛': [120.1575, 40.578],
        '衡水': [115.8838, 37.7161],
        '衢州': [118.6853, 28.8666],
        '西宁': [101.4038, 36.8207],
        '西安': [109.1162, 34.2004],
        '贵阳': [106.6992, 26.7682],
        '连云港': [119.1248, 34.552],
        '邢台': [114.8071, 37.2821],
        '邯郸': [114.4775, 36.535],
        '郑州': [113.4668, 34.6234],
        '鄂尔多斯': [108.9734, 39.2487],
        '重庆': [107.7539, 30.1904],
        '金华': [120.0037, 29.1028],
        '铜川': [109.0393, 35.1947],
        '银川': [106.3586, 38.1775],
        '镇江': [119.4763, 31.9702],
        '长春': [125.8154, 44.2584],
        '长沙': [113.0823, 28.2568],
        '长治': [112.8625, 36.4746],
        '阳泉': [113.4778, 38.0951],
        '青岛': [120.4651, 36.3373],
        '韶关': [113.7964, 24.7028]
    };

    var BJData = [
        [{
            name: '新乡'
        }, {
            name: '新乡',
            value: 200
        }],
        [{
            name: '新乡'
        }, {
            name: '呼和浩特',
            value: 90
        }],
        [{
            name: '新乡'
        }, {
            name: '哈尔滨',
            value: 90
        }],
        [{
            name: '新乡'
        }, {
            name: '石家庄',
            value: 90
        }],
        [{
            name: '新乡'
        }, {
            name: '昆明',
            value: 30
        }],
        [{
            name: '新乡'
        }, {
            name: '北京',
            value: 100
        }],
        [{
            name: '新乡'
        }, {
            name: '长春',
            value: 40
        }],
        [{
            name: '新乡'
        }, {
            name: '重庆',
            value: 40
        }],
        [{
            name: '新乡'
        }, {
            name: '贵阳',
            value: 50
        }],
        [{
            name: '新乡'
        }, {
            name: '南宁',
            value: 30
        }],
        [{
            name: '新乡'
        }, {
            name: '济南',
            value: 10
        }],
        [{
            name: '新乡'
        }, {
            name: '太原',
            value: 40
        }],
        [{
            name: '新乡'
        }, {
            name: '西安',
            value: 60
        }],
        [{
            name: '新乡'
        }, {
            name: '武汉',
            value: 50
        }],
        [{
            name: '新乡'
        }, {
            name: '合肥',
            value: 40
        }],
        [{
            name: '新乡'
        }, {
            name: '南京',
            value: 30
        }],
        [{
            name: '新乡'
        }, {
            name: '沈阳',
            value: 20
        }],
        [{
            name: '新乡'
        }, {
            name: '成都',
            value: 10
        }]
    ];

    var SHData = [
        [{
            name: '九江'
        }, {
            name: '九江',
            value: 200
        }],

        [{
            name: '九江'
        }, {
            name: '长沙',
            value: 95
        }],
        [{
            name: '九江'
        }, {
            name: '武汉',
            value: 30
        }],
        [{
            name: '九江'
        }, {
            name: '南昌',
            value: 20
        }],
        [{
            name: '九江'
        }, {
            name: '合肥',
            value: 70
        }],
        [{
            name: '九江'
        }, {
            name: '南京',
            value: 60
        }],
        [{
            name: '九江'
        }, {
            name: '福州',
            value: 50
        }],
        [{
            name: '九江'
        }, {
            name: '上海',
            value: 100
        }],
        [{
            name: '九江'
        }, {
            name: '深圳',
            value: 100
        }],

    ];

    var GZData = [
        [{
            name: '新疆玛纳斯基地'
        }, {
            name: '新疆玛纳斯基地',
            value: 200
        }],
        [{
            name: '新疆玛纳斯基地'
        }, {
            name: '  ',
            value: 90
        }],
        [{
            name: '新疆玛纳斯基地'
        }, {
            name: ' ',
            value: 40
        }],
        [{
            name: '新疆玛纳斯基地'
        }, {
            name: '呼和浩特',
            value: 90
        }],
        [{
            name: '新疆玛纳斯基地'
        }, {
            name: '昆明',
            value: 40
        }],
        [{
            name: '新疆玛纳斯基地'
        }, {
            name: '成都',
            value: 10
        }],
        [{
            name: '新疆玛纳斯基地'
        }, {
            name: '兰州',
            value: 95
        }],
        [{
            name: '新疆玛纳斯基地'
        }, {
            name: '银川',
            value: 90
        }],
        [{
            name: '新疆玛纳斯基地'
        }, {
            name: '西宁',
            value: 80
        }],

    ];

    var planePath = 'path://M.6,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705';

    var convertData = function (data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
            var dataItem = data[i];
            var fromCoord = geoCoordMap[dataItem[0].name];
            var toCoord = geoCoordMap[dataItem[1].name];
            if (fromCoord && toCoord) {
                res.push([{
                    coord: fromCoord
                }, {
                    coord: toCoord
                }]);
            }
        }
        return res;
    };

    var color = ['#3ed4ff', '#ffa022', '#a6c84c'];
    var series = [];
    [
        ['新乡', BJData],
        ['九江', SHData],
        ['新疆', GZData]
    ].forEach(function (item, i) {
        series.push({
            name: item[0] + ' Top10',
            type: 'lines',
            zlevel: 1,
            effect: {
                show: true,
                period: 6,
                trailLength: 0.7,
                color: '#fff',
                symbolSize: 3
            },
            lineStyle: {
                normal: {
                    color: color[i],
                    width: 0,
                    curveness: 0.2
                }
            },
            data: convertData(item[1])
        }, {
            name: item[0] + ' Top10',
            type: 'lines',
            zlevel: 2,
            effect: {
                show: true,
                period: 6,
                trailLength: 0,
                symbol: planePath,
                symbolSize: 15
            },
            lineStyle: {
                normal: {
                    color: color[i],
                    width: 1,
                    opacity: 0.4,
                    curveness: 0.2
                }
            },
            data: convertData(item[1])
        }, {
            name: item[0] + ' Top10',
            type: 'effectScatter',
            coordinateSystem: 'geo',
            zlevel: 2,
            rippleEffect: {
                brushType: 'stroke'
            },
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    formatter: '{b}'
                }
            },
            symbolSize: function (val) {
                return val[2] / 8;
            },
            itemStyle: {
                normal: {
                    color: color[i]
                }
            },
            data: item[1].map(function (dataItem) {
                return {
                    name: dataItem[1].name,
                    value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
                };
            })
        });
    });

    option = {
        // backgroundColor: '#080a20',
        title: {
            left: 'left',
            textStyle: {
                color: '#fff'
            }
        },
        tooltip: {
            trigger: 'item'
        },
        legend: {
            orient: 'vertical',
            top: 'bottom',
            left: 'right',
            data: ['北京 Top10', '上海 Top10', '广州 Top10'],
            textStyle: {
                color: '#fff'
            },
            selectedMode: 'single'
        },
        geo: {
            map: 'china',
            zoom: 1.2,
            label: {
                emphasis: {
                    show: false
                }
            },
            roam: true,
            itemStyle: {
                normal: {
                    areaColor: '#142957',
                    borderColor: '#0692a4'
                },
                emphasis: {
                    areaColor: '#0b1c2d'
                }
            }
        },
        series: series
    };
    // var myChart = echarts.init(document.getElementById('ceshi8'));
    myChart.setOption(option)
    window.addEventListener('resize', function () {
        myChart.resize();
    })
}