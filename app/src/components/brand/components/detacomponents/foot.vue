<template>
	<div class="foot">
		<ul>
			<li>
				<i class="iconfont" style="font-size: .4rem;">&#xe504;</i>
				购物车
			</li>
			<li>
			<i class="iconfont">&#xe601;</i>
				收藏
			</li>
		</ul>
		<div class="button">加入购物车</div>
			
		

		
	</div>
</template>

<script>
	export default{
		
	}
</script>

<style scoped lang="scss">
	.foot{
		width: 100%;
		height: .88rem;
		border-top: .005rem solid #e8e8e8;
		position: fixed;
		left: 0;
		bottom: 0;
		display: flex;
		justify-content: space-around;
		background: #fff;
		ul{
			width: 3.6rem;
			height: 100%;
			display: flex;
			li{
				width: 1.8rem;
				height: 100%;
				display: flex;
				flex-direction: column;
				justify-content: space-around;
				align-items: center;
				i{
						font-size: .34rem;
				}
			}
		}
		.button{
			width: 3.9rem;
			height: 100%;
			background: #990055;
			text-align: center;
			line-height: .88rem;
			color: #fff;
			font-size: .34rem;
		}
	}
</style>