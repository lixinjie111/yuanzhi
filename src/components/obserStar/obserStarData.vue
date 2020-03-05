<template>
  <div class="obser_star_list_container">
    <!--首部导航-->
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
                <div class="sub_btn" @click="goLogin">{{sub_btn}}</div>
            </div>
        </div>
    </div>
    <vMenu v-show="showMenu" :navType='navType'></vMenu>

    <!--头部banner图-->
    <div class="banner">
      <div class="banner_contant">
        <div class="left">
          <div class="desc">
            <div class="desc1">全行业大数据系统</div>
            <div class="desc2">分析和预测</div>
          </div>
        </div>
        <div class="right">
          <img :src="bannerimg" alt="" srcset="">
        </div>
      </div>
    </div>

    <!--内容数据展示区域-->
    <div class="data_show_container">
        <div class="data_show">
            <div class="left">
                <div class="political" @click="goShowData(0)">
                    <div class="political_left_line" v-show="ifshow_poli_line"></div>
                    <div class="political_right" ref="poli">政治数据</div>
                </div>
                <div class="Liveli_hood"  @click="goShowData(1)">
                    <div class="Liveli_hood_left_line" v-show="ifshow_liveli_line"></div>
                    <div class="Liveli_hood_right" ref="liveli">民生数据</div>
                </div>
                <div class="economic"  @click="goShowData(2)">
                    <div class="economic_left_line" v-show="ifshow_econo_line"></div>
                    <div class="economic_right" ref="econo">经济数据</div>
                </div>
                <div class="culture"  @click="goShowData(3)">
                    <div class="culture_left_line" v-show="ifshow_culture_line"></div>
                    <div class="culture_right" ref="culture">文化数据</div>
                </div>
                <div class="yangben"  @click="goShowData(4)">
                    <div class="yangben_left_line" v-show="ifshow_yangben_line"></div>
                    <div class="yangben_right" ref="yangben">训练数据</div>
                </div>
            </div>
            <div class="right">
                <vShowData :showData='obserShowData'></vShowData>
            </div>
        </div>
    </div>
    
    <!--底部及版权组件-->
    <vFooterCopy></vFooterCopy>

    <vLogin v-show="ifShowLogin" @closeLoginWin='closeLoginWin'></vLogin>

  </div>
</template>

<script>
import vFooterCopy from '../footerCopyright/footerCopyright';
import vShowData from './obserStarDataShow';
import vMenu from '../menu/menu';
import vLogin from '../login/login';
export default {
    data(){
        return {
            cn_title:'Sophia平台',
            en_title:'元知智能研究院',
            nav_text:['首页','AI智能应用','数据洞察','观星台','大数据平台','行为图谱'],
            sub_btn:'立即登录',
            showTrian:false,
            bannerimg:require('../../assets/images/obserStar/obserDataBanner.png'),
            ifshow_poli_line:false,
            ifshow_liveli_line:false,
            ifshow_econo_line:false,
            ifshow_culture_line:false,
            ifshow_yangben_line:false,
            showTrian1:false,
            showTrian2:false,
            showTrian3:false,
            obserShowData:{},
            navType:3,
            showMenu:false,
            ifShowLogin:false,
            politicalData:{
                title:'政治数据',
                desc:'提供政府机构于与社会团体、环境与资源等政治类数据搜索以及数据可视化服务。',
                dataType:1,
                contArr:[]
            },
            liveliData:{
                title:'民生数据',
                desc:'提供医疗、社保、就业、安全、交通等民生类数据搜索以及数据可视化服务。',
                dataType:2,
                contArr:[]    
            },
            econoData:{
                title:'经济数据',
                desc:'提供信用、财税、消费、房屋等经济类数据搜索以及数据可视化服务',
                dataType:3,
                contArr:[]    
            },
            cultureData:{
                title:'文化数据',
                desc:'提供旅游、文体、教育、宗教、饮食等文化类数据搜索以及数据可视化服务。',
                dataType:4,
                contArr:[]    
            },
            yangbenData:{
                title:'训练数据',
                desc:'提供用于视频、图片、文本、语音算法训练的开源数据集',
                dataType:5,
                contArr:[
                    {
                        img:require('../../assets/images/obserStar/obser_icon.png'),
                        intro:'视频数据集'
                    },
                    {
                        img:require('../../assets/images/obserStar/obser_icon.png'),
                        intro:'图片数据集'
                    },
                    {
                        img:require('../../assets/images/obserStar/obser_icon.png'),
                        intro:'文本数据集'
                    },
                    {
                        img:require('../../assets/images/obserStar/obser_icon.png'),
                        intro:'语音数据集'
                    }
                ]    
            }
        }
    },
    components:{
        vFooterCopy,
        vShowData,
        vMenu,
        vLogin
    },
    methods:{
        jumpFn(index){
            if(index === 0){
                this.$router.push({
                    path:'/index',
                    query:{
                        type:0
                    }
                });
            }else if(index === 1){
                this.$router.push({
                    path:'aiSmartAppList',
                    query:{
                        type:1
                    }
                });
            }else if(index === 2){
                this.$router.push({
                    path:'/insightData',
                    query:{
                        type:2
                    }
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
                this.showMenu = false; //是否显示菜单
                this.showTrian1 = false;
                this.showTrian2 = false;
                this.showTrian3 = false; //是否显示下拉三角形
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
        goShowData(num){
            var baseUrl = 'http://106.13.122.156:8086'; 
            var that = this;
            if(num == 0){
                this.ifshow_poli_line = true;
                this.ifshow_liveli_line = false;
                this.ifshow_econo_line=false;
                this.ifshow_culture_line=false;
                this.ifshow_yangben_line = false;
                var liveliActive = this.$refs.liveli.getAttribute('class');
                var econoActive = this.$refs.econo.getAttribute('class');
                var cultureActive = this.$refs.culture.getAttribute('class');
                var yangbenActive = this.$refs.yangben.getAttribute('class');
                if(liveliActive == 'yes_active'){
                    this.$refs.liveli.setAttribute('class','no_active');
                }
                if(econoActive == 'yes_active'){
                    this.$refs.econo.setAttribute('class','no_active');
                }
                if(cultureActive == 'yes_active'){
                    this.$refs.culture.setAttribute('class','no_active');
                }
                if(yangbenActive == 'yes_active'){
                    this.$refs.yangben.setAttribute('class','no_active');
                }
                this.$refs.poli.setAttribute('class','yes_active');
                that.politicalData.contArr = []; //清理缓存
                this.$axios({
                    method: "post",
                    url: baseUrl + "/stargaze/stargazaMenu/getMenuList",
                    params: {
                        parentTitle:2
                    }
                }).then(res => {
                    if(res.status == 200){
                        var menuTextArr = res.data.data;
                        console.log(menuTextArr);
                        for(var i = 0; i < menuTextArr.length;i++){
                            that.politicalData.contArr.push({
                                img:require('../../assets/images/obserStar/obser_icon.png'),
                                intro:menuTextArr[i].subTitleName,
                                subTitleCode:menuTextArr[i].subTitleCode,
                                subTitleName:menuTextArr[i].subTitleName
                            });
                        }
                    }
                }).catch(err=>{
                    console.log(err);
                });
                this.obserShowData = that.politicalData;
            }
            else if(num == 1){
                this.ifshow_poli_line = false;
                this.ifshow_liveli_line = true;
                this.ifshow_econo_line=false;
                this.ifshow_culture_line=false;
                this.ifshow_yangben_line = false;
                var poliActive = this.$refs.poli.getAttribute('class');
                var econoActive = this.$refs.econo.getAttribute('class');
                var cultureActive = this.$refs.culture.getAttribute('class');
                var yangbenActive = this.$refs.yangben.getAttribute('class');
                if(poliActive == 'yes_active'){
                    this.$refs.poli.setAttribute('class','no_active');
                }
                if(econoActive== 'yes_active'){
                    this.$refs.econo.setAttribute('class','no_active');
                }
                if(cultureActive== 'yes_active'){
                    this.$refs.culture.setAttribute('class','no_active');
                }
                if(yangbenActive== 'yes_active'){
                    this.$refs.yangben.setAttribute('class','no_active');
                }
                this.$refs.liveli.setAttribute('class','yes_active');
                that.liveliData.contArr = []; //清理缓存
                this.$axios({
                    method: "post",
                    url: baseUrl + "/stargaze/stargazaMenu/getMenuList",
                    params: {
                        parentTitle:3
                    }
                }).then(res => {
                    if(res.status == 200){
                        var menuTextArr = res.data.data;
                        console.log(menuTextArr);
                        for(var i = 0; i < menuTextArr.length;i++){
                            that.liveliData.contArr.push({
                                img:require('../../assets/images/obserStar/obser_icon.png'),
                                intro:menuTextArr[i].subTitleName,
                                subTitleCode:menuTextArr[i].subTitleCode,
                                subTitleName:menuTextArr[i].subTitleName
                            });
                        }
                    }
                }).catch(err=>{
                    console.log(err);
                });
                this.obserShowData = that.liveliData;
            }
            else if(num == 2){
                this.ifshow_poli_line = false;
                this.ifshow_liveli_line = false;
                this.ifshow_econo_line=true;
                this.ifshow_culture_line=false;
                this.ifshow_yangben_line = false;
                var poliActive = this.$refs.poli.getAttribute('class');
                var LiveliActive = this.$refs.liveli.getAttribute('class');
                var cultureActive = this.$refs.culture.getAttribute('class');
                var yangbenActive = this.$refs.yangben.getAttribute('class');
                if(poliActive == 'yes_active'){
                    this.$refs.poli.setAttribute('class','no_active');
                }
                if(LiveliActive== 'yes_active'){
                    this.$refs.liveli.setAttribute('class','no_active');
                }
                if(cultureActive== 'yes_active'){
                    this.$refs.culture.setAttribute('class','no_active');
                }
                if(yangbenActive== 'yes_active'){
                    this.$refs.yangben.setAttribute('class','no_active');
                }
                this.$refs.econo.setAttribute('class','yes_active');
                that.econoData.contArr = []; //清理缓存
                this.$axios({
                    method: "post",
                    url: baseUrl + "/stargaze/stargazaMenu/getMenuList",
                    params: {
                        parentTitle:4
                    }
                }).then(res => {
                    if(res.status == 200){
                        var menuTextArr = res.data.data;
                        console.log(menuTextArr);
                        for(var i = 0; i < menuTextArr.length;i++){
                            that.econoData.contArr.push({
                                img:require('../../assets/images/obserStar/obser_icon.png'),
                                intro:menuTextArr[i].subTitleName,
                                subTitleCode:menuTextArr[i].subTitleCode,
                                subTitleName:menuTextArr[i].subTitleName
                            });
                        }
                    }
                }).catch(err=>{
                    console.log(err);
                });
                this.obserShowData = that.econoData;
            }
            else if(num == 3){
                this.ifshow_poli_line = false;
                this.ifshow_liveli_line = false;
                this.ifshow_econo_line=false;
                this.ifshow_culture_line=true;
                this.ifshow_yangben_line = false;
                var poliActive = this.$refs.poli.getAttribute('class');
                var LiveliActive = this.$refs.liveli.getAttribute('class');
                var econoActive = this.$refs.econo.getAttribute('class');
                var yangbenActive = this.$refs.yangben.getAttribute('class');
                if(poliActive == 'yes_active'){
                    this.$refs.poli.setAttribute('class','no_active');
                }
                if(LiveliActive== 'yes_active'){
                    this.$refs.liveli.setAttribute('class','no_active');
                }
                if(econoActive== 'yes_active'){
                    this.$refs.econo.setAttribute('class','no_active');
                }
                if(yangbenActive== 'yes_active'){
                    this.$refs.yangben.setAttribute('class','no_active');
                }
                this.$refs.culture.setAttribute('class','yes_active');
                that.cultureData.contArr = []; //清理缓存
                this.$axios({
                    method: "post",
                    url: baseUrl + "/stargaze/stargazaMenu/getMenuList",
                    params: {
                        parentTitle:1
                    }
                }).then(res => {
                    if(res.status == 200){
                        var menuTextArr = res.data.data;
                        console.log(menuTextArr);
                        for(var i = 0; i < menuTextArr.length;i++){
                            that.cultureData.contArr.push({
                                img:require('../../assets/images/obserStar/obser_icon.png'),
                                intro:menuTextArr[i].subTitleName,
                                subTitleCode:menuTextArr[i].subTitleCode,
                                subTitleName:menuTextArr[i].subTitleName
                            });
                        }
                    }
                }).catch(err=>{
                    console.log(err);
                });
                this.obserShowData = that.cultureData;
            }
            else{
                this.ifshow_poli_line = false;
                this.ifshow_liveli_line = false;
                this.ifshow_econo_line=false;
                this.ifshow_culture_line=false;
                this.ifshow_yangben_line = true;
                var poliActive = this.$refs.poli.getAttribute('class');
                var LiveliActive = this.$refs.liveli.getAttribute('class');
                var econoActive = this.$refs.econo.getAttribute('class');
                var cultureActive = this.$refs.culture.getAttribute('class');
                if(poliActive == 'yes_active'){
                    this.$refs.poli.setAttribute('class','no_active');
                }
                if(LiveliActive== 'yes_active'){
                    this.$refs.liveli.setAttribute('class','no_active');
                }
                if(econoActive== 'yes_active'){
                    this.$refs.econo.setAttribute('class','no_active');
                }
                if(cultureActive== 'yes_active'){
                    this.$refs.culture.setAttribute('class','no_active');
                }
                this.$refs.yangben.setAttribute('class','yes_active');
                this.obserShowData = this.yangbenData;
            }
        },
        goLogin(){
            this.ifShowLogin = true;
        },
        closeLoginWin(arg){
            this.ifShowLogin = arg;
        }
    },
    watch:{
        '$route' (to, from) {
            this.$router.go(0);
        }
    },
    mounted(){
        var featurType = this.$route.query.featurType;
        var type = this.$route.query.type;
        console.log(featurType);
        if(type == 3){
            this.$refs.navTextTop[3].style='box-sizing: border-box;padding-bottom:3px;border-bottom: 3px #ffffff solid;';
        }
        this.goShowData(featurType);
    }
}
</script>

<style scoped lang='less'>
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
        .sub_btn:hover{
          cursor: pointer;
        }
      }
    }
}
.banner{
  width: 100%;
  background: #3F3F4B;
  display: flex;
  align-items: center;
  justify-content: center;
  .banner_contant{
    width: 1200px;
    height: 500px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .left{
      height: 100%;
      .desc{
        box-sizing: border-box;
        padding-top: 138px;
        padding-bottom: 54px;
        font-size: 48px;
        color: #FFFFFF;
      }
    }
    .right{
      height: 100%;
      width: 60%;
      img{
        width: 100%;
      }
    }
  }
}
.data_show_container{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #FFFFFF;
    .data_show{
        width: 1200px;
        display: flex;
        // align-items: center;
        align-items: flex-start;
        padding: 80px 0;
        box-sizing: border-box;
        .left{
            width: 206px;
            margin-right: 32px;
            .political,.Liveli_hood,.economic,.culture,.yangben{
                display: flex;
                align-items: center;
                .political_left_line,.Liveli_hood_left_line,.economic_left_line,.culture_left_line,.yangben_left_line{
                    width: 6px;
                    height: 70px;
                    background-color:#03A971;
                }
                .political_right,.Liveli_hood_right,.economic_right,.culture_right,.yangben_right{
                    width: 200px;
                    height: 70px;
                    line-height: 70px;
                    font-size: 18px;
                    color: #3D4966;
                    text-align: center;
                }
                .culture_right:hover{
                    background-color: #FFFFFF;
                    box-shadow: 0 0 35px 0 #EBECF0;
                    color: #03A971;
                }
                .yangben_right:hover{
                    background-color: #FFFFFF;
                    box-shadow: 0 0 35px 0 #EBECF0;
                    color: #03A971; 
                }
                .political_right:hover{
                    background-color: #FFFFFF;
                    box-shadow: 0 0 35px 0 #EBECF0;
                    color: #03A971;
                }
                .Liveli_hood_right:hover{
                    background-color: #FFFFFF;
                    box-shadow: 0 0 35px 0 #EBECF0;
                    color: #03A971;
                }
                .economic_right:hover{
                    background-color: #FFFFFF;
                    box-shadow: 0 0 35px 0 #EBECF0;
                    color: #03A971;
                }
            }
        }
        .right{
            width: 962px;
        }
    }
}
.yes_active{
    width: 200px;
    height: 70px;
    line-height: 70px;
    font-size: 18px;
    text-align: center;
    background: #FFFFFF;
    box-shadow: 0 0 35px 0 #EBECF0;
    color:#03A971;
}
.no_active{
    width: 200px;
    height: 70px;
    line-height: 70px;
    font-size: 18px;
    color: #3D4966;
    text-align: center;
}
</style>
