<template>
	<div>Login
	<button type="button" @click="handleLogin">登录</button>
	</div>
</template>

<script>
	export default{
		methods:{
			handleLogin(){
				setTimeout(()=>{
				localStorage.setItem('token','后端返回的token字段')
				//	this.$router.back()//返回
				
				//1获取query字段
				console.log(this.$route.query.redirect)
				// 2跳转到想要的页面
				
				this.$router.push(this.$route.query.redirect)
				},10)
			}
		}
	}
</script>

<style>
</style>
