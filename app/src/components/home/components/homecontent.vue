<template>
  <div class="homehot">
    <div class="hottop">热销推荐</div>
        <el-tabs v-model="activeName" @tab-click="handleClick" class="hottabs">
            <el-tab-pane label="超值推荐" name="first" >
                <ul class="contentbox" v-for="(item,index) in mes" v-if="index<=10"v-text="">
                    <li class="contentmain">
                        <a href="">
                            <div class="mainimgbox">
                                <img :src="item.image_url">
                            </div>
                            <div class="leftbox">
                                <div class="mainlt">
                                    <div>
                                        <p>
                                            {{item.name}}
                                        </p>
                                        <span>{{item.store_name}}</span>
                                    </div>
                                </div>
                                 <div class="mainlb">
                                    <div class="mainbl">
                                        <div>{{item.merchant_currency}}{{item.price}}</div>
                                        <span>参考价：{{item.reference_currency}}{{item.reference_price}}</span>
                                    </div>
                                    <div class="mainbr">加入购物车</div>
                                </div>
                            </div>
                        </a>
                    </li>
                </ul>               
            </el-tab-pane>
            <el-tab-pane label="香港仓推荐" name="second">
                 <ul class="contentbox" v-for="(item,index) in mes" v-if="index>10&&index<=20"v-text="">
                    <li class="contentmain">
                        <a href="">
                            <div class="mainimgbox">
                                <img :src="item.image_url">
                            </div>
                            <div class="leftbox">
                                <div class="mainlt">
                                    <div>
                                        <p>
                                            {{item.name}}
                                        </p>
                                        <span>{{item.store_name}}</span>
                                    </div>
                                </div>
                                 <div class="mainlb">
                                    <div class="mainbl">
                                        <div>{{item.merchant_currency}}{{item.price}}</div>
                                        <span>参考价：{{item.reference_currency}}{{item.reference_price}}</span>
                                    </div>
                                    <div class="mainbr">加入购物车</div>
                                </div>
                            </div>
                        </a>
                    </li>
                </ul>
            </el-tab-pane>
            <el-tab-pane label="新品抢先购" name="third">
                <ul class="contentbox" v-for="(item,index) in mes" v-if="index>20&&index<=30"v-text="">
                    <li class="contentmain">
                        <a href="">
                            <div class="mainimgbox">
                                <img :src="item.image_url">
                            </div>
                            <div class="leftbox">
                                <div class="mainlt">
                                    <div>
                                        <p>
                                            {{item.name}}
                                        </p>
                                        <span>{{item.store_name}}</span>
                                    </div>
                                </div>
                                 <div class="mainlb">
                                    <div class="mainbl">
                                        <div>{{item.merchant_currency}}{{item.price}}</div>
                                        <span>参考价：{{item.reference_currency}}{{item.reference_price}}</span>
                                    </div>
                                    <div class="mainbr">加入购物车</div>
                                </div>
                            </div>
                        </a>
                    </li>
                </ul>
            </el-tab-pane>
            <el-tab-pane label="超值套装" name="fourth">
                <ul class="contentbox" v-for="(item,index) in mes" v-if="index>30&&index<=40"v-text="">
                    <li class="contentmain">
                        <a href="">
                            <div class="mainimgbox">
                                <img :src="item.image_url">
                            </div>
                            <div class="leftbox">
                                <div class="mainlt">
                                    <div>
                                        <p>
                                            {{item.name}}
                                        </p>
                                        <span>{{item.store_name}}</span>
                                    </div>
                                </div>
                                <div class="mainlb">
                                    <div class="mainbl">
                                        <div>{{item.merchant_currency}}{{item.price}}</div>
                                        <span>参考价：{{item.reference_currency}}{{item.reference_price}}</span>
                                    </div>
                                    <div class="mainbr">加入购物车</div>
                                </div>
                            </div>
                        </a>
                    </li>
                </ul>
            </el-tab-pane>
        </el-tabs>
        <div class="seemuch">
            <a href="">
                查看更多
            </a>
        </div>
  </div>
</template>

<script>
import Vuex from "vuex"
export default {
  data() {
    return {
      activeName: "first",
    };
  },
  
  computed:{
      ...Vuex.mapState({
          mes:state => state.home.mes
      })
  },
  methods: {
    handleClick(tab, event) {
        
    }
  }
};
</script>

<style lang="scss">
.homehot {
  width: 100%;
  height: auto;
  border-top:.2rem solid #eee;
  border-bottom:.2rem solid #eee;
  .hottop {
    width: 100%;
    height: 0.8rem;
    text-align: center;
    line-height: 0.8rem;
    font-size: 0.32rem;
    font-weight: 800;
  }
  .el-tabs__header{
      width:100%;
      height: auto;
      .el-tabs__nav-wrap{
          width: 100%;
          height: auto;
          .el-tabs__nav-scroll{
              width: 100%;
              height: .59rem;
              .el-tabs__nav{
                    width: 100%;
                    height: .6rem;
                    display: flex;
                    justify-content: space-around;
                    .el-tabs__item{
                        width: 25%;
                        text-align: center;
                        font-size: .26rem;
                    }
              }
          }
      }
  }
    .contentbox{
        width: 100%;
        height: auto;
        min-height: .24rem;
        .contentmain{
            border-bottom: 1px solid #e8e8e8;
            border-top: 1px solid #e8e8e8;
            padding: .4rem;
            
            a{
                width: 100%;
                height: 100%;
                display: flex;
                justify-content: space-between;
            
                .mainimgbox{
                    width: 2.4rem;
                    height: 2.4rem;
                    display: inline-block;
                    img{
                        width: 100%;
                        height: 100%;
                        display: inline-block;
                    }
                } 
                .leftbox{
                    height: 2.1rem;
                    width: 4rem;
                    .mainlt{
                        padding-top: .1rem;
                        width: 100%;
                        height: 1.2rem;
                        p{
                            font-size: .26rem;
                            font-weight: 500;
                        }
                        span{
                            display: block;
                            color:lightseagreen;
                            width: .9rem;
                            height: .4rem;
                            font-size: .22rem;
                            line-height: .4rem;
                            text-align: center;
                            border: 1px solid lightseagreen;
                            margin-top: .1rem;
                        }
                    }
                    .mainlb{
                        width: 100%;
                        height: .7rem;
                        padding-top:.4rem;
                        display: flex;
                        .mainbl{
                            width: 1.82rem;
                            height: .7rem;
                            div{
                                color: red;
                                font-size: .26rem;
                                margin-bottom: .1rem;
                            }
                        }
                        .mainbr{
                            background-color: #1b1a19;
                            color: #fff;
                            width:1.8rem;
                            height: .68rem;
                            border-radius: .02rem;
                            text-align: center;
                            line-height: .68rem;
                            font-size: .3rem;
                            margin-left: .4rem;
                        }
                    }
                }
            }
        }
    }
    .seemuch{
        width: 100%;
        height: .8rem;
        text-align: center;
        line-height: .8rem;
        font-size: .3rem;
        font-weight: 500;
        a{
            color: crimson;
        }
    }

}
</style>
