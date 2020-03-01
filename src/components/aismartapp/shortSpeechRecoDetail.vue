<template>
  <div class="hello">
    <div class="naviga">
      <div class="naviga_contant">
        <div class="left">
          <div class="top">{{cn_title}}</div>
          <div class="bottom">{{en_title}}</div>
        </div>
        <div class="right" ref="navText">
          <!-- <span v-for="(item,index) in nav_text" :key="index" @click="jumpFn(index)">
            {{item}}
          </span>
          <div class="sub_btn">{{sub_btn}}</div> -->

          <div class="nav_text">
            <div v-for="(item,index) in nav_text" :key="index" @click="jumpFn(index)" @mouseover="changeShow(index)" @mouseout="hideChange" class="nav_text_container">
              <div class="top" ref="navTextTop">{{item}}</div>
              <div class="bottom" v-if="(index == 1) && showTrian1"></div>
              <div class="bottom" v-else-if="(index == 2) && showTrian2"></div>
              <div class="bottom" v-else-if="(index == 3) && showTrian3"></div>
            </div>
          </div>
          <div class="sub_btn" @click="goLogin" v-show="ifShowSubBtn">{{sub_btn}}</div>
        </div>
      </div>
    </div>
    <vMenu v-show="showMenu" :navType='navType'></vMenu>
    <vList :objText='audion_tech'></vList>
  </div>
</template>

<script>
  import vList from './detailComponent';
  import vMenu from '../menu/menu';
  export default {
    name: 'shortSpeechRecoDetail',
    data() {
      return {
        cn_title: 'Sophia平台',
        en_title: '元知智能研究院',
        nav_text: ['首页', 'AI智能应用', '数据洞察', '观星台', '大数据平台', '行为图谱'],
        sub_btn: '立即登录',
        showTrian1:false,
        showTrian2:false,
        showTrian3:false,
        ifShowSubBtn:true,
        showMenu:false,
        navType:1,
        audion_tech: {
          title: '短语音识别',
          title_desc: '将60秒以内的语音精准识别为文字，可适用于手机语音输入、智能语音交互、语音指令、语音搜索等短语音交互场景',
          use_btn: '立即使用',
          tech_file: '技术文档',
          list_img: require('@/assets/images/aiSmartAppDetail/duanyuyinshibiebanner.png'),
          menu_text: ['语音客服质检', '会议记录', '语音短消息','游戏娱乐'],
          weitu: require('@/assets/images/aiSmartAppDetail/huiyijuluweitu.png'),
          app_title: '会议记录',
          app_desc: '对会议记录的音频文件，进行快速的识别，转化成文字，方便进行会议记录',
          funExperiText:'请点击“开始录音”，即可边说话边识别！',
          detailType:'duanyuyin',
          list_nav_text:['功能介绍','功能体验','应用场景','特色优势','支持交流'],
          function_text: [
            {
              img: require('@/assets/images/aiSmartAppDetail/icon1.png'),
              title: '高识别率',
              desc: '基于深度学习技术，对特定领域场景和语料进行优化，语音识别率达到业界领先'
            },
            {
              img: require('@/assets/images/aiSmartAppDetail/icon2.png'),
              title: '前沿技术',
              desc: '使用工业界成熟的算法，结合语音识别学术界最新研究成果，为企业提供独特竞争力优势'
            },
            {
              img: require('@/assets/images/aiSmartAppDetail/icon3.png'),
              title: '可定制化',
              desc: '针对客户的特定场景需求，定制垂直领域的语音识别模型，识别效果更精确'
            },
            {
              img: require('@/assets/images/aiSmartAppDetail/icon3.png'),
              title: '支持热词',
              desc: '针对专业词汇，支持上传至热词表，增加专业词汇的语音识别准确率'
            },
            {
              img: require('@/assets/images/aiSmartAppDetail/icon3.png'),
              title: '一句话识别',
              desc: '对时长较短（1分钟以内）的语音进行识别，提供良好的可扩展性，支持热词定制'
            },
            {
              img: require('@/assets/images/aiSmartAppDetail/icon3.png'),
              title: '录音文件识别',
              desc: '对于录制的长语音进行识别，转写成文字，提供不同领域模型，具备良好的可扩展性，支持热词定制'
            }
          ],
          advant_text: [
            {
              img: require('@/assets/images/aiSmartAppDetail/icon1.png'),
              title: '技术领先',
              desc: '采用领先国际的流式端到端语音语言一体化建模方法，融合百度自然语言处理技术，近场中文普通话识别准确率达98%'
            },
            {
              img: require('@/assets/images/aiSmartAppDetail/icon2.png'),
              title: '自助训练专属模型',
              desc: '支持在语音自训练平台上自助训练模型，上传词汇文本即可零代码完成训练，精准提升业务领域词汇识别率5-20%，并可专属使用'
            },
            {
              img: require('@/assets/images/aiSmartAppDetail/icon3.png'),
              title: '简单快速',
              desc: '支持API及多种SDK接入，可基于Demo快速简单接入，采用最新识别解码技术，识别速度极大提升'
            },
            {
              img: require('@/assets/images/aiSmartAppDetail/icon3.png'),
              title: '高效稳定',
              desc: '专有服务集群、提供企业级的稳定服务，弹性灵活的高并发承载及高可靠性保障'
            }
          ],
        },
      }
    },
    components: {
      vList,
      vMenu
    },
    mounted() {
      document.documentElement.scrollTo(0,0);
      document.body.scrollTo(0,0);
      if (this.$route.query.type == 1) {
        this.$refs.navText.childNodes[1].style = 'box-sizing: border-box;padding-bottom:3px;border-bottom: 3px #ffffff solid;';
      }
    },
    methods: {
      jumpFn(index) {
        if(index === 0){
          this.$router.push({
            path:'/index',
            query:{type:0}
          });
        }else if(index === 2){
          this.$router.push({
            path:'/insightData',
            query:{type:2}
          });
        }else if(index === 3){
          this.$router.push({
            path:'/obserStarData',
            query:{type:3}
          });
        }else if(index === 4 || index === 5){
          alert('页面开发中，尽请期待！')
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
  .naviga {
    width: 100%;
    height: 90px;
    background-color:  #3C3C46;
    display: flex;
    align-items: center;
    justify-content: center;
    .naviga_contant {
      width: 1200px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .left {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-right: 230px;
        .top {
          font-size: 30px;
          color: #FFFFFF;
          letter-spacing: 0.5px;
        }
        .bottom {
          font-size: 15px;
          color: #FFFFFF;
          letter-spacing: 5px;
        }
      }
      .right {
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
        .sub_btn {
          background: #03A971;
          border-radius: 3px;
          font-size: 16px;
          color: #FFFFFF;
          text-align: center;
          padding: 10px 38px;
          box-sizing: border-box;
        }
        .sub_btn:hover{
          cursor: pointer;
        }
      }
    }
  }

  .banner {
    width: 100%;
    background: #3F3F4B;
    display: flex;
    align-items: center;
    justify-content: center;
    .banner_contant {
      width: 1200px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .left {
        width: 40%;
        .desc1 {
          box-sizing: border-box;
          padding-top: 110px;
          padding-bottom: 20px;
          font-size: 48px;
          color: #FFFFFF;
        }
        .desc2 {
          box-sizing: border-box;
          padding-bottom: 60px;
          font-size: 16px;
          color: #FFFFFF;
          line-height: 32px;
        }
        .btn {
          box-sizing: border-box;
          padding-bottom: 132px;
          span {
            border-radius: 3px;
            font-size: 16px;
            color: #FFFFFF;
            text-align: center;
            padding: 10px 38px;
            box-sizing: border-box;
            margin-right: 40px;
          }
          span:nth-child(1) {
            background: #03A971;
          }
          span:nth-child(2) {
            border: 1px solid #FFFFFF;
            border-radius: 3px;
            border-radius: 3px;
          }
        }
      }
      .right {
        width: 60%;
        img {
          width: 100%;
        }
      }
    }
  }

  .product_list_container {
    width: 100%;
    background-color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
    .product_list {
      width:1200px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      .title {
        margin-top: 80px;
        margin-bottom: 50px;
        font-size: 36px;
        color: #121C33;
      }
      .feature_container {
        width: 100%;
      }
    }
  }

  .app_list_container {
    width: 100%;
    background-color: rgba(184, 190, 204, 0.15);
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    padding-bottom: 80px;
    .app_list {
      width:1200px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      .title {
        margin-top: 80px;
        margin-bottom: 50px;
        font-size: 36px;
        color: #121C33;
        text-align: center;
        z-index: 9999;
      }
      .app_feature_container {
        width: 100%;
        .top {
          display: flex;
          align-items: center;
          justify-content: space-around;
          // opacity: 0.41;
          border-bottom: 1px solid #B8BECC;
          margin-bottom: 41px;
          div {
            padding: 13px 0;
            box-sizing: border-box;
          }
        }
        .bottom {
          display: flex;
          justify-content: space-between;
          width: 100%;
          .left {
            width: 65%;
            img {
              width: 100%;
            }
          }
          .right {
            width: 35%;
            padding-left: 30px;
            box-sizing: border-box;
            background-color: #FFFFFF;
            .top {
              padding-top: 50px;
              box-sizing: border-box;
              font-size: 22px;
              color: #121C33;
              margin-bottom: 10px;
              border: none;
              text-align: left !important;
            }
            .bottom {
              font-size: 14px;
              color: #7A8499;
              line-height: 26px;
            }
          }
        }
      }
    }
  }

  .featur_advantage_container {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #FFFFFF;
    .featur_advantage {
      width: 1200px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      padding: 80px 0;
      box-sizing: border-box;
      .title {
        font-size: 36px;
        color: #121C33;
        text-align: center;
        margin-bottom: 50px;
      }
    }
  }

  .support_commit_container {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #FFFFFF;
    .support_commit {
      width: 1200px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      padding: 40px 0 82px 0;
      box-sizing: border-box;
      .title {
        font-size: 36px;
        color: #121C33;
        text-align: center;
        margin-bottom: 52px;
      }
    }
  }

  .get_audio_container {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #FFFFFF;
    .get_audio {
      width: 1200px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      padding: 80px 0;
      box-sizing: border-box;
      .title {
        font-size: 36px;
        color: #121C33;
        text-align: center;
        margin-bottom: 20px;
      }
      .btn {
        background: #03A971;
        border-radius: 3px;
        border-radius: 3px;
        font-size: 16px;
        color: #FFFFFF;
        text-align: center;
        padding: 10px 38px;
        box-sizing: border-box;
      }
    }
  }

  .footer_container {
    width: 100%;
    height: 200px;
    background: #2D3240;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 48px;
    .footer {
      height: 100%;
      width: 70%;
      padding-top: 24px;
      box-sizing: border-box;
      margin-left: -70px;
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      .function_intro, .ai_application, .big_data, .help_support, .quetions {
        width: 18%;
        height: 100%;
        text-align: left;
        p {
          opacity: 0.4;
          font-size: 14px;
          color: #FFFFFF;
          margin-bottom: 12px;
        }
        p:nth-child(1) {
          opacity: 0.1;
          font-size: 24px;
          color: #FFFFFF;
          margin-bottom: -14px;
        }
        p:nth-child(2) {
          opacity: 1;
          font-size: 16px;
        }
      }
    }
  }

  .copyright {
    width: 100%;
    padding: 25px 0;
    text-align: center;
    background: #2D3240;
    box-shadow: inset 0 1px 0 0 rgba(255, 255, 255, 0.10);
    p {
      opacity: 0.8;
      font-size: 14px;
      color: #C8CCCC;
    }
  }
</style>
