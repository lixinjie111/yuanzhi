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
    <div class="banner">
      <div class="box" ><img src="../../assets/images/houseData/web-12.png" alt=""></div>
      <div class="content">
        <p class="title">AI智能服务大全</p>
      </div>
    </div>

    <!--内容区域-->
    <div class="insight_data_container">
        <div class="drop_down_menu_container">
            <div class="drop_down_menu">
                <div class="left">
                    <!-- <span>开源算法集</span> -->
                    <span>资源数：{{totalNum}}</span>
                </div>
                <div class="right">
                    <div class="address">
                        <Select v-model="order" style="width:200px">
                            <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                        </Select>
                    </div>
                    <div class="search">
                        <i-input v-model="keyword" placeholder="输入您要查找的算法名称或关键词" style="width:270px">
                          <i-button slot="append" icon="ios-search" @click="searchClick"></i-button>
                        </i-input>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <ul class="list">
      <li v-for="item in content" :key="item.id">
        <div class="left">
          <div class="header" :style="{backgroundColor:item.color}">{{item.header}}</div>
        </div>
        <div class="center">
          <div class="title">{{item.childModule}}</div>
          <div class="intro">{{item.description}}</div>
          <div class="comment">
            <!-- <div class="icon"><img src="../../assets/images/houseData/github.png" alt=""> </div>  -->
            <!-- <span>github</span> -->
            <span class="time">{{item.createTime}}</span>
            <!-- <span class="isPublic">{{item.isPublic}}</span> -->
          </div>
        </div>
        <div class="right">
           <div class="lookDetail" @click="lookDetail(item.downloadUrl)">查看详情</div>
        </div>
      </li>
    </ul>
    
    <div style="margin:auto;margin-bottom:50px;margin-top:-40px;text-align:center">
       <Page :total="paging.total" @on-change="pagingChange"></Page>
    </div>


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
      keyword:"",
      totalNum:'',
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
      content:[],
      cityList: [
        {
            value: 'create_time',
            label: '按时间排序'
        },
        {
            value: 'product_module',
            label: '按算法类型排序'
        },
    ],
    order:'create_time',
    paging: {
      index: 1,
      size: 10,
      total: 0
    },
   
            
    }
  },
  components:{
      vFooterCopy,
      vMenu,
      vLogin
  },
  created(){
    this.initData();
    var name = localStorage.getItem('name');
    if(name){
      this.ifShowSubBtn = false;
    }else{
      this.ifShowSubBtn = true;
    }
  },
  mounted(){
    
    if(this.$route.query.type == 2){
      this.$refs.navTextTop[2].style='box-sizing: border-box;padding-bottom:3px;border-bottom: 3px #ffffff solid;';
    }
  },
  methods:{
    initPaging() {
      this.paging.index = 1;
      this.paging.size = 10;
    },
    searchClick(){
      this.initPaging();
      this.initData();
    },
    pagingChange(val){
      this.paging.index = val;
      document.documentElement.scrollTop=0;
      this.initData();
    },
    initData(){



       //上边中间   中国地图
            let baseUrl='http://106.13.122.156:8086';
            this.$axios({
                method: "post",
                url: baseUrl + "/stargaze/sophiaOpenData/listSophiaOpenData",
                params:{
                  keyword:this.keyword,
                  orderField:this.order,
                  orderType:"desc",
                  pageIndex:this.paging.index,
                  pageSize:this.paging.size,
                }
            }).then(res => {
                console.log(res.data.data)
                if(res.status==200){
                  // (文字=01;视频=02;图像=03;自然语言=04;语音=05;人脸=06;推荐=07;搜索=08;人工智能=09;物联网=10;金融=11;风控=12)
                  let result=res.data.data.sophiaOpenData.data;
                  this.paging.total=res.data.data.sophiaOpenData.totalNum;
                  this.totalNum=res.data.data.sophiaOpenData.totalNum;
                  result.forEach(item=>{
                    if(item.productModule=="01"){
                      item['header']='文字';
                      item['color']='#FFC10D ';
                    }
                    else if(item.productModule=="02"){
                      item['header']='视频';
                      item['color']='#13BFC1';
                    }
                    else if(item.productModule=="03"){
                      item['header']='图像';
                      item['color']='#FE5560 ';
                    }
                    else if(item.productModule=="04"){
                      item['header']='自然语言';
                      item['color']='#B6B2BC';
                    }
                    else if(item.productModule=="05"){
                      item['header']='语音';
                      item['color']='#4A90E2';
                    }
                    else if(item.productModule=="06"){
                      item['header']='人脸';
                      item['color']='#53B884 ';
                    }
                    else if(item.productModule=="07"){
                      item['header']='推荐';
                      item['color']='#00C2FF';
                    }
                    else if(item.productModule=="08"){
                      item['header']='搜索';
                      item['color']='#FD6A2B';
                    }
                    else if(item.productModule=="09"){
                      item['header']='人工智能';
                      item['color']='#4C65A8';
                    }
                    else if(item.productModule=="10"){
                      item['header']='物联网';
                      item['color']='#71B22E';
                    }
                    else if(item.productModule=="11"){
                      item['header']='金融';
                      item['color']='#E03FBB';
                    }
                    else if(item.productModule=="12"){
                      item['header']='风控';
                      item['color']='#407758';
                    }
                  })
                  this.content=result;
                }
            }).catch(err=>{
                console.log(err);
            });
    },
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
    closeMenuFa(arg){
      this.showMenu = arg;
      this.showTrian1 = arg;
      this.showTrian2 = arg;
      this.showTrian3 = arg;
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
          color:#fff;
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
            // margin-left:50px;
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
    height: 450px;
    background: #3F3F4B;
    .box{
      margin-left:35%;
      height: 100%;
      img{
        height: 100%;
        display: block;
        width: auto;
      }
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
            }
        }
      }
  }
}
</style>
