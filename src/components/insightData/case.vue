<template>
  <div class="case_container">
      <div class="case_analysis_report">案件分析报告</div>
      <div class="map_statistics"></div>
      <div class="total_num">
          <div class="case_total_num">
              <div>累计案件总数</div>
              <div class="case_num_container">
                  <div class="case_num" v-for="(item,index) in totalNum" :key='index'>{{item}}</div>
              </div>
              <div class="increase_container">
                  <div>
                      <span class="time">今日</span>
                      <span class="increase_num">867</span>
                  </div>
                  <div>
                      <span class="mom">环比</span>
                      <span class="percent">+2.3↑</span>
                  </div>
              </div>
          </div>
          <div class="first_instance_num">
              <div>一审案件总数</div>
              <div class="case_num_container">
                  <div class="case_num" v-for="(item,index) in firstInstanceNum" :key='index'>{{item}}</div>
              </div>
          </div>
          <div class="two_instance_num">
              <div>二审案件总数</div>
              <div class="case_num_container">
                  <div class="case_num" v-for="(item,index) in twoInstanceNum" :key='index'>{{item}}</div>
              </div>
          </div>
          <div class="three_instance_num">
              <div>三审案件总数</div>
              <div class="case_num_container">
                  <div class="case_num" v-for="(item,index) in threeInstanceNum" :key='index'>{{item}}</div>
              </div>
          </div>
      </div>
      <div class="case_echarts_container">
          <div class="top_ten_container">
              <div class="top_ten_title">TOP10案件分布</div>
              <div class="top_ten" id="top_ten"></div>
          </div>
          <div class="case_time_container">
              <div class="case_time_title">案件时间分布</div>
              <div class="case_time" id="case_time"></div>
          </div>
          <div class="case_reason_type_container">
              <div class="case_reason_type_title">总体案由分类</div>
              <div class="case_reason_type" id="case_reason_type"></div>
          </div>
          <div class="court_level_container">
              <div class="court_level_title">法院层级分布</div>
              <div class="court_level" id="court_level"></div>
          </div>
          <div class="case_type_container">
              <div class="case_type_title">案件类型分布</div>
              <div class="case_type" id="case_type"></div>
          </div>
          <div class="plaintiff_type_container">
              <div class="plaintiff_type_title">原告主体类型分布</div>
              <div class="plaintiff_type" id="plaintiff_type"></div>
          </div>
      </div>
      <div class="judgment_analy_report">法院判决分析报告</div>
      <div class="court_navigation">
          <div class="court_navigation_left"></div>
          <div class="court_navigation_right">
              <div class="top">
                  <div class="left">法院导航</div>
                  <div class="right">北京</div>
              </div>
              <div class="bottom">
                  <div class="court_left">
                      <p>北京市高级人民法院</p>
                      <p>北京市第一中级人民法院</p>
                      <p>北京市第二中级人民法院</p>
                      <p>北京市第三中级人民法院</p>
                      <p>北京市第四中级人民法院</p>
                      <p>北京知识产权法院</p>
                  </div>
                  <div class="court_right"></div>
              </div>
          </div>
      </div>
      <div class="court_echarts_container">
          <div class="case_appeal_container">
              <div class="case_appeal_title">案件上诉、改判、再审率</div>
              <div class="case_appeal" id="case_appeal"></div>
          </div>
          <div class="analysis_results_second_container">
              <div class="analysis_results_second_title">二审判决结果分析</div>
              <div class="analysis_results_second" id="analysis_results_second"></div>
          </div>
          <div class="retrial_case_analysis_container">
              <div class="retrial_case_analysis_title">再审案件分析</div>
              <div class="retrial_case_analysis" id="retrial_case_analysis"></div>
          </div>
          <div class="judgment_distribution_container">
              <div class="judgment_distribution_title">判决标的额分布</div>
              <div class="judgment_distribution" id="judgment_distribution"></div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
        totalNum:[1,3,2,1,3,2,1,3],
        firstInstanceNum:[1,3,2,1,3,2,1,3],
        twoInstanceNum:[1,3,2,1,3,2,1,3],
        threeInstanceNum:[1,3,2,1,3,2,1,3]
    }
  },
  mounted(){
    var echarts = require('echarts');

    //top10案件分布
    var topTenChart = echarts.init(document.getElementById('top_ten'));
    var top_ten_option = {
        xAxis: {
            type: 'category',
            data: ['1', '2', '3', '4', '5', '6', '7','8','9','10'],
            axisLine:{
                symbol:['none', 'arrow'],
                symbolSize:[5,5]
            }
        },
        yAxis: {
            type: 'value',
            axisLine:{
                symbol:['none', 'arrow'],
                symbolSize:[5,5]
            }
        },
        series: [{
            data: [820, 932, 901, 934, 1290, 1330, 1320,222,567,900],
            type: 'line',
            itemStyle : { 
                normal : { 
                    color:'#275F82', 
                    lineStyle:{ 
                        color:'#253A5D' 
                    } 
                } 
            },
        },]
    };
    topTenChart.setOption(top_ten_option);

    //案件时间分布
    var caseTimeChart = echarts.init(document.getElementById('case_time'));
    var case_time_option = {
        color: ['#03A971'],
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            axisLine:{
                symbol:['none', 'arrow'],
                symbolSize:[5,5]
            }
        },
        yAxis: {
            type: 'value',
            axisLine:{
                symbol:['none', 'arrow'],
                symbolSize:[5,5]
            }
        },
        series: [{
            data: [1210, 2000, 1510, 1180, 7110, 1110, 5000],
            type: 'bar'
        }]
    };
    caseTimeChart.setOption(case_time_option);

    //总体案由分布
    var caseReasonChart = echarts.init(document.getElementById('case_reason_type'));
    var case_reason_option = {
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        legend: {
            orient: 'vertical',
            left: 10,
            data: ['案由1', '案由2', '案由3', '案由4', '案由5']
        },
        series: [
            {
                name: '案件理由',
                type: 'pie',
                radius: ['50%', '70%'],
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            fontSize: '30',
                            fontWeight: 'bold'
                        }
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data: [
                    {value: 335, name: '案由1'},
                    {value: 310, name: '案由2'},
                    {value: 234, name: '案由3'},
                    {value: 135, name: '案由4'},
                    {value: 1548, name: '案由5'}
                ]
            }
        ]
    };
    caseReasonChart.setOption(case_reason_option);

    //法院层级分布court_level
    var courtLevelChart = echarts.init(document.getElementById('court_level'));
    var court_level_option = {
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            data: ['层级1', '层级2', '层级3', '层级4', '层级5']
        },
        series: [
            {
                name: '层级',
                type: 'pie',
                radius: '55%',
                center: ['50%', '60%'],
                data: [
                    {value: 335, name: '层级1'},
                    {value: 310, name: '层级2'},
                    {value: 234, name: '层级3'},
                    {value: 135, name: '层级4'},
                    {value: 1548, name: '层级5'}
                ],
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };
    courtLevelChart.setOption(court_level_option);

    //案件类型分布
    var caseTypeChart = echarts.init(document.getElementById('case_type'));
    var case_type_option = {
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        series: [
            {
                name: '半径模式',
                type: 'pie',
                radius: [20, 110],
                center: ['25%', '50%'],
                roseType: 'radius',
                label: {
                    show: false
                },
                emphasis: {
                    label: {
                        show: true
                    }
                },
                data: [
                    {value: 10, name: '类型1'},
                    {value: 5, name: '类型2'},
                    {value: 15, name: '类型3'},
                    {value: 25, name: '类型4'},
                    {value: 20, name: '类型5'},
                    {value: 35, name: '类型6'},
                    {value: 30, name: '类型7'},
                    {value: 40, name: '类型8'}
                ]
            },
            {
                name: '面积模式',
                type: 'pie',
                radius: [30, 110],
                center: ['75%', '50%'],
                roseType: 'area',
                data: [
                    {value: 10, name: '类型1'},
                    {value: 5, name: '类型2'},
                    {value: 15, name: '类型3'},
                    {value: 25, name: '类型4'},
                    {value: 20, name: '类型5'},
                    {value: 35, name: '类型6'},
                    {value: 30, name: '类型7'},
                    {value: 40, name: '类型8'}
                ]
            }
        ]
    };
    caseTypeChart.setOption(case_type_option);

    //原告主体类型分布plaintiff_type
    var plainTiffChart = echarts.init(document.getElementById('plaintiff_type'));
    var plain_tiff_type_option = {
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            data: ['主体类型1', '主体类型2', '主体类型3', '主体类型4', '主体类型5']
        },
        series: [
            {
                name: '主体类型',
                type: 'pie',
                radius: '55%',
                center: ['50%', '60%'],
                data: [
                    {value: 935, name: '主体类型1'},
                    {value: 1310, name: '主体类型2'},
                    {value: 834, name: '主体类型3'},
                    {value: 735, name: '主体类型4'},
                    {value: 500, name: '主体类型5'}
                ],
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };
    plainTiffChart.setOption(plain_tiff_type_option);

    //案件上诉、改判、再审率
    var caseAppealChart = echarts.init(document.getElementById('case_appeal'));
    var case_appeal_option = {
        color: ['#03A971'],
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            axisLine:{
                symbol:['none', 'arrow'],
                symbolSize:[5,5]
            }
        },
        yAxis: {
            type: 'value',
            axisLine:{
                symbol:['none', 'arrow'],
                symbolSize:[5,5]
            }
        },
        series: [{
            data: [0.1, 0.7, 0.3, 0.5, 0.34, 0.9, 0.66],
            type: 'bar'
        }]
    };
    caseAppealChart.setOption(case_appeal_option);
    //二审判决结果分析
    var analysisResultsChart = echarts.init(document.getElementById('analysis_results_second'));
    var analysis_results_option = {
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            data: ['判决结果1', '判决结果2', '判决结果3', '判决结果4', '判决结果5']
        },
        series: [
            {
                name: '判决结果',
                type: 'pie',
                radius: '55%',
                center: ['50%', '60%'],
                data: [
                    {value: 335, name: '判决结果1'},
                    {value: 310, name: '判决结果2'},
                    {value: 234, name: '判决结果3'},
                    {value: 135, name: '判决结果4'},
                    {value: 1548, name: '判决结果5'}
                ],
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };
    analysisResultsChart.setOption(analysis_results_option);
    //再审案件分析
    var retrialCaseChart = echarts.init(document.getElementById('retrial_case_analysis'));
    var retrial_case_option = {
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        legend: {
            orient: 'vertical',
            left: 10,
            data: ['理由1', '理由2', '理由3', '理由4', '理由5']
        },
        series: [
            {
                name: '再审案件',
                type: 'pie',
                radius: ['50%', '70%'],
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            fontSize: '30',
                            fontWeight: 'bold'
                        }
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data: [
                    {value: 335, name: '理由1'},
                    {value: 310, name: '理由2'},
                    {value: 234, name: '理由3'},
                    {value: 135, name: '理由4'},
                    {value: 1548, name: '理由5'}
                ]
            }
        ]
    };
    retrialCaseChart.setOption(retrial_case_option);

    //判决标的额分布
    var judgmentDistributionChart = echarts.init(document.getElementById('judgment_distribution'));
    var judgment_distribution_option = {
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        series: [
            {
                name: '半径模式',
                type: 'pie',
                radius: [20, 110],
                center: ['25%', '50%'],
                roseType: 'radius',
                label: {
                    show: false
                },
                emphasis: {
                    label: {
                        show: true
                    }
                },
                data: [
                    {value: 10, name: '标的额1'},
                    {value: 5, name: '标的额2'},
                    {value: 15, name: '标的额3'},
                    {value: 25, name: '标的额4'},
                    {value: 20, name: '标的额5'},
                    {value: 35, name: '标的额6'},
                    {value: 30, name: '标的额7'},
                    {value: 40, name: '标的额8'}
                ]
            },
            {
                name: '面积模式',
                type: 'pie',
                radius: [30, 110],
                center: ['75%', '50%'],
                roseType: 'area',
                data: [
                    {value: 10, name: '标的额1'},
                    {value: 5, name: '标的额2'},
                    {value: 15, name: '标的额3'},
                    {value: 25, name: '标的额4'},
                    {value: 20, name: '标的额5'},
                    {value: 35, name: '标的额6'},
                    {value: 30, name: '标的额7'},
                    {value: 40, name: '标的额8'}
                ]
            }
        ]
    };
    judgmentDistributionChart.setOption(judgment_distribution_option);

  }
}
</script>

<style scoped lang='less'>
.case_container{
    width: 1200px;
    padding: 80px 0;
    box-sizing: border-box;
    .case_analysis_report{
        width: 100%;
        text-align: center;
        font-size: 36px;
        color: #121C33;
        margin-bottom: 40.4px;
    }
    .map_statistics{
        width: 100%;
        height: 590px;
        background-image: url('../../assets/images/insightData/map.jpg');
        background-size: 100% 100%;
        margin-bottom: 40.6px;
    }
    .total_num{
        width: 100%;
        display: flex;
        align-items: center;
        .case_total_num,.first_instance_num,.two_instance_num,.three_instance_num{
            width: 277px;
            height: 153px;
            margin-right: 30px;
            div:nth-child(1){
                font-size: 18px;
                color: #121C33;
                letter-spacing: 0.03px;
                margin-bottom: 16px;
            }
            .case_num_container{
                display: flex;
                .case_num{
                    border: 1px solid #03A971;
                    border-radius: 4px;
                    font-size: 20px;
                    color: #03A971;
                    letter-spacing: 0;
                    width: 24px;
                    height: 32px;
                    margin-right: 5px;
                    text-align: center;
                }
            }
            .increase_container{
                display: flex;
                div:nth-child(1){
                    margin-right: 50px;
                }
                div{
                    .time,.mom{
                        font-size: 14px;
                        color: #7A8499;
                        letter-spacing: 0;
                    }
                    .increase_num{
                        font-size: 18px;
                        color: #03A971;
                        letter-spacing: 0;
                    }
                    .percent{
                        font-size: 18px;
                        color: #FF3D40;
                        letter-spacing: 0;
                    }
                }
            }
        }
    }
    .case_echarts_container{
        width: 1200px;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        .top_ten_container,.case_time_container,.case_reason_type_container,.court_level_container,.case_type_container,.plaintiff_type_container{
            width: 568px;
            height: 340px;
            margin-right: 30px;
            margin-bottom: 30px;
            border: 1px solid #EBECF0;
            .top_ten_title,.case_time_title,.case_reason_type_title,.court_level_title,.case_type_title,.plaintiff_type_title{
                width: 100%;
                height: 60px;
                padding-left: 25px;
                box-sizing: border-box;
                line-height: 60px;
                font-size: 16px;
                color: #3D4966;
                letter-spacing: 0;
                background-color: #F2F4F7;
            }
            .top_ten,.case_time,.case_reason_type,.court_level,.case_type,.plaintiff_type{
                width: 100%;
                height: 280px;
            }
        }
    }
    .judgment_analy_report{
        width: 1200px;
        font-size: 36px;
        color: #121C33;
        text-align: center;
        margin-top: 80px;
        margin-bottom: 40px;
    }
    .court_navigation{
        width: 100%;
        display: flex;
        align-items: center;
        margin-bottom: 43.6px;
        .court_navigation_left{
            width: 892px;
            height: 600px;
            background-image: url('../../assets/images/insightData/china_map.jpg');
            background-size: 100% 100%;
        }
        .court_navigation_right{
            width: 308px;
            height: 600px;
            // background-color: #FF3D40;
            padding: 0 30px;
            box-sizing: border-box;
            .top{
                height: 70px;
                width: 100%;
                line-height: 70px;
                border-bottom: 1px solid #B8BECC;
                display: flex;
                align-items: center;
                justify-content: space-between;
                margin-bottom: 14.5px;
                .left{
                    font-size: 18px;
                    color: #121C33;
                    letter-spacing: 0.03px;
                }
                .right{
                    font-size: 18px;
                    color: #03A971;
                    letter-spacing: 0.03px;
                }
            }
            .bottom{
                width: 100%;
                display: flex;
                .court_left{
                    p{
                        font-size: 14px;
                        color: #3D4966;
                        letter-spacing: 0;
                        margin-bottom: 10px;
                    }
                }
            }
        }
    }
    .court_echarts_container{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        border: 1px solid #EBECF0;
        .case_appeal_container,.analysis_results_second_container,.retrial_case_analysis_container,.judgment_distribution_container{
            width: 568px;
            height: 340px;
            margin-right: 30px;
            margin-bottom: 30px;
            .case_appeal_title,.analysis_results_second_title,.retrial_case_analysis_title,.judgment_distribution_title{
                width: 100%;
                height: 60px;
                padding-left: 25px;
                box-sizing: border-box;
                line-height: 60px;
                font-size: 16px;
                color: #3D4966;
                letter-spacing: 0;
                background-color: #F2F4F7;
            }
            .case_appeal,.analysis_results_second,.retrial_case_analysis,.judgment_distribution{
                width: 100%;
                height: 280px;
            }
        }
    }
}
</style>
