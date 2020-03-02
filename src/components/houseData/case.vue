<template>
  <div class="case_container">
      <div class="case_analysis_report">住房检测指标</div>
      <div class="houseContainer">
           <div class="map_statistics"><img src="../../assets/images/insightData/map.jpg" alt=""></div>
           <div class="total_num">
                <p class="title">微博热议楼盘榜单</p>
                <p class="subTitle">2020年1月</p>
                <hr>
                <ul class="content">
                    <li>
                        <div>序号</div>
                        <div>楼盘名称</div>
                        <div>评论数</div>
                    </li>
                    <li>
                        <div>1</div>
                        <div>珠江御景</div>
                        <div>3,112,234</div>
                    </li>
                </ul>
            </div>
      </div>
     
      <div class="case_echarts_container">
          <div class="top_ten_container">
              <div class="top_ten_title">全国楼盘舆情趋势统计</div>
              <div class="top_ten" id="top_ten"></div>
          </div>
          <div class="case_time_container">
              <div class="case_time_title">全国微博热议小区</div>
              <div class="case_time" id="case_time"></div>
          </div>
      </div>
      <div class="loupan">
          <img src="../../assets/images/houseData/loupan.png" alt="">
      </div>
      <div class="reyi">
          <ul class="house">
               <li class="title">楼盘微博热搜榜 TOP5</li>
               <li>
                    <div>序号</div>
                    <div>关键词</div>
                    <div></div>
                </li>
                <li>
                    <div>1</div>
                    <div>珠江御景</div>
                    <div>3,112,234</div>
                </li>
                <li>
                    <div>1</div>
                    <div>珠江御景</div>
                    <div>3,112,234</div>
                </li>
                <li>
                    <div>1</div>
                    <div>珠江御景</div>
                    <div>3,112,234</div>
                </li>
                <li>
                    <div>1</div>
                    <div>珠江御景</div>
                    <div>3,112,234</div>
                </li>
                <li>
                    <div>1</div>
                    <div>珠江御景</div>
                    <div>3,112,234</div>
                </li>
          </ul>
          <ul class="gard">
            <li class="title">小区微博热搜榜 TOP5</li>
            <li>
                <div>序号</div>
                <div>关键词</div>
                <div></div>
            </li>
            <li>
                <div>1</div>
                <div>珠江御景</div>
                <div>3,112,234</div>
            </li>
            <li>
                <div>1</div>
                <div>珠江御景</div>
                <div>3,112,234</div>
            </li>
            <li>
                <div>1</div>
                <div>珠江御景</div>
                <div>3,112,234</div>
            </li>
            <li>
                <div>1</div>
                <div>珠江御景</div>
                <div>3,112,234</div>
            </li>
            <li>
                <div>1</div>
                <div>珠江御景</div>
                <div>3,112,234</div>
            </li>
        </ul>        
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
      document.documentElement.scrollTop=0;
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
    .houseContainer{
        display: flex;
        width: 100%;
        // height: 590px;
        margin-bottom: 40px;
        .map_statistics{
            width: 75%;
            img{
                width: 100%;
                display: block;
                }
        }
        .total_num{
            width: 25%;
            background: #F2F4F7; 
            padding: 10px;
            .title{
                font-size: 22px;
                color: #121C33;
                letter-spacing: 0.03px;
            }
            .subTitle{
               font-size: 14px;
                color: #7A8499;
                letter-spacing: 0;
            }
            .content{
                li{
                    display: flex;
                    padding:5px;
                    div{
                        flex:1;
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
    .loupan{
         width: 1200px;
         img{
             width: 100%;
         }
    }
    .reyi{
        .title{
           font-size: 16px;
           color: #121C33;
           letter-spacing: 0;
        }
        width: 1200px;
        display: flex;
        height: 297;
        justify-content: space-between;
        margin-top:40px;
        font-size: 14px;
        color: #7A8499;
        letter-spacing: 0;
        .house{
            width: 45%;
            border: 1px solid #EBECF0;
           li{
                display: flex;
                padding:5px;
                div{
                    flex:1;
                }
            }
        }
        .gard{
            width: 45%;
            border: 1px solid #EBECF0;
            li{
                display: flex;
                padding:5px;
                div{
                    flex:1;
                }
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
