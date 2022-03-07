<template>
	<div class="box1">
		<ul>
			<!-- 声明式导航 -->
			<!-- <li><a href="/#/films">电影</a></li> -->
			<router-link to='/films' active-class="zhuhui" tag="li">
				<span class="icon iconfont icon-shouye"></span> 电影
			</router-link>
			<router-link to='/cinemas' active-class="zhuhui" tag="li" >
				<span class="icon iconfont icon-caidan"></span>影院
			</router-link>
			<router-link to='/center' active-class="zhuhui" tag="li">
				<span class="icon iconfont icon-wode"></span>我的
			</router-link>
			<!-- <router-link to='/center' custom v-slot="{navigate,isActive}">
				<li @click="navigate" :class="isActive?'zhuhui':''">couter4.0</li>
			</router-link> -->
		</ul>
	</div>
</template>

<script>
</script>

<style scoped>
	.box1{
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 50px;
		background-color: whitesmoke;
	}
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;
		border: 1px solid black;
	}
	ul{
		list-style: none;
		display: flex;
		margin: auto;
	}
	ul li {
		flex: 1;
		line-height: 20px;
		text-align: center;
		display: flex;
		height: 43px;
		flex-direction: column;
	}
	ul li span.iconfont{
		font-size: 20px;
	}
	.router-link-active{
		color: red;
	}
	.zhuhui{
		color:blue;
		border-bottom: 1px solid black;
	}
</style>
