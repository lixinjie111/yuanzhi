<template>
  <div class="experience">
    <div class="experience_container" v-if="detailType == 'cifafenxi'">
      <div class="top">
        <textarea cols="30" rows="10" placeholder="现在，慕尼黑再保险公司不仅是此类行动的倡议者，更是将其大量气候数据整合进保险产品中，并与公众共享大量天气信息，参与到新能源领域的保障中。" v-model="areaText" @keyup="inputAreaText"></textarea>
      </div>
      <div class="bottom">
        <!-- <img src="../../assets/images/aiSmartAppDetail/jieguo.png" alt="" srcset=""> -->
        <div class="left">
          <div class="title">分词词性</div>
          <div class="content">
            <div class="item" v-for="(item,index) in contenArr" :key="index" @click="changeBgc(index,item)" ref="item">
              <div>{{item.word}}</div>
              <div>{{item.nature.name}}</div>
            </div>
          </div>
        </div>
        <div class="right">
          <div class="word_desc">词汇详情</div>
          <div class="word_desc_container">
            <div>词汇：<span>{{cihui}}</span></div>
            <div>词性：<span>{{cixing}}</span>
            </div>
            <div>实体识别：<span></span></div>
          </div>
          <div class="zhuanyouminci">专有名词</div>
          <div class="zhuanyouminci_container">
            <div>人名</div>
            <div>时间</div>
            <div>机构名</div>
          </div>
        </div>
      </div>
    </div>
    <div class="duanyuyin_experience_container" v-else-if="detailType == 'duanyuyin'">
      <div class="left">
        <img :src="duanyuyin_experience_img" alt="" srcset="">
      </div>
      <div class="right">
        兆京调通了性别分析和人脸表情接口应该在ai智能应用里体现
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      detailType:{
        type:String,
        required:true
      }
    },
    created() {
    },
    mounted(){
      if(this.areaText == ''){
        //标准分词
        this.$axios({
          method: "get",
          url: "/v1/api/daKuai/standardParticiple",
          params: {
            str:'现在，慕尼黑再保险公司不仅是此类行动的倡议者，更是将其大量气候数据整合进保险产品中，并与公众共享大量天气信息，参与到新能源领域的保障中。'
          }
        }).then(res => {
          if(res.status == 200){
            this.contenArr = res.data;
            this.cihui = res.data[0].word;
            this.cixing = res.data[0].nature.name;
          }
        }).catch(err=>{
          console.log(err);
        });
      }
    },
    data() {
      return {
        cihui:'',
        cixing:'',
        shitishibie:'',
        areaText:'',
        duanyuyin_experience_img:require('@/assets/images/aiSmartAppDetail/duanyuyin_experience_img.png'),
        contenArr:[]
      }
    },
    methods:{
      changeBgc(index,item){
        var domArr = this.$refs.item;
        for(var i =0 ;i < domArr.length;i++){
          if(index == i){
            domArr[i].style = 'background-color: #66b3ff;color: #fff;border-color: #66b3ff;';
          }
          else{
            domArr[i].style = 'background-color:white;color:gray;';
          }
        }
        this.cihui = item.word;
        this.cixing = item.nature.name;
      },
      inputAreaText(){
        var totalText;
        var text = this.areaText;
        if(text != ''){
          totalText = text;
        }
        else{
          totalText = '现在，慕尼黑再保险公司不仅是此类行动的倡议者，更是将其大量气候数据整合进保险产品中，并与公众共享大量天气信息，参与到新能源领域的保障中。';
        }
        this.$axios({
          method: "get",
          url: "/v1/api/daKuai/standardParticiple",
          params: {
            str:totalText
          }
        }).then(res => {
          if(res.status == 200){
            var resData = res.data;
            this.contenArr = resData;
            this.cihui = resData[0].word;
            this.cixing = resData[0].nature.name;
          }
        }).catch(err=>{
          console.log(err);
        });
      }
    }
  }
</script>

<style scoped lang='less'>
  .experience {
    display: flex;
    width: 100%;
    .experience_container {
      width: 1200px;
      .top {
        box-sizing: border-box;
        padding:10px;
        height: 180px;
        background: rgba(192, 204, 218, 0.10);
        border: 1px solid #EBECF0;
        textarea {
          width: 100%;
          height: 100%;
          font-size: 14px;
          color: #7A8499;
          text-align: justify;
          line-height: 22px
        }
      }
      .bottom {
        width: 100%;
        height: 387px;
        border:1px gray solid;
        margin-top: 30px;
        padding: 60px;
        box-sizing: border-box;
        display: flex;
        .left{
          width: 80%;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: flex-start;
          .title{
                margin-bottom: 22px;
                font-size: 16px;
                width: 100%;
          }
          .content{
            display: flex;
            flex-wrap: wrap;
            .item{
              padding: 5px;
              border:gray 1px solid;
              margin-right: 10px;
              margin-bottom: 10px;
              text-align: center;
            }
          }
        }
        .right{
          width: 20%;
          padding: 20px;
          box-sizing: border-box;
          border-left: gray 1px solid;
          .word_desc{
            margin-bottom: 20px;
            font-size: 16px;
          }
          .word_desc_container{
                position: relative;
                width: 154px;
                padding: 14px 12px;
                background-color: #f0f7ff;
                span{
                  color: #000;
                }
          }
          .zhuanyouminci{
            padding-bottom: 20px;
            margin-top: 17px;
            font-size: 16px;
          }
          .zhuanyouminci_container{
            display: flex;
            flex-wrap: wrap;
            div{
              -webkit-box-sizing: border-box;
              -moz-box-sizing: border-box;
              box-sizing: border-box;
              height: 36px;
              width: 77px;
              margin: 0 10px 10px 0;
              text-align: center;
              cursor: pointer;
              font-size: 14px;
              line-height: 34px;
              border: 1px solid #e0e0e0;
            }
          }
        }
      }

    }
    .duanyuyin_experience_container{
      width: 100%;
      height: 220px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .left{
        width: 585px;
        height: 100%;
        img{
          width: 100%;
          height: 100%;
        }
      }
      .right{
        width: 585px;
        height: 100%;
        background: rgba(192,204,218,0.10);
        border: 1px solid #EBECF0;
        padding: 40px;
        font-size: 14px;
        color: #7A8499;
        text-align: justify;
        line-height: 22px;
      }
    }
  }
</style>
