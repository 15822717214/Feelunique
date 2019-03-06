<template>
  <div class="brand">
    <Header/>
    <Banner/>
    <Recommend/>
    <Allbrands/>
    <ul class="ul" v-if="Flag">
			<li v-for="(item,index) in list">{{item}}</li>
		</ul>
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
  	this.handleGoods( this.page)
  },
  methods: {
    ...Vuex.mapActions({
      handlebanner:"classify/handlebanner",
      handleGoods:"classify/handleGoods"
    }),
    scrollToTop() {
				let that = this
				let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
				that.scrollTop = scrollTop
				if(that.scrollTop >500) {
					that.Flag = true
				} else {
					that.Flag = false
				}
			}
    
  },
		data(){
			return{
				list:["A","B","C","D","E","F","G","H","I","G","K","L","M","N","O","P","Q","I","S","T","U","V","W","X","W","Z"],
				Flag:false
			}
		},
	mounted(){
		window.addEventListener('scroll', this.scrollToTop)
	},
	destroyed() {
			window.removeEventListener('scroll', this.scrollToTop)
		},
  
  
  	
}
</script>

<style lang="scss">
	.brand{
		 width: 100%;
      height: 100%;
      overflow: auto;
      flex: 1;
      padding-bottom:1rem ;
      padding-top:0.9998rem ;
      .ul{
			width:.4rem;
			height: auto;
			position:fixed;
			z-index:1000;
			right: .2rem;
			top:2rem;
			li{
				width: 100%;
				height: .4rem;
				background:#fff;
				text-align: center;
				line-height: .4rem;
				
			}
		}

	}
 
</style>
