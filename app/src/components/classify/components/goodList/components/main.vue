<template>
  <div class="main">
    <div class="wrapper" ref="box" style="height:11.3602rem">
      <div class="content bq">
        <ul>
          <li v-for="(item,index) in arrGoodList" :key="index">
            <div class="li_left">
              <img :src="item.image_url">
            </div>
            <div class="li_right">
              <p>{{item.name}}</p>
              <span>{{item.merchant_currency}}{{item.final_price}}.00</span>
              <p>参考价 {{item.reference_currency}}{{item.reference_price}}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Vuex from "vuex";
import BScroll from "better-scroll";
export default {
  data() {
    return {};
  },
  computed: {
    ...Vuex.mapState({
      arrGoodList: state => state.classify.arrGoodList
    })
  },
  created() {
    this.handleGoodListData();
    // console.log(arrGoodList)
  },
  methods: {
    ...Vuex.mapActions({
      handleGoodListData: "classify/handleGoodListData"
    })
  },
  mounted() {
    let wrapper = document.querySelector(".wrapper");
    let scroll = new BScroll(wrapper);
    this.scroll = new BScroll(this.$refs.box, {
      scrollY: true,
      click: true
    });
    console.log(this.scroll);
    // console.log(arrClassify);
  }
};
</script>

<style lang="scss">
.main {
  width: 100%;
  height: 100%;
  background: #f2f2f2;
  ul {
     position: relative;
    width: 7.5rem;
    height: 100%;
    overflow: hidden;
    z-index: 1;
    li {
      width: 7.5rem;
      height: 2.8rem;
      background: #fff;
      margin-top: 0.1rem;
      .li_left {
        float: left;
        img {
          width: 2.2rem;
          height: 2.2rem;
          margin-left: 0.3rem;
          margin-top: 0.3rem;
        }
      }
      .li_right {
        width: 4.6rem;
        height: 1.8rem;
        font-size: 0.26rem;
        font-family: Helvetica Neue;
        float: left;
        margin-left: 0.25rem;
        margin-top: 0.3rem;
        p {
          width: 4.6rem;
          height: 0.8rem;
          margin-top: 0.15rem;
        }
        span {
          color: #d72245;
        }
      }
    }
  }
}
</style>