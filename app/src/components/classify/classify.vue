<template>
  <div>
    <Header-com/>
    <Main-com/>
    <router-view/>
  </div>
</template>

<script>
import Header from "./components/header"
import Main from "./components/main"
export default {
  components:{
    "Header-com":Header,
    "Main-com":Main
  }
}
</script>

<style>

 
</style>