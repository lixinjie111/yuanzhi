<template>
  <div v-show="ifShowMenu" >
    <div class="aiSmartApp_menu_container" v-if="navType == 1">
      <div class="ziranyuyan_container">
        <div @click="goList(0)">自然语言处理</div>
        <p @click="goDetails(0)" class="cifafenxi">词法分析<img :src="hotImg" alt="" srcset=""></p>
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
      <div class="renlianheshibie_container">
        <div class="renlian_container">
          <div @click="goList(1)">人脸识别</div>
          <p @click="goDetails(11)">人脸检测</p>
          <p @click="goDetails(12)">人脸对比</p>
          <p @click="goDetails(13)">人脸搜索</p>
          <p @click="goDetails(14)">活体检测</p>
        </div>
        <div class="shipin_container">
          <div @click="goList(2)">视频识别</div>
          <P @click="goDetails(15)">视频内容分析</P>
          <P @click="goDetails(16)">媒体内容审核</P>
        </div>
      </div>
      <div class="tuxiangyuyin_container">
        <div class="tuxiang_container">
          <div @click="goList(5)">图像文字识别</div>
          <p @click="goDetails(17)">卡证文字识别</p>
          <p @click="goDetails(18)">票据文字识别</p>
          <p @click="goDetails(19)">汽车场景文字识别</p>
          <p @click="goDetails(20)">其他文字识别</p>
        </div>
        <div class="yuyin_container">
          <div @click="goList(6)">语音技术</div>
          <P @click="goDetails(21)">短语音识别<img :src="hotImg" alt="" srcset=""></P>
          <P @click="goDetails(22)">实时语音识别</P>
          <P @click="goDetails(23)">录音文件识别</P>
          <p @click="goDetails(24)">语音唤醒</p>
          <p @click="goDetails(25)">语音合成</p>
        </div>
      </div>
      <div class="tuijiansousuo_container">
        <div class="tuijian_container">
          <div @click="goList(7)">推荐</div>
          <P>基于内容推荐</P>
          <P>基于产品推荐</P>
          <P>基于用户推荐</P>
          <P>标签数值化</P>
          <P>用户画像</P>
          <P>相似距离计算</P>
        </div>
        <div class="sousuo_container">
          <div @click="goList(3)">搜索</div>
          <P>全文大数据搜索</P>
          <P>热词推荐</P>
          <P>多语言搜索</P>
          <P>搜索聚合</P>
          <P>文档检索</P>
        </div>
      </div>
      <div class="yuqinfenxi_container">
        <div class="yuqingfenxi">
          <div @click="goList(4)">舆情分析</div>
          <P>舆情数据抓取</P>
          <P>热度趋势分析</P>
          <P>地域分布分析</P>
          <P>情感倾向分析</P>
          <P>事件演化分析</P>
          <P>传播路径分析</P>
          <P>敏感信息预警</P>
        </div>
        <div class="view_more" @click="goAlgorithm">
          查看更多
        </div>
      </div>
    </div>
    <div class="insightData_menu_container" v-else-if="navType == 2">
      <div @click="goList(8)" class="border_bottom_style falvzonghefenxi">法律综合分析</div>
      <div @click="goDetails(26)">房产综合分析</div>
      <div @click="goDetails(27)" class="pinpai">品牌舆情洞察</div>
      <div @click="goDetails(28)" class="dili">地理综合查询</div>
    </div>
    <div class="obserData_menu_container" v-else-if="navType == 3">
      <div @click="goList(9)" class="border_bottom_style">政治数据</div>
      <div @click="goDetails(29)">民生数据</div>
      <div @click="goDetails(30)">经济数据</div>
      <div @click="goDetails(31)">文化数据</div>
      <div @click="goDetails(32)">训练数据</div>
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
        ifShowMenu:true,
        hotImg:require('../../assets/images/home/hot.png')
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
          case 26:
            this.$router.push({
              path:'/houseData'  //geographySearch 
            });
            break;
          case 27:
            this.$router.push({
              path:'/brandSentiment'  //geographySearch 
            });
            break;
          case 28:
            this.$router.push({
              path:'/geographySearch'  // 
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
      },
      goAlgorithm(){
        this.$router.push({
          path:'/algorithm'
        });
      }
    }
  }
</script>

<style scoped lang='less'>
  .aiSmartApp_menu_container{
    position: absolute;
    display: flex;
    justify-content: space-between;
    padding: 30px 45px;
    z-index: 999;
    top: 90px;
    left: 50%;
    width: 60%;
    transform: translateX(-60%);
    background: #FFFFFF;
    box-shadow: 0 8px 24px 0 #3D4966;
    .ziranyuyan_container,.renlianheshibie_container,.tuxiangyuyin_container,.tuijiansousuo_container,.yuqinfenxi_container{
      width: 116px;
      div:nth-child(1){
        margin-bottom: 17px;
        font-size: 16px;
        color: #3D4966;
      }
      div:nth-child(1):hover{
        color: #03A971;
        cursor: pointer;
      }
      p{
        font-size: 14px;
        color: #7A8499;
        margin-bottom: 12px;
      }
      p:hover{
        color: #03A971;
        cursor: pointer;
      }
      img{
        width: 30px;
        height: 14px;
      }
      .shipin_container,.yuyin_container{
        margin-top: 111px;
      }
      .sousuo_container{
        margin-top: 47px;
      }
      .view_more{
        margin-top: 172px;
        border: 1px solid #03A971;
        border-radius: 3px;
        height: 30px;
        line-height: 30px;
        color: #03A971;
        text-align: center;
        cursor: pointer;
      }
      .view_more:hover{
        cursor: pointer;
      }
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
    transform: translateX(-64%);
    background-color: #FFFFFF;
    div{
      margin-bottom: 11px;
      font-size: 14px;
      color: #7A8499;
    }
    div:hover{
      color:#03A971;
      cursor: pointer;
      background:rgba(128, 128, 128, 0.1);
      box-shadow: 0 2px 35px 0 #EBECF0;
    }
    // .falvzonghefenxi:hover{
    //   color:#03A971;
    //   cursor: pointer;
    //   background:rgba(128, 128, 128, 0.1);
    //   box-shadow: 0 2px 35px 0 #EBECF0;
    // }
    // .pinpai:hover{
    //   color:#03A971;
    //   cursor: pointer;
    //   background:rgba(128, 128, 128, 0.1);
    //   box-shadow: 0 2px 35px 0 #EBECF0;
    // }
    // .dili:hover{
    //   color:#03A971;
    //   cursor: pointer;
    //   background:rgba(128, 128, 128, 0.1);
    //   box-shadow: 0 2px 35px 0 #EBECF0;
    // }
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
