<template>
  <div class="lawyer_container">
      <div class="lawyer_analysis_report">律师分析报告</div>
      <div class="basic_info_top">基本信息</div>
      <div class="basic_info_bottom">
          <div class="left">
              <div class="head_picture">
                  <img :src="head_picture" alt="" srcset="">
              </div>
              <div class="detail_info">
                  <div>
                      <span>律师姓名：</span>
                      <span>王新明</span> 
                  </div>
                  <div>
                      <span>律所</span>
                      <span>北京昌恒律师事务所</span>
                  </div>
                  <div>
                      <span>代理案件总数：</span>
                      <span>14</span>
                  </div>
                  <div class="view_details" @click="viewCaseDetail">点击查看案件详情</div>
              </div>
          </div>
          <div class="right">
              <div class="title_case_reason_map">案由分布</div>
              <div class="reason_map" id="reason_map"></div>
          </div>
      </div>
      <div class="lawyer_anly_report_eacharts_container">
          <div class="lawyer_case_type_container">
              <div class="lawyer_case_type_title">案件类型分布</div>
              <div class="lawyer_case_type" id="lawyer_case_type"></div>
          </div>
          <div class="lawyer_court_level_container">
              <div class="lawyer_court_level_title">法院层级分布</div>
              <div class="lawyer_court_level" id="lawyer_court_level"></div>
          </div>
          <div class="lawyer_case_time_container">
              <div class="lawyer_case_time_title">案件时间分布</div>
              <div class="lawyer_case_time" id="lawyer_case_time"></div>
          </div>
          <div class="case_area_container">
              <div class="case_area_title">案件地区分布</div>
              <div class="case_area" id="case_area"></div>
          </div>
          <div class="customer_Type_container">
              <div class="customer_Type_title">客户类型分布</div>
              <div class="customer_Type" id="customer_Type"></div>
          </div>
          <div class="litigation_stage_container">
              <div class="litigation_stage_title">诉讼阶段分布</div>
              <div class="litigation_stage" id="litigation_stage"></div>
          </div>
          <div class="success_rate_container">
              <div class="success_rate_title">判决胜诉率</div>
              <div class="success_rate" id="success_rate"></div>
          </div>
          <div class="panjuebiao_fenbu_container">
              <div class="panjuebiao_fenbu_title">判决标的额分布</div>
              <div class="panjuebiao_fenbu" id="panjuebiao_fenbu"></div>
          </div>
      </div>
      <vPopwindow v-show="ifShowPopwindow" @close='closeWindow' :caseDetailArr='detailData'></vPopwindow>
  </div>
</template>

<script>
import vPopwindow from './caseDetail';
export default {
  data () {
    return {
        head_picture:require('../../assets/images/insightData/head_picture.png'),
        ifShowPopwindow:false,
        detailData:[
            {
                caseNum:'(2020)鄂XX民初XX号',
                caseDate:'2020-02-23',
                caseParties:'110234199403243763 王女士',
                caseProgress:'已立案待排期',
                caseReason:'买卖合同纠纷'
            },
            {
                caseNum:'(2020)鄂XX民初XX号',
                caseDate:'2020-02-23',
                caseParties:'110234199403243763 王女士',
                caseProgress:'已立案待排期',
                caseReason:'买卖合同纠纷'
            },
            {
                caseNum:'(2020)鄂XX民初XX号',
                caseDate:'2020-02-23',
                caseParties:'110234199403243763 王女士',
                caseProgress:'已立案待排期',
                caseReason:'买卖合同纠纷'
            }
        ]
    }
  },
  methods:{
      viewCaseDetail(){
          this.ifShowPopwindow = true;
      },
      closeWindow(arg){
          this.ifShowPopwindow = arg;
      },
      getEchartData(){
          var echarts = require('echarts');
           //上边中间   中国地图
           let baseUrl='http://106.13.122.156:8083';
            this.$axios({
                method: "get",
                url: baseUrl + "/insight/lawQuery/lawyer_case_distribute",
            }).then(res => {
                if(res.status==200){
                     //案由分布
                    var reasonMapChart = echarts.init(document.getElementById('reason_map'));
                    var reason_map_option = {
                        tooltip: {
                            trigger: 'item',
                            formatter: '{b}: {c}({d}%)'
                        },
                        legend: {
                            bottom: 10,
                            data: ['Behaiour1', 'Behaiour2', 'Behaiour3', 'Behaiour4', 'Behaiour5']
                        },
                        series: [
                            {
                                type: 'pie',
                                selectedMode: 'single',
                                radius: [0, '30%'],
                                label: {
                                    position: 'inner'
                                },
                                labelLine: {
                                    show: false
                                },
                            },
                            {
                                type: 'pie',
                                radius: ['40%', '55%'],
                                label: {
                                    formatter: '{b|{b}:}{c}  {per|{d}%}',
                                    rich: {
                                        b: {
                                            fontSize: 16,
                                            lineHeight: 33
                                        }
                                    }
                                },
                                data:res.data.data.map.list
                            }
                        ]
                    };
                    reasonMapChart.setOption(reason_map_option);
                }
            }).catch(err=>{
                console.log(err);
            });


            this.$axios({
                method: "get",
                url: baseUrl + "/insight/lawQuery/law_caseArea_distribute",
            }).then(res => {
                console.log(res.data.data)
                if(res.status==200){
                     //案件地区分布
                    var caseAreaChart = echarts.init(document.getElementById('case_area'));
                    var case_area_option = {
                        color: ['#6699FF'],
                        xAxis: {
                            type: 'category',
                            data: res.data.data.map.name,
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
                            data: res.data.data.map.value,
                            type: 'bar'
                        }]
                    };
                    caseAreaChart.setOption(case_area_option);
                }
            }).catch(err=>{
                console.log(err);
            });

            this.$axios({
                method: "get",
                url: baseUrl + "/insight/lawQuery/law_caseTime_distribute",
            }).then(res => {
                console.log(res.data.data)
                if(res.status==200){
                    //案件时间分布
                    var lawyerCaseTimeChart = echarts.init(document.getElementById('lawyer_case_time'));
                    var lawyer_case_time_option = {
                        color: ['#6699FF'],
                        xAxis: {
                            type: 'category',
                            data: res.data.data.map.name,
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
                            data: res.data.data.map.value,
                            type: 'bar'
                        }]
                    };
                    lawyerCaseTimeChart.setOption(lawyer_case_time_option);
                }
            }).catch(err=>{
                console.log(err);
            });

            this.$axios({
                method: "get",
                url: baseUrl + "/insight/lawQuery/lawyer_caseType_distribute",
            }).then(res => {
                console.log(res.data.data)
                if(res.status==200){
                     //案件类型分布
                    var lawyerCaseChart = echarts.init(document.getElementById('lawyer_case_type'));
                    var lawyer_case_option = {
                        tooltip: {
                            trigger: 'item',
                            formatter: '{a} <br/>{b}:{c}({d}%)'
                        },
                        series: [
                            {
                                name: '类型',
                                type: 'pie',
                                radius: '55%',
                                center: ['50%', '60%'],
                                data:res.data.data.map.list,
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
                    lawyerCaseChart.setOption(lawyer_case_option);

                }
            }).catch(err=>{
                console.log(err);
            });
            
            this.$axios({
                method: "get",
                url: baseUrl + "/insight/lawQuery/law_courtLevel_distribute",
            }).then(res => {
                console.log(res.data.data)
                if(res.status==200){
                    //法院层级分布 lawyer_court_level
                    var lawyerCourtChart = echarts.init(document.getElementById('lawyer_court_level'));
                    var lawyer_court_level_option = {
                        tooltip: {
                            trigger: 'item',
                            formatter: '{a} <br/>{b}:{c}({d}%)'
                        },
                        series: [
                            {
                                name: '法院',
                                type: 'pie',
                                radius: '55%',
                                center: ['50%', '60%'],
                                data: res.data.data.map.list,
                                label: {normal: {position: 'inner',formatter: "{b}\n {c} ({d}%)"}},labelLine: {normal: {show: false}},
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
                    lawyerCourtChart.setOption(lawyer_court_level_option);        
                }
            }).catch(err=>{
                console.log(err);
            });

            this.$axios({
                method: "get",
                url: baseUrl + "/insight/lawQuery/law_sentence_money",
            }).then(res => {
                console.log(res.data.data)
                if(res.status==200){
                    var topCenterData = res.data.data.map.name;
                    var cockpitDatatList = res.data.data.map.value;
                    var mapData = [];
                    for(var i = 0; i < topCenterData.length;i++){
                         for(var j = 0; j < cockpitDatatList.length;j++){
                             if(i==j){
                                mapData.push({
                                    name:topCenterData[i].replace(/\s*/g,''),
                                    value:parseInt(cockpitDatatList[i])
                                });
                             }
                           
                         }
                    }
                     //判决标的额分布
                    var panjueBiaoChart = echarts.init(document.getElementById('panjuebiao_fenbu'));
                    var panjuebiao_fenbu_option = {
                        tooltip: {
                            trigger: 'item',
                            formatter: '{a} <br/>{b}: {c} ({d}%)'
                        },
                        // legend: {
                        //     orient: 'vertical',
                        //     left: 10,
                        //     data: res.data.data.map.name,
                        // },
                        series: [
                            {
                                name: '判决标的额',
                                type: 'pie',
                                radius: ['50%','70%'],
                                data: mapData,
                            }
                        ]
                    };
                    panjueBiaoChart.setOption(panjuebiao_fenbu_option);
                }
            }).catch(err=>{
                console.log(err);
            });

            this.$axios({
                method: "get",
                url: baseUrl + "/insight/lawQuery/law_sentence_rate",
            }).then(res => {
                if(res.status==200){
                    //判决胜诉率
                var successRateChart = echarts.init(document.getElementById('success_rate'));
                var success_rate_option = {
                    tooltip: {
                        trigger: 'item',
                        formatter: '{a} <br/>{b}:{c}({d}%)'
                    },
                    series: [
                        {
                            name: '胜诉率',
                            type: 'pie',
                            radius: '55%',
                            center: ['50%', '60%'],
                            data: res.data.data.map.list,
                            label: {normal: {position: 'inner',formatter: "{b}\n {c} ({d}%)"}},labelLine: {normal: {show: false}},
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
                successRateChart.setOption(success_rate_option);
                }
            }).catch(err=>{
                console.log(err);
            });

            this.$axios({
                method: "get",
                url: baseUrl + "/insight/lawQuery/law_litigationStep_distribute",
            }).then(res => {
                if(res.status==200){
                    //诉讼阶段分布
                var litigationStageChart = echarts.init(document.getElementById('litigation_stage'));
                var litigation_stage_option = {
                    tooltip: {
                        trigger: 'item',
                        formatter: '{a} <br/>{b}:{c}({d}%)'
                    },
                    series: [
                        {
                            name: '阶段',
                            type: 'pie',
                            radius: '55%',
                            center: ['50%', '60%'],
                            data: res.data.data.map.list,
                            label: {normal: {position: 'inner',formatter: "{b}\n {c} ({d}%)"}},labelLine: {normal: {show: false}},
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
                litigationStageChart.setOption(litigation_stage_option);
                }
            }).catch(err=>{
                console.log(err);
            });

            this.$axios({
                method: "get",
                url: baseUrl + "/insight/lawQuery/law_customerType_distribute",
            }).then(res => {
                if(res.status==200){
                    //客户类型分布
                var customerypeChart = echarts.init(document.getElementById('customer_Type'));
                var customer_Type_option = {
                    tooltip: {
                        trigger: 'item',
                        formatter: '{a} <br/>{b}:{c}({d}%)'
                    },
                    series: [
                        {
                            name: '客户类型',
                            type: 'pie',
                            radius: '55%',
                            center: ['50%', '60%'],
                            data:res.data.data.map.list,
                            label: {normal: {position: 'inner',formatter: "{b}\n {c} ({d}%)"}},labelLine: {normal: {show: false}},
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
                customerypeChart.setOption(customer_Type_option);
                }
            }).catch(err=>{
                console.log(err);
            });
      }
  },
  mounted(){
    this.getEchartData();
  },
  components:{
      vPopwindow
  },
}
</script>

<style scoped lang='less'>
.lawyer_container{
    width: 100%;
    background-color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 60px 0;
    box-sizing: border-box;
    .lawyer_analysis_report{
        width: 1200px;
        font-size: 36px;
        color: #121C33;
        text-align: center;
        margin-bottom: 40px;
    }
    .basic_info_top{
        width: 1200px;
        height: 80px;
        line-height: 80px;
        font-size: 28px;
        color: #121C33;
    }
    .basic_info_bottom{
        width: 1200px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-top: 41px;
        box-sizing: border-box;
        margin-bottom: 60.6px;
        .left{
            width: 536px;
            height: 100%;
            display: flex;
            align-items: center;
            .head_picture{
                width: 277px;
                height: 345px;
                margin-right: 30px;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
            .detail_info{
                div:nth-child(1),div:nth-child(2),div:nth-child(3){
                    font-size: 18px;
                    color: #121C33;
                    letter-spacing: 0;
                    line-height: 26px;
                    margin-bottom: 15px;
                }
                div:nth-child(3){
                    margin-bottom: 196px;
                }
                .view_details{
                    width: 140px;
                    height: 42px;
                    line-height: 42px;
                    text-align: center;
                    border: 1px solid #03A971;
                    border-radius: 3px;
                    font-size: 14px;
                    color: #03A971;
                    :hover{
                        cursor: pointer;
                    }
                }
            }
        }
        .right{
            width: 660px;
            .title_case_reason_map{
                font-size: 18px;
                color: #121C33;
                letter-spacing: 0;
                line-height: 26px;
                text-align: center;
            }
            .reason_map{
                width: 100%;
                height: 472px;
            }
        }
    }
    .lawyer_anly_report_eacharts_container{
        width: 1200px;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        margin-bottom: 80px;
        .lawyer_case_type_container,.lawyer_court_level_container,.lawyer_case_time_container,.case_area_container,.customer_Type_container,.litigation_stage_container,.success_rate_container,.panjuebiao_fenbu_container{
            width: 568px;
            height: 340px;
            margin-right: 30px;
            margin-bottom: 30px;
            border: 1px solid #EBECF0;
            .lawyer_case_type_title,.lawyer_court_level_title,.lawyer_case_time_title,.case_area_title,.customer_Type_title,.litigation_stage_title,.success_rate_title,.panjuebiao_fenbu_title{
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
            .lawyer_case_type,.lawyer_court_level,.lawyer_case_time,.case_area,.customer_Type,.litigation_stage,.success_rate,.panjuebiao_fenbu{
                width: 100%;
                height: 280px;
            }
        }
    }
}
</style>