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
	import Header from "../classify/components/header";
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
  },
  
  	
}
</script>

<style scoped lang="scss">
	.brand{
		width: 100%;
		display: flex;
		flex-direction: column;
		flex: 1;
	}
 
</style>
