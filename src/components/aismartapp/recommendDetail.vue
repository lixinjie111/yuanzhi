<template>
  <div class="hello">
    <div class="naviga">
      <div class="naviga_contant">
        <div class="left">
          <div class="top">{{cn_title}}</div>
          <div class="bottom">{{en_title}}</div>
        </div>
        <div class="right" ref="navText">
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
    name: 'recommendDetail',
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
          title: '推荐',
          title_desc: '以用户行为数据为基础，采用深度学习等先进的机器学习 算法，帮助企业构建智能物品分发中心，实现对用户“千人千面”的个性化推荐，改善用户体验， 持续提升核心业务指标。',
          use_btn: '立即使用',
          tech_file: '技术文档',
          list_img: require('@/assets/images/aiSmartAppDetail/tuijian.png'),
          menu_text: ['猜你喜欢', '相关推荐'],
          weitu: require('@/assets/images/aiSmartAppDetail/cainixihuan.png'),
          app_title: '猜你喜欢',
          app_desc: '基于用户画像和候选物料特征，采用机器学习模型，计算用户和各物料的匹配相似性，并按照相似度值排序输出展示，最大程度提升场景下的点击率和转化率。',
          detailType:'recommendetail',
          list_nav_text:['功能介绍','应用场景','特色优势','支持交流'],
          function_text: [
            {
              img: require('@/assets/images/aiSmartAppDetail/icon1.png'),
              title: '个性化推荐',
              desc: '实现对内容/商品/服务的个性化分发，在终端用户侧感知到千人千面'
            },
            {
              img: require('@/assets/images/aiSmartAppDetail/icon2.png'),
              title: '相关推荐',
              desc: '在终端用户侧感知到当前内容/商品/服务相关的物品，实现延伸消费的需求场景'
            },
            {
              img: require('@/assets/images/aiSmartAppDetail/icon2.png'),
              title: '热门推荐',
              desc: '在终端用户侧感知到当前/内容/商品/服务热门排行的物品列表，实现从众消费的需求场景'
            }
          ],
          advant_text: [
            {
              img: require('@/assets/images/aiSmartAppDetail/icon1.png'),
              title: '算法功能强大',
              desc: '提供深度学习等先进的机器学习算法，保证优秀的推荐效果'
            },
            {
              img: require('@/assets/images/aiSmartAppDetail/icon2.png'),
              title: '私有化部署',
              desc: '支持私有化部署，确保核心数据资产安全，赋能算法模型二次开发能力'
            },
            {
              img: require('@/assets/images/aiSmartAppDetail/icon3.png'),
              title: '推荐运营干预',
              desc: '可视化平台支持自主对物品设置加权、封禁、必推、过滤等运营干预能力，推荐结果更符合业务实际需求'
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
