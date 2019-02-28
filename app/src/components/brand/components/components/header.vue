<template>
	<div id="tp">
		<i class="iconfont">&#xe602;</i>
		<div class="inpt">
			<input type="text" placeholder="Maybelline New York" />
			<i class="iconfont">&#xe619;</i>
		</div>
		<i class="iconfont">&#xe652;</i>
		<i class="iconfont" style="font-size: .38rem;">&#xe618;</i>	
	</div>
</template>

<script>
	export default{
		
	}
</script>

<style scoped lang="scss">
	#tp{
		width: 100%;
		height: .88rem;
		border-bottom:.005rem solid #e8e8e8 ;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: .15rem .24rem;
		i{
			display: block;
			width: .44rem;
			height: .44rem;
			font-size: .38rem;
			display: flex;
			justify-content: center;
			align-items: center;
		}
		.inpt{
			width: 5.7rem;
			height: .6rem;
			background: #E8E8E8;
			border-radius:.3rem ;
			display: flex;
			align-items: center;
			input{
				width: 80%;
				height: 80%;
				margin-left: .3rem;
				background: #E8E8E8;
				border: none;
				outline:medium;
				font-size: .32rem;
			}
		}
		
	}
</style>