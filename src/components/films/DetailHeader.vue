<template>
	<div class="header1">
		<span class="iconfont icon-a-9-zuo" @click="handleback" ></span>
		<slot></slot>
	</div>
</template>

<script>
	export default{
		methods:{
			handleback(){
				this.$router.back()
			}
		}
	}
</script>

<style scoped>
	.header1{
		position: fixed;
		height: 2.75rem;
		line-height: 2.75rem;
		background-color: white;
		top: 0;
		left: 0;
		width: 100%;
		text-align: center;
	}
	.header1 span{
		font-size: 20px;
		position: fixed;
		left: 10px;
		top:0px;
	}
</style>
