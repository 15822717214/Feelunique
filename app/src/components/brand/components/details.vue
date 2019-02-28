<template>
	<div class="details">
		<Header/>
		<Nav/>
		<Center/>
	</div>
</template>

<script>
	import Header from "./components/header";
	import Nav from "./components/nav";
	import Center from "./components/center";
	export default{
		components:{
			"Header":Header,
			"Nav":Nav,
			"Center":Center
		}
	}
	
</script>

<style scoped lang="scss">
	.details{
		width: 100%;
		height: 100%;
	}
</style>