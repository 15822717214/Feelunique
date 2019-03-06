<template>
	<div class="newdeta">
		<Header/>
			<Content1/> 
		<Foot/>
	</div>
	
</template>

<script>
	import Header from "./detacomponents/header";
	import Content1 from "./detacomponents/content1";
	import Foot from "./detacomponents/foot";
	import Vuex from "vuex";
	export default{
		
		components:{
			"Header":Header,
			"Content1":Content1,
			"Foot":Foot
		},
		created(){
			let obb =this.$route.query
//			document.cookie="jk=obb,expires="+new.Data().setData
			this.handleNewdeta(obb)
		},
		methods:{
			...Vuex.mapActions({
				handleNewdeta:"classify/handleNewdeta"
			})
		},
		computed:{
			...Vuex.mapState({
				newdata:(state)=>state.classify.newData,
				olddata:(state)=>state.classify.olddata
			})
		}
	}
</script>

<style scoped lang="scss">
	.newdeta{
		width: 100%;
		height: 100%;
	}
</style>