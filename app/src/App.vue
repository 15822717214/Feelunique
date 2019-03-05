<template>
  <div id="app">
<<<<<<< HEAD
    <Footer-com v-show="this.$route.meta.flag"/>
=======
    <Footer-com v-show="$route.meta.flag"/>
>>>>>>> yjx
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
