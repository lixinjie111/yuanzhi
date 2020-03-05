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
          <div class="word_desc">词汇详情：</div>
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
      <div class="top">
        <div class="icon" style="">
          <div class="luzhi" style="width:15px;">
             <img src="../../assets/images/aiSmartAppDetail/luzhi.png" alt="">
          </div>
          <div v-if="isWork" class="timeline" style="width:293px; margin:0 10px">
            <img src="../../assets/images/aiSmartAppDetail/Timeline.png" alt="">
          </div>
          <span class="time" v-if="isWork" style="color:#fff;">00:{{upTime}} / 00:10</span>
        </div>
       
        <div class="times">
            <i-button type="success"  @click="startRecord">{{buttonMsg}}</i-button>
        </div>
        
      </div>
      <div class="bottom">
        {{transMsg}}
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
        isWork:false,
        upTime:10,
        transMsg:"请说出你想说的话...",
        buttonMsg:"开始录音",
        flag:0,
        cihui:'',
        cixing:'',
        shitishibie:'',
        areaText:'',
        contenArr:[],
        recorder:null
      }
    },
    mounted(){
      this.recorder = new Recorder({
          sampleBits: 16,         // 采样位数，支持 8 或 16，默认是16
          sampleRate: 16000,      // 采样率，支持 11025、16000、22050、24000、44100、48000，根据浏览器默认值，我的chrome是48000
          numChannels: 1,         // 声道，支持 1 或 2， 默认是1
          compiling: false,       // 是否边录边转换，默认是false
      });
    },
    methods:{
      startRecord(){
        this.flag=!this.flag;
        //当为true，暂停状态
        var timer=null;
        if(this.flag){
          this.upTime=10;
          this.recorder.start();
          this.isWork=true;
          this.buttonMsg="结束识别";
          timer=setInterval(()=>{
          if(this.upTime==0){
              this.buttonMsg="开始录音";
              this.flag=false;
              clearInterval(timer)
              this.sendRecord();
               this.isWork=false;
            }else{
              this.upTime--;
              this.upTime="0"+this.upTime;
              if(this.flag){
                this.buttonMsg="结束识别";
              }else{
                this.isWork=false;
                this.sendRecord();
                clearInterval(timer)
                this.buttonMsg="开始录音";
              }
            }
          },1000)
        }else{
          this.buttonMsg="开始录音";
          if(timer){
              clearInterval(timer)
          }
          
        }

        
      },
      sendRecord(){
        this.recorder.stop();
        let wav=this.recorder.getWAVBlob();
        let formData = new FormData(); //创建form对象
        formData.append('files', wav);//
        this.$axios({
          headers: {
              'Accept': '*/*',
              'Content-Type': 'application/x-www-form-urlencoded'
          },
          method: "post",
          url: "/v1/api/zhujian/speechRecognize",
          data: formData,
        }).then(res => {
          if(res.data.status == 0){
            this.transMsg=res.data.result.hypotheses[0].transcript;
          }
        }).catch(err=>{
          console.log(err);
        });
      },
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
      width: 585px;
      margin: auto;
      .top{
        position: relative;
        width: 100%;
        height: 180px;
        margin-bottom: 10px;
        background: url(../../assets/images/aiSmartAppDetail/tiyan.png) no-repeat center center;
        .icon{
          display:flex;justify-content:center;align-items:center;padding-top:50px;
          margin-bottom: 20px;
        }
        .times{
          text-align: center
        }
        img{
          width: 100%;
          height: 100%;
          display: block;
        }
        
      }
      .bottom{
        width: 100%;
        height: 180px;
        background: rgba(192,204,218,0.10);
        border: 1px solid #EBECF0;
        padding: 10px;
        font-size: 14px;
        color: #7A8499;
        text-align: justify;
        line-height: 22px;
      }
    }
  }
</style>
