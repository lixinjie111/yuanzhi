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
                <div class="bottom" v-show="(index == 1 ) && showTrian1"></div>
                <div class="bottom" v-show="(index == 2 ) && showTrian2"></div>
                </div>
            </div>
            <div class="sub_btn">{{sub_btn}}</div>
            </div>
        </div>
    </div>

    <vMenu v-show="showMenu" :navType='navType'></vMenu>

    <!--首部菜单、首部图标统计、查看详情按钮-->

    <div class="header_container" v-show="ifShowEcharts">
        <div class="header_menu">
            {{leftMenuText}} > {{rightPointMenuText}}
        </div>
        <div class="chart_stati">
            <img :src="chart_img" alt="">
        </div>
        <div class="desc_btn_container">
            <div class="desc_btn" @click="viewDetail">查看详情</div>
        </div>
    </div>

    <!--上市公司数组件-->
    <div class="content_container">
        <vListedCompan :obserStarData='obserStarListArr'></vListedCompan>
    </div>

    <!--分页-->
    <div class='page_container'>
        <div class="page">
            <Page :total="100" :class-name='pageClass' :current='2'></Page>
        </div>
    </div>

    <!--底部及版权组件-->
    <vFooterCopy></vFooterCopy>

  </div>
</template>

<script>
import vListedCompan from '../listedCompan/listedCompan';
import vFooterCopy from '../footerCopyright/footerCopyright';
import vMenu from '../menu/menu';
export default {
    name:'obserStarList',
    data(){
        return {
        cn_title:'元知智能研究院',
        en_title:'YUANZHI AI Research Institute',
        nav_text:['首页','AI智能应用','数据洞察','观星台','大数据平台','行为图谱'],
        sub_btn:'立即登录',
        showTrian1:false,
        showTrian2:false,
        showMenu:false,
        ifShowEcharts:true,
        leftMenuText:'',
        rightPointMenuText:'',
        navType:3,
        chart_img:require('@/assets/images/obserStar/chart.jpg'),
        obserStarListArr:[
            {
                title:'Mozilla语音数据集',
                desc:'总验证时长：11小时288人录音的综合中文语音数据集',
                date:{
                    update:'2020-02-11',
                    downLoad:571,
                    invok:743
                }
            },
            {
                title:'data1784中文语音库',
                desc:'总验证时长: >10小时志愿者贡献的中文语音数据',
                date:{
                    update:'2020-02-11',
                    downLoad:571,
                    invok:743
                }
            },
            {
                title:'美国CA＆NV的禽声',
                desc:'该数据集包含来自美国加利福尼亚州和内华达州的记录子集，包括每个物种均衡数量的样本（30）。记录按物种标记，并且还包含呼叫类型的非标准化标签。',
                date:{
                    update:'2020-02-11',
                    downLoad:571,
                    invok:743
                }
            },
            {
                title:'心跳声音-从听诊器音频分类心跳异常',
                desc:'该数据集最初是针对机器学习挑战来对心跳声音进行分类的。数据是从两个来源收集的：A通过iStethoscope Pro iPhone应用程序从公众那里获得的，以及B从使用数字听诊器DigiScope的医院的临床试验中获得的。',
                date:{
                    update:'2020-02-11',
                    downLoad:571,
                    invok:743
                }
            },
            {
                title:'DARPA TIMIT连续语音语料库',
                desc:'TIMIT阅读语音语料库旨在提供语音数据，用于获取语音知识以及开发和评估自动语音识别系统。TIMIT共包含6300个句子，来自美国8个主要方言地区的630位讲话者每人说10个句子。',
                date:{
                    update:'2020-02-11',
                    downLoad:571,
                    invok:743
                }
            },
            {
                title:'英文同声传异数据竞赛数据',
                desc:'ChallengerAI 英文同声传译竞赛数据【ChallengerAI 竞赛】',
                date:{
                    update:'2020-02-11',
                    downLoad:571,
                    invok:743
                }
            },
            {
                title:'英文同声传异数据竞赛数据',
                desc:'ChallengerAI 英文同声传译竞赛数据【ChallengerAI 竞赛】',
                date:{
                    update:'2020-02-11',
                    downLoad:571,
                    invok:743
                }
            },
            {
                title:'英文同声传异数据竞赛数据',
                desc:'ChallengerAI 英文同声传译竞赛数据【ChallengerAI 竞赛】',
                date:{
                    update:'2020-02-11',
                    downLoad:571,
                    invok:743
                }
            },
            {
                title:'英文同声传异数据竞赛数据',
                desc:'ChallengerAI 英文同声传译竞赛数据【ChallengerAI 竞赛】',
                date:{
                    update:'2020-02-11',
                    downLoad:571,
                    invok:743
                }
            }
        ],
        pageClass:'pageClass'
        }
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
                alert('页面开发中，尽请期待！')
            }
        },
        changeShow(index){
            this.navType=index;
            this.$refs.navTextTop[index].style='box-sizing: border-box;padding-bottom:3px;border-bottom: 3px #ffffff solid;';
            if(index == 1){
                this.showMenu = true;
                this.showTrian1 = true;
                this.showTrian2 = false;
            }
            else if(index == 2){
                this.showMenu = true;
                this.showTrian1 = false;
                this.showTrian2 = true;
            }
            else{
                this.showMenu = false;
                this.showTrian1 = false;
                this.showTrian2 = false;
            }
        },
        hideChange(){
            var navTextArrDom = this.$refs.navTextTop;
            for(var i = 0; i < navTextArrDom.length;i++){
                navTextArrDom[i].style = 'padding-bottom:0;border-bottom:none';
            }
        },
        viewDetail(){
            var dataType = this.$route.query.dataType;
            var pointType = this.$route.query.pointType;
            var subTitleCode = this.$route.query.subTitleCode;
            var subTitleName = this.$route.query.subTitleName
            if(dataType == 1){
                this.$router.push({
                    path:'/obserStarPoliticDetail',
                    query:{
                        type:3,
                        parentTitle:2,
                        subTitleCode:subTitleCode,
                        subTitleName:subTitleName
                    }
                });
            }
            else if(dataType == 2){
                this.$router.push({
                    path:'/obserStarLiveDetail',
                    query:{
                        type:3,
                        parentTitle:3,
                        subTitleCode:subTitleCode,
                        subTitleName:subTitleName
                    }
                });
            }
            else if(dataType == 3){
                this.$router.push({
                    path:'/obserStarEconoDetail',
                    query:{
                        type:3,
                        parentTitle:4,
                        subTitleCode:subTitleCode,
                        subTitleName:subTitleName
                    }
                });
            }
            else if(dataType == 4){
                this.$router.push({
                    path:'/obserStarCulturDetail',
                    query:{
                        type:3,
                        parentTitle:1,
                        subTitleCode:subTitleCode,
                        subTitleName:subTitleName
                    }
                });
            }
        }
    },
    components:{
        vListedCompan,
        vFooterCopy,
        vMenu
    },
    mounted(){
        var dataType = this.$route.query.dataType;
        var pointType = this.$route.query.pointType;
        var rightPointMenuText = this.$route.query.subTitleName
        if(dataType == 1){
            this.leftMenuText = '政治';
            this.rightPointMenuText = rightPointMenuText;
        }
        else if(dataType == 2){
            this.leftMenuText = '民生';
            this.rightPointMenuText = rightPointMenuText;
        }
        else if(dataType == 3){
            this.leftMenuText = '经济';
            this.rightPointMenuText = rightPointMenuText;
        }
        else if(dataType == 4){
            this.leftMenuText = '文化';
            this.rightPointMenuText = rightPointMenuText;
        }
        else if(dataType == 5){
            this.ifShowEcharts = false
        }

        if(this.$route.query.type == 3){
            this.$refs.navTextTop[3].style='box-sizing: border-box;padding-bottom:3px;border-bottom: 3px #ffffff solid;';
        }
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
      }
    }
}
.header_container{
    width: 100%;
    background-image: url('../../assets/images/obserStar/chart_bg_img.png');
    background-size: 100% 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    .header_menu{
        margin-top: 10px;
        width: 1200px;
        height: 60px;
        line-height: 60px;
        color: #FFFFFF;
        font-size: 16px;
    }
    .chart_stati{
        width: 1200px;
        height: 432px;
        padding-top: 10px;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: center;
        img{
            width: 98%;
            height: 100%;
        }
    }
    .desc_btn_container{
        width: 1200px;
        height: 123px;
        padding-top: 37px;
        padding-bottom: 50px;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: center;
        .desc_btn{
            width: 140px;
            height: 36px;
            background: #03A971;
            border-radius: 3px;
            font-size: 16px;
            color: #FFFFFF;
            text-align: center;
            line-height: 36px;
            :hover{
                cursor: pointer;
            }
        }
    }
}
.content_container{
    width: 100%;
    padding-top: 83px;
    box-sizing: border-box;
    background-color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
}
.page_container{
    margin-bottom:40px;
    background-color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
    .page{
        width: 1200px;
        display: flex;
        justify-content: center;
        .pageClass{
            width: 60%;
            display: flex;
            align-items: center;
            justify-content: space-evenly;
            li{
                background-color: yellow !important;
                .active{
                    background-color: #03A971 !important;
                }
            }
        }
    }
}
</style>
