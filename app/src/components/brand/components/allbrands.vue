<template>
	<div class="allrands">
		<div class="one">
			<span>所有品牌</span>
		</div>
		<IndexList></IndexList>
	</div>
</template>

<script>
	import IndexList from "./IndexList"
	export default {
		components:{
			"IndexList":IndexList
		}
	}
</script>

<style scoped lang="scss">
	.allrands {
		width: 100%;
		height: 100%;
		.one {
			width: 100%;
			height: .92rem;
			border-bottom: .001rem solid #e8e8e8;
			display: flex;
			justify-content: center;
			align-items: center;
			font-size: .32rem;
		}
	}
</style>