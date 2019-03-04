<template>
	<div class="header">
		<i class="iconfont" @click="monct()">&#xe602;</i>
		<ul>
			<li v-for="(item,index) in con"
				@click="handle(index)"
				:class="active==index?'active':''"
				>{{item}}</li>
			
		</ul>
		<i class="iconfont" @click="lunck()">&#xe618;</i>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				con:["商品","详情","评价"],
				active:0
			}
		},
		methods:{
			handle(index){
				this.active=index
			},
			monct(){
				this.$router.back()
			},
			lunck(){
				this.$router.push({name:"home"})
			}
		}
	}		
</script>

<style scoped lang="scss">
	.header {
		width: 100%;
		height: .88rem;
		border-bottom: .005rem solid #e8e8e8;
		display: flex;
		justify-content: space-between;
		align-items: center;
		position: fixed;
		left: 0;
		top: 0;
		padding: 0 .5rem;
		background: #fff;
		i {
			display: block;
			width: .44rem;
			height: .44rem;
			font-size: .38rem;
			display: flex;
			justify-content: center;
			align-items: center;
		}
		ul {
			width: 5rem;
			height: 100%;
			display: flex;
			justify-content: space-between;
			li {
				display: flex;
				align-items: center;
				height: 100%;
				font-size: .34rem;
				color: #999999;
			}
		.active {
				border-bottom: .02rem solid #656B79;
				color: #000;
			}
		}
	}
</style>