<template>
	<div class="swiper-container" ref="bannerContainer">
		<div class="swiper-wrapper">
			<div class="swiper-slide" v-for="(item,index) in bannerimg">
				<img :src="item.img" />
			</div>

		</div>
		<div class="swiper-pagination banner-pagination"></div>

	</div>
</template>

<script>
	import Swiper from "swiper";
	import "swiper/dist/css/swiper.min.css";
	import Vuex from "vuex";
	import axios from "axios";
	export default {
		computed: {
			...Vuex.mapState({
				bannerimg: state => state.classify.bannerimg
			})
		},
		updated() {
			if(!this.swiper) {
				this.swiper = new Swiper(this.$refs.bannerContainer, {
					autoplay: {
						disableOnInteraction: false
					},
					pagination: {
						el: '.banner-pagination',
					},
				});
			}
		}
	}
</script>

<style scoped lang="scss">
	.swiper-container>.swiper-wrapper>.swiper-slide>img {
		width: 100%;
		height: 4.25rem;
	}
</style>