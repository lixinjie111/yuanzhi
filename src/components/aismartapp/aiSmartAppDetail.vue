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
    <vMenu v-show="showMenu" :navType='navType' @closeMenu='closeMenuFa'></vMenu>
    <vList :objText='audion_tech'></vList>
  </div>
</template>

<script>
  import vList from './detailComponent';
  import vMenu from '../menu/menu';
  export default {
    name: 'aiSmartAppDetail',
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
          title: '词法分析',
          title_desc: '基于大数据和用户行为的分词、词性标注、命名实体识别，定位基本语言元素，消除歧义，支撑自然语言的准确理解',
          use_btn: '立即使用',
          tech_file: '技术文档',
          list_img: require('@/assets/images/aiSmartAppDetail/cifafenxibanner.png'),
          menu_text: ['语音指令解析', '多轮交互式搜索', '实体数据库构建'],
          weitu: require('@/assets/images/aiSmartAppDetail/yuyinzhiling.png'),
          app_title: '语音指令解析',
          app_desc: '以分词和词性标注为基础，分析语音命令中的关键名词、动词、数量、时间等，准确理解命令的含义，提高用户体验',
          funExperiText:'请输入一段想分析的文本',
          detailType:'cifafenxi',
          list_nav_text:['功能介绍','功能体验','应用场景','特色优势','支持交流'],
          function_text: [
            {
              img: require('@/assets/images/aiSmartAppDetail/icon1.png'),
              title: '中文分词',
              desc: '中文分词是将连续的自然语言文本，切分成具有语义合理性和完整性的词汇序列的过程'
            },
            {
              img: require('@/assets/images/aiSmartAppDetail/icon2.png'),
              title: '词性标注',
              desc: '词性标注（Part-of-Speech tagging 或POS tagging）是指为自然语言文本中的每个词汇赋予一个词性的过程'
            },
            {
              img: require('@/assets/images/aiSmartAppDetail/icon3.png'),
              title: '专有名词',
              desc: '命名实体识别（简称NER），即"专名识别"，是指识别自然语言文本中具有特定意义的实体，主要包括人名、地名、机构名、时间日期等'
            }
          ],
          advant_text: [
            {
              img: require('@/assets/images/aiSmartAppDetail/icon1.png'),
              title: '粒度更灵活',
              desc: '模型既保证了基本词汇的原子性，又保证了大粒度词汇，对领域新词、专有名词的识别尤其有效'
            },
            {
              img: require('@/assets/images/aiSmartAppDetail/icon2.png'),
              title: '海量数据建模',
              desc: '海量训练样本，百亿级的点击反馈，提高了算法在复杂多变的应用场景下的效果稳定性和适配性'
            },
            {
              img: require('@/assets/images/aiSmartAppDetail/icon3.png'),
              title: '自由定制',
              desc: '可根据需求自主干预和定制分词效果，自由定制专名实体类目，打造个性化的分词和专名识别系统'
            }
          ],
        },
      }
    },
    components: {
      vList,
      vMenu
    },
    created(){
    },
    mounted() {
      document.documentElement.scrollTo(0,0);
      document.body.scrollTo(0,0);
      console.log(999999999999999999)
      if (this.$route.query.type == 1) {
        this.$refs.navTextTop[1].style='box-sizing: border-box;padding-bottom:3px;border-bottom: 3px #ffffff solid;';
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
    closeMenuFa(arg){
      this.showMenu = arg;
      this.showTrian1 = arg;
      this.showTrian2 = arg;
      this.showTrian3 = arg;
    },
    hideChange(){
      var navTextArrDom = this.$refs.navTextTop;
      for(var i = 0; i < navTextArrDom.length;i++){
        if(i == 1){
          navTextArrDom[i].style = 'box-sizing: border-box;padding-bottom:3px;border-bottom: 3px #ffffff solid;';
        }
        else{
          navTextArrDom[i].style = 'padding-bottom:0;border-bottom:none';
        }
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
      .component {
        width: 100%;
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
      .component {
        width: 100%;
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
