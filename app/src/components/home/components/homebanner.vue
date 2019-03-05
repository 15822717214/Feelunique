<template>
    <div class="homebanner">
        <div class="swiper-container banner-container" ref="banner">
            <div class="swiper-wrapper">
                <div class="swiper-slide img-box" v-for="(item,index) in banners">
                    <a :href="item.target_url">
                        <img :src="item.image_url">
                    </a>
                </div>
            </div>
        </div>
            <div class="swiper-pagination banner-pagination"></div>
    </div>
</template>

<script>
import Vuex from "vuex";
import Swiper from "swiper"
export default {
    computed:{
        ...Vuex.mapState({
            banners:state => state.home.banners
            
        })
    },
    mounted(){
            setTimeout(()=>{
                new Swiper(this.$refs.banner,{
                    loop:true,
                    observer: true, //修改swiper自己或子元素时，自动初始化swiper
                    observeParents: true ,//修改swiper的父元素时，自动初始化swiper
                    autoplay: {
                        disableOnInteraction: false
                    },
                    pagination: {
                        el: '.banner-pagination',
                        type:'progressbar'
                    },
                }) 
            },100)
        }
    }
</script>

<style lang="scss" scoped>
   .homebanner{
       width: 100%;
       height: 3.2rem;
       .banner-container{
            width: 100%;
            height: 100%; 
            .img-box{
                width: 100%;
                height: 100%;
                img{
                width: 100%;
                height: 100%;
                }
            }
       }
       .banner-pagination{
           width: 100%;
           height: .01rem; 
           background: pink;
       }

   }
</style>
