<template>
  <div id="app">
    <Footer-com v-if="flag"/>
    <router-view/>
  </div>
</template>

<script>
import Footer from "@/components/common/footer";
import Vuex from "vuex";
export default {
  components:{
    "Footer-com":Footer
  },
  data(){
  	return{
  		flag:true
  	}
  }
}
</script>

<style>

 
</style>
