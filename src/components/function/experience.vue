<template>
  <div class="experience">
    <div class="experience_container" v-if="detailType == 'cifafenxi'">
      <div class="top">
        <textarea cols="30" rows="10" maxlength="150" placeholder="现在，慕尼黑再保险公司不仅是此类行动的倡议者，更是将其大量气候数据整合进保险产品中，并与公众共享大量天气信息，参与到新能源领域的保障中。" v-model="areaText"></textarea>
        <div class="kaishi_fenxi" @click="inputAreaText">开始分析</div>
        <div class="max_length">最多输入150个字</div>
      </div>
      <div class="bottom">
        <div class="left">
          <div class="content">
            <div class="item" v-for="(item,index) in contenArr" :key="index" @click="changeBgc(index,item)" ref="item">
              <div>{{item.word}}</div>
            </div>
          </div>
        </div>
        <div class="right">
          <div class="cixing_leibie">词性类别</div>  
          <div class="cixing_leibie_container">
          </div>
        </div>
      </div>
    </div>
    <div class="duanyuyin_experience_container" v-else-if="detailType == 'duanyuyin'">
      <div class="left">
        <img :src="duanyuyin_experience_img" alt="" srcset="">
        <div class="times">
            <i-button type="success" shape="circle" @click="startRecord">{{buttonMsg}}</i-button>
        </div>
        
      </div>
      <div class="right">
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
    data() {
      return {
        transMsg:"请说出你想说的话...",
        buttonMsg:"开始录音",
        flag:0,
        shitishibie:'',
        areaText:'',
        duanyuyin_experience_img:require('@/assets/images/aiSmartAppDetail/duanyuyin_experience_img.png'),
        contenArr:[]
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
          }
        }).catch(err=>{
          console.log(err);
        });
      }
    },
    methods:{
      startRecord(){
        this.$Recorder.start();
        let num=10;
        this.flag=!this.flag;
        console.log(this.flag)
        //当为true，暂停状态
        var timer=null;
        if(this.flag){
          this.buttonMsg="暂停录音"+10+"s";
          timer=setInterval(()=>{
          if(num==0){
              this.buttonMsg="开始录音";
              this.flag=false;
              clearInterval(timer)
              this.sendRecord();
            }else{
              num--;
              if(this.flag){
                this.buttonMsg="暂停录音"+num+"s";
              }else{
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
        this.$Recorder.stop();
        let wav=this.$Recorder.getWAVBlob();
        console.log(wav)
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
      rePlay(){
        this.$Recorder.play();
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
        background: rgba(192,204,218,0.10);
        border: 1px solid #EBECF0;
        display: flex;
        flex-direction: column;
        align-items: center;
        textarea {
          width: 100%;
          height: 100%;
          font-size: 14px;
          color: #7A8499;
          text-align: justify;
          line-height: 22px;
          background-color: rgba(192,204,218,0.10);
          border: none;
          outline: none;
          resize: none;
        }
        .kaishi_fenxi{
          width: 100px;
          height: 28px;
          text-align: center;
          background: #03A971;
          border-radius: 3px;
          font-size: 14px;
          color: #FFFFFF;
          line-height: 28px;
          margin-top: 10px;
        }
        .max_length{
          width: 100%;
          font-size: 12px;
          color: #B8BECC;
          margin-top: -14px;
        }
      }
      .bottom {
        width: 100%;
        background: rgba(192,204,218,0.10);
        border: 1px solid #EBECF0;
        margin-top: 30px;
        box-sizing: border-box;
        display: flex;
        .left{
          width: 80%;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: flex-start;
          padding: 22px;
          .content{
            display: flex;
            flex-wrap: wrap;
            .item{
              padding:2px 12px;
              height:24px;
              border: 1px solid #03A971;
              margin-right: 10px;
              margin-bottom: 10px;
              text-align: center;
              font-size: 14px;
              color: #03A971;
            }
          }
        }
        .right{
          width: 20%;
          padding: 22px 29.5px;
          box-sizing: border-box;
          border-left:1px solid #EBECF0;  
          .cixing_leibie{
            font-size: 18px;
            color: #121C33;
          }
          .cixing_leibie_container{
            margin-top: 10px;
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
        position: relative;
        width: 585px;
        height: 100%;
        img{
          width: 100%;
          height: 100%;
        }
        .times{
          width:60%;
          position: absolute;
          right:0;
          top:0;
          height: 100%;
          color:#fff;
          font-size: 80px;
          font-weight: bold;
          display: flex;
          align-items: center;
          justify-content:center;
        }
      }
      .right{
        width: 585px;
        height: 100%;
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
