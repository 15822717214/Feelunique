<template>
  <div class="header">
    <input type="text" id="inp" placeholder="面部护肤">
    <span @click="hanldClick()"  class="iconfont ico" >&#xe696;</span>
    <i class="iconfont ico1">&#xe7f9;</i>
    <i class="iconfont ico2">&#xe619;</i>
  </div>
</template>
<script>
export default {
  methods: {
    hanldClick() {
      this.$router.push("/classify");
    }
  }
};
</script>

<style lang="scss">
.header {
  position: relative;
  width: 100%;
  height: 0.9998rem;
  background: #fff;
  text-align: center;
  line-height: 0.9998rem;
  border-bottom: 1px solid #c8c8c8;
  z-index: 5;
  .ico {
    font-size: 0.55rem;
    position: absolute;
    left: 0.1rem;
  }
  .ico1 {
    font-size: 0.5rem;
    position: absolute;
    right: 0.9rem;
    top: 0.03rem;
  }
  .ico2 {
    font-size: 0.5rem;
    position: absolute;
    right: 0.28rem;
  }
  #inp {
    width: 4.9rem;
    height: 0.62rem;
    font-size: 0.26rem;
    border-radius: 0.32rem;
    background: #f2f2f2;
    margin-left: -0.5rem;
  }
}
</style>