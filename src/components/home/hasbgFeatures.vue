<template>
  <div>
    <div class="watch_star_container">
      <div class="watch_star">
        <div class="cn_title">{{hasbgdata.cn_title}}</div>
        <div class="en_title">{{hasbgdata.en_title}}</div>
        <div class="block" ref="block">
          <div class="political" v-for="(item,index) in hasbgdata.contant_text" :key="index" @click="goInsightData(index)">
            <div>
              <img :src="item.img" alt="">
            </div>
            <div>{{item.title}}</div>
            <div>{{item.desc}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:{
      hasbgdata:{
        type:Object,
        required:true
      }
  },
  data () {
    return {
    }
  },
  mounted(){
    console.log(this.hasbgdata)
      var arrDom = this.$refs.block.childNodes;
      arrDom[3].style='margin-right:0;';
  },
  methods:{
    goInsightData(index){
      if(index === 0){
        this.$router.push({
          path:'/insightData',
          query:{
            type:2
          }
        });
      }else if(index === 1){
        this.$router.push({
          path:'/houseData',
          query:{
            type:1
          }
        });
      }else if(index === 2){
        this.$router.push({
          path:'/brandSentiment',
          query:{
            type:1
          }
        });
      }else if(index === 3){
        this.$router.push({
          path:'/geographySearch',
          query:{
            type:1
          }
        });
      }
    }
  }
}
</script>

<style scoped lang='less'>
.watch_star_container{
  width:100%;
  background-color: #3F3F4B;
  display: flex;
  align-items: center;
  justify-content: center;
  .watch_star{
    width: 1000px;
    height: 100%;
    padding-top: 30px;
    padding-bottom: 80px;
    box-sizing: border-box;
    .cn_title{
      text-align: center;
      color: white;
      font-size: 30px;
    }
    .en_title{
      font-size: 22px;
      color: #B8BECC;
      text-align: center;
      margin-bottom: 20px;
    }
    .block{
      width: 100%;
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      .political{
        width: 22%;
        height: 243px;
        margin-right: 20px;
        background-color: #FFFFFF;
        padding: 20px;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        margin-bottom: 25px;
        div:nth-child(1){
          width: 38%;
          img{
            width: 100%;
          }
        }
        div:nth-child(2){
          font-size: 22px;
          color: #121C33;
          margin-top: 10px;
          margin-bottom: 10px;
        }
        div:nth-child(3){
          font-size: 14px;
          color: #7A8499;
        }
      }
      .political:hover{
          cursor: pointer;
          margin-top: -40px;
          div:nth-child(2){
            color: #03A971;
          }
      }
    }
  }
}
</style>
