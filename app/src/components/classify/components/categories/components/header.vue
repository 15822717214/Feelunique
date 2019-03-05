<template>
  <div class="header" >
    <input type="text" id="inp" placeholder="请输入关键字"> 
    <button id="btn" @click="handleClick()">取消</button>
  </div>
</template>

<script>
export default {
  methods:{
     handleClick(){
       this.$router.push("/classify")
     }
  }
}
</script>

<style lang="scss">
    .header{
        width:100%;
        height:0.9998rem;
        background:#fff;
        text-align:center; 
        line-height: 0.9998rem;
        border-bottom:1px solid #c8c8c8;
        #inp{
            width:6.3398rem;
            height:0.62rem;
            font-size:0.26rem;
            border:1px solid #c8c8c8;
        }
        #btn{
          // width:0.8rem;
          font-size:0.28rem;
          background:#fff;
          margin-top:0.1rem;
        }
        
    }
 
</style>