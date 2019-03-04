<template>
	<div class="details">
		<Header/>

			<Nav/>
		
		<Center/>
	</div>
</template>

<script>
	import Header from "./components/header";
	import Nav from "./components/nav";
	import Center from "./components/center";
	import Vuex from "vuex"
	export default{
		components:{
			"Header":Header,
			"Nav":Nav,
			"Center":Center
		},
		methods:{
			...Vuex.mapActions({
				handleimg:"classify/handleimg"
			})
		},
		created(){
			let sand=this.$route.query
			this.handleimg(sand)
		}
		
	}
	
</script>

<style scoped lang="scss">
	.details{
		width: 100%;
		height: 100%;
	}
</style>