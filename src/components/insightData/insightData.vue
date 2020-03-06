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

    <vMenu v-show="showMenu" :navType='navType' @closeMenu='closeMenuFa'></vMenu>



    <!--内容区域-->
    <div class="insight_data_container">
        <div class="drop_down_menu_container">
            <div class="drop_down_menu">
                <div class="left">
                    <span>法律综合分析</span>
                    <span> > 全国案件分布</span>
                </div>
                <div class="right">
                    <div class="address">
                        <Dropdown trigger="click">
                            <a href="javascript:void(0)">
                                全国
                                <Icon type="ios-arrow-down"></Icon>
                            </a>
                            <DropdownMenu slot="list">
                                <DropdownItem>全国</DropdownItem>
                                <DropdownItem>上海</DropdownItem>
                                <DropdownItem>广州</DropdownItem>
                                <DropdownItem>深圳</DropdownItem>
                                <DropdownItem>兰州</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </div>
                    <div class="in_type">
                        <Dropdown trigger="click" @on-click='changeConent'>
                            <a href="javascript:void(0)">
                                {{menuText}}
                                <Icon type="ios-arrow-down"></Icon>
                            </a>
                            <DropdownMenu slot="list">
                                <DropdownItem name='case'>案件</DropdownItem>
                                <DropdownItem name='lawyer'>律师</DropdownItem>
                                <DropdownItem name='parties'>当事人</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </div>
                    <div class="search">
                        <i-input v-model="keyword" placeholder="请输入您想要匹配的案件名称/案件号/案由" style="width:310px">
                          <i-button slot="append" icon="ios-search" @click="goLogin"></i-button>
                        </i-input>
                    </div>
                </div>
            </div>
        </div>
        <vCase v-if="ifShowCase"></vCase>
        <vLawyer v-if="ifShowLawyer"></vLawyer>
        <vParties v-if="ifShowParties"></vParties>
    </div>

    <!--底部导航及版权说明-->
    <vFooterCopy></vFooterCopy>

     <vLogin v-show="ifShowLogin" @closeLoginWin='closeLoginWin'></vLogin>
  </div>
</template>

<script>
import vFooterCopy from '../footerCopyright/footerCopyright';
import vCase from './case';
import vLawyer from './lawyer';
import vParties from './parties'
import vMenu from '../menu/menu';
import vLogin from '../login/login';
export default {
  name: 'insightData',
  data () {
    return {
      keyword:'',
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
      menuText:'案件',
      navType:2,
      ifShowLogin:false,
      ifShowSubBtn:true,
      showTrian3:false,
      headerImg:require('@/assets/images/home/timg.jpg'),
    }
  },
  components:{
      vFooterCopy,
      vCase,
      vLawyer,
      vParties,
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
    changeConent(arg){
      if(arg == 'case'){
        this.ifShowCase = true;
        this.ifShowLawyer = false;
        this.ifShowParties = false;
        this.ifShowRealEstate = false;
        this.menuText = '案件';
      }
      // else if(arg == 'lawyer'){
      //   this.ifShowCase = false;
      //   this.ifShowLawyer = true;
      //   this.ifShowParties = false;
      //   this.menuText='律师';
      //   this.ifShowRealEstate = false;
      // }
      // else if(arg == 'parties'){
      //   this.ifShowCase = false;
      //   this.ifShowLawyer = false;
      //   this.ifShowParties = true;
      //   this.ifShowRealEstate = false;
      //   this.menuText = '当事人'
      // }
      else{
        this. goLogin();
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
                    .ivu-dropdown-rel{
                      // display: flex;
                      width: 65px;
                      a{
                        color: #121C33;
                      }
                  }
                  .ivu-select-dropdown{
                      .ivu-dropdown-menu{
                          li:hover{
                            color: #03A971;
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
