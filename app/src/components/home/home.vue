<template>
  <div id="home">
        <Homeheader-com :val="flag"/>
    <div class="wrapper scrollHome" ref="homeWrapper">
      <div class="content">
        <Homebanner-com/>
        <Homenav-com/>
        <Homecontent-com/>
        <Homenews-com/>
        <Homebottom-com/>
      </div>
    </div>
  </div>
</template>

<script>
import Vuex from "vuex"
import Homeheader from "./components/homeheader"
import Homebanner from "./components/homebanner"
import Homenav from "./components/homenav"
import Homecontent from "./components/homecontent"
import Homenews from "./components/homenews"
import Homebottom from "./components/homebottom"
import BScroll from "better-scroll";
export default {
  data(){
    return{
      flag:false
    }
  },
  components:{
    "Homeheader-com":Homeheader,
    "Homebanner-com":Homebanner,
    "Homenav-com":Homenav,
    "Homecontent-com":Homecontent,
    "Homenews-com":Homenews,
    "Homebottom-com":Homebottom,
  },
  created () {
        this.handleHomeBanner();
        this.handleHomeData();
        
    },
    methods: {
        ...Vuex.mapActions({
            handleHomeBanner:"home/handleHomeBanner",
            handleHomeData:"home/handleHomeData",
        }),
    },
    mounted(){
      this.scroll = new BScroll(this.$refs.homeWrapper,{
          pullUpLoad:true,
          click: true,
          probeType:2
          
        });
        this.scroll.on("scroll",({x,y})=>{
            if(y<-100){
              this.flag=true;
            }else{
              this.flag=false;
            }
        })
    },
    
}
</script>

<style lang="scss" scoped>
  #home{
    width: 100%;
    height: 100%;
    .scrollHome{
      height: 100%;
      width: 100%;
      position: fixed;
      .content{
         padding-bottom: 2rem;
      }
    }
  }
</style>

