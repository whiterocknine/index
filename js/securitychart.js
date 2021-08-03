function showChartBar() {
  // 实例化对象
  var myChart = echarts.init(document.querySelector(".bar .chart"));
  // 指定配置和数据
  var option = {
    color: ["#2f89cf", "#2acb9b", "#673AB7"],
    tooltip: {
      trigger: "axis",
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    legend: {
      data: ['上班', '下班', '人流量'],
      right: 0,

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
      name: '时间',
      data: ['7', '8', '9', '10', '17', '18', '19', '20', '21', '22', '23'],
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
      name: "人/次",
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
          color: "rgba(255,255,255,.1)",
          // width: 1,
          // type: "dashed"
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
        name: '上班',
        type: 'bar',
        stack: "人流量",
        barWidth: "35%",
        data: [5, 50, 30, 20, 0, 0, 0, 0, 0, 0, 0],
      },
      {
        name: '下班',
        type: 'bar',
        stack: "人流量",
        barWidth: "35%",
        data: [0, 0, 0, 0, 20, 30, 23, 15, 10, 14, 16],
      },
      {
        name: '人流量',
        type: 'line',
        symbol: 'none',
        smooth: true,
        data: [20, 25, 50, 13, 34, 50, 43, 55, 40, 24, 34, ],
      }
    ]
  };

  // 把配置给实例对象
  myChart.setOption(option);
  window.addEventListener("resize", function () {
    myChart.resize();
  });

}

