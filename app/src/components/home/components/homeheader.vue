<template>
    <div :class="val==true?'active':'homeheader'" >
        <div class="headertop">           
            <div class="service">
                <a href="https://customer-services.kf5.com/kchat?supportbox=1&active_in_iframe=0&lang=zh_CN#/">
                    <img src="https://source-feelunique.azoyacdn.com/skin/frontend/PlumTree/fu_mb/images/kefu-mb.png">
                </a>
            </div>
            <div class="headerlogo">
                <router-link to="/home">
                    <img src="https://source-feelunique.azoyacdn.com/skin/frontend/PlumTree/fu_mb/images/logo-fu.png">
                </router-link>
            </div>
            <div class="headermes" @click="handeleopen()">
                <img src="https://fu-assets.azoyacdn.com/active/img/inform_mb.png">
            </div>
        </div>
        <a class="headerseach" href="">
            <i class="iconfont">&#xe60e</i>
            <span>搜索商品，品牌</span>
        </a>
        <transition name="slide">
            <div class="message" v-show="flag">
                <span class="mest">香港仓包税通知：</span>
                <span class="mesc">
                    即日起，香港仓恢复包税；
                    同时英国仓实行税补政策，
                    若被税可联系客服领取无门槛£20限时税费补贴券，
                    拒收及退运包裹不享受，
                    如有疑问请随时与客服团队联系沟通。
                    Feelunique与您一起，每天变美一点点。
                </span>
                <span class="mesb" @click="handleClose()">关闭</span>
            </div>
        </transition>
    </div>
</template>

<script>
import Vuex from "vuex";
export default {
    data(){
        return {
            flag:false,
        }
    },
    props:{
        val:Boolean
    },
    methods:{
        handeleopen(){
            this.flag = !this.flag;
        },
        handleClose(){
           this.flag = !this.flag; 
        }
    }
}
</script>

<style lang="scss" scoped>
    .slide-enter-active, .slide-leave-active {
        // transition: opacity .5s;
            transition: all 1s;
        }
        .slide-enter, .slide-leave-to{
            opacity: 0;
            // height: 0rem;
        }
    .homeheader{
        width: 100%;
        height: 1.6rem;
        position: relative;
        z-index: 99;
        background: #fff;
            .headertop{
                height: .9rem;
                padding: 0 .4rem;
                display: flex;
                justify-content: space-between;
                align-items: center;
                .service{
                    width: .4rem;
                    height:.63rem;
                    a{
                        img{
                            width: 100%;
                            height: 100%;
                        }
                    }
                }  
                .headerlogo{
                    width: 3.3rem;
                    height: .3rem;
                    a{
                        img{
                            width: 100%;
                            height: 100%;
                        }
                    }
                } 
                .headermes{
                    width: .4rem;
                    height:.63rem;
                        img{
                            width: 100%;
                            height: 100%;
                        }
                }         
            }
            .headerseach{
                box-sizing: border-box;
                display: block;
                margin: 0 auto;
                width: 7rem;
                height: .6rem;
                border: 1px solid #999;
                border-radius: .4rem;
                display: flex;
                align-items: center;
                font-size: .26rem;
                color: #999;
                transition: all .3s ease 0s;
                i{
                    font-size: .35rem;
                    color: #999;
                    padding: 0 .08rem 0 .5rem
                }
            }

            //头部通知栏
            .message{               
                display: block;
                padding: .3rem 1.1rem;
                background-color: #fff;
                border-bottom: 1px solid #e8e8e8;
                width: 100%;
                height: 3.83rem;
                position: relative;
                z-index: 99;
                .mest{
                    font-size: .36rem;
                    font-weight: 700;
                    display: block;
                    line-height: .48rem;
                    color:#000;
                    text-align: center;
                }
                .mesc{
                    display: block;
                    font-size: .24rem;
                    line-height: .36rem;
                    color: #333;
                    text-align: center;
                    margin: .16rem 0;
                }
                .mesb{
                    margin: 0 auto;
                    width: 1.6rem;
                    height: .62rem;
                    line-height: .62rem;
                    border: 1px solid #1b1a19;
                    display: block;
                    font-size: .26rem;
                    color: #333;
                    text-align: center;
                }
            }
    }
    .active{
        width: 100%;
        height: 1rem;
        position: fixed;
        top: 0;
        z-index: 99;
        background: #fff;
        position: relative;
        .headertop{
            display: flex;
            justify-content: space-between;
            padding: 0 .4rem;
            
            .service{
                    width: .4rem;
                    height:.63rem;
                    margin-top: .2rem;
                    a{
                        img{
                            width: 100%;
                            height: 100%;
                        }
                    }
                }
            .headermes{
                width: .4rem;
                height:.63rem;
                margin-top: .2rem;
                    img{
                        width: 100%;
                        height: 100%;
                    }
            }   
            .headerlogo{
                display: none;
            }
        }
        .headerseach{
            box-sizing: border-box;
            display: block;
            width: 5.5rem;
            height: .5rem;
            border: 1px solid #999;
            border-radius: .4rem;
            display: flex;
            align-items: center;
            font-size: .24rem;
            color: #999;
            position: absolute;
            top: .25rem;
            left: 1rem;
            transition: all .3s ease 0s;
            i{
                font-size: .35rem;
                color: #999;
                padding: 0 .08rem 0 .5rem
            }
        }
        .message{               
                display: block;
                padding: .3rem 1.1rem;
                background-color: #fff;
                border-bottom: 1px solid #e8e8e8;
                width: 100%;
                height: 3.83rem;
                position: relative;
                z-index: 99;
                .mest{
                    font-size: .36rem;
                    font-weight: 700;
                    display: block;
                    line-height: .48rem;
                    color:#000;
                    text-align: center;
                }
                .mesc{
                    display: block;
                    font-size: .24rem;
                    line-height: .36rem;
                    color: #333;
                    text-align: center;
                    margin: .16rem 0;
                }
                .mesb{
                    margin: 0 auto;
                    width: 1.6rem;
                    height: .62rem;
                    line-height: .62rem;
                    border: 1px solid #1b1a19;
                    display: block;
                    font-size: .26rem;
                    color: #333;
                    text-align: center;
                }
            }
    }
    
    

</style>

