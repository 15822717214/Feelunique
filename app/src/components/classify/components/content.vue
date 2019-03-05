<template>
  <div class="content_main">
    <div v-for="(item,index) in arrClassify" :key="index">
      <img :src="item.picUrl">
      <span>{{item.wrod}}</span>
    </div>
  </div>
</template>

<script>
import Vuex from "vuex";
export default {
  computed: {
    ...Vuex.mapState({
      arrClassify: state => state.classify.arrClassify
    })
  },
  created() {
    this.handleClassifyData();
  },
  updated() {
    // console.log(arrClassify)
  },
  methods: {
    ...Vuex.mapActions({
      handleClassifyData: "classify/handleClassifyData"
    }),
    handleClick(tab, event) {
      // this.activeIndex = index;
      // console.log(tab, event);
      // alert("haha")
    }
  }
};
</script>

<style lang="scss">
.content_main {
  width: 5.7rem;
  height: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  div {
    width: 1.56rem;
    height: 2.4298rem;
    background: #fff;
    img {
      width: 1.56rem;
      height: 1.56rem;
    }
    span {
      display: block;
      width: 1.56rem;
      height: 0.27rem;
      text-align: center;
      margin-top: 0.18rem;
      font-family: Helvetica Neue;
    }
  }
}
</style>


