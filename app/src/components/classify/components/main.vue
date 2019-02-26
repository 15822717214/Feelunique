<template>
  <div class="main">
    <div class="list">
        <ul>
            <li v-for="(item,index) in list" :key="index"
            @click="handleToggle()"
            >{{item}}</li>
        </ul>
    </div>
    <div class="content"></div>
  </div>
</template>

<script>
export default {
   data(){
       return{
           list:["面部护肤","魅力彩妆","沐浴美体","洗护造型","防晒护理","健康营养","男士护理","美容电器","礼品专区","旅行专区"]
       }
   },
   methods:{
       handleToggle(){
           
       }
   }
}
</script>

<style lang="scss">
   .main{
       width:100%;
       height:100%;
       .list{
           width:1.8rem;
           height:11.3602rem;
           background:#fff;
           float:left;
           border-right:1px solid #c8c8c8;
           ul{
               width:100%;
               height:100%;
               li{
                   width:1.8rem;
                   height:0.9rem;
                   text-align: center;
                   line-height: 0.9rem;
                   border:1px solid #c8c8c8;
                   font-size: 0.26rem;
                   color:#000;
               }
           }
       }
       .content{
           width:5.7rem;
           height:100%;
           background:red;
           float:left;
       }
   }
 
</style>