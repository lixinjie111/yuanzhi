<template>
  <div class="hello">

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
          <div class="sub_btn" @click="goLogin" v-show="ifShowSubBtn">{{sub_btn}}</div>
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

    <vMenu v-show="showMenu" :navType='navType' @closeMenu='closeMenuFa'></vMenu>

    <vList :objText='aiListData'></vList>

    <vLogin v-show="ifShowLogin" @closeLoginWin='closeLoginWin'></vLogin>

  </div>
</template>

<script>
import vList from './listComponent';
import vMenu from '../menu/menu';
import vLogin from '../login/login';
export default {
  name: 'textReocList',
  data () {
    var language_tech = {
        title:'视频识别',
        title_desc:'利用多模态的视频处理和智能分析技术识别视频的片段，语音、图像、文本中包含的结构化信息，可用于视频内容的管理、搜索、推荐和审核场景',
        use_btn:'立即使用',
        tech_file:'技术文档',
        funText:'即刻获得视频识别能力',
        list_img:require('@/assets/images/aiSmartAppList/shipinshibie.png'),
        listType:'shipinshibie',
        product_list_data:[
          {
            img:require('@/assets/images/aiSmartAppList/neirongfenxi.png'),
            title:'视频内容分析',
            desc:'通过多维AI技术，对视频进行智能分析，输出视频内容的泛标签，从而提高搜索准确度和用户推荐视频的曝光量'
          },
          {
            img:require('@/assets/images/aiSmartAppList/neirongshenhe.png'),
            title:'视频内容审核',
            desc:'针对视频内容进行多维智能审核，其中包括色情、暴恐、政治敏感、广告、自定义黑库等，让您的平台免去审核的后顾之忧'
          }
        ],
        menu_text:['视频个性化推荐','视频内容检索','UGC短视频审核','直播平台内容审核'],
        weitu:require('../../assets/images/aiSmartAppList/gexinghua.png'),
        app_title:'视频个性化推荐',
        app_desc:'通过视频内容分析技术，自动抽取视频内容标签，有效解决新视频冷启动推荐问题，实现个性化推荐，增加视频曝光',
        advant_text:[
          {
            img:require('../../assets/images/aiSmartAppList/advant.png'),
            title:'行业首创',
            desc:'国内首个基于视频内容理解的分析技术，提供独有的场景化服务'
          },
          {
            img:require('../../assets/images/aiSmartAppList/advant.png'),
            title:'识别精度高',
            desc:'海量视频数据训练，分析，建模，输出TAG达万级别，识别精度高'
          },
          {
            img:require('../../assets/images/aiSmartAppList/advant.png'),
            title:'高效易用',
            desc:'与云视频点播服务和存储服务联动，提供内容分析API，使用便捷，处理高效'
          },
          {
            img:require('../../assets/images/aiSmartAppList/advant.png'),
            title:'全面审核',
            desc:'业界首创，从10+种维度对视频内容进行审核，不放过任何风险'
          },
          {
            img:require('../../assets/images/aiSmartAppList/advant.png'),
            title:'准确率高',
            desc:'对色情、暴恐、政敏、广告等识别准确率高，极大减少人工审核成本'
          },
          {
            img:require('../../assets/images/aiSmartAppList/advant.png'),
            title:'成熟应用',
            desc:'基于互联网数以千万的视频内容进行分析，归纳总结后形成视频内容审核产品'
          }
      ]
    }
    return {
      cn_title:'Sophia平台',
      en_title:'元知智能研究院',
      nav_text:['首页','AI智能应用','数据洞察','观星台','大数据平台','行为图谱'],
      sub_btn:'立即登录',
      navType:1,
      headerImg:require('@/assets/images/home/timg.jpg'),
      ifShowLogin:false,
      ifShowSubBtn:true,
      aiListData:language_tech,
      audion_tech:{
        title:'语音技术',
        title_desc:'采用国际领先的流氏端到端语音语言一体化建模算法，将语音快速识别为文字，支持手机应用语音交互、语音内容分析、机器人对话等多个场景',
        use_btn:'立即使用',
        tech_file:'技术文档',
        list_img:require('@/assets/images/aiSmartAppList/audio_tech.png'),
        product_list_data:[
          {
            img:require('@/assets/images/aiSmartAppList/duanyuying.png'),
            title:'短语音识别',
            desc:'对60秒以内的语音精准识别为文字，融合元知领先的自然语言处理技术，支持手机语言输'
          },
          {
            img:require('@/assets/images/aiSmartAppList/duanyujisu.png'),
            title:'短语音识别极速版',
            desc:'对60秒以内的语音快速识别为文字，适用于手机语音输入、语音搜索，人机对话等语音交互场'
          },
          {
            img:require('@/assets/images/aiSmartAppList/shishiyuying.png'),
            title:'实时语音识别',
            desc:'将音频流实时识别为文字，并返回每句话的开始和结束时间，适用于长句语音输入、音视频'
          },
          {
            img:require('@/assets/images/aiSmartAppList/yuanchangyuying.png'),
            title:'远场语音识别',
            desc:'通过麦克风阵列前端处理算法，让目标说话人即使在3-5米的距离说话，也可准确识别'
          },
          {
            img:require('@/assets/images/aiSmartAppList/hujiaozhongxin.png'),
            title:'呼叫中心实时语音识别',
            desc:'采用呼叫中心专属模型，识别更精准，支持百毫秒级实时语音转文字的服务'
          },
          {
            img:require('@/assets/images/aiSmartAppList/hujiaozhuanxie.png'),
            title:'呼叫中心音频文件转写',
            desc:'采用呼叫中心专属模型，可大批量低成本的将音频文件识别为文本'
          }
        ],
        menu_text:['手机应用语音输入','机器人对话','语音内容分析','实时语音转写'],
        weitu:require('../../assets/images/aiSmartAppList/weitu.png'),
        app_title:'手机应用语音输入',
        app_desc:'将语音实时识别为文字，适用于语音聊天、语音输入、语音搜索、语音下单、语音指令、语音问答等多种场景。',
        advant_text:[
          {
            img:require('../../assets/images/aiSmartAppList/advant.png'),
            title:'技术领先',
            desc:'采用领先国际的流式端到端语音语言一体化建模方法，融合百度自然语言处理技术，近场中文普通话识别准确率达98%'
          },
          {
            img:require('../../assets/images/aiSmartAppList/advant.png'),
            title:'自助训练专属模型',
            desc:'支持在语音自训练平台上自助训练模型，上传词汇文本即可零代码完成训练，精准提升业务领域词汇识别率5-20%，并可专属使用'
          },
          {
            img:require('../../assets/images/aiSmartAppList/advant.png'),
            title:'简单快速',
            desc:'支持API及多种SDK接入，可基于Demo快速简单接入，采用最新识别解码技术，识别速度极大提升'
          },
          {
            img:require('../../assets/images/aiSmartAppList/advant.png'),
            title:'高效稳定',
            desc:'专有服务集群、提供企业级的稳定服务，弹性灵活的高并发承载及高可靠性保障'
          }
      ],
      },
      showMenu:false,
      showTrian1:false,
      showTrian2:false,
      showTrian3:false,
      language_tech:language_tech
    }
  },
  components:{
    vList,
    vMenu,
    vLogin
  },
  watch:{
    '$route' (to, from) {
        this.$router.go(0);
    }
  },
  created(){
    var name = localStorage.getItem('name');
    if(name){
      this.ifShowSubBtn = false;
    }
  },
  mounted(){
    document.documentElement.scrollTo(0,0);
    document.body.scrollTo(0,0);
    var type = this.$route.query.type;
    var featurType = this.$route.query.featurType;
    if(type == 1){
      this.$refs.navTextTop[1].style='box-sizing: border-box;padding-bottom:3px;border-bottom: 3px #ffffff solid;';
    }
    if(type == 1 && featurType == 0){
      this.aiListData = this.language_tech;
    }else if(type == 1 && featurType == 1){
      this.aiListData = this.audion_tech;
    }
  },
  methods:{
    jumpFn(index){
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
.hello{
  position: relative;
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
}
</style>
