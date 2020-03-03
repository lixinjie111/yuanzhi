<template>
  <div>
      <div class="listed_compan_container" v-for="(item,index) in obserStarData" :key="index">
          <div class="left">
              <div class="title">{{item.title}}</div>
              <div class="desc">{{item.desc}}</div>
              <div class="date">
                  <div class="update_date">{{item.date.update}}更新</div>&nbsp;&nbsp;
                  <div class="down_load">下载次数:{{item.date.downLoad}}</div>&nbsp;&nbsp;
                  <div class="invok">数据容量:{{item.date.invok}}</div>
              </div>
          </div>
          <div class="right">
              <div class="top" @click="downLoad">下载</div>
              <!-- <div class="bottom" @click="interFace">接口</div> -->
          </div>
      </div>
      <vLogin v-show="ifShowLogin" @closeLoginWin='closeLogin'></vLogin>
  </div>
</template>

<script>
import vLogin from '../login/login';
  export default {
      props:{
          obserStarData:{
              type:Array,
              required:true,
              default:[]
          }
      },
      data(){
          return{
              ifShowLogin:false
          }
      },
      components:{
          vLogin
      },
      methods:{
          downLoad(){
              this.ifShowLogin = true;
          },
          closeLogin(arg){
              this.ifShowLogin = arg;
          }
      }
  }
</script>

<style scoped lang='less'>
.listed_compan_container{
    width: 1200px;
    height: 220px;
    padding: 34px 73px 34px 40px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 40px;
    border: 1px solid #C2C4CC;
    .left{
        width: 51%;
        .title{
            font-size: 17px;
            color: #121C33;
            margin-bottom: 10px;
        }
        .desc,.date{
            font-size: 14px;
            color: #7A8499;
            letter-spacing: 0;
            line-height: 24px;
        }
        .desc{
            margin-bottom: 20px;
        }
        .date{
            display: flex;
            align-items: center;
            div{
                margin-bottom: 20px;
            }
        }
    }
    .right{
        width: 10%;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        .top,.bottom{
            width: 120px;
            height: 36px;
            line-height: 36px;
            text-align: center;
            font-size: 16px;
        }
        .top,.bottom:hover{
            cursor: pointer;
        }
        .top{
            margin-bottom: 20px;
            background-color: #03A971;
            color: #ffffff;
            border-radius: 3px;
        }
        .bottom{
            color: #03A971;
            border: 1px #03A971 solid;
            border-radius: 3px;
        }
    }
}
</style>
