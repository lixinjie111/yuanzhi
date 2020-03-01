<template>
  <div class="obser_star_list_container">
    <!--首部导航-->
    <div class="naviga">
        <div class="naviga_contant">
            <div class="left">
            <div class="top">{{cn_title}}</div>
            <div class="bottom">{{en_title}}</div>
            </div>
            <div class="right">
            <div class="nav_text">
                <div v-for="(item,index) in nav_text" :key="index" @click="jumpFn(index)" @mouseover="changeShow(index)" class="nav_text_container">
                <div class="top" ref="navTextTop">{{item}}</div>
                </div>
            </div>
            <div class="sub_btn">{{sub_btn}}</div>
            </div>
        </div>
    </div>

    <!--图形统计区域-->
    <div class="echarts_container">
        <div class="chart">
            <div class="chart_top">{{subTitleName}}</div>
            <div class="chart_container">
              <div class="top">
                <div class="left">
                  <div class="left_top_bar" id="topLeftTopBar"></div>
                  <div class="left_bottom_pie" id="topLeftBottomPie"></div>
                </div>
                <div class="right" id="topRightChinaMap"></div>
              </div>
              <div class="middle">
                <div class="middle_left" id="middleLeftBar"></div>
                <div class="middle_right" id="middleRightPie"></div>
              </div>
              <div class="bottom">
                <div class="bottom_left" id="bottomLeftBar"></div>
                <div class="bottom_right" id="bottomRightBar"></div>
              </div>
            </div>
        </div>
    </div>

    <!--底部及版权组件-->
    <vFooterCopy></vFooterCopy>

  </div>
</template>

<script>
import vFooterCopy from '../footerCopyright/footerCopyright';
export default {
    name:'obserStarLiveDetail',
    data(){
        return {
        cn_title:'元知智能研究院',
        en_title:'YUANZHI AI Research Institute',
        nav_text:['首页','AI智能应用','数据洞察','观星台','大数据平台','行为图谱'],
        sub_btn:'立即登录',
        subTitleName:''
        }
    },
    components:{
        vFooterCopy
    },
    mounted(){
        if(this.$route.query.type == 3){
            this.$refs.navTextTop[3].style='box-sizing: border-box;padding-bottom:3px;border-bottom: 3px #ffffff solid;';
        }
        this.getChartData();
    },
    methods:{
        jumpFn(index){
            if(index === 0){
                this.$router.push({
                    path:'/index',
                    query:{
                        type:0
                    }
                });
            }
            else if(index === 1){
            this.$router.push({
                path:'aiSmartAppList',
                query:{
                    type:1
                }
            });
            }
        },
        getChartData(){
            var echarts = require('echarts');
            var baseUrl = 'http://106.13.122.156:8086'; 
            var parentTitle = this.$route.query.parentTitle;
            var subTitleCode = this.$route.query.subTitleCode;
            var that = this;
            this.subTitleName = this.$route.query.subTitleName;











            var echarts = require('echarts');
            var baseUrl = 'http://106.13.122.156:8086'; 
            var parentTitle = this.$route.query.parentTitle;
            var subTitleCode = this.$route.query.subTitleCode;
            var that = this;
            this.subTitleName = this.$route.query.subTitleName;
            //上左上数据  柱状图
            this.$axios({
                method: "post",
                url: baseUrl + "/stargaze/stargazaCockpit/getCockpitData",
                data: {
                    chartLocation:1,
                    chartType:1,
                    parentTitle:parentTitle,
                    subTitleCode:subTitleCode,
                    statisticsYear:''
                }
            }).then(res => {
                if(res.status == 200){
                    var topLeftTopData = res.data.data;
                    var yiZaoguimo = echarts.init(document.getElementById('yiliaozhizaoyeguimo'));  //
                    var xAxisDataObj = {
                        xAxisData:[],
                        data:[],
                        name:''
                    };
                    var strDara = topLeftTopData;
                    var topLeftTopDataArr = strDara.cockpitDatatList;
                    for(var i = 0; i < topLeftTopDataArr.length;i++){
                        xAxisDataObj.xAxisData.push(topLeftTopDataArr[i].statisticalIndicator);
                        xAxisDataObj.data.push(topLeftTopDataArr[i].firstStatisticalContent);
                        xAxisDataObj.name = topLeftTopDataArr[i].firstDescription;
                    }
                    var yiZaoguimo_option = {
                        title:{
                            text:topLeftTopData.chartName,
                            textStyle:{
                                color:'#fff',
                                fontSize:14
                            },
                            left:'center'
                        },
                        background:'#2D8C6A',
                        color: ['#0FA16D'],
                        tooltip: {
                            trigger: 'axis'
                        },
                        axisLabel:{
                            color:'#fff',
                            fontSize:14
                        },
                        grid: {
                            left: '3%',
                            right: '4%',
                            bottom: '3%',
                            containLabel: true
                        },
                        xAxis: [
                            {
                                type: 'category',
                                data: xAxisDataObj.xAxisData,
                                axisTick: {
                                    alignWithLabel: true,
                                    lineStyle:{color:'#2D8C6A'}    // x轴刻度的颜色
                                },
                                axisLine:{
                                    lineStyle:{
                                        color:'#2D8C6A' // x轴坐标轴颜色
                                    }
                                },
                            }
                        ],
                        yAxis: [
                            {
                                type: 'value',
                                axisTick: {
                                    alignWithLabel: true,
                                    lineStyle:{color:'#2D8C6A'}    //坐标轴刻度线颜色
                                },
                                axisLine:{
                                    lineStyle:{
                                        color:'#2D8C6A' //坐标轴颜色
                                    }
                                },
                                splitLine:{
                                    show:true,  //是否显示后面的网格线
                                    lineStyle:{
                                        color:'#2D8C6A'  //网格线颜色
                                    }
                                }
                            }
                        ],
                        series: [
                            {
                                name:xAxisDataObj.name,
                                type: 'bar',
                                barWidth: '30%',
                                data: xAxisDataObj.data
                            }
                        ]
                    };;
                    yiZaoguimo.setOption(yiZaoguimo_option);
                }
            }).catch(err=>{
                console.log(err);
            });


            //上边中间   中国地图
            this.$axios({
                method: "post",
                url: baseUrl + "/stargaze/stargazaCockpit/getCockpitData",
                data: {
                    chartLocation:4,
                    chartType:3,
                    parentTitle:parentTitle,
                    subTitleCode:subTitleCode,
                    statisticsYear:''
                }
            }).then(res => {
                if(res.status == 200){
                    var topCenterData = res.data.data;
                    var cockpitDatatList = topCenterData.cockpitDatatList;
                    var mapData = [];
                    for(var i = 0; i < cockpitDatatList.length;i++){
                        if(i == 0){
                            mapData.push({
                                name:cockpitDatatList[i].statisticalIndicator.replace(/\s*/g,''),
                                value:cockpitDatatList[i].firstStatisticalContent
                            });
                        }
                        else{
                            mapData.push({
                                name:cockpitDatatList[i].statisticalIndicator.replace(/\s*/g,''),
                                value:parseInt(cockpitDatatList[i].firstStatisticalContent)
                            });
                        }

                    }
                    var myMapChart = echarts.init(document.getElementById('map'));        
                    var mayMap_option = {
                        title: {//这里是整个图的标题
                            text: topCenterData.chartName,//大标题
                            x: 'center',//标题的位置，左边中间或者右边
                            textStyle:{
                                color:'#fff',
                                fontSize:14
                            }
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
                            name: '数据',
                            type: 'map',
                            mapType: 'china',
                            roam: true,//是否允许鼠标滚轮控制大小
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

                }
            }).catch(err=>{
                console.log(err);
            });

            //上面左边的饼图
            this.$axios({
                method: "post",
                url: baseUrl + "/stargaze/stargazaCockpit/getCockpitData",
                data: {
                    chartLocation:2,
                    chartType:2,
                    parentTitle:parentTitle,
                    subTitleCode:subTitleCode,
                    statisticsYear:''
                }
            }).then(res => {
                if(res.status == 200){
                    var yiliaozhizaoChart = echarts.init(document.getElementById('yiliaozhizaojiegoufenbu'));
                    var topLeftBottomData = res.data.data;
                    var cockpitDatatList = topLeftBottomData.cockpitDatatList;
                    var formatData = [];
                    var tipName;
                    for(var i = 0;i<cockpitDatatList.length;i++){
                        formatData.push({
                            value:cockpitDatatList[i].firstStatisticalContent,
                            name:cockpitDatatList[i].statisticalIndicator,
                            itemStyle:{color:'#2D8C6A'}
                        });
                    }
                    var yiliaozhizao_option = {
                        background:'#2D8C6A',
                        tooltip: {
                            trigger: 'item',
                            formatter: '{b}:{c}({d}%)'
                        },
                        title:{
                            text:topLeftBottomData.chartName,
                            textStyle:{
                                color:'#fff',
                                fontSize:14
                            },
                            left:'center'
                        },
                        series: [
                            {
                                type: 'pie',
                                radius: '75%',
                                center: ['50%', '50%'],
                                data:formatData,
                                // label: {normal: {position: 'inner',formatter: "{b}\n {c} ({d}%)"}},labelLine: {normal: {show: false}},
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
                    yiliaozhizaoChart.setOption(yiliaozhizao_option);
                }
            }).catch(err=>{
                console.log(err);
            });

            //上面右边折线图
            this.$axios({
                method: "post",
                url: baseUrl + "/stargaze/stargazaCockpit/getCockpitData",
                data: {
                    chartLocation:5,
                    chartType:1,
                    parentTitle:parentTitle,
                    subTitleCode:subTitleCode,
                    statisticsYear:''
                }
            }).then(res => {
                if(res.status == 200){
                    var topRightTopData = res.data.data;
                    var cockpitDatatList = topRightTopData.cockpitDatatList;
                    var xAxisDataObj = {
                        xAxisData:[],
                        data:[],
                        name:''
                    };
                    for(var i = 0; i < cockpitDatatList.length;i++){
                        xAxisDataObj.xAxisData.push(cockpitDatatList[i].statisticalIndicator);
                        xAxisDataObj.data.push(cockpitDatatList[i].firstStatisticalContent);
                        xAxisDataObj.name = cockpitDatatList[i].firstDescription;
                    }
                    var yiweijigouChart = echarts.init(document.getElementById('yiweijigouzhenliaorenci'));  
                    var yiweijigou_option = {
                        title:{
                            text:topRightTopData.chartName,
                            textStyle:{
                                color:'#fff',
                                fontSize:14
                            },
                            left:'center'
                        },
                        tooltip: {
                            trigger: 'axis'
                        },
                        color: ['#0FA16D'],
                        xAxis: {
                            type: 'category',
                            boundaryGap: false,
                            data: xAxisDataObj.xAxisData,
                            axisTick: {
                                alignWithLabel: true,
                                lineStyle:{color:'#2D8C6A'}    //坐标轴刻度线颜色
                            },
                            axisLabel:{
                                color:'#fff',
                                fontSize:12
                            },
                        },
                        grid: {
                            left: '3%',
                            right: '4%',
                            bottom: '3%',
                            containLabel: true
                        },
                        yAxis: {
                            type: 'value',
                            axisTick: {
                                    alignWithLabel: true,
                                    lineStyle:{color:'#2D8C6A'}    //坐标轴刻度线颜色
                            },
                            axisLine:{
                                lineStyle:{
                                    color:'#2D8C6A' //坐标轴颜色
                                }
                            },
                            axisLabel:{
                                color:'#fff',
                                fontSize:12
                            },
                            splitLine:{
                                show:true,  //是否显示后面的网格线
                                lineStyle:{
                                    color:'#2D8C6A'  //网格线颜色
                                }
                            }
                        },
                        series: [{
                            data: xAxisDataObj.data,
                            type: 'line',
                            areaStyle: {}
                        }]
                    };
                    yiweijigouChart.setOption(yiweijigou_option);
                }
            }).catch(err=>{
                console.log(err);
            });

            //上面右边环形饼图
            this.$axios({
                method: "post",
                url: baseUrl + "/stargaze/stargazaCockpit/getCockpitData",
                data: {
                    chartLocation:6,
                    chartType:2,
                    parentTitle:parentTitle,
                    subTitleCode:subTitleCode,
                    statisticsYear:''
                }
            }).then(res => {
                if(res.status == 200){
                    var topRightBottomData = res.data.data;
                    var cockpitDatatList = topRightBottomData.cockpitDatatList;
                    var formatData = [];
                    for(var i = 0;i<cockpitDatatList.length;i++){
                        formatData.push({
                            value:cockpitDatatList[i].firstStatisticalContent,
                            name:cockpitDatatList[i].statisticalIndicator,
                            itemStyle:{color:'#2D8C6A'}
                        });
                    }
                    var yiliaozhizaoChart = echarts.init(document.getElementById('yiliaozhizaozijin'));
                    var yiliaozhizao_option = {
                        tooltip: {
                            trigger: 'item',
                            formatter: '{b}: {c} ({d}%)'
                        },
                        title:{
                            text:topRightBottomData.chartName,
                            textStyle:{
                                color:'#fff',
                                fontSize:14
                            },
                            left:'center'
                        },
                        series: [
                            {
                                type: 'pie',
                                radius: ['40%', '70%'],
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
                                data:formatData
                            }
                        ]
                    };
                    yiliaozhizaoChart.setOption(yiliaozhizao_option);
                }
            }).catch(err=>{
                console.log(err);
            });


            //下面左边的  柱状图
            this.$axios({
                method: "post",
                url: baseUrl + "/stargaze/stargazaCockpit/getCockpitData",
                data: {
                    chartLocation:3,
                    chartType:1,
                    parentTitle:parentTitle,
                    subTitleCode:subTitleCode,
                    statisticsYear:''
                }
            }).then(res => {
                if(res.status == 200){
                    var BottomLeftData = res.data.data;
                    var cockpitDatatList = BottomLeftData.cockpitDatatList;
                    var xAxisDataObj = {
                        xAxisData:[],
                        data:[],
                        name:''
                    };
                    for(var i = 0; i < cockpitDatatList.length;i++){
                        xAxisDataObj.xAxisData.push(cockpitDatatList[i].statisticalIndicator);
                        xAxisDataObj.data.push(cockpitDatatList[i].firstStatisticalContent);
                        xAxisDataObj.name = cockpitDatatList[i].firstDescription;
                    }
                    var renjunweishengChart = echarts.init(document.getElementById('renjunweishengfei'));
                    var renjunweisheng_option = {
                        title:{
                            text:BottomLeftData.chartName,
                            textStyle:{
                                color:'#fff',
                                fontSize:14
                            },
                            left:'center'
                        },
                        color: ['#0FA16D'],
                        tooltip: {
                            trigger: 'axis',
                            axisPointer: {            
                                type: 'shadow'        
                            }
                        },
                        grid: {
                            left: '3%',
                            right: '4%',
                            bottom: '3%',
                            containLabel: true
                        },
                        axisLabel:{
                            color:'#fff',
                            fontSize:14
                        },
                        xAxis: [
                            {
                                type: 'category',
                                data: xAxisDataObj.xAxisData,
                                axisTick: {
                                    alignWithLabel: true,
                                    lineStyle:{color:'#2D8C6A'}    //坐标轴刻度线颜色
                                },
                            }
                        ],
                        yAxis: [
                            {
                                type: 'value',
                                axisTick: {
                                        alignWithLabel: true,
                                        lineStyle:{color:'#2D8C6A'}    //坐标轴刻度线颜色
                                },
                                axisLine:{
                                    lineStyle:{
                                        color:'#2D8C6A' //坐标轴颜色
                                    }
                                },
                                axisLabel:{
                                    color:'#fff',
                                    fontSize:12
                                },
                                splitLine:{
                                    show:true,  //是否显示后面的网格线
                                    lineStyle:{
                                        color:'#2D8C6A'  //网格线颜色
                                    }
                                }
                            }
                        ],
                        series: [
                            {
                                name: xAxisDataObj.name,
                                type: 'bar',
                                barWidth: '30%',
                                data: xAxisDataObj.data
                            }
                        ]
                    };
                    renjunweishengChart.setOption(renjunweisheng_option);
                }
            }).catch(err=>{
                console.log(err);
            });


            //下面右边的三角形柱状图
            this.$axios({
                method: "post",
                url: baseUrl + "/stargaze/stargazaCockpit/getCockpitData",
                data: {
                    chartLocation:7,
                    chartType:1,
                    parentTitle:parentTitle,
                    subTitleCode:subTitleCode,
                    statisticsYear:''
                }
            }).then(res => {
                if(res.status == 200){
                    var BottomRightData = res.data.data;
                    var cockpitDatatList = BottomRightData.cockpitDatatList;
                    var xAxisDataObj = {
                        xAxisData:[],
                        data:[],
                        name:''
                    };
                    for(var i = 0; i < cockpitDatatList.length;i++){
                        xAxisDataObj.xAxisData.push(cockpitDatatList[i].statisticalIndicator);
                        xAxisDataObj.data.push(cockpitDatatList[i].firstStatisticalContent);
                        xAxisDataObj.name = cockpitDatatList[i].firstDescription;
                    }
                    var yiliaoyanChart = echarts.init(document.getElementById('yiliaoyanfaqingkuang')); 
                    var yiliaoyan_option = {
                        title:{
                            text:BottomRightData.chartName,
                            textStyle:{
                                color:'#fff',
                                fontSize:14
                            },
                            left:'center'
                        },
                        tooltip: {
                            trigger: 'axis',
                            axisPointer: {
                                type: 'none'
                            },
                            formatter: function (params) {
                                return params[0].name + ': ' + params[0].value;
                            }
                        },
                        xAxis: {
                            data: xAxisDataObj.xAxisData,
                            axisTick: {show: true},
                            axisLine: {show: true},
                            axisLabel: {
                                textStyle: {
                                    color: '#fff'
                                }
                            }
                        },
                        axisLabel:{
                            color:'#fff',
                            fontSize:14
                        },
                        yAxis: {
                            axisTick: {
                                    alignWithLabel: true,
                                    lineStyle:{color:'#2D8C6A'}    //坐标轴刻度线颜色
                            },
                            axisLine:{
                                lineStyle:{
                                    color:'#2D8C6A' //坐标轴颜色
                                }
                            },
                            axisLabel:{
                                color:'#fff',
                                fontSize:12
                            },
                            splitLine:{
                                show:true,  //是否显示后面的网格线
                                lineStyle:{
                                    color:'#2D8C6A'  //网格线颜色
                                }
                            }
                        },
                        color: ['#0FA16D'],
                        grid: {
                            left: '3%',
                            right: '4%',
                            bottom: '3%',
                            containLabel: true
                        },
                        series: [{
                            name: xAxisDataObj.name,
                            type: 'pictorialBar',
                            //位置偏移
                            barCategoryGap: '-10%',
                            //图形宽度
                            barWidth:50,
                            //图形形状
                            symbol: 'path://M150 50 L130 130 L170 130  Z',
                            itemStyle: {
                                normal: {
                                    opacity: 0.9
                                },
                                emphasis: {
                                    opacity: 1
                                }
                            },
                            data: xAxisDataObj.data,
                            z: 10
                        }, {
                            name: 'glyph',
                            type: 'pictorialBar',
                            barGap: '-100%',
                            symbolPosition: 'end',
                            symbolSize: 50,
                            symbolOffset: [0, '-120%']
                        }]
                    };
                    yiliaoyanChart.setOption(yiliaoyan_option);
                }
            }).catch(err=>{
                console.log(err);
            });
        }
    },
}
</script>

<style scoped lang='less'>
.naviga{
    width: 100%;
    height: 90px;
    background-color:  #3C3C46;
    display: flex;
    align-items: center;
    justify-content: center;
    .naviga_contant{
      width: 1200px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .left{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-right: 230px;
        .top{
          font-size: 24px;
          color: #FFFFFF;
          letter-spacing: 0.5px;
        }
        .bottom{
          font-size: 12px;
          color: #FFFFFF;
        }
      }
      .right{
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-grow: 1;
        .nav_text{
          display: flex;
          height: 90px;
          .nav_text_container{
            font-size: 16px;
            color: #FFFFFF;
            margin-right: 40px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-direction: column;
            .top{
              margin-top: 30px;
            }
            .bottom{
              width: 0; 
              height: 0;
              border-width: 10px;
              border-style: solid;
              border-color: transparent transparent #FFF transparent;
            }
          }
        }
        .sub_btn{
          background: #03A971;
          border-radius: 3px;
          font-size: 16px;
          color: #FFFFFF;
          text-align: center;
          padding: 10px 38px;
          box-sizing: border-box;
        }
      }
    }
}
.echarts_container{
    width: 100%;
    background-image: url('../../assets/images/obserStar/chart_bg_img.png');
    background-size: 100% 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 80px;
    box-sizing: border-box;
    flex-direction: column;
    .chart{
        width: 1200px;
        padding: 80px;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        .chart_top{
            font-size: 28px;
            color: #fff;
            text-align: center;
            margin-bottom: 48px;
        }
        .chart_container{
            width: 100%;
            margin-bottom: 40px;
            .top{
              width: 100%;
              height: 640px;
              margin-bottom: 20px;
              display: flex;
              align-items: center;
              justify-content: space-between;
              .left{
                width: 378px;
                height: 100%;
                margin-right: 21px;
                .left_top_bar{
                  width: 100%;
                  height: 309px;
                  margin-bottom: 21px;
                  background-color: blue;
                }
                .left_bottom_pie{
                  width: 100%;
                  height: 309px;
                  background-color: green;
                }
              }
              .right{
                height: 100%;
                flex-grow: 1;
                background-color: cornflowerblue;
              }
            }
            .middle{
              width: 100%;
              height: 264px;
              margin-bottom: 20px;
              display: flex;
              align-items: center;
              justify-content: space-between;
              .middle_left{
                width: 590px;
                height: 100%;
                margin-right: 21px;
                background-color: red;
              }
              .middle_right{
                height: 100%;
                width: 590px;
                background-color: pink;
              }
            }
            .bottom{
              width: 100%;
              height: 264px;
              display: flex;
              align-items: center;
              justify-content: space-between;
              .bottom_left{
                width: 590px;
                height: 100%;
                margin-right: 21px;
                background-color:orangered;
              }
              .bottom_right{
                width: 590px;
                height: 100%;
                background-color:skyblue;
              }
            }
        }
    }
}
</style>
