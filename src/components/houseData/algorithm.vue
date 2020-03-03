<template>
  <div class="hello">
    <!--顶部导航-->
    <div class="naviga">
      <div class="naviga_contant">
        <div class="left">
          <div class="top">{{cn_title}}</div>
          <div class="bottom">{{en_title}}</div>
        </div>
        <div class="right">
          <div class="nav_text">
            <div v-for="(item,index) in nav_text" :key="index" @click="jumpFn(index)" @mouseover="changeShow(index)" @mouseout="hideChange" class="nav_text_container">
              <div class="top" ref="navTextTop">{{item}}</div>
              <div class="bottom" v-show="(index ==1 ) && showTrian1"></div>
              <div class="bottom" v-show="(index ==2 ) && showTrian2"></div>
              <div class="bottom" v-show="(index == 3) && showTrian3"></div>
            </div>
          </div>
          <div class="sub_btn"  @click="goLogin" v-show="ifShowSubBtn">{{sub_btn}}</div>
          <div class="user_container" v-show="!ifShowSubBtn">
            <div class="img">
              <!-- <img :src="headerImg" alt="" srcset=""> -->
            </div>
            <div class="user">用户名</div>
            <div class="down_icon"></div>
          </div>
        </div>
      </div>
    </div>

    <vMenu v-show="showMenu" :navType='navType'></vMenu>
    <div class="banner">
      <img src="../../assets/images/houseData/suanfa.png" alt="">
      <div class="content">
        <p class="title">开源算法</p>
        <p class="intro">收集和整理的目前互联网上知名开源算法</p>
      </div>
    </div>

    <!--内容区域-->
    <div class="insight_data_container">
        <div class="drop_down_menu_container">
            <div class="drop_down_menu">
                <div class="left">
                    <span>开源算法集</span>
                    <span>资源数：32</span>
                </div>
                <div class="right">
                    <div class="address">
                        <Select v-model="model1" style="width:200px">
                            <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                        </Select>
                    </div>
                    <div class="search">
                        <input type="text" placeholder="查找开源算法">
                        <!-- <i-input :value.sync="value" placeholder="查找开源算法" style="width: 300px"></i-input> -->
                        <div class="search_btn"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <ul class="list">
      <li v-for="(item,index) in content" :key="index">
        <div class="left">
          <div class="header" :style="{backgroundColor:item.color}">{{item.type}}</div>
        </div>
        <div class="center">
          <div class="title">{{item.title}}</div>
          <div class="intro">{{item.intro}}</div>
          <div class="comment">
            <div class="icon"><img src="../../assets/images/houseData/github.png" alt=""> </div> 
            <span>github</span>
            <span class="time">{{item.time}}</span>
            <span class="isPublic">{{item.isPublic}}</span>
          </div>
        </div>
        <div class="right">
           <div class="lookDetail" @click="lookDetail(item.url)">查看详情</div>
        </div>
      </li>
    </ul>


    <!--底部导航及版权说明-->
    <vFooterCopy></vFooterCopy>

     <vLogin v-show="ifShowLogin" @closeLoginWin='closeLoginWin'></vLogin>
  </div>
</template>

<script>
import vFooterCopy from '../footerCopyright/footerCopyright';
import vMenu from '../menu/menu';
import vLogin from '../login/login';
export default {
  name: 'insightData',
  data () {
    return {
      cn_title:'Sophia平台',
      en_title:'元知智能研究院',
      nav_text:['首页','AI智能应用','数据洞察','观星台','大数据平台','行为图谱'],
      sub_btn:'立即登录',
      showTrian1:false,
      showTrian2:false,
      ifShowCase:true,
      ifShowLawyer:false,
      ifShowParties:false,
      ifShowRealEstate:false,
      showMenu:false,
      menuText:'楼盘',
      navType:2,
      ifShowLogin:false,
      ifShowSubBtn:true,
      showTrian3:false,
      headerImg:require('@/assets/images/home/timg.jpg'),
      content:[
        {
         title:"拼写检查算法",
         intro:"此功能基于symspell实现，建议使用检查词等级的错误，对于句子尚未能很好的解决拼写错误问题。",
         url:"https://github.com/SeanLee97/xmnlp",
         time:"2020-03-02 11:49:06",
         isPublic:"公开",
         color:"#FFC10D ",
         type:"文本"
        },
        {
         title:"汉字部首判断算法",
         intro:"部首是一种文本的特征，在深度学习中我们有时可以加入部首特征来训练网络。",
         url:"https://github.com/SeanLee97/xmnlp",
         time:"2020-03-02 11:49:06",
         isPublic:"公开",
         color:"#FFC10D ",
         type:"文本"
        },
        {
         title:"视频文本摘要算法",
         intro:"输入一段视频，通过深度学习网络和人工智能程序识别视频主要表达的意思。",
         url:"https://github.com/CaptainEven/VideoCaption",
         time:"2020-03-02 11:49:06",
         isPublic:"公开",
         color:"#13BFC1",
         type:"视频"
        },
        {
         title:"验证码识别算法",
         intro:"本项目针对字符型图片验证码，使用tensorflow实现卷积神经网络，进行验证码识别。",
         url:"https://github.com/nickliqian/cnn_captcha",
         time:"2020-03-02 11:49:06",
         isPublic:"公开",
         color:"#FE5560  ",
         type:"图像"
        },
        {
         title:"CAD三维物体的识别与跟踪算法",
         intro:"CAD三维物体的识别与跟踪，（识别部分）大模块分为三个部分：1.图像的梯度计算，2图像的相似度计算，3取最大的得分位置。",
         url:"https://github.com/fatherworld/CAD_TRACKER",
         time:"2020-03-02 11:49:06",
         isPublic:"公开",
         color:"#FE5560  ",
         type:"图像"
        },
        {
         title:"中文语音识别算法",
         intro:"本项目使用Keras，TensorFlow基于深度卷积神经网络和长短时记忆神经网络，关注机制以及CTC实现。",
         url:"https://github.com/nl8590687/ASRT_SpeechRecognition",
         time:"2020-03-02 11:49:06",
         isPublic:"公开",
         color:"#FFC10D ",
         type:"图像"
        },
        {
         title:"人脸识别算法",
         intro:"调用face ++，BaiduAI，Azure，以及开源项目face_recognition实现的人脸识别演示。",
         url:"https://github.com/seabirdustc/face-recognition-demo",
         time:"2020-03-02 11:49:06",
         isPublic:"公开",
         color:"#4A90E2 ",
         type:"语音"
        },
        {
         title:"人脸检测算法",
         intro:"多任务级联卷积神经网络的联合人脸检测与对准。",
         url:"https://github.com/kpzhang93/MTCNN_face_detection_alignment",
         time:"2020-03-02 11:49:06",
         isPublic:"公开",
         color:"#53B884  ",
         type:"人脸"
        },
        {
         title:"搜索算法",
         intro:"通过ahocorasick算法快速进行文本搜索。",
         url:"https://github.com/pyloque/fastscan",
         time:"2020-03-02 11:49:06",
         isPublic:"公开",
         color:"#FD6A2B",
         type:"搜索"
        },
        {
         title:"图像识别算法",
         intro:"使用数字图像处理算法根据植物叶片的形状，颜色和纹理特征识别植物。",
         url:"https://github.com/AayushG159/Plant-Leaf-Identification",
         time:"2020-03-02 11:49:06",
         isPublic:"公开",
         color:"#FE5560 ",
         type:"图像"
        },
      ],
      cityList: [
        {
            value: '1',
            label: '按时间排序'
        },
        {
            value: '2',
            label: '按算法类型排序'
        },
    ],
    model1: ''
            
    }
  },
  components:{
      vFooterCopy,
      vMenu,
      vLogin
  },
  created(){
    var name = localStorage.getItem('name');
    if(name){
      this.ifShowSubBtn = false;
    }else{
      this.ifShowSubBtn = true;
    }
  },
  mounted(){
    document.documentElement.scrollTop=0;
    if(this.$route.query.type == 2){
      this.$refs.navTextTop[2].style='box-sizing: border-box;padding-bottom:3px;border-bottom: 3px #ffffff solid;';
    }
  },
  methods:{
    lookDetail(url){
      window.open(url);
    },
    jumpFn(index){
      if(index === 0){
        this.$router.push({
            path:'/index',
            query:{type:0}
        });
      }else if(index === 1){
        this.$router.push({
          path:'/aiSmartAppList',
          query:{type:1}
        });
      }else if(index === 3){
        this.$router.push({
          path:'/obserStarData',
          query:{type:3}
        });
      }else if(index === 4 || index === 5){
        this.ifShowLogin = true;
      }
    },
    changeShow(index){
      this.navType=index;
      this.$refs.navTextTop[index].style='box-sizing: border-box;padding-bottom:3px;border-bottom: 3px #ffffff solid;';
      if(index == 1){
        this.showMenu = true;
        this.showTrian1 = true;
        this.showTrian2 = false;
        this.showTrian3 = false;
      }
      else if(index == 2){
        this.showMenu = true;
        this.showTrian1 = false;
        this.showTrian2 = true;
        this.showTrian3 = false;
      }
      else if(index == 3){
        this.showMenu = true;
        this.showTrian1 = false;
        this.showTrian2 = false;
        this.showTrian3 = true;
      }
      else{
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
    changeConent(arg){
      if(arg == 'case'){
        this.ifShowCase = true;
        this.ifShowLawyer = false;
        this.ifShowParties = false;
        this.ifShowRealEstate = false;
        this.menuText = '楼盘';
      }else{
        this.goLogin()
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
.hello{
  position: relative;
  .list{
    margin:80px auto;
    width: 1200px;
    li{
      height: 220px;
      padding: 20px;
      border: 1px solid #EBECF0;
      margin-bottom: 10px;
      display: flex;
      .left{
        width:100px;
        .header{
          margin: auto;
          border-radius:50%;
          width: 60px;
          height: 60px;
          text-align: center;
          line-height: 60px;
        }
      }
      .center{
        width:650px;
        position: relative;
        .title{
          font-size: 22px;
          color: #3D4966;
          letter-spacing: 0;
          margin-bottom:10px;
        };
        .intro{
          font-size: 14px;
          color: #7A8499;
          letter-spacing: 0;
          line-height: 24px;
          display: -webkit-box;
          height:90px;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 3;
          overflow: hidden;
        }
        .comment{
          position: absolute;
          bottom:20px;
          display: flex;
          align-items: center;
          .icon{
            display: inline-block;
            width:24px;
            margin-right: 20px;
             img{
              width:100%;
              display: block;
            }
          }
          .time{
            margin-left:50px;
            font-size: 14px;
            color: #3D4966;
            letter-spacing: 0;
          }
          .isPublic{
            margin-left:50px;
            font-size: 14px;
            color: #3D4966;
            letter-spacing:0; 
          }

         
        }
      }
      .right{
       flex:1;
       position: relative;
       .lookDetail{
         width:120px;
         height: 36px;
         line-height: 36px;
         text-align: center;
         position: absolute;
         right: 50px;
         bottom:20px;
         border: 1px solid #03A971;
        border-radius: 3px;
        color:#03A971;
        cursor: pointer;
       }
      }
    }
  }
  .banner{
    position:relative;
    display: flex;
    align-items: center;
    img{
      width: 100%;
      display: block;
    }
    .content{
      position: absolute;
      left:100px;
      .title{
        font-size: 36px;
        color: #FFFFFF;
      }
      .intro{
        font-size: 16px;
        color: #FFFFFF;
        line-height: 32px;
      }
    }
  }
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
        // span{
        //   font-size: 16px;
        //   color: #FFFFFF;
        //   margin-right: 20px;
        // }
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
          .user{
            color: #FFF;
          }
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
        }
        .sub_btn:hover{
          cursor: pointer;
        }
      }
    }
  }
  .insight_data_container{
      width: 100%;
      background-color: #FFFFFF;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      .drop_down_menu_container{
        width: 100%;
        height: 80px;
        display: flex;
        align-items: center;
        justify-content:center;
        box-shadow: 0 3px 6px 0 #F2F4F7;
        .drop_down_menu{
            width: 1200px;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            .left{
                width: 218px;
                span:nth-child(1){
                    font-size: 16px;
                    color: #121C33;
                    letter-spacing: 0;
                }
                span:nth-child(2){
                    font-size: 16px;
                    color: #B8BECC;
                    letter-spacing: 0;
                }
            }
            .right{
                display: flex;
                align-items: center;
                justify-content: flex-end;
                .address{
                  margin-right: 30px;
                  .ivu-dropdown{
                    width: 60px;
                    .ivu-dropdown-rel{
                      display: flex;
                      width: 65px;
                      a{
                        font-size: 14px;
                        color: #121C33;
                        letter-spacing: 0;
                      }
                  }
                  .ivu-select-dropdown{
                      .ivu-dropdown-menu{
                          li:hover{
                            color: #03A971;
                            width: 100%;
                          }
                      }
                    }
                  }
                }
                .in_type{
                  margin-right: 30px;
                  .ivu-dropdown{
                    .ivu-dropdown-rel{
                      display: flex;
                      width: 65px;
                      a{
                        color: #03A971;
                      }
                    }
                    .ivu-select-dropdown{
                      .ivu-dropdown-menu{
                          li:hover{
                            color: #03A971;
                            width: 100%;
                          }
                      }
                    }
                  }
                }
                .search{
                    display: flex;
                    align-items: center;
                    input{
                      width: 331px;
                      height: 40px;
                      padding-left: 10px;
                      box-sizing: border-box;
                      -webkit-appearance:none;
                      ::placeholder{
                        font-size: 14px;
                        color: #B8BECC;
                        letter-spacing: 0;
                      }
                      :-moz-placeholder{
                        font-size: 14px;
                        color: #B8BECC;
                        letter-spacing: 0;
                      }
                      :-ms-input-placeholder{
                        font-size: 14px;
                        color: #B8BECC;
                        letter-spacing: 0;
                      }
                      ::-moz-placeholder{
                        font-size: 14px;
                        color: #B8BECC;
                        letter-spacing: 0;
                      }
                      ::-webkit-input-placeholder{
                        font-size: 14px;
                        color: #B8BECC;
                        letter-spacing: 0;
                      }
                    }
                    .search_btn{
                      width: 40px;
                      height: 40px;
                      background-image: url('../../assets/images/insightData/search_btn.png');
                      background-size: 100% 100%;
                    }
                }
            }
        }
      }
  }
}
</style>
