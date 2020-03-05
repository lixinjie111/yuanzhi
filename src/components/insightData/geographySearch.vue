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
    <vMenu v-show="showMenu" :navType='navType'></vMenu>

    <div class="banner_container">
        <div class="text_container">
            <div class="pinpaiTitle">地理  气象  人文</div>
            <div class="pinpaiDesc">专业的全球地理、气象、人文数据，为新能源行业提供全产业链以及全周期的数据服务</div>
        </div>
    </div>

    <div class="qudao_container">
        <div>地理数据</div>
    </div>

    <div class="qudao_picter_container">
        <div class="one">
            <div></div>
            <div>海拔</div>
            <div>拥有全球行政区域海拔高度数据，为您提供查询服务。</div>
        </div>
        <div class="two">
            <div></div>
            <div>土壤</div>
            <div>提供专业而准确的土壤墒情信息，辅助农业种植决策，为减灾抗旱提供了重要的基础信息。</div>
        </div>
        <div class="three">
            <div></div>
            <div>地质构造</div>
            <div>提供专业而准确的地址构造信息，辅助工业选址。</div>
        </div>
    </div>

    <div class="qudao_container">
         <div>气象数据</div>
        <div>将气象数据与不同领域资源相融合，开拓交通运输、新能源、农业、移动互联软件开发和服务、公共管理及基于大数据技术的智慧城市、智慧交通、智慧粮食等领域的开发建设中应用</div>
    </div>

    <div class="qixiangshuju_datu"></div>

    <div class="zhibiao_container">
        <div class="fengli">
            <div></div>
            <div>风力</div>
        </div>
        <div class="wendu">
            <div></div>
            <div>温度</div>
        </div>
        <div class="qiya">
            <div></div>
            <div>气压</div>
        </div>
        <div class="jiangshui">
            <div></div>
            <div>降水</div>
        </div>
    </div>
    <div class="qudao_container">
        <div>人文数据</div>
        <div>人文大数据应用于空间规划方法和技术、居民个体行为决策优化、企业运营决策、政府宏观政策制定与管理等方面的应用方向</div>
    </div>
    <div class="qudao_picter_container1">
        <div class="one1">
            <div></div>
            <div>保护区</div>
        </div>
        <div class="two1">
            <div></div>
            <div>全球交通</div>
        </div>
        <div class="three1">
            <div></div>
            <div>人口密布分布</div>
        </div>
    </div>

    <div class="fun_use_container">
        <div class="function">即刻获得地理、气象、人文能力</div>
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
    hideChange(){
      var navTextArrDom = this.$refs.navTextTop;
      for(var i = 0; i < navTextArrDom.length;i++){
        navTextArrDom[i].style = 'padding-bottom:0;border-bottom:none';
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
        background-image: url('../../assets/images/insightData/dili.png');
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
            letter-spacing: 0;
            text-align: center;
            line-height: 22px;
        }
    }
    .qudao_picter_container,.qudao_picter_container1{
        display: flex;
        align-items: flex-start;
        width: 1200px;
        height: 477px;
        .one,.two,.three,.one1,.two1,.three1{
            width: 380px;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            margin-right: 30px;
            div:nth-child(1){
                width: 380px;
                height: 373px;
            }
            div:nth-child(2){
                font-size: 17px;
                font-weight: bold;
                color:black;
                text-align: justify;
                line-height: 24px;
                margin-top: 10px;
            }
            div:nth-child(3){
                font-size: 14px;
                color: #7A8499;
                letter-spacing: 0;
                text-align: center;
                line-height: 22px;
            }
        }
        .one{
            div:nth-child(1){
                background-image: url('../../assets/images/insightData/haiba.png');
                background-size: 100% 100%;
            }
        }
        .two{
            div:nth-child(1){
                background-image: url('../../assets/images/insightData/turang.png');
                background-size: 100% 100%;
            }
        }
        .three{
            div:nth-child(1){
                background-image: url('../../assets/images/insightData/dizhi.png');
                background-size: 100% 100%;   
            }
        }
        .one1{
            div:nth-child(1){
                background-image: url('../../assets/images/insightData/baohuqu.png');
                background-size: 100% 100%;
            }
        }
        .two1{
            div:nth-child(1){
                background-image: url('../../assets/images/insightData/quanqiu.png');
                background-size: 100% 100%;
            }
        }
        .three1{
            div:nth-child(1){
                background-image: url('../../assets/images/insightData/renkou.png');
                background-size: 100% 100%;   
            }
        }
    }
    .qixiangshuju_datu{
        width: 1200px;
        height: 360px;
        background-image: url('../../assets/images/insightData/qixiang.png');
        background-size: 100 100%;
    }

    .zhibiao_container{
        width: 1200px;
        height: 210px;
        margin-top: 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .fengli,.wendu,.qiya,.jiangshui{
            width: 277px;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            div:nth-child(1){
                width: 95px;
                height: 95px;
                background-image: url('../../assets/images/insightData/icon_service_data_95.png');
                background-size: 100% 100%;
                margin-bottom: 15px;
            }
            div:nth-child(2){
                font-size: 22px;
                color: #121C33;
                text-align: center;
            }
        }
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
