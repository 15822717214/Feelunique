<template>
	<div class="seo">
		<div id="tp">
			<div class="inpt">
				<input type="text" v-model="val"/>
				<i class="iconfont">&#xe619;</i>
			</div>
			<p @click="handlecancel()">取消</p>
		</div>
		<div v-for="(item,index) in search" class="slideOutDown">{{item.text}}</div>
	</div>

</template>

<script>
	import Vuex from "vuex";
	export default {
		data(){
			return{
				val:""
			}
		},
		methods:{
			...Vuex.mapActions({
				handleSearch:"classify/handleSearch"
			}),
			handlecancel(){
				this.$router.back()
			}
		},
		watch:{
			val(){
				let about=this.val
				this.handleSearch(about)
				console.log(about)
			}
		},
		computed:{
			...Vuex.mapState({
				search:(state)=>state.classify.search
			})
		}
	}
</script>

<style scoped lang="scss">
	#tp {
		width: 100%;
		height: .88rem;
		border-bottom: .005rem solid #e8e8e8;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: .15rem .24rem;
		i {
			font-size: .4rem;
		}
		.inpt {
			width: 5.7rem;
			height: .6rem;
			background: #E8E8E8;
			display: flex;
			align-items: center;
			input {
				width: 80%;
				height: 80%;
				margin-left: .3rem;
				background: #E8E8E8;
				border: none;
				outline: medium;
				font-size: .32rem;
			}
			p {
				font-size: .4rem;
			}
		}
	}
	.slideOutDown{
		width: 100%;
		height: .84rem;
		border-bottom:.01rem solid #e8e8e8 ;
		font-size: .32rem;
		margin:0 .24rem ;
		display: flex;
		align-items: center;
		padding: 0 .24rem;
	}
</style>