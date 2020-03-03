<template>
  <div class="case_container">
      <div class="case_analysis_report">住房检测指标</div>
      <div class="houseContainer">
           <div class="map_statistics" id="map"></div>
           <div class="total_num">
                <p class="title">微博热议楼盘榜单</p>
                <p class="subTitle">2020年2月</p>
                <hr>
                <ul class="content">
                    <li>
                        <div>序号</div>
                        <div>楼盘名称</div>
                        <div>评论数</div>
                    </li>
                    <li v-for="(item,index) in list" :key="index">
                        <div>{{index+1}}</div>
                        <div class="area">{{item.keyWord}}</div>
                        <div>{{item.num}}</div>
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
              <div class="case_time_title">网络微博热议小区</div>
              <div class="case_time" id="hot_net"></div>
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
        list:[
            {
                keyWord:"天通苑",
                num:1205
            },
            {
                keyWord:"嘉都",
                num:580
            },
            {
                keyWord:"恒大绿洲",
                num:365
            },
            {
                keyWord:"新城家园",
                num:250
            },
            {
                keyWord:"潮白河孔雀城",
                num:191
            },
            {
                keyWord:"天润城",
                num:168
            },
            {
                keyWord:"绿地国际花都",
                num:109
            },
            {
                keyWord:"水晶城",
                num:103
            },
            {
                keyWord:"远洋山水",
                num:92
            },
            {
                keyWord:"桂花园",
                num:79
            },
        ]
    }
  },
  mounted(){
      document.documentElement.scrollTop=0;
    var echarts = require('echarts');


        var mapData = [
                        {name:"北京",value:"24728"},
                        {name:"天津",value:"13984"},
                        {name:"河北",value:"27842"},
                        {name:"山西",value:"9687"},
                        
                        {name:"辽宁",value:"18850"},
                        {name:"吉林",value:"7781"},
                        {name:"黑龙江",value:"7897"},
                        {name:"上海",value:"35924"},
                        {name:"江苏",value:"54324"},
                        {name:"浙江",value:"34472"},
                        {name:"安徽",value:"29827"},
                        {name:"福建",value:"17856"},
                        {name:"江西",value:"10821"},
                        {name:"山东",value:"45065"},
                        {name:"河南",value:"27283"},
                        {name:"湖北",value:"20305"},
                        {name:"湖南",value:"15864"},
                        {name:"广东",value:"63286"},
                        
                        {name:"海南",value:"4281"},
                        {name:"重庆",value:"16245"},
                        {name:"四川",value:"35964"},
                        {name:"贵州",value:"5561"},
                        {name:"云南",value:"8509"},
                       
                        {name:"陕西",value:"13552"},
                        {name:"甘肃",value:"6798"},
                        {name:"青海",value:"4175"},
                        {name:"广西",value:"12279"},
                         {name:"西藏",value:"314"},
                        {name:"宁夏",value:"2239"},
                        {name:"新疆",value:"5604"},
                        {name:"内蒙古",value:"8900"},
                        {name:"台湾",value:"1"},
                        {name:"澳门",value:"272"}
                    ];
                    var myMapChart = echarts.init(document.getElementById('map'));        
                    var mayMap_option = {
                        title: {//这里是整个图的标题
                            text: '',//大标题
                            x: 'center',//标题的位置，左边中间或者右边
                            textStyle:{
                                color:'#fff',
                                fontSize:14
                            }
                        },
                         grid: {
                            top: -20,
                            bottom: 0,
                            left:0,
                            right:0,
                            containLabel: true
                        },
                        tooltip: {//图例
                            trigger: 'item',
                            //文本上方的浮动小块
                            backgroundColor:'rgba(255,255,255,0.7)',//文本上方的浮动小块的颜色
                            padding:[20,20],//文字与边框之间的内边距
                            textStyle:{//文本样式设置
                                color:'#00000',//这里要注意一下，必须是标准6位，否则可能显现不出来
                                fontSize:18,//字号大小
                                lineHeight:'300px'//最后一个属性不加逗号，行高
                            }
                            
                        },
                        series: [{
                            name: '小区数据',
                            type: 'map',
                            mapType: 'china',
                            roam: false,//是否允许鼠标滚轮控制大小
                            label: {
                                normal:{
                                    show:true,
                                    textStyle:{
                                        color:'rgba(255,255,255,0.3)'
                                    }
                                },
                                emphasis: {//鼠标移入动态时显示的样式
                                    show: true,
                                    //backgroundColor控制的就是鼠标移入的时候文字的背景颜色而不是模块的背景颜色
                                    //color:鼠标移入的时候文字的颜色
                                }
                            },
                            itemStyle: {
                                normal: {
                                    borderWidth: .5, //区域边框宽度
                                    borderColor: 'rgba(255,255,255,0.3)',//区域边框颜色
                                    areaColor: "rgba(3,169,113,0.3)", //区域颜色
                                },
                                emphasis: {
                                    borderWidth: .5,
                                    borderColor: '#4b0082',
                                    areaColor: "#2D8C6A",
                                }
                            },
                            data: mapData   // 数据
                        }]
                    };
                   myMapChart.setOption(mayMap_option);

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
    var caseTimeChart = echarts.init(document.getElementById('hot_net'));
    var case_time_option = {
        color: ['#03A971'],
        tooltip: {
            trigger: 'axis'
        },
        xAxis: {
            type: 'category',
            data: ["天通苑","嘉都","恒大绿洲","新城家园","潮白河孔雀城","天润城","锦绣龙城","绿地国际花都","水晶城","远洋山水","桂花园"],
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
            data: [1481,169,999,370,43,374,36,103,428,327,674],
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
                    justify-content: space-between;
                    .area{
                        color:#03A971; 
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
