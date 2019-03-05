<template>
  <div>
    <Header-com/>
    <Nav-com/>
    <Main-com/>
    <router-view/>
  </div>
</template>

<script>
import Header from "./components/header";
import Nav from "./components/nav";
import Main from "./components/main";
export default {
  components: {
    "Header-com": Header,
    "Nav-com": Nav,
    "Main-com": Main
  }
};
</script>

<style lang="scss">
</style>
