<template>
  <div class="brandSentiment_container">
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
    <vMenu v-show="showMenu" :navType='navType' @closeMenu='closeMenuFa'></vMenu>

    <div class="banner_container">
        <div class="text_container">
            <div class="pinpaiTitle">品牌洞察</div>
            <div class="pinpaiDesc">利用大数据工具，帮助品牌方快速知己知彼。</div>
        </div>
    </div>

    <div class="qudao_container">
        <div>渠道监控</div>
        <div>管渠道，管价格，管品牌形象</div>
    </div>

    <div class="qudao_picter_container">
        <div class="one">
            <div>价格、标题、授权等监测</div>
            <div>监测电商平台是否乱价，标题是否违规，店铺是否授权等满足多样化巡检场景需求</div>
        </div>
        <div class="two">
            <div>多维度汇总</div>
            <div>经营信息</div>
        </div>
        <div class="three">
            <div>高频监测预</div>
            <div>警违规行为</div>
        </div>
        <div class="four">
            <div>多种数据</div>
            <div>导出方式</div>
        </div>
    </div>

    <div class="qudao_container">
        <div>行业分析</div>
        <div>看行业、看对手、看自己</div>
    </div>

    <div class="hangye_container">
        <div class="one">
            <div>7*24小时高频监测</div>
            <div>7×24小时高频无遗漏地为您提供实时、专业、精准的电商零售数据监测和分析服务，并根据客户定制需求，定时输出行业数据，为品牌、电商运营提供安全保障。</div>
        </div>
        <div class="two">
            <div>覆盖全网电</div>
            <div>商平台</div>
        </div>
        <div class="three">
            <div>多维度，多角度</div>
            <div>数据分析</div>
        </div>
        <div class="four">
            <div>支持特色</div>
            <div>定制报告</div>
        </div>
    </div>

    <div class="qudao_container">
        <div>消费者聆听</div>
        <div>收集顾客评论，提炼价值</div>
    </div>

    <div class="xiaofeizhe_container">
        <div class="one">
            <div>覆盖主流电商和社交平台</div>
            <div>主流电商平台和微信、微博、贴吧等社交媒体的评论数量、分布、类型等明细查看。</div>
        </div>
        <div class="two">
            <div>多维度情感</div>
            <div>划分差评</div>
        </div>
        <div class="three">
            <div>评论概况</div>
            <div>一览无余</div>
        </div>
        <div class="four">
            <div>提升产品用户</div>
            <div>体验、感受</div>
        </div>
    </div>

    <div class="fun_use_container">
        <div class="function">即刻获得品牌洞察能力</div>
        <div class="use_btn">立即使用</div>
    </div>

  </div>
</template>

<script>
import vMenu from '../menu/menu';
export default {
  name:'brandSentiment',
  props:{
  },
  data () {
    return {
        cn_title:'Sophia平台',
        en_title:'元知智能研究院',
        nav_text:['首页','AI智能应用','数据洞察','观星台','大数据平台','行为图谱'],
        sub_btn:'立即登录',
        navType:0,
        showTrian1:false,
        showTrian2:false,
        showTrian3:false,
        ifShowSubBtn:true,
        showMenu:false,
    }
  },
  components:{
      vMenu
  },
  mounted(){
    document.documentElement.scrollTop = 0;
    if(this.$route.query.type == 2){
      this.$refs.navTextTop[2].style='box-sizing: border-box;padding-bottom:3px;border-bottom: 3px #ffffff solid;';
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
        this.showMenu = false;  //是否显示观星台下拉菜单
        this.showTrian1 = false;
        this.showTrian2 = false;
        this.showTrian3 = false;
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
        if(i == 2){
          navTextArrDom[i].style = 'box-sizing: border-box;padding-bottom:3px;border-bottom: 3px #ffffff solid;';
        }
        else{
          navTextArrDom[i].style = 'padding-bottom:0;border-bottom:none';
        }
      }
    },
    goLogin(){
      this.ifShowLogin = true;
    }
  }
}
</script>

<style scoped lang='less'>
.brandSentiment_container{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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
    .banner_container{
        width: 100%;
        height: 450px;
        position: relative;
        background-image: url('../../assets/images/insightData/pinpai.png');
        background-size: 100% 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        padding-top: 125px;
        padding-bottom: 223px;
        box-sizing: border-box;
        .text_container{
            width: 1200px;
            .pinpaiTitle{
                margin-bottom: 20px;
                font-size: 36px;
                color: #FFFFFF;
            }
            .pinpaiDesc{
                font-size: 16px;
                color: #FFFFFF;
                line-height: 32px;
            }
        }
    }
    .qudao_container{
        width: 1200px;
        height: 204px;
        padding-top: 80px;
        padding-bottom: 40px;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        div:nth-child(1){
            font-size: 36px;
            color: #121C33;
            line-height: 48px;
            margin-bottom: 5px;
        }
        div:nth-child(2){
            font-size: 14px;
            color: #7A8499;
        }
    }
    .qudao_picter_container,.hangye_container,.xiaofeizhe_container{
        display: flex;
        align-items: center;
        height: 335px;
        .one{
            width: 300px;
            height: 335px;
            opacity: 0.8;
            background: #03A971;
            border-radius: 3px;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding-left: 46px;
            padding-right: 46px;
            box-sizing: border-box;
            justify-content: center;
            div:nth-child(1){
                font-size: 18px;
                color: #FFFFFF;
                text-align: center;
                line-height: 26px;
                margin-bottom: 30px
            }
            div:nth-child(2){
                font-size: 14px;
                color: #FFFFFF;
                text-align: justify;
                line-height: 24px;
            }
        }
        .two{
            width: 300px;
            height: 335px;
            background:rgba(61, 73, 102, 0.5);  
            border-radius: 3px;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            div{
                font-size: 18px;
                color: #FFFFFF;
                text-align: center;
                line-height: 26px;
            }
        }
        .three{
            width: 300px;
            height: 335px;
            background: rgba(61, 73, 102, 0.65);  
            border-radius: 3px;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            div{
                font-size: 18px;
                color: #FFFFFF;
                text-align: center;
                line-height: 26px;
            }
        }
        .four{
            width: 300px;
            height: 335px;
            background: rgba(61, 73, 102, 0.5);  
            border-radius: 3px;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            div{
                font-size: 18px;
                color: #FFFFFF;
                text-align: center;
                line-height: 26px;
            }
        }
    }
    .qudao_picter_container{
        background-image: url('../../assets/images/insightData/qudao.png');
        background-size:100% 100%;
    }
    .hangye_container{
        background-image: url('../../assets/images/insightData/hangye.png');
        background-size:100% 100%;
    }
    .xiaofeizhe_container{
        background-image: url('../../assets/images/insightData/xiaofeizhe.png');
        background-size:100% 100%;   
    }
    .fun_use_container{
        width: 1200px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding-top: 80px;
        padding-bottom: 80px;
        .function{
            font-size: 36px;
            color: #121C33;
            margin-bottom: 40px;
        }
        .use_btn{
            width: 140px;
            height: 42px;
            background: #03A971;
            border-radius: 3px;
            line-height: 42px;
            text-align: center;
            font-size: 16px;
            color: #FFFFFF;
        }
    }
}
</style>
