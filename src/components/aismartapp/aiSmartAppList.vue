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
  name: 'home',
  data () {
    return {
      cn_title:'Sophia平台',
      en_title:'元知智能研究院',
      nav_text:['首页','AI智能应用','数据洞察','观星台','大数据平台','行为图谱'],
      sub_btn:'立即登录',
      navType:1,
      headerImg:require('@/assets/images/home/timg.jpg'),
      ifShowLogin:false,
      ifShowSubBtn:true,
      language_tech:{
        title:'自然语言处理',
        title_desc:'自然语言处理是为各类企业及开发者提供的用于文本分析及挖掘的核心工具，已经广泛应用在电商、文化娱乐、金融、物流等行业客户的多项业务中。',
        use_btn:'立即使用',
        tech_file:'技术文档',
        list_img:require('@/assets/images/aiSmartAppList/audio_tech.png'),
        product_list_data:[
          {
            img:require('@/assets/images/aiSmartAppList/cifafenxi.png'),
            title:'词法分析',
            desc:'基于大数据和用户行为的分词、词性标注、命名实体识别，定位基本语言元素，消除歧义，支撑自然语言的准确理解'
          },
          {
            img:require('@/assets/images/aiSmartAppList/guanjiancitiqu.png'),
            title:'关键词提取',
            desc:'TextRank关键词提取'
          },
          {
            img:require('@/assets/images/aiSmartAppList/zidongzhaiyao.png'),
            title:'自动摘要',
            desc:'TextRank自动摘要'
          },
          {
            img:require('@/assets/images/aiSmartAppList/duanyutiqu.png'),
            title:'短语提取',
            desc:'基于互信息和左右信息熵的短语提取'
          },
          {
            img:require('@/assets/images/aiSmartAppList/pinyinzhuanhuan.png'),
            title:'拼音转换',
            desc:'多音字、声母、韵母、声调'
          },
          {
            img:require('@/assets/images/aiSmartAppList/jianfanzhuanhuan.png'),
            title:'简繁转换',
            desc:'简繁分歧词（简体、繁体、臺灣正體、香港繁體）'
          },
          {
            img:require('@/assets/images/aiSmartAppList/wenbentuijian.png'),
            title:'文本推荐',
            desc:'语义推荐、拼音推荐、字词推荐'
          },
          {
            img:require('@/assets/images/aiSmartAppList/yicunjufa.png'),
            title:'依存句法分析',
            desc:'基于神经网络的高性能依存句法分析器;基于ArcEager转移系统的柱搜索依存句法分析器'
          },
          {
            img:require('@/assets/images/aiSmartAppList/word2vec.png'),
            title:'文本分类',
            desc:'识别文本的领域信息，提供在17个领域上分类：歌曲、广播、故事、百科、天气、时间、新闻'
          },
          {
            img:require('@/assets/images/aiSmartAppList/wenbenjulei.png'),
            title:'文本聚类',
            desc:'KMeans、Repeated Bisection、自动推断聚类数目k'
          },
        ],
        menu_text:['智能问答系统','相似内容推荐','评论聚合'],
        weitu:require('../../assets/images/aiSmartAppList/zhinengwenda.png'),
        app_title:'智能问答系统',
        app_desc:'通过中文分词、短文本相似度、命名实体识别等自然语言处理相关技术，计算；两个问题对的相似度，可解决问答、对话、语料挖掘、知识库构建等问题。',
        advant_text:[
          {
            img:require('../../assets/images/aiSmartAppList/advant.png'),
            title:'能力丰富',
            desc:'数十种自然语言核心算法与解决方案，全面覆盖语言处理的各类需求'
          },
          {
            img:require('../../assets/images/aiSmartAppList/advant.png'),
            title:'接口易用',
            desc:'标准化接口封装，通过云计算调用可快速使用工具，大大降低开发人力成本'
          },
          {
            img:require('../../assets/images/aiSmartAppList/advant.png'),
            title:'服务可靠',
            desc:'SLA稳定保持99.99%以上，支持千亿量级调用需求，配有完善的统计和监控措施'
          }
      ]
      },
      audion_tech:{
        title:'语音技术',
        title_desc:'采用国际领先的流氏端到端语音语言一体化建模算法，将语音快速识别为文字，支持手机应用语音交互、语音内容分析、机器人对话等多个场景',
        use_btn:'立即使用',
        tech_file:'技术文档',
        funText:'即可获得语音识别能力',
        list_img:require('@/assets/images/aiSmartAppList/audio_tech.png'),
        product_list_data:[
          {
            img:require('@/assets/images/aiSmartAppList/duanyuying.png'),
            title:'短语音识别',
            desc:'对60秒以内的语音精准识别为文字，融合元知领先的自然语言处理技术，支持手机语言输入'
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
      aiListData:{
        title:'自然语言处理',
        title_desc:'自然语言处理是为各类企业及开发者提供的用于文本分析及挖掘的核心工具，已经广泛应用在电商、文化娱乐、金融、物流等行业客户的多项业务中。',
        use_btn:'立即使用',
        tech_file:'技术文档',
        list_img:require('@/assets/images/aiSmartAppList/audio_tech.png'),
        product_list_data:[
          {
            img:require('@/assets/images/aiSmartAppList/cifafenxi.png'),
            title:'词法分析',
            desc:'基于大数据和用户行为的分词、词性标注、命名实体识别，定位基本语言元素，消除歧义，支撑自然语言的准确理解'
          },
          {
            img:require('@/assets/images/aiSmartAppList/guanjiancitiqu.png'),
            title:'关键词提取',
            desc:'TextRank关键词提取'
          },
          {
            img:require('@/assets/images/aiSmartAppList/zidongzhaiyao.png'),
            title:'自动摘要',
            desc:'TextRank自动摘要'
          },
          {
            img:require('@/assets/images/aiSmartAppList/duanyutiqu.png'),
            title:'短语提取',
            desc:'基于互信息和左右信息熵的短语提取'
          },
          {
            img:require('@/assets/images/aiSmartAppList/pinyinzhuanhuan.png'),
            title:'拼音转换',
            desc:'多音字、声母、韵母、声调'
          },
          {
            img:require('@/assets/images/aiSmartAppList/jianfanzhuanhuan.png'),
            title:'简繁转换',
            desc:'简繁分歧词（简体、繁体、臺灣正體、香港繁體）'
          },
          {
            img:require('@/assets/images/aiSmartAppList/wenbentuijian.png'),
            title:'文本推荐',
            desc:'语义推荐、拼音推荐、字词推荐'
          },
          {
            img:require('@/assets/images/aiSmartAppList/yicunjufa.png'),
            title:'依存句法分析',
            desc:'基于神经网络的高性能依存句法分析器;基于ArcEager转移系统的柱搜索依存句法分析器'
          },
          {
            img:require('@/assets/images/aiSmartAppList/word2vec.png'),
            title:'文本分类',
            desc:'识别文本的领域信息，提供在17个领域上分类：歌曲、广播、故事、百科、天气、时间、新闻'
          },
          {
            img:require('@/assets/images/aiSmartAppList/wenbenjulei.png'),
            title:'文本聚类',
            desc:'KMeans、Repeated Bisection、自动推断聚类数目k'
          },
        ],
        menu_text:['智能问答系统','相似内容推荐','评论聚合'],
        weitu:require('../../assets/images/aiSmartAppList/zhinengwenda.png'),
        app_title:'智能问答系统',
        app_desc:'通过中文分词、短文本相似度、命名实体识别等自然语言处理相关技术，计算；两个问题对的相似度，可解决问答、对话、语料挖掘、知识库构建等问题。',
        advant_text:[
          {
            img:require('../../assets/images/aiSmartAppList/advant.png'),
            title:'能力丰富',
            desc:'数十种自然语言核心算法与解决方案，全面覆盖语言处理的各类需求'
          },
          {
            img:require('../../assets/images/aiSmartAppList/advant.png'),
            title:'接口易用',
            desc:'标准化接口封装，通过云计算调用可快速使用工具，大大降低开发人力成本'
          },
          {
            img:require('../../assets/images/aiSmartAppList/advant.png'),
            title:'服务可靠',
            desc:'SLA稳定保持99.99%以上，支持千亿量级调用需求，配有完善的统计和监控措施'
          }
      ]
      }
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
    else{
      this.aiListData = this.language_tech;
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
}
</style>
