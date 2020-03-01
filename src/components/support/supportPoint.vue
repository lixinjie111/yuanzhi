<template>
  <div class="product">
      <div v-for="(item,index) in supportext" :key="index" class="product_container">
          <div class="title">{{item.title}}</div>
          <div class="desc">{{item.desc}}</div>
          <div class="btn">查看更多</div>
      </div>
  </div>
</template>

<script>
export default {
  props:{
      supportext:{
          type:Array,
          required:true
      }
  },
  created(){
  },
  data () {
    return {
    }
  },
  components:{
  }
}
</script>

<style scoped lang='less'>
.product{
    display: flex;
    align-items: center;
    justify-content: space-between;
    .product_container{
        width: 30%;
        .title{
            font-size: 18px;
            color: #121C33;
            margin-bottom: 8px;
        }
        .desc{
            font-size: 14px;
            color: #7A8499;
            line-height: 22px;
            margin-bottom: 29px;
        }
        .btn{
            width: 47%;
            border: 1px solid #03A971;
            border-radius: 3px;
            border-radius: 3px;
            color: #03A971;
            padding: 10px 38px;
            box-sizing: border-box;
            text-align: center;
        }
        .btn:hover{
            cursor: pointer;
        }
    }

}
</style>
