<template>
	<div class="recommend">
		<div class="title">
			<span>推荐品牌</span>
			<a @click="handleGoods()"><i>=></i>换一换</a>
		</div>
		<ul class="brands-item">
			<li v-for="(item,index) in brandsimg" >
				<router-link :to="{name:'details'}">
					<a href="" ><img :src="item.logo"/></a>
					
				</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
	import Vuex from "vuex"
	export default{
		computed:{
			...Vuex.mapState({
				brandsimg:(state)=>state.classify.brandsimg
			})
		},
		methods:{
			...Vuex.mapActions({
				handleGoods:"classify/handleGoods"
			})
		}
	}
</script>

<style scoped lang="scss">
	.recommend{
		width: 100%;
		height:2.95rem;
		.title{
			width: 100%;
			height: .93rem;
			border-bottom:.001rem solid #e8e8e8;
			display:flex;
			justify-content:center;	
			align-items: center;
			span{
				font-size: .32rem;
				margin-left: 1.23rem;			
			}
			a{
				display: block;
				position: relative;
				left: 1.3rem;
				i{
					padding:0 .2rem ;
				}
			}
		}
		.brands-item{
			width: 100%;
			height: 2.02rem;
			box-sizing: border-box;
			display: flex;
			flex-wrap: wrap;
			flex-shrink:1;
			li{
				width: 25%;
				height: 50%;
				border-bottom: .001rem solid #e8e8e8;
				border-right: .001rem solid #e8e8e8;
				a{
					display: block;
					width: 100%;
					height: 100%;
					display: flex;
					justify-content: center;
					align-items: center;
					img{
						width: 80%;
						height:.68rem;
					}
				}
			}
		}
	}
</style>