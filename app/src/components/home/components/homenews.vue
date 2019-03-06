<template>
    <div class="homenews">
        <h2 class="homenewstop">小编推荐</h2>
        <div class="newsimgbox">
            <a href="">
                <img src="https://source-feelunique.azoyacdn.com/media/wysiwyg/2018PIC/750X320_2__1.jpg">
            </a>
        </div>
        <div class="homenewsbox">
            <div class="wrapper newsboxx" ref="news">
                <div class="content">
                    <ul class="newboxs">
                        <li class="newcontent" v-for="(item,index) in mes" v-if="index>80&&index<=90" v-text="">
                            <a href="">
                                <div class="bimgbox"> 
                                    <img :src="item.image_url">
                                </div>
                                <span class="ygc">{{item.store_name}}</span>
                                <div class="newsb">
                                    <p>{{item.name}}</p>
                                    <span>{{item.merchant_currency}}{{item.price}}<del>{{item.merchant_currency}}{{item.metric_score}}</del></span>
                                    <b>参考价：{{item.reference_currency}}{{item.reference_price}}</b>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Vuex from "vuex";
import BScroll from "better-scroll"
export default {
    
    computed:{
        ...Vuex.mapState({
            mes:state => state.home.mes
        })
    },
    mounted(){
      this.scroll = new BScroll(this.$refs.news,{
        scrollX: true,   
        click: true
        });
    }
}
</script>

<style lang="scss">
    .homenews{
        width: 100%;
        height: auto;
        .homenewstop{
           width:100%;
           height: .9rem;
           text-align: center;
           line-height: .9rem;
           font-size: .34rem;
           font-weight: 500; 
        }
        .newsimgbox{
            width: 100%;
            height: 3.2rem;
            a{
                img{
                    width: 100%;
                    height: 100%;
                }
            }
        }
        .homenewsbox{
            width:100%;
            height: 4.6rem;
            .newsboxx{
                width: 100%;
                height: 4.6rem;
                .content{
                    width: max-content;
                    height: 4.6rem;
                    .newboxs{
                        width: 100%;
                        height: 100%;
                        display: flex;
                        
                        .bimgbox{
                            width: 2rem;
                            height: 2rem;
                            img{
                                width: 100%;
                                height:100%;
                            }
                        }
                        .newcontent{
                            width: 2.4rem;
                            height: 4rem;
                            margin: .5rem .3rem 0rem .3rem;
                            position: relative;
                            .ygc{
                                display: block;
                                color:lightseagreen;
                                width: .9rem;
                                height: .4rem;
                                font-size: .22rem;
                                line-height: .4rem;
                                text-align: center;
                                border: 1px solid lightseagreen;
                                margin-top: .1rem;
                                background: #fff;
                                position:absolute;
                                top:-.4rem;
                                left: -.1rem;
                            }
                        }
                        .newsb{
                            width: 2.4rem;
                            height: 1.6rem;
                            margin-top: .2rem;
                            p{
                                font-size: .28rem;
                                line-height: .3rem;
                                font-weight: 500;
                                margin-bottom: .3rem;
                                display: -webkit-box;
                                -webkit-line-clamp: 2;
                                -webkit-box-orient: vertical;
                                overflow: hidden;
                                text-overflow: ellipsis;
                                white-space: initial;
                                text-align: left;
                            }
                            span{
                                display: block;
                                width: 100%;
                                height: .33rem;
                                color:crimson;
                                font-size: .32rem;
                                margin-bottom: .1rem;
                                del{
                                    color: #aaa;
                                    font-size: .28rem;
                                    margin-left: .3rem;
                                }
                                b{
                                    font-weight: normal;
                                    color: #aaaaaa;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
</style>
