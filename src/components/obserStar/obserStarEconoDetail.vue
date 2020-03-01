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
                <div v-for="(item,index) in nav_text" :key="index" @click="jumpFn(index)" @mouseover="changeShow(index)" class="nav_text_container">
                <div class="top" ref="navTextTop">{{item}}</div>
                </div>
            </div>
            <div class="sub_btn">{{sub_btn}}</div>
            </div>
        </div>
    </div>

    <!--图形统计区域-->
    <div class="echarts_container">
        <div class="chart">
            <div class="chart_top">经济建设</div>
            <div class="chart_container"></div>
        </div>
    </div>

    <!--底部及版权组件-->
    <vFooterCopy></vFooterCopy>

  </div>
</template>

<script>
import vFooterCopy from '../footerCopyright/footerCopyright';
export default {
    name:'obserStarLiveDetail',
    data(){
        return {
        cn_title:'元知智能研究院',
        en_title:'YUANZHI AI Research Institute',
        nav_text:['首页','AI智能应用','数据洞察','观星台','大数据平台','行为图谱'],
        sub_btn:'立即登录',
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
            }
            else if(index === 1){
            this.$router.push({
                path:'aiSmartAppList',
                query:{
                    type:1
                }
            });
            }
        }
    },
    components:{
        vFooterCopy
    },
    mounted(){
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
.echarts_container{
    width: 100%;
    height: 983px;
    background-image: url('../../assets/images/obserStar/chart_bg_img.png');
    background-size: 100% 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 80px;
    box-sizing: border-box;
    flex-direction: column;
    .chart{
        width: 1200px;
        padding: 80px;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        .chart_top{
            font-size: 28px;
            color: #fff;
            text-align: center;
            margin-bottom: 48px;
        }
        .chart_container{
            width: 800px;
            height: 800px;
            background-image: url('../../assets/images/obserStar/jingjimokuai.png');
            background-size: 100% 100%;
        }
    }
}
</style>
