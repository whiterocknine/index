function showChartBar() {
  // 柱状图1模块

  // 实例化对象
  var myChart = echarts.init(document.querySelector(".bar .chart"));
  // 指定配置和数据
  var option = {
    color: ["#2f89cf", "#d14a61"],
    tooltip: {
      trigger: "axis",
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    legend: {
      data: ['正常', '异常'],
      right: 0,
      icon: "path://M30.9,53.2C16.8,53.2,5.3,41.7,5.3,27.6S16.8,2,30.9,2C45,2,56.4,13.5,56.4,27.6S45,53.2,30.9,53.2z M30.9,3.5C17.6,3.5,6.8,14.4,6.8,27.6c0,13.3,10.8,24.1,24.101,24.1C44.2,51.7,55,40.9,55,27.6C54.9,14.4,44.1,3.5,30.9,3.5z M36.9,35.8c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H36c0.5,0,0.9,0.4,0.9,1V35.8z M27.8,35.8 c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H27c0.5,0,0.9,0.4,0.9,1L27.8,35.8L27.8,35.8z",
      textStyle: {
        color: "rgba(255,255,255,.6)",
      }
    },
    grid: {
      left: "0%",
      top: "30px",
      right: "0",
      bottom: "4%",
      containLabel: true
    },
    xAxis: [{
      type: "category",
      name: '时',
      data: ['1', '2', '4', '6', '8', '10', '12', '14', '16', '18', '20', '22', '24'],
      nameTextStyle: {
        color: "rgba(255,255,255,.6)",
        fontSize: "12"
      },
      axisTick: {
        alignWithLabel: true
      },
      axisLabel: {
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
      type: "value",
      name: "报警次数",
      nameTextStyle: {
        color: "rgba(255,255,255,.6)",
        fontSize: "12"
      },
      axisLabel: {
        textStyle: {
          color: "rgba(255,255,255,.6)",
          fontSize: "12"
        }
      },
      axisLine: {
        lineStyle: {
          color: "rgba(255,255,255,.1)"
          // width: 1,
          // type: "solid"
        }
      },
      splitLine: {
        lineStyle: {
          color: "rgba(255,255,255,.1)",
          type: "dashed"
        }
      }
    }],
    series: [{
        name: '正常',
        type: 'bar',
        stack: '安防检测',
        barWidth: "35%",
        data: [25, 50, 30, 40, 60, 70, 80, 30, 50, 60, 30, 45, 50],
      },
      {
        name: '异常',
        type: 'bar',
        stack: '安防检测',
        barWidth: "35%",
        data: [11, 12, 10, 13, 14, 10, 13, 15, 10, 14, 16, 17, 12],
      }
    ]
  };

  // 把配置给实例对象
  myChart.setOption(option);
  window.addEventListener("resize", function () {
    myChart.resize();
  });

}


// 饼形图定制--1
function showChartPie1() {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.querySelector(".pie .chart1"));
  console.log(myChart)

  option = {
    // tooltip: {
    //   trigger: "item",
    //   formatter: "{a} <br/>{b}: {c} ({d}%)",
    //   position: function (p) {
    //     //其中p为当前鼠标的位置
    //     return [p[0] + 10, p[1] - 10];
    //   }
    // },
    series: [{
      name: "工单统计",
      type: "pie",
      center: ["50%", "50%"],
      radius: ["20%", "40%"],
      color: [
        "#065aab",
        "#066eab",
        "#0682ab",
        "#0696ab",
        "#06a0ab",
        "#06b4ab",
        "#06c8ab",
        "#06dcab",
        "#06f0ab"
      ],
      label: {
        formatter: '{b}',
      },
      data: [{
          value: 1,
          name: "报修"
        },
        {
          value: 4,
          name: "维修"
        },
        {
          value: 2,
          name: "会议"
        },
        {
          value: 2,
          name: "用车"
        },
        {
          value: 1,
          name: "工厂"
        }
      ]
    }]
  };

  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
  window.addEventListener("resize", function () {
    myChart.resize();
  });
}

function showChartPie2() {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.querySelector(".pie .chart2"));
  console.log(myChart)

  option = {
    // tooltip: {
    //   trigger: "item",
    //   formatter: "{a} <br/>{b}: {c} ({d}%)",
    //   position: function (p) {
    //     //其中p为当前鼠标的位置
    //     return [p[0] + 10, p[1] - 10];
    //   }
    // },
    grid: {
      left: "10%"
    },
    series: [{
      name: "工单统计",
      type: "pie",
      center: ["60%", "42%"],
      radius: ["20%", "40%"],
      color: [
        "#2f89cf",
        "#d14a61"
      ],
      // label: { show: false },
      label: {
        // formatter: '{b}\n{c}',
        position: 'outer',
        alignTo: 'labelLine',
        bleedMargin: 5
      },
      // labelLine: { show: false },
      data: [{
          value: 1,
          name: "工厂"
        },
        {
          value: 4,
          name: "2号办公楼"
        },
      ]
    }]
  };

  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
  window.addEventListener("resize", function () {
    myChart.resize();
  });
}




// 饼图
function showChartPie() {
  var myChart = echarts.init(document.querySelector(".pie .chart"));
  var option = {
    tooltip: {
      trigger: 'item',
      formatter: "{a} <br/>{b}: {c} ({d}%)",

    },
    graphic: {
      elements: [{
        type: 'image',
        style: {
          /*image: giftImageUrl,*/
          width: 50,
          height: 50
        },
        left: 'center',
        top: 'center'
      }]
    },
    
    
    series: [{
      name: '工单统计',
      type: 'pie',
      roseType: 'area',
      radius: ['10%', '80%'],
      color: [
      "#FF7491",
      "#8778E5",
      "#00C4E7",
      "#95E6BB",
      "#FFDB6A",
      "#FFA081"],
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
          formatter: '{b|{b}}\n{hr|}\n{c|{c}笔}',
          rich: {
            b: {
              fontSize: 12,
              color: '#a1addc',
              align: 'left',
              padding: 0
            },
            hr: {
              borderColor: '#3285ff',
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
              align: 'right',
              padding: 4
            }
          }
        }
      },
      data: [
        {
          value: 6,
          name: "报修"
        },
        {
          value: 14,
          name: "维修"
        },
        {
          value: 11,
          name: "会议"
        },
        {
          value: 8,
          name: "用车"
        },
        {
          value: 13,
          name: "工厂"
        },
        {
          value: 9,
          name: "2号办公楼"
        }
      ].sort(function (a, b) { return a.value - b.value; }),
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
}



function showChartLine() {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.querySelector(".line .chart"));

  // (1)准备数据
  var data = {
    year: [
      [24, 40, 101, 134, 90, 230, ],
      [40, 64, 191, 324, 290, 330, ],
      [360, 120, 154, 145, 190, 230, ],
      [30, 10, 41, 50, 80, 70, 50]
    ]
  };

  // 2. 指定配置和数据
  var option = {
    color: ["#3285ff", "#4caf50", "#FFA028", "#B628FF"],
    tooltip: {
      // 通过坐标轴来触发
      trigger: "axis"
    },
    legend: {
      // 距离容器10%
      right: "5%",
      // 修饰图例文字的颜色
      textStyle: {
        color: "#4c9bfd"
      }
      // 如果series 里面设置了name，此时图例组件的data可以省略
      // data: ["邮件营销", "联盟广告"]
    },
    grid: {
      top: "20%",
      left: "0%",
      right: "4%",
      bottom: "3%",
      containLabel: true
    },

    xAxis: {
      type: "category",
      boundaryGap: false,
      data: [
        "2",
        "6",
        "10",
        "14",
        "18",
        "22"
      ],
      // 去除刻度
      axisTick: {
        show: false
      },
      // 修饰刻度标签的颜色
      axisLabel: {
        color: "rgba(255,255,255,.6)"
      },
      // 去除x坐标轴的颜色
      axisLine: {
        show: false
      }
    },
    yAxis: {
      type: "value",
      name: 'kW',
      nameTextStyle: {
        color: "rgba(255,255,255,.6)",
        fontSize: "12"
      },
      axisLabel: {
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
      },

      // 去除刻度
      axisTick: {
        show: false
      }
    },
    series: [{
        name: "照明",
        type: "line",
        stack: "总量",
        // 是否让线条圆滑显示
        smooth: true,
        data: data.year[0]
      },
      {
        name: "空调",
        type: "line",
        stack: "总量",
        smooth: true,
        data: data.year[1]
      },
      {
        name: "动力",
        type: "line",
        stack: "总量",
        smooth: true,
        data: data.year[2]
      },
      {
        name: "其它",
        type: "line",
        stack: "总量",
        smooth: true,
        data: data.year[3]
      }
    ]
  };
  // 3. 把配置和数据给实例对象
  myChart.setOption(option);

  // 重新把配置好的新数据给实例对象
  myChart.setOption(option);
  window.addEventListener("resize", function () {
    myChart.resize();
  });
}