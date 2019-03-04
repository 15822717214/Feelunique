<template>
	<div class="content">
		<div class="net">
			<img :src="olddata.image_url"/>
		</div>
		<div class="solit">
				<p class="price">{{olddata.merchant_currency}}{{olddata.price}}</p>
				<p class="can">参考价：
					<span>{{olddata.reference_currency}}{{olddata.reference_price}}</span>
				</p>
				<span class="lt" >{{olddata.name}}</span>
		</div>
		<div class="section">
			<p>活动</p>
			<div v-html="newdata.data"></div>
		</div>
	</div>
</template>

<script>
	import Vuex from "vuex";
	export default{
		computed:{
			...Vuex.mapState({
				newdata:(state)=>state.classify.newdata,
				olddata:(state)=>state.classify.olddata,
			})
		}
	}
</script>

<style scoped lang="scss">
	.content{
		width: 100%;
		height: 100%;
		padding:.88rem 0;
		.net{
			width: 100%;
			height: 6rem;
			border-bottom:.01rem solid #5A5A5A;
			img{
				width:100% ;
				height: 5.95rem;
			}
		}
		.solit{
			width: 100%;
			height: 2.24rem;
			border-bottom:.01rem solid #5A5A5A;
			padding: 0 .3rem;
			.price{
				width: 100%;
				height: .52rem;
				margin-top: .5rem;
				color: red;
				font-size: .4rem;
				font-weight: 900;
			}
			.can{
				width: 100%;
				height: .52rem;
				color: #969896;
			}
			.lt{
				display: block;
				height: .92rem;
				width: 100%;
				font-size: .30rem;
			}
		}
		.section{
			width: 100%;
			height: 3.36rem;
			display: flex;
			padding: .3rem;
			p{
				width: .87rem;
				height: 100%;
				color: #656B79;
				padding-top:.05rem ;
				
			}
			div{
				width:100% ;
				height:100% ;
				display: flex;
				flex-direction:column ;
				justify-content: space-around;
				color:#CC3333;
			}
		}
	}
</style>