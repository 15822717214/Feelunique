<template>
  <div class="brand">
    <Header/>
    <Banner/>
    <Recommend/>
    <Allbrands/>
    <router-view/>
  </div>
</template>

<script>
	import Header from "./components/header";
	import Banner from "./components/banner";
	import Recommend from './components/recommend';
	import Allbrands from './components/allbrands';
	import Vuex from "vuex";
export default {
  components:{
  	"Header":Header,
  	"Banner":Banner,
  	"Recommend":Recommend,
  	"Allbrands":Allbrands
  },
  created(){
  	this.handlebanner();
  	this.handleGoods()
  },
  methods: {
    ...Vuex.mapActions({
      handlebanner:"classify/handlebanner",
      handleGoods:"classify/handleGoods"
    })
  }
  
  
  	
}
</script>

<style scoped lang="scss">
	.brand{
		 width: 100%;
      height: 100%;
      overflow: auto;
      flex: 1;
      padding-bottom:1rem ;
      padding-top:0.9998rem ;
	}
 
</style>
