<template>
	
	<div>
		cinemas
	<router-link to='/cinemas/search' active-class="zhuhui" tag="button" >搜索</router-link>
	<div class="cinemasbox">大轮播</div>
	</div>
</template>

<script>
	export default{
		methods:{
			
		}
	}
</script>

<style scoped>
	.cinemasbox{
		width: 23.4375rem;
		height: 400px;
		background-color: yellow;
	}
</style>
