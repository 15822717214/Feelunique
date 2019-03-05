<template>
  <div class="main">
    <h3>热门搜索</h3>
    <div>
      <ul>
        <li v-for="(item,index) in arr" :key="index">{{item}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [
        "欧缇丽",
        "theordinary",
        "BarryM",
        "娇兰",
        "Coverfx",
        "欧莱雅",
        "Murad慕勒",
        "MYX"
      ]
    };
  }
};
</script>

<style lang="scss">
.main {
  width: 100%;
  height: 100%;
  background:#fff;
  margin-top: 0.3rem;
  h3 {
    width: 7.1rem;
    height: 0.32rem;
    margin-left: 0.2rem;
  }
  div {
    width: 7.1rem;
    height: 1.5794rem;
    background:#fff;
    margin-top: 0.3rem;
    margin-left: 0.1rem;
    ul {
      width:100%;
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
      li {
        width: 1.5rem;
        height: 0.4rem;
        margin-left: 0.2rem;
         margin-top: 0.2rem;
        border: 1px solid #d72245;
        color:#d72245;
        border-radius: 0.99rem;
        font-size:0.26rem;
        font-family: Arial Narrow;
        text-align: center;
      }
    }
  }
}
</style>