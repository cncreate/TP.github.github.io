// 柱状图模块1
(function() {
    // 1实例化对象
    var myChart = echarts.init(document.querySelector(".bar .chart"));
    // 2. 指定配置项和数据
    var option = {
        tooltip: {
            trigger: 'axis',
            /*axisPointer: { //阴影效果
              type: 'shadow'
            }*/
          },
          toolbox: {
            feature: {
              saveAsImage: {}
            }
          },
          legend: {
            data: ['男', '女'],
            left:"left",
            top:"top",
            textStyle:{
              color:'#4c9bfd'
              },
            },
          grid: {
            left: "0%",
            top: "20%",
            right: "0%",
            bottom: "4%",
            containLabel: true
          },
          xAxis: [
            {
              type: 'category',
              data: ['大数据一班', '大数据二班', '数媒一班', '数媒二班', '物联网本科班'],
              axisLabel:{
               color: "rgba(255,255,255,.6) ",
               fontSize:8
              },
            },
          ],
          yAxis: [
            {
              type: 'value',
              axisLabel:{
                color: "rgba(255,255,255,.6) ",
               },
              // y轴的线条改为了 2像素
              axisLine: {
                lineStyle: {
                  color: "rgba(255,255,255,.1)",
                  width: 2
                }
              },
              // y轴分割线的颜色
              splitLine: {
                lineStyle: {
                color: "rgba(255,255,255,.1)"
                }
              }
            }
          ],
          series: [
            {
              name: '男',
              type: 'bar',
              barWidth: "50%",
              itemStyle: {
              // 修改柱子圆角
                barBorderRadius: 5},
              color:'tomato',
              stack: 'Ad',
              emphasis: {
                focus: 'series'
              },
              data: [15,10,16,18,17]
            },
            {
              name: '女',
              type: 'bar',
              barWidth: "50%",
              itemStyle: {
              // 修改柱子圆角
                barBorderRadius: 5},
              color:'lightseagreen',
              stack: 'Ad',
              emphasis: {
                focus: 'series'
              },
              data: [25,30,20,28,22]
            },
          ]
    };
    // 3. 把配置项给实例对象
    myChart.setOption(option);
    // 4. 让图表跟随屏幕自动的去适应
    window.addEventListener("resize", function() {
      myChart.resize();
    });
  })();
//南丁格尔图2  bar2
  (function() {
    var myColor = ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"];
    // 1. 实例化对象
    var myChart = echarts.init(document.querySelector(".bar2 .chart"));
    // 2. 指定配置和数据
    var option = {
      legend: {
        bottom:"-2.5%",
        textStyle:{
          color:'#4c9bfd',
          fontSize: "10"
          },
        itemWidth:10,
        itemHeight:10
      },
      grid:{
        top:40,
        bottom:0,
        width:'auto'
      },
      tooltip: {},
      toolbox: {
        show: true,
        feature: {
          mark: { show: true },
          saveAsImage: { show: true }
        }
      },
      series: [
        {
          name: '合格率',
          type: 'pie',
          radius: [5, 60],
          center: ['50%', '50%'],
          roseType: 'area',
          itemStyle: {
            borderRadius: 8
          },
          data: [
            { value: 40, name: '大数据一班' },
            { value: 38, name: '大数据二班' },
            { value: 32, name: '数媒一班' },
            { value: 30, name: '数媒二班' },
            { value: 28, name: '物联网本科班' }
          ]
        }
      ]
    };
    // 3. 把配置给实例对象
    myChart.setOption(option);
    // 4. 让图表跟随屏幕自动的去适应
    window.addEventListener("resize", function() {
      myChart.resize();
    });
  })();
// 折线图1模块制作
  (function() {
    var yearData = [
      {
        data: [
          // 两个数组是因为有两条线
          [7, 8, 11, 3, 8],
          [33, 32, 25, 43, 30]
        ]
      },
    ];
    // 1. 实例化对象
    var myChart = echarts.init(document.querySelector(".line .chart"));
    // 2.指定配置
    var option = {
      // color修改两条线的颜色
      color: ["#00f2f1", "#ed3f35"],
      tooltip: {
        trigger: "axis"
      },
      toolbox: {
        feature: {
          saveAsImage: {}
        }
      },
      legend: {
        // series 对象有name 值，legend不用写data
        // 修改图例组件 文字颜色
        textStyle: {
          color: "#4c9bfd"
        },
        // 这个10% 必须加引号
        right: "10%"
      },
      grid: {
        top: "20%",
        left: "2%",
        right: "5%",
        bottom: "3%",
        show: true, // 显示边框
        borderColor: "#012f4a", // 边框颜色
        containLabel: true // 包含刻度文字在内
      },
      xAxis: {
        type: "category",
        boundaryGap: false,
        data: ['大一班','大二班','数一班','数二班','物联网'],
        //fontSize:2,
        axisTick: {
          show: false // 去除刻度线
        },
        axisLabel: {
          color: "rgba(255,255,255,.6)" // 文本颜色
        },
        axisLine: {
          show: false // 去除轴线
        }
      },
      yAxis: {
        type: "value",
        axisTick: {
          show: false // 去除刻度线
        },
        axisLabel: {
          color: "rgba(255,255,255,.6)" // 文本颜色
        },
        axisLine: {
          show: false // 去除轴线
        },
        splitLine: {
          lineStyle: {
            color: "#012f4a" // 分割线颜色
          }
        }
      },
      series: [
        {
          name: "党员/预备党员",
          type: "line",
          // true 可以让我们的折线显示带有弧度
          smooth: true,
          data: yearData[0].data[0]
        },
        {
          name: "普通学生",
          type: "line",
          smooth: true,
          data: yearData[0].data[1]
        }
      ]
    };
  
    // 3. 把配置给实例对象
    myChart.setOption(option);
    // 4. 让图表跟随屏幕自动的去适应
    window.addEventListener("resize", function() {
      myChart.resize();
    });
  })();
// 折线图2 模块制作
  (function() {
    var myChart = echarts.init(document.querySelector(".line2 .chart"));
    var option = {
      tooltip: {
        trigger: "axis"
      },
      toolbox: {
        feature: {
          saveAsImage: {}
        }
      },
      legend: {
        top: "0%",
        data: ["四级", "六级","普通话测试","教师资格证"],
        textStyle: {
          color: "#4c9bfd",
          fontSize: "12"
        }
      },
  
      grid: {
        left: "10",
        top: "30",
        right: "10",
        bottom: "10",
        containLabel: true
      },
      xAxis: [
        {
          type: "category",
          boundaryGap: false,
          // x轴更换数据
          data: [
            '大一班','大二班','数一班','数二班','物联网'
          ],
          // 文本颜色为rgba(255,255,255,.6)  文字大小为 12
          axisLabel: {
            textStyle: {
              color: "rgba(255,255,255,.6)",
              fontSize: 12
            }
          },
          // x轴线的颜色为   rgba(255,255,255,.2)
          axisLine: {
            lineStyle: {
              color: "rgba(255,255,255,.2)"
            }
          }
        }
      ],
      yAxis: [
        {
          type: "value",
          axisTick: { show: false },
          axisLine: {
            lineStyle: {
              color: "rgba(255,255,255,.1)"
            }
          },
          axisLabel: {
            textStyle: {
              color: "rgba(255,255,255,.6)",
              fontSize: 12
            }
          },
          // 修改分割线的颜色
          splitLine: {
            lineStyle: {
              color: "rgba(255,255,255,.1)"
            }
          }
        }
      ],
      series: [
        {
          name: "四级",
          type: "line",
          smooth: true,
          // 单独修改当前线条的样式
          lineStyle: {
            color: "#0184d5",
            width: "2"
          },
          // 填充颜色设置
          areaStyle: {
            color: new echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [
                {
                  offset: 0,
                  color: "rgba(1, 132, 213, 0.4)" // 渐变色的起始颜色
                },
                {
                  offset: 0.8,
                  color: "rgba(1, 132, 213, 0.1)" // 渐变线的结束颜色
                }
              ],
              false
            ),
            shadowColor: "rgba(0, 0, 0, 0.1)"
          },
          // 设置拐点
          symbol: "circle",
          // 拐点大小
          symbolSize: 8,
          // 开始不显示拐点， 鼠标经过显示
          showSymbol: false,
          // 设置拐点颜色以及边框
          itemStyle: {
            color: "#0184d5",
            borderColor: "rgba(221, 220, 107, .1)",
            borderWidth: 12
          },
          data: [
            17,12,6,20,9
          ]
        },
        {
          name: "六级",
          type: "line",
          smooth: true,
          lineStyle: {
            normal: {
              color: "#00d887",
              width: 2
            }
          },
          areaStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(
                0,
                0,
                0,
                1,
                [
                  {
                    offset: 0,
                    color: "rgba(0, 216, 135, 0.4)"
                  },
                  {
                    offset: 0.8,
                    color: "rgba(0, 216, 135, 0.1)"
                  }
                ],
                false
              ),
              shadowColor: "rgba(0, 0, 0, 0.1)"
            }
          },
          // 设置拐点 小圆点
          symbol: "circle",
          // 拐点大小
          symbolSize: 5,
          // 设置拐点颜色以及边框
          itemStyle: {
            color: "#00d887",
            borderColor: "rgba(221, 220, 107, .1)",
            borderWidth: 12
          },
          // 开始不显示拐点， 鼠标经过显示
          showSymbol: false,
          data: [
            1,3,0,1,2
          ]
        },
        {
          name: "普通话测试",
          type: "line",
          smooth: true,
          lineStyle: {
            normal: {
              color: "orange",
              width: 2
            }
          },
          areaStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(
                0,
                0,
                0,
                1,
                [
                  {
                    offset: 0,
                    color: "rgba(0, 216, 135, 0.4)"
                  },
                  {
                    offset: 0.8,
                    color: "rgba(0, 216, 135, 0.1)"
                  }
                ],
                false
              ),
              shadowColor: "rgba(0, 0, 0, 0.1)"
            }
          },
          // 设置拐点 小圆点
          symbol: "circle",
          // 拐点大小
          symbolSize: 5,
          // 设置拐点颜色以及边框
          itemStyle: {
            color: "orange",
            borderColor: "rgba(221, 220, 107, .1)",
            borderWidth: 12
          },
          // 开始不显示拐点， 鼠标经过显示
          showSymbol: false,
          data: [
            20,24,29,15,33
          ]
        },
        {
          name: "教师资格证",
          type: "line",
          smooth: true,
          lineStyle: {
            normal: {
              color: "lightcoral",
              width: 2
            }
          },
          areaStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(
                0,
                0,
                0,
                1,
                [
                  {
                    offset: 0,
                    color: "rgba(0, 216, 135, 0.4)"
                  },
                  {
                    offset: 0.8,
                    color: "rgba(0, 216, 135, 0.1)"
                  }
                ],
                false
              ),
              shadowColor: "rgba(0, 0, 0, 0.1)"
            }
          },
          // 设置拐点 小圆点
          symbol: "circle",
          // 拐点大小
          symbolSize: 5,
          // 设置拐点颜色以及边框
          itemStyle: {
            color: "lightcoral",
            borderColor: "rgba(221, 220, 107, .1)",
            borderWidth: 12
          },
          // 开始不显示拐点， 鼠标经过显示
          showSymbol: false,
          data: [
            8,3,6,2,5
          ]
        },
      ]
    };
    myChart.setOption(option);
    // 4. 让图表跟随屏幕自动的去适应
    window.addEventListener("resize", function() {
      myChart.resize();
    });
  })();
  // 饼形图1
  (function() {
    // 1. 实例化对象
    var myChart = echarts.init(document.querySelector(".pie .chart"));
    // 2.指定配置
    var option = {
      color: [
        "red",
        "#60cda0",
        "#ed8884",
        "darkorange",
        "skyblue"
      ],
      toolbox: {
        feature: {
          saveAsImage: {}
        }
      },
      legend: {
        bottom: "-2.5%",
        // 修改小图标的大小
        itemWidth: 10,
        itemHeight: 10,
        // 修改图例组件的文字为 12px
        textStyle: {
          color: "#4c9bfd",
          fontSize: "10"
        }
      },
      radar: {
        //shape: 'circle',
        color: "#4c9bfd",
        indicator: [
          { name: '红色基因传承', max: 50 },
          { name: '理论普及宣讲', max: 50},
          { name: '服务党政大局', max: 50},
          { name: '就业创业实践', max: 50},
          { name: '基层志愿服务', max: 50}
        ],
        textStyle: {
          fontSize: "10"
        },
        radius: ["11%", "70%"]
      },
      tooltip: {},
      series: [
        {
          name: '实践情况',
          type: 'radar',
          data: [
            {
              value: [42, 30, 20, 35, 50,],
              name: '大数据一班'
            },
            {
              value: [50, 14, 28, 26, 42],
              name: '大数据二班'
            },
            {
              value: [35, 18, 22, 33, 25],
              name: '数媒一班'
            },
            {
              value: [42, 30, 23, 20, 14],
              name: '数媒二班'
            },
            {
              value: [32, 24, 21, 14, 17],
              name: '物联网本科班'
            }
          ]
        }
      ]
    };
    // 3. 把配置给实例对象
    myChart.setOption(option);
    // 4. 让图表跟随屏幕自动的去适应
    window.addEventListener("resize", function() {
      myChart.resize();
    });
  })();
  
  // 饼形图2 地区分布模块
  (function() {
    var myChart = echarts.init(document.querySelector(".pie2 .chart"));
    // 2.指定配置
    var option = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: '#6a7985'
          }
        }
      },
      legend: {
        textStyle: {
          color: "#4c9bfd",
          fontSize: "8.5"
        },
        data: ['大数据一班','大数据二班','数媒一班','数媒二班','物联网本科班']
      },
      toolbox: {
        feature: {
          saveAsImage: {}
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '0%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          boundaryGap: false,
          axisLabel: {
            textStyle: {
              color: "rgba(255,255,255,.6)",
              fontSize: 12
            }
          },
          data: ['大创', '互联网+', '蓝桥杯', '大广赛','其他']
        }
      ],
      yAxis: [
        {
          type: 'value',
          axisLabel: {
            textStyle: {
              color: "rgba(255,255,255,.6)",
            }
          },
        }
      ],
      series: [
        {
          name: '大数据一班',
          type: 'line',
          stack: 'Total',
          areaStyle: {},
          emphasis: {
            focus: 'series'
          },
          data: [15,12,3,0,19]
        },
        {
          name: '大数据二班',
          type: 'line',
          stack: 'Total',
          areaStyle: {},
          emphasis: {
            focus: 'series'
          },
          data: [10,18,6,0,14]
        },
        {
          name: '数媒一班',
          type: 'line',
          stack: 'Total',
          areaStyle: {},
          emphasis: {
            focus: 'series'
          },
          data: [15, 23, 20, 15, 19]
        },
        {
          name: '数媒二班',
          type: 'line',
          stack: 'Total',
          areaStyle: {},
          emphasis: {
            focus: 'series'
          },
          data: [13, 18, 24, 33,21]
        },
        {
          name: '物联网本科班',
          type: 'line',
          stack: 'Total',
          label: {
            show: true,
            position: 'top'
          },
          areaStyle: {},
          emphasis: {
            focus: 'series'
          },
          data: [20,32, 9, 0, 12]
        }
      ]
    };
    myChart.setOption(option);
    // 监听浏览器缩放，图表对象调用缩放resize函数
    window.addEventListener("resize", function() {
      myChart.resize();
    });
  })();
  // 模拟飞行路线模块地图模块
  (function() {
    var myChart = echarts.init(document.querySelector(".map .chart"));
    var geoCoordMap = {
      上海: [121.4648, 31.2891],
      东莞: [113.8953, 22.901],
      东营: [118.7073, 37.5513],
      中山: [113.4229, 22.478],
      临汾: [111.4783, 36.1615],
      临沂: [118.3118, 35.2936],
      丹东: [124.541, 40.4242],
      丽水: [119.5642, 28.1854],
      乌鲁木齐: [87.9236, 43.5883],
      佛山: [112.8955, 23.1097],
      保定: [115.0488, 39.0948],
      兰州: [103.5901, 36.3043],
      包头: [110.3467, 41.4899],
      北京: [116.4551, 40.2539],
      北海: [109.314, 21.6211],
      南京: [118.8062, 31.9208],
      南宁: [108.479, 23.1152],
      南昌: [116.0046, 28.6633],
      南通: [121.1023, 32.1625],
      厦门: [118.1689, 24.6478],
      台州: [121.1353, 28.6688],
      合肥: [117.29, 32.0581],
      呼和浩特: [111.4124, 40.4901],
      咸阳: [108.4131, 34.8706],
      哈尔滨: [127.9688, 45.368],
      唐山: [118.4766, 39.6826],
      嘉兴: [120.9155, 30.6354],
      大同: [113.7854, 39.8035],
      大连: [122.2229, 39.4409],
      天津: [117.4219, 39.4189],
      太原: [112.3352, 37.9413],
      威海: [121.9482, 37.1393],
      宁波: [121.5967, 29.6466],
      宝鸡: [107.1826, 34.3433],
      宿迁: [118.5535, 33.7775],
      常州: [119.4543, 31.5582],
      广州: [113.5107, 23.2196],
      廊坊: [116.521, 39.0509],
      延安: [109.1052, 36.4252],
      张家口: [115.1477, 40.8527],
      徐州: [117.5208, 34.3268],
      德州: [116.6858, 37.2107],
      惠州: [114.6204, 23.1647],
      成都: [103.9526, 30.7617],
      扬州: [119.4653, 32.8162],
      承德: [117.5757, 41.4075],
      拉萨: [91.1865, 30.1465],
      无锡: [120.3442, 31.5527],
      日照: [119.2786, 35.5023],
      昆明: [102.9199, 25.4663],
      杭州: [119.5313, 29.8773],
      枣庄: [117.323, 34.8926],
      柳州: [109.3799, 24.9774],
      株洲: [113.5327, 27.0319],
      武汉: [114.3896, 30.6628],
      汕头: [117.1692, 23.3405],
      江门: [112.6318, 22.1484],
      沈阳: [123.1238, 42.1216],
      沧州: [116.8286, 38.2104],
      河源: [114.917, 23.9722],
      泉州: [118.3228, 25.1147],
      泰安: [117.0264, 36.0516],
      泰州: [120.0586, 32.5525],
      济南: [117.1582, 36.8701],
      济宁: [116.8286, 35.3375],
      海口: [110.3893, 19.8516],
      淄博: [118.0371, 36.6064],
      淮安: [118.927, 33.4039],
      深圳: [114.5435, 22.5439],
      清远: [112.9175, 24.3292],
      温州: [120.498, 27.8119],
      渭南: [109.7864, 35.0299],
      湖州: [119.8608, 30.7782],
      湘潭: [112.5439, 27.7075],
      滨州: [117.8174, 37.4963],
      潍坊: [119.0918, 36.524],
      烟台: [120.7397, 37.5128],
      玉溪: [101.9312, 23.8898],
      珠海: [113.7305, 22.1155],
      盐城: [120.2234, 33.5577],
      盘锦: [121.9482, 41.0449],
      石家庄: [114.4995, 38.1006],
      福州: [119.4543, 25.9222],
      秦皇岛: [119.2126, 40.0232],
      绍兴: [120.564, 29.7565],
      聊城: [115.9167, 36.4032],
      肇庆: [112.1265, 23.5822],
      舟山: [122.2559, 30.2234],
      苏州: [120.6519, 31.3989],
      莱芜: [117.6526, 36.2714],
      菏泽: [115.6201, 35.2057],
      营口: [122.4316, 40.4297],
      葫芦岛: [120.1575, 40.578],
      衡水: [115.8838, 37.7161],
      衢州: [118.6853, 28.8666],
      西宁: [101.4038, 36.8207],
      西安: [109.1162, 34.2004],
      贵阳: [106.6992, 26.7682],
      连云港: [119.1248, 34.552],
      邢台: [114.8071, 37.2821],
      邯郸: [114.4775, 36.535],
      郑州: [113.4668, 34.6234],
      鄂尔多斯: [108.9734, 39.2487],
      重庆: [107.7539, 30.1904],
      金华: [120.0037, 29.1028],
      铜川: [109.0393, 35.1947],
      银川: [106.3586, 38.1775],
      镇江: [119.4763, 31.9702],
      长春: [125.8154, 44.2584],
      长沙: [113.0823, 28.2568],
      长治: [112.8625, 36.4746],
      阳泉: [113.4778, 38.0951],
      青岛: [120.4651, 36.3373],
      韶关: [113.7964, 24.7028],
      成都: [104.0732, 30.6712],
      郑州: [112.4256, 34.5618]
    };
  
    var XAData = [
      [{ name: "西安" }, { name: "成都", value: 100 }],
      [{ name: "西安" }, { name: "沈阳", value: 100 }],
      [{ name: "西安" }, { name: "郑州", value: 100 }],
      [{ name: "西安" }, { name: "石家庄", value: 100 }],
      [{ name: "西安" }, { name: "银川", value: 100 }],
      [{ name: "西安" }, { name: "拉萨", value: 100 }],
      [{ name: "西安" }, { name: "苏州", value: 100 }],
      [{ name: "西安" }, { name: "银川", value: 100 }]
    ];
  
    var XNData = [
      [{ name: "成都" }, { name: "西安", value: 100 }],
      [{ name: "沈阳" }, { name: "西安", value: 100 }],
      [{ name: "郑州" }, { name: "西安", value: 100 }],
      [{ name: "石家庄" }, { name: "西安", value: 100 }],
      [{ name: "银川" }, { name: "西安", value: 100 }],
      [{ name: "拉萨" }, { name: "西安", value: 100 }],
      [{ name: "苏州" }, { name: "西安", value: 100 }],
      [{ name: "银川" }, { name: "西安", value: 100 }]
    ];
  
    var planePath =
      "path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z";
    var planePath = 'arrow';
    var convertData = function(data) {
      var res = [];
      for (var i = 0; i < data.length; i++) {
        var dataItem = data[i];
  
        var fromCoord = geoCoordMap[dataItem[0].name];
        var toCoord = geoCoordMap[dataItem[1].name];
        if (fromCoord && toCoord) {
          res.push({
            fromName: dataItem[0].name,
            toName: dataItem[1].name,
            coords: [fromCoord, toCoord],
            value: dataItem[1].value
          });
        }
      }
      return res;
    };
  
    var color = ["#a6c84c", "#ffa022", "#46bee9"]; //航线的颜色
    var series = [];
    [
      ["西安", XAData],
      ["西宁", XNData],
    ].forEach(function(item, i) {
      series.push(
        {
          name: item[0] + " Top3",
          type: "lines",
          zlevel: 1,
          effect: {
            show: true,
            period: 6,
            trailLength: 0.7,
            color: "red", //arrow箭头的颜色
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
        },
        {
          name: item[0] + " Top3",
          type: "lines",
          zlevel: 2,
          symbol: ["none", "arrow"],
          symbolSize: 10,
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
              opacity: 0.6,
              curveness: 0.2
            }
          },
          data: convertData(item[1])
        },
        {
          name: item[0] + " Top3",
          type: "effectScatter",
          coordinateSystem: "geo",
          zlevel: 2,
          rippleEffect: {
            brushType: "stroke"
          },
          label: {
            normal: {
              show: true,
              position: "right",
              formatter: "{b}"
            }
          },
          symbolSize: function(val) {
            return val[2] / 8;
          },
          itemStyle: {
            normal: {
              color: color[i]
            },
            emphasis: {
              areaColor: "#2B91B7"
            }
          },
          data: item[1].map(function(dataItem) {
            return {
              name: dataItem[1].name,
              value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
            };
          })
        }
      );
    });
    var option = {
      toolbox: {
        feature: {
          saveAsImage: {}
        }
      },
      tooltip: {
        trigger: "item",
        formatter: function(params, ticket, callback) {
          if (params.seriesType == "effectScatter") {
            return "线路：" + params.data.name + "" + params.data.value[2];
          } else if (params.seriesType == "lines") {
            return (
              params.data.fromName +
              ">" +
              params.data.toName +
              "<br />" +
              params.data.value
            );
          } else {
            return params.name;
          }
        }
      },
      /*legend: {
        orient: "vertical",
        top: "0%",
        left: "left",
        data: ["主要分布：西安", "成都", "郑州"],
        textStyle: {
          color: "#fff"
        },
        selectedMode: "multiple"
      },*/
      geo: {
        map: "china",
        label: {
          emphasis: {
            show: true,
            color: "#fff"
          }
        },
        // 把中国地图放大了1.2倍
        zoom: 1.2,
        roam: true,
        itemStyle: {
          normal: {
            // 地图省份的背景颜色
            areaColor: "rgba(20, 41, 87,0.6)",
            borderColor: "#195BB9",
            borderWidth: 1
          },
          emphasis: {
            areaColor: "#2B91B7"
          }
        }
      },
      series: series
    };
    myChart.setOption(option);
    // 监听浏览器缩放，图表对象调用缩放resize函数
    window.addEventListener("resize", function() {
      myChart.resize();
    });
  })();