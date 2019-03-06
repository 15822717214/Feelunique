<template>
    <div class="catecontent">
        <div class="wrapper scrollcate" ref="catebox">
            <div class="content">
                <ul class="contbox">
                    <li v-for="(item,index) in catemes">
                        <div class="cateimgbox">
                            <img :src="item.image_url">
                        </div>
                        <div class="crbox">
                            <div>
                                <p>{{item.name}}</p>
                            </div>
                            <div >
                                <div>
                                    <p>
                                        {{item.merchant_currency}}{{item.final_price}}
                                        <del>{{item.merchant_currency}}{{item.price}}</del>
                                    </p>
                                    <span>参考价:{{item.reference_currency}}{{item.reference_price}}</span>
                                    <b>{{item.store_name}}</b>
                                </div>
                                <div>
                                    <span>
                                        
                                    </span>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
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
            catemes:state => state.category.catemes
        })
    },
    create(){
        
    },
    methods:{
        
    },
    mounted(){
        this.scroll = new BScroll(this.$refs.catebox,{
          pullUpLoad:true,
          click: true,
          probeType:2
          
        });
    }
    
}
</script>

<style lang="scss">
    
    .catecontent{
        width: 100%;
        height: 100%;
        .scrollcate{
            width: 100%;
            height: 100%;
            position: fixed;
            top:.8rem;
            .content{
                padding-bottom: 1rem; 
               .contbox{
                   width: 100%;
                    li{
                        width: 100%;
                        height: 2.8rem;
                        margin-top: .15rem;
                        display: flex;
                        
                        .cateimgbox{
                            width: 2.2rem;
                            height: 2.2rem;
                            margin: .2rem .2rem
                            img{
                                width: 100%;
                                height: 100%;
                            }
                        }
                        .crbox{
                            width:4.6rem;
                            height: 2.2rem;
                        }
                    }
               }
            }
        }
    }
</style>
