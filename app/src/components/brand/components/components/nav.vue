<template>
	<div class="nav">
		<ul>
			<li @click="handlebtn()">
				综合
				<i class="iconfont">&#xe502;</i>

			</li>
			<li>
				品牌
				<i class="iconfont">&#xe502;</i>
			</li>
			<li>
				分类
				<i class="iconfont">&#xe502;</i>
			</li>
			<li>
				筛选
				<i class="iconfont">&#xe502;</i>
			</li>
		</ul>
		<!--<transition name="move">-->
			<div class="one" v-if="flag">
				<li>综合排序<i class="iconfont">&#xe601;</i></li>
				<li>销量从高到低</li>
				<li>价格从低到高</li>
				<li>价格从高到低</li>
				<li>最新商家商品</li>
				<li>折扣从高到低</li>
			</div>
		<!--</transition>-->
	</div>
</template>

<script>
	export default {
		data() {
			return {
				flag: false
			}
		},
		methods: {
			handlebtn() {
				this.flag = !this.flag;
			}
		}
	}
</script>

<style scoped lang="scss">
	.nav {
		width: 100%;
		height: .76rem;
		ul {
			width: 100%;
			height: 100%;
			display: flex;
			li {
				width: 25%;
				height: 100%;
				display: flex;
				justify-content: center;
				align-items: center;
				font-size: .32rem;
				i {
					font-size: .5rem;
				}
			}
		}
		.one {
			width: 400%;
			height: 5.4rem;
			background: #fff;
			li {
				width: 7.5rem;
				padding: 0 .4rem;
				height: .9rem;
				font-size: .32rem;
				border-top: .01rem solid #e8e8e8;
				color: #404040;
				display: flex;
				align-items: center;
				justify-content: space-between;
				i {
					font-size: .4rem;
				}
			}
		}
	}
</style>