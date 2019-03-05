<template>
  <div class="nav">
    <ul>
      <li v-for="(item,index) in arr" :key="index">{{item}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: ["综合", "品牌", "分类", "筛选"]
    };
  }
};
</script>

<style lang="scss">
.nav {
   position: relative;
  width: 100%;
  height: 0.8rem;
  background:#fff;
  z-index: 5;
  ul {
    width: 100%;
    height: 0.6rem;
    display: flex;
    justify-content: space-around;
    li {
      width: 100%;
      height: 100%;
      text-align: center;
      line-height: 0.8rem;
      font-family: Helvetica Neue;
      font-size: 0.28rem;
      color: #999;
    }
  }
}
</style>