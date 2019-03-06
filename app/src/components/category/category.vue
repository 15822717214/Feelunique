<template>
    <div class="category">
        <Categoryheader-com/>
        <Categorycontent-com/>
    </div>
</template>

<script>
import Vuex from "vuex";
import Categoryheader from "./components/categoryheader"
import Categorycontent from "./components/categorycontent"

export default {
    components:{
        "Categoryheader-com":Categoryheader,
        "Categorycontent-com":Categorycontent,
    },
    created(){
        this.handelCategoryMes()
    },
    methods:{
        ...Vuex.mapActions({
            handelCategoryMes:"category/handelCategoryMes"
        })
    },
}
</script>

<style lang="scss">
    .category{
        width:100%;
        height: 100%;
    }
</style>
