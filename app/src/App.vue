<template>
  <div id="app">
    <Footer-com v-show="$route.meta.flag"/>
    <router-view/>
  </div>
</template>

<script>
import Footer from "@/components/common/footer"
export default {
  components:{
    "Footer-com":Footer
  }
}
</script>

<style>

 
</style>
