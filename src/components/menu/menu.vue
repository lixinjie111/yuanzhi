<template>
  <div v-show="ifShowMenu">
    <div class="aiSmartApp_menu_container" v-if="navType == 1">
      <div class="yuyanchuli">
        <p @click="goList(0)" class="border_bottom_style ziranyuyanchuli">自然语言处理</p>
        <p @click="goDetails(0)" class="cifafenxi">词法分析</p>
        <p @click="goDetails(1)">句子成分分析</p>
        <p @click="goDetails(2)">句法依存分析</p>
        <p @click="goDetails(3)">文本分类</p>
        <p @click="goDetails(4)">情感分析</p>
        <p @click="goDetails(5)">口碑分析</p>
        <p @click="goDetails(6)">关键词提取</p>
        <p @click="goDetails(7)">自动摘要</p>
        <p @click="goDetails(8)">自动纠错</p>
        <p @click="goDetails(9)">词向量表示</p>
        <p @click="goDetails(10)">同义词挖掘</p>
      </div>
      <div class="renlianyurenti">
        <p @click="goList(1)" class="border_bottom_style renlianshibieDetail">人脸识别</p>
        <p @click="goDetails(11)">人脸检测</p>
        <p @click="goDetails(12)">人脸对比</p>
        <p @click="goDetails(13)">人脸搜索</p>
        <p @click="goDetails(14)">活体检测</p>
      </div>
      <div class="shipinjishu">
        <P @click="goList(2)" class="border_bottom_style shipinjishu1">视频识别</P>
        <P @click="goDetails(15)">视频内容分析</P>
        <P @click="goDetails(16)">媒体内容审核</P>
      </div>
      <div class="sousuo">
        <p @click="goList(3)" class="border_bottom_style sousuo1">搜索</p>
      </div>
      <div class="yuqingfenxi">
        <p @click="goList(4)" class="border_bottom_style opinionAnalysisDetail">舆情分析</p>
      </div>
      <div class="tuxiangwenzishibie">
        <p @click="goList(5)" class="border_bottom_style tuxiangwenzishibieDetail">图像文字识别</p>
        <p @click="goDetails(17)">卡证文字识别</p>
        <p @click="goDetails(18)">票据文字识别</p>
        <p @click="goDetails(19)">汽车场景文字识别</p>
        <p @click="goDetails(20)">其他文字识别</p>
      </div>
      <div class="yuyinshibie">
        <P @click="goList(6)" class="border_bottom_style yuyinjishu">语音技术</P>
        <P @click="goDetails(21)" class="duanyuyinshibie">短语音识别</P>
        <P @click="goDetails(22)">实时语音识别</P>
        <P @click="goDetails(23)">录音文件识别</P>
        <p @click="goDetails(24)">语音唤醒</p>
        <p @click="goDetails(25)">语音合成</p>
      </div>
      <div class="tuijian">
        <p @click="goList(7)" class="border_bottom_style recommendDetail">推荐</p>
      </div>
    </div>
    <div class="insightData_menu_container" v-else-if="navType == 2">
      <div @click="goList(8)" class="border_bottom_style falvzonghefenxi">法律综合分析</div>
      <div @click="goDetails(26)">房产综合分析</div>
      <div @click="goDetails(27)">品牌舆情洞察</div>
      <div @click="goDetails(28)">地理综合查询</div>
    </div>
    <div class="obserData_menu_container" v-else-if="navType == 3">
      <div @click="goList(9)" class="border_bottom_style">政治数据</div>
      <div @click="goDetails(29)">民生数据</div>
      <div @click="goDetails(30)">经济数据</div>
      <div @click="goDetails(31)">文化数据</div>
      <div @click="goDetails(32)">样本数据</div>
    </div>
  </div>
</template>

<script>
  export default {
    props:{
      navType:{
        type:Number,
        required:true
      }
    },
    data(){
      return{
        ifShowMenu:true
      }
    },
    methods:{
      goList(arg){
        if(arg == 0){
          this.$router.push({
            path:'/aiSmartAppList',
            query:{
              type:1,
              featurType:0
            }
          });
        }
        else if(arg == 1){
          this.$router.push({
            path:'/faceRecoList',
            query:{
              type:1
            }
          }); 
        }
        else if(arg == 2){
          this.$router.push({
            path:'/VideoRecoList',
            query:{
              type:1
            }
          }); 
        }
        else if(arg == 3){
          this.$router.push({
            path:'/searchDetail', 
            query:{
              type:1
            }
          }); 
        }
        else if(arg == 4){
          this.$router.push({
            path:'/opinionAnalysisDetail', 
            query:{
              type:1
            }
          }); 
        }
        else if(arg == 5){
          this.$router.push({
            path:'/textReocList',
            query:{
              type:1
            }
          }); 
        }
        else if(arg == 6){
          this.$router.push({
            path:'/aiSmartAppList',  
            query:{
              type:1,
              featurType:1
            }
          }); 
        }
        else if(arg == 7){
          this.$router.push({
            path:'/recommendDetail', 
            query:{
              type:1
            }
          }); 
        }
        else if(arg == 8){
          this.$router.push({
            path:'/insightData',   
            query:{
              type:2
            }
          }); 
        }
        else if(arg == 9){
          this.$router.push({
            path:'/obserStarData',  
            query:{
              type:3,
              featurType:0
            }
          }); 
        }
        this.ifShowMenu = false;
      },
      goDetails(arg){
        switch(arg){
          case 0:
            this.$router.push({
              path:'/aiSmartAppDetail'
            });
            break;
          case 21:
            this.$router.push({
              path:'/shortSpeechRecoDetail'
            });
            break;
          case 29 :
            this.$router.push({ 
              path:'/obserStarData',  
              query:{
                type:3,
                featurType:1
              }
            });
            break;
          case 30 :
            this.$router.push({ 
              path:'/obserStarData',  
              query:{
                type:3,
                featurType:2
              }
            });
            break;
          case 31:
            this.$router.push({ 
              path:'/obserStarData',  
              query:{
                type:3,
                featurType:3
              }
            });
            break;
            case 32:
            this.$router.push({ 
              path:'/obserStarData',  
              query:{
                type:3,
                featurType:4
              }
            });
            break;
          default:
        }
      },
      hideSelf(){
        this.ifShowMenu = false;
      }
    }
  }
</script>

<style scoped lang='less'>
  .aiSmartApp_menu_container{
    position: absolute;
    display: flex;
    align-items:flex-start;
    justify-content: space-around;
    padding: 20px;
    z-index: 999;
    top: 90px;
    left: 50%;
    width: 75%;
    transform: translateX(-50%);
    background-color: #FFFFFF;
    .tuxiangwenzishibie,.yuyinshibie,.tuxiangjishu,.renlianyurenti,.shipinjishu,.yuyanchuli,.sousuo,.yuqingfenxi,.tuijian{
      margin-right: 60px;
      p{
        font-size: 13px;
        color: #7A8499;
        margin-bottom: 12px;
      }
      p:nth-child(1){
        margin-bottom: 10px;
        font-size: 16px;
        color: #3D4966;
      }
      .cifafenxi:hover{
        color:#03A971;
        cursor: pointer;
        background:rgba(128, 128, 128, 0.1);
        box-shadow: 0 2px 35px 0 #EBECF0;
      }
      .ziranyuyanchuli:hover{
        color:#03A971;
        cursor: pointer;
        background:rgba(128, 128, 128, 0.1);
        box-shadow: 0 2px 35px 0 #EBECF0;
      }
      .yuyinjishu:hover{
        color:#03A971;
        cursor: pointer;
        background:rgba(128, 128, 128, 0.1);
        box-shadow: 0 2px 35px 0 #EBECF0;
      }
      .shipinjishu1:hover{
        color:#03A971;
        cursor: pointer;
        background:rgba(128, 128, 128, 0.1);
        box-shadow: 0 2px 35px 0 #EBECF0;  
      }
      .sousuo1:hover{
        color:#03A971;
        cursor: pointer;
        background:rgba(128, 128, 128, 0.1);
        box-shadow: 0 2px 35px 0 #EBECF0;   
      }
      .recommendDetail:hover{
        color:#03A971;
        cursor: pointer;
        background:rgba(128, 128, 128, 0.1);
        box-shadow: 0 2px 35px 0 #EBECF0;  
      }
      .opinionAnalysisDetail:hover{
        color:#03A971;
        cursor: pointer;
        background:rgba(128, 128, 128, 0.1);
        box-shadow: 0 2px 35px 0 #EBECF0;     
      }
      .duanyuyinshibie:hover{
        color:#03A971;
        cursor: pointer;
        background:rgba(128, 128, 128, 0.1);
        box-shadow: 0 2px 35px 0 #EBECF0;  
      }
      .tuxiangwenzishibieDetail:hover{
        color:#03A971;
        cursor: pointer;
        background:rgba(128, 128, 128, 0.1);
        box-shadow: 0 2px 35px 0 #EBECF0; 
      }
      .renlianshibieDetail:hover{
        color:#03A971;
        cursor: pointer;
        background:rgba(128, 128, 128, 0.1);
        box-shadow: 0 2px 35px 0 #EBECF0; 
      }
      .border_bottom_style{
        padding-bottom:5px;
        border-bottom:2px gray solid
      }
    }
    .tuijian{
      margin-right: 0;
    }
  }
  .insightData_menu_container,.obserData_menu_container{
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 30px;
    z-index: 999;
    top: 90px;
    left: 50%;
    transform: translateX(-34%);
    background-color: #FFFFFF;
    div{
      margin-bottom: 11px;
      font-size: 14px;
      color: #7A8499;
    }
    .falvzonghefenxi:hover{
      color:#03A971;
      cursor: pointer;
      background:rgba(128, 128, 128, 0.1);
      box-shadow: 0 2px 35px 0 #EBECF0;
    }
  }
  .obserData_menu_container{
    transform: translateX(50%);
    div:nth-child(1):hover{
      color:#03A971;
      cursor: pointer;
      background:rgba(128, 128, 128, 0.1);
      box-shadow: 0 2px 35px 0 #EBECF0;
    }
    div:nth-child(2):hover{
      color:#03A971;
      cursor: pointer;
      background:rgba(128, 128, 128, 0.1);
      box-shadow: 0 2px 35px 0 #EBECF0;
    }
    div:nth-child(3):hover{
      color:#03A971;
      cursor: pointer;
      background:rgba(128, 128, 128, 0.1);
      box-shadow: 0 2px 35px 0 #EBECF0;
    }
    div:nth-child(4):hover{
      color:#03A971;
      cursor: pointer;
      background:rgba(128, 128, 128, 0.1);
      box-shadow: 0 2px 35px 0 #EBECF0;
    }
    div:nth-child(5):hover{
      color:#03A971;
      cursor: pointer;
      background:rgba(128, 128, 128, 0.1);
      box-shadow: 0 2px 35px 0 #EBECF0;
    }
  }
</style>
