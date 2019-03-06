<template>
    <div class="homenav">
        <div class="navbox" v-for="(item,index) in navs">
            <router-link to="category" >
                <img class="navimgs" :src="item.navimgsrc">
                <span>{{item.navtext}}</span>
            </router-link>
        </div>
        <div class="section">
            <img class="sectionlogo" src="https://fu-assets.azoyacdn.com/active/img/mb-lishuo.png">
            <span>全场低至65折+买三免一</span>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            navs:[
                {
                    navimgsrc:"https://source-feelunique.azoyacdn.com/media/tmp/catalog/product/f/i/file_1.png",
                    navtext:"魅力彩妆"
                },
                {
                    navimgsrc:"https://source-feelunique.azoyacdn.com/media/tmp/catalog/product/f/i/file_2.png",
                    navtext:"面部护理"
                },
                {
                    navimgsrc:"https://source-feelunique.azoyacdn.com/media/tmp/catalog/product/f/i/file_3.png",
                    navtext:"洗发护发"
                },
                {
                    navimgsrc:"https://source-feelunique.azoyacdn.com/media/tmp/catalog/product/f/i/file_4.png",
                    navtext:"沐浴美体"
                },
                {
                    navimgsrc:"https://source-feelunique.azoyacdn.com/media/tmp/catalog/product/f/i/file_5.png",
                    navtext:"营养健康"
                },
                {
                    navimgsrc:"https://source-feelunique.azoyacdn.com/media/tmp/catalog/product/f/i/file_6.png",
                    navtext:"新品速递"
                },
                {
                    navimgsrc:"https://source-feelunique.azoyacdn.com/media/tmp/catalog/product/f/i/file_7.png",
                    navtext:"满赠专区"
                },
                {
                    navimgsrc:"https://source-feelunique.azoyacdn.com/media/tmp/catalog/product/f/i/file_8.png",
                    navtext:"凑单专区"
                },
                {
                    navimgsrc:"https://source-feelunique.azoyacdn.com/media/tmp/catalog/product/f/i/file_9.png",
                    navtext:"礼物专区"
                },
                {
                    navimgsrc:"https://source-feelunique.azoyacdn.com/media/tmp/catalog/product/f/i/file_10.png",
                    navtext:"香港仓"
                },

            ]
        }
    }
}
</script>

<style lang="scss" scoped>
    .homenav{
        width: 100%;
        height: 4rem;
        display: flex;
        flex-wrap: wrap;
        margin-top: .4rem;
        .navbox{
            width:20%;
            height: 1.3rem;
            display: flex;
            a{
                width: 100%;
                height: 100%;
                display: flex;
                flex-direction: column;
                text-align: center;
                .navimgs{
                    width: .88rem;
                    height: .88rem;
                    align-items: center;
                    align-self: center;
                    margin-bottom: .15rem;
                }
                span{
                    font-size: .23rem;
                    color: #333;
                }
            }
        }
        .section{
            width: 100%;
            border-top: 1px solid #e8e8e8;
            height: .8rem;
            display: flex;
            align-items: center;
            .sectionlogo{
                width: .98rem;
                height: .29rem;
                margin: 0 .3rem 0 .3rem;
            }
            span{
                color: #d72245;
                font-size: 0.33rem;
            }
        }
    }
</style>
