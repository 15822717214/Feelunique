<template>
  <div class="header" >
    <input type="text" id="inp" placeholder="请输入关键字"> 
  </div>
</template>

<script>
export default {
  
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
        position:fixed;
        left: 0;
        top:0;
        z-index: 10;
        #inp{
            width:7.1rem;
            height:0.62rem;
            font-size:0.26rem;
            border:1px solid #c8c8c8;
            text-indent: .2rem;
        }
    }
 
</style>