<template>
  <div class="hello">
    <div class="naviga">
      <div class="naviga_contant">
        <div class="left">
          <div class="top">{{cn_title}}</div>
          <div class="bottom">{{en_title}}</div>
        </div>
        <div class="right">
          <!-- <span v-for="(item,index) in nav_text" :key="index" @click="jumpFn(index)">
            {{item}}
          </span> -->
          <div class="nav_text">
            <div v-for="(item,index) in nav_text" :key="index" @click="jumpFn(index)" @mouseover="changeShow(index)" @mouseout="hideChange" class="nav_text_container">
              <div class="top" ref="navTextTop">{{item}}</div>
              <div class="bottom" v-if="(index == 1) && showTrian1"></div>
              <div class="bottom" v-else-if="(index == 2) && showTrian2"></div>
              <div class="bottom" v-else-if="(index == 3) && showTrian3"></div>
            </div>
          </div>
          <div class="sub_btn" @click="goLogin" v-show="ifShowSubBtn">{{sub_btn}}</div>
          <div class="user_container" v-show="!ifShowSubBtn">
            <div class="img">
            </div>
            <div class="user">用户名</div>
            <div class="down_icon"></div>
          </div>
        </div>
      </div>
    </div>

    <vMenu v-show="showMenu" :navType='navType'></vMenu>

    <div class="banner">
      <Carousel autoplay loop>
            <Carousel-item>
                <div class="demo-carousel">
                  <img :src="banner1" alt="" srcset="">
                </div>
            </Carousel-item>
            <Carousel-item>
                <div class="demo-carousel">
                  <img :src="banner2" alt="" srcset="">
                </div>
            </Carousel-item>
            <Carousel-item>
                <div class="demo-carousel">
                  <img :src="banner3" alt="" srcset="">
                </div>
            </Carousel-item>
            <Carousel-item>
                <div class="demo-carousel">
                  <img :src="banner4" alt="" srcset="">
                </div>
            </Carousel-item>
            <Carousel-item>
                <div class="demo-carousel">
                  <img :src="banner5" alt="" srcset="">
                </div>
            </Carousel-item>
        </Carousel>
    </div>
    
    <!--AI助力产品加速-->
    <Vnofeatur :featurData='aitext' :type='0'></Vnofeatur>
    <!--数据智能应用-->
    <Vhasfeatur :hasbgdata='data_intell_app'></Vhasfeatur>
    <!--观星台-->
    <Vnofeatur :featurData='watch_star_data' :type='1'></Vnofeatur>
    <!--智能大数据-->
    <Vhasfeatur :hasbgdata='intell_big_data'></Vhasfeatur>
    <!--行为图谱-->
    <Vnofeatur :featurData='behaviormaptext' :type='2'></Vnofeatur>
    <!--底部及版权组件-->
    <vFooterCopy></vFooterCopy>
    <vLogin v-show="ifShowLogin" @closeLoginWin='closeLoginWin'></vLogin>
  </div>
</template>

<script>
import Vnofeatur from './home/nobgcFeatures';
import Vhasfeatur from './home/hasbgFeatures';
import vMenu from './menu/menu';
import vFooterCopy from '../components/footerCopyright/footerCopyright';
import vLogin from '../components/login/login';
export default {
  name: 'home',
  data () {
    return {
      headerImg:require('../assets/images/home/timg.jpg'),
      cn_title:'Sophia平台',
      en_title:'元知智能研究院',
      nav_text:['首页','AI智能应用','数据洞察','观星台','大数据平台','行为图谱'],
      sub_btn:'立即登录',
      navType:0,
      showTrian1:false,
      showTrian2:false,
      showTrian3:false,
      ifShowLogin:false,
      ifShowSubBtn:true,
      banner1:require('../assets/images/home/banner1.png'),
      banner2:require('../assets/images/home/banner2.png'),
      banner3:require('../assets/images/home/banner3.png'),
      banner4:require('../assets/images/home/banner4.png'),
      banner5:require('../assets/images/home/banner5.png'),
      aitext:{
        cntitle:'AI助力产品加速',
        entitle:'Artificial Intelligence',
        featur:[
          {
            Text:'自然语言处理',
            img:require('../assets/images/home/ai1.png')
          },
          {
            Text:'语音技术',
            img:require('../assets/images/home/ai2.png')
          },
          {
            Text:'图像文字识别',
            img:require('../assets/images/home/ai3.png')
          },
          {
            Text:'视频识别',
            img:require('../assets/images/home/ai4.png')
          },
          {
            Text:'人脸检测',
            img:require('../assets/images/home/ai7.png')
          },
          {
            Text:'推荐',
            img:require('../assets/images/home/watch2.png')
          },
          {
            Text:'搜索',
            img:require('../assets/images/home/watch3.png')
          },
          {
            Text:'舆情分析',
            img:require('../assets/images/home/watch4.png')
          }
          ],
      },
      behaviormaptext:{
        cntitle:'行为图谱',
        entitle:'Behavior Map',
        featur:[
          {
            Text:'基础数据',
            img:require('../assets/images/home/behavior1.png')
          },
          {
            Text:'行为数据',
            img:require('../assets/images/home/behavior2.png')
          },
          {
            Text:'服务数据',
            img:require('../assets/images/home/behavior3.png')
          },
          {
            Text:'行为图谱',
            img:require('../assets/images/home/behavior4.png')
          }],
      },
      data_intell_app:{
        cn_title:'数据洞察',
        en_title:'Data Insight',
        contant_text:[
          {
            img:require('../assets/images/home/data1.png'),
            title:'法律综合分析',
            desc:''
          },
          {
            img:require('../assets/images/home/data5.png'),
            title:'房产综合分析',
            desc:''
          },
          {
            img:require('../assets/images/home/data2.png'),
            title:'品牌舆情洞察',
            desc:''
          },
          {
            img:require('../assets/images/home/data3.png'),
            title:'地理综合查询',
            desc:''
          }
        ]
      },
      intell_big_data:{
        cn_title:'大数据平台',
        en_title:'Big Data',
        contant_text:[
          {
            img:require('../assets/images/home/intell1.png'),
            title:'BI服务',
            desc:'支持离线在线流式等多种类型的数据源，集成sql和拖拽数据表建模'
          },
          {
            img:require('../assets/images/home/intell2.png'),
            title:'数据服务',
            desc:'数据服务指提供数据采集、数据传输、数据存储、数据处理（包括计算、分析、可视化等）'
          },
          {
            img:require('../assets/images/home/intell3.png'),
            title:'算法服务',
            desc:'为您提供算法服务相关的内容、还有VM虚拟机之间通信网站管理、官网。'
          },
          {
            img:require('../assets/images/home/intell4.png'),
            title:'数仓服务',
            desc:'为您提供智能数仓相关的内容，还有数据库类型、INT类型、虚拟主机的形式。'
          }
        ]
      },
      watch_star_data:{
        cntitle:'观星台',
        entitle:'Observatory',
        featur:[
          {
            Text:'政治数据',
            img:require('../assets/images/home/watch1.png'),
            desc:'提供政府机构与社会团体、环境与资源等政治类数据搜索以及数据可视化服务',
            featurType:0
          },
          {
            Text:'民生数据',
            img:require('../assets/images/home/watch2.png'),
            desc:'提供医疗、社保、就业、安全、交通、企业服务等民生类数据搜索以及数据可视化服务',
            featurType:1
          },
          {
            Text:'经济数据',
            img:require('../assets/images/home/watch3.png'),
            desc:'提供信用、财税、消费房屋等经济类数据搜索以及数据可视化服务',
            featurType:2
          },
          {
            Text:'文化数据',
            img:require('../assets/images/home/watch4.png'),
            desc:'提供旅游、文体、教育、宗教、饮食等文化类数据搜索以及数据可视化服务',
            featurType:3
          },
          {
            Text:'样本数据',
            img:require('../assets/images/home/intell3.png'),
            desc:'为您的模型训练提供丰富的语音、文本、图像、视频等开源数据集',
            featurType:3
          }
        ],
      },
      showMenu:false
    }
  },
  components:{
    Vnofeatur,
    Vhasfeatur,
    vMenu,
    vFooterCopy,
    vLogin
  },
  created(){
    // var name = localStorage.getItem('name');
    // if(!name){
    //   this.$router.push({
    //     path:'/login'
    //   });
    // }else{
    //   this.$router.push({
    //     path:'/index',
    //     query:{
    //       type:0
    //     }
    //   });
    //   this.ifShowSubBtn = false;
    // }
  },
  mounted(){
    var type = this.$route.query.type;
    if(type == 0 || !type){
      this.$refs.navTextTop[0].style='box-sizing: border-box;padding-bottom:3px;border-bottom: 3px #ffffff solid;';
      //this.$refs.navText.childNodes[0].style='box-sizing: border-box;padding-bottom:3px;border-bottom: 3px #ffffff solid;';
    }
  },
  methods:{
    jumpFn(index){
      if(index === 1){
        this.$router.push({
          path:'/aiSmartAppList',
          query:{type:1}
        });
      }else if(index === 2){
        this.$router.push({
          path:'/insightData',
          query:{type:2}
        });
      }else if(index === 3){
        this.$router.push({
          path:'/obserStarData',
          query:{
            type:3,
            featurType:0
          }
        });
      }else if(index === 4 || index === 5){
        this.ifShowLogin = true;
      }
    },
    changeShow(index){
      this.navType = index;
      this.$refs.navTextTop[index].style='box-sizing: border-box;padding-bottom:3px;border-bottom: 3px #ffffff solid;';
      if(index == 1){
        this.showMenu = true;
        this.showTrian1 = true;
        this.showTrian2 = false;
        this.showTrian3 = false;
      }else if(index == 2){
        this.showMenu = true;
        this.showTrian1 = false;
        this.showTrian2 = true;
        this.showTrian3 = false;
      }else if(index == 3){
        this.showMenu = true;
        this.showTrian1 = false;
        this.showTrian2 = false;
        this.showTrian3 = true;
      }else{
        this.showMenu = false;
        this.showTrian1 = false;
        this.showTrian2 = false;
        this.showTrian3 = false;
      }
    },
    hideChange(){
      var navTextArrDom = this.$refs.navTextTop;
      for(var i = 0; i < navTextArrDom.length;i++){
        navTextArrDom[i].style = 'padding-bottom:0;border-bottom:none';
      }
    },
    goLogin(){
      this.ifShowLogin = true;
    },
    closeLoginWin(arg){
      this.ifShowLogin = arg;
    }
  }
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
        letter-spacing: 5px;
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
          :hover{
            cursor: pointer;
          }
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
      .user_container{
        display: flex;
        align-items: center;
        flex-grow: 1;
        .img{
          height: 40px;
          width: 40px;
          border-radius: 40px;
          margin-right: 10px;
          margin-left: 60px;
          img{
            width: 100%;
            height: 100%;
            border-radius: 40px;
          }
        }
        .user{
          color: #FFF;
        }
      }
      .sub_btn:hover{
        cursor: pointer;
      }
    }
  }
}
.banner{
  width: 100%;
  .ivu-carousel{
    height: 359px;
    width: 100%;
    .demo-carousel{
      img{
        height: 100%;
        width: 100%;
      }
    }
  }
}
</style>
