<template>
	<div class="center">
		<div class="brand" v-for="(item,index) in outer" @click="handleNew(item)">
			<img :src="item.image_url"/>
			<div class="miao">
				<span>{{item.name}}</span>
				<p class="price">{{item.merchant_currency}}{{item.price}}</p>
				<p class="net">参考价：
					<span>{{item.reference_currency}}{{item.reference_price}}</span>
				</p>
			</div>
			<a href="##" id="icon"><i class="iconfont">&#xe504;</i></a>
		</div>
		<div class="fei"  v-if="btnFlag"  @click="backTop()">回顶部</div>
	</div>
</template>

<script>
	import Vuex from "vuex";
	export default {
		data(){
			return{
				btnFlag:false
			}
		},
		computed: {
			...Vuex.mapState({
				outer: (state) => state.classify.outer
			})
		},
		mounted() {
			window.addEventListener('scroll', this.scrollToTop)
		},
		destroyed() {
			window.removeEventListener('scroll', this.scrollToTop)
		},

		methods: {
			// 点击图片回到顶部方法，加计时器是为了过渡顺滑
			backTop() {
				let that = this
				let timer = setInterval(() => {
					let ispeed = Math.floor(-that.scrollTop / 5)
					document.documentElement.scrollTop = document.body.scrollTop = that.scrollTop + ispeed
					if(that.scrollTop === 0) {
						clearInterval(timer)
					}
				}, 16)
			},

			// 为了计算距离顶部的高度，当高度大于60显示回顶部图标，小于60则隐藏
			scrollToTop() {
				let that = this
				let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
				that.scrollTop = scrollTop
				if(that.scrollTop >200) {
					that.btnFlag = true
				} else {
					that.btnFlag = false
				}
			},
			handleNew(item){
				this.$router.push({name:"newdeta",query:{name:item}})
				
			}
			
		}

	}
</script>

<style scoped lang="scss">
	.center {
		width: 100%;
		height: 100%;
		.brand {
			border-top: .1rem solid #e8e8e8;
			width: 100%;
			height: 2.8rem;
			padding: .3rem .2rem;
			display: flex;
			justify-content: space-between;
			img {
				width: 2.2rem;
				height: 2.2rem;
			}
			.miao {
				width: 4.4rem;
				height: 100%;
				font-size: .30rem;
				display: flex;
				flex-direction: column;
				justify-content: space-around;
				span {
					font-weight: 600;
				}
				.price {
					color: red;
					font-weight: 800;
				}
				.net {
					width: 70%;
				}
			}
			#icon {
				display: block;
				position: relative;
				top: 1.5rem;
				width: .60rem;
				height: .60rem;
				border-radius: 50%;
				background: #222222;
				color: #fff;
				display: flex;
				justify-content: center;
				align-items: center;
				i {
					font-size: .34rem;
				}
			}
		}
	}
	
	.fei {
		position: fixed;
		width: .92rem;
		height: .92rem;
		top: 11.5rem;
		left: 6rem;
		border-radius: 50%;
		background: #000000;
		opacity: .7;
		z-index: 1000;
		color: #fff;
		line-height: .92rem;
		text-align: center;
	}
</style>