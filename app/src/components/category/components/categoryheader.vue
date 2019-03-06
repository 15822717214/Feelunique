<template>
    <div class="cheader">
        <div class="cbox">
            <i class="iconfont cback" @click="handlecback()">&#xe60e</i>
            <span><p>魅力彩妆</p></span>
            <i class="iconfont maincss">&#xe50c</i>
            <i class="iconfont chome" @click="handlegohome()">&#xe617</i>
        </div>
    </div>
</template>

<script>
export default {
    methods:{
        handlecback(){
            this.$router.back()
    },
        handlegohome(){
            this.$router.push("/home")
        }
    }
}
</script>

<style lang="scss">
    .cheader{
        width:100%;
        height: .8rem;
        border-bottom:1px solid #ccc;
        background: #fff;
        position: fixed;
        top:0;
        z-index:99;
        .cbox{
            width:100%;
            height:100%;
            display: flex;           
            align-items: center;
            i{
                font-size: .5rem;
            }
            span{
                display: block;
                background: #eee;
                width: 4.7rem;
                height: .5rem;
                line-height: .5rem;
                border-radius: .5rem;
                margin-right: .3rem;
                p{
                    padding-left:.3rem;

                }
            }
            .cback{
                margin: 0 .3rem 0 .2rem;
            }
            .maincss{
                margin-right: .2rem;
            }
        }
        
    }
</style>
