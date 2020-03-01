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
                <div class="bottom" v-show="(index == 3 ) && showTrian"></div>
                </div>
            </div>
            <div class="sub_btn">{{sub_btn}}</div>
            </div>
        </div>
    </div>

    <!--图形统计区域-->
    <div class="chart_container">
        <div class="chart">
            <div class="chart_top">{{subTitleName}}</div>
            <div class="chart_bottom">
                <div class="top">
                    <div class="left">
                        <div class="top" id="yiliaozhizaoyeguimo"></div>
                        <div class="bottom" id="yiliaozhizaojiegoufenbu"></div>
                    </div>
                    <div class="center" id="map"></div>
                    <div class="right">
                        <div class="top" id="yiweijigouzhenliaorenci"></div>
                        <div class="bottom" id="yiliaozhizaozijin"></div>
                    </div>
                </div>
                <div class="bottom">
                    <div class="left" id="renjunweishengfei"></div>
                    <div class="right" id="yiliaoyanfaqingkuang"></div>
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
import 'echarts/map/js/china.js'
export default {
    name:'obserStarLiveDetail',
    data(){
        return {
            cn_title:'元知智能研究院',
            en_title:'YUANZHI AI Research Institute',
            nav_text:['首页','AI智能应用','数据洞察','观星台','大数据平台','行为图谱'],
            sub_btn:'立即登录',
            subTitleName:'',
            showTrian:false,
            topLeftTopData:{}, //上左上数据  柱状图
            topLeftBottomData:{}, //上左下数据  饼图
            topCenterData:{},//上中数据   中国地图
            topRightTopData:{}, //上右上数据 折线图
            topRightBottomData:{}, //上右下数据  环形饼图
            BottomLeftData:{},  //下左数据   下方左面柱状图
            BottomRightData:{} //下右数据  下方右面三角形柱状图
        }
    },
    components:{
        vFooterCopy
    },
    created(){
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
        changeShow(index){
            if(index === 3){
                this.showTrian = true;
            }
            else{
                this.showTrian = false;
            }
        },
        randomData() {
            return Math.round(Math.random()*500);
        },
        getChartData(){
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
.chart_container{
    width: 100%;
    height: 983px;
    background-image: url('../../assets/images/obserStar/chart_bg_img.png');
    background-size: 100% 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 80px;
    box-sizing: border-box;
    .chart{
        width: 1200px;
        padding-bottom: 80px;
        box-sizing: border-box;
        .chart_top{
            text-align: center;
            font-size: 28px;
            color: #ffffff;
            text-align: center;
            margin-bottom: 32px;
        }
        .chart_bottom{
            width: 100%;
            // background-image: url('../../assets/images/obserStar/obserDetail.jpg');
            // background-size: 100% 100%;
            .top{
                width: 100%;
                height: 451px;
                margin-bottom: 20px;
                display: flex;
                align-items: center;
                justify-content: space-between;
                .left{
                    width: 305px;
                    height: 100%;
                    .top{
                        width: 100%;
                        height: 181px;
                        // background-color: blue;
                        margin-bottom: 20px;
                        border:rgba(3,169,113,0.3) 1px solid;
                        background-color: rgba(3,169,113,0.1);
                    }
                    .bottom{
                        width: 100%;
                        height: 250px;
                        // background-color: brown;
                        border:rgba(3,169,113,0.3) 1px solid;
                        background-color: rgba(3,169,113,0.1);
                    }
                }
                .center{
                    width: 546px;
                    height: 100%;
                    // background-color: red;
                    border:rgba(3,169,113,0.3) 1px solid;
                    background-color: rgba(3,169,113,0.1);
                }
                .right{
                    width: 305px;
                    height: 100%;
                    .top{
                        width: 100%;
                        height: 181px;
                        // background-color: blue;
                        margin-bottom: 20px;
                        border:rgba(3,169,113,0.3) 1px solid;
                        background-color: rgba(3,169,113,0.1);
                    }
                    .bottom{
                        width: 100%;
                        height: 250px;
                        // background-color: brown;
                        border:rgba(3,169,113,0.3) 1px solid;
                        background-color: rgba(3,169,113,0.1);
                    }
                }
            }
            .bottom{
                width: 100%;
                height: 264px;
                display: flex;
                align-items: center;
                justify-content: space-between;
                .left,.right{
                    width: 590px;
                    height: 100%;
                }
                .left{
                //    background-color: chartreuse;
                    border:rgba(3,169,113,0.3) 1px solid;
                    background-color: rgba(3,169,113,0.1);
                }
                .right{
                //    background-color: darkolivegreen;
                    border:rgba(3,169,113,0.3) 1px solid;
                    background-color: rgba(3,169,113,0.1);
                }
            }
        }
    }
}
</style>
