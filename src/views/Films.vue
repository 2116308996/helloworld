<template>
	<div>
		<film-swiper></film-swiper>
		<div>
			<ul>
				<router-link to="/films/nowplay" tag="li" active-class="zhuhui">正在热映</router-link>
				<router-link to="/films/comingsoon" tag="li" active-class="zhuhui">即将上映</router-link>
			</ul>
		</div>
		<router-view></router-view>
	</div>
</template>

<script>
	 import filmSwiper from "@/components/films/FilmSwiper"
	
	 export default{
		 components:{
			 filmSwiper
		 }
	 }
</script>

<style scoped>
	*{
		margin: 0;
		padding: 0;
	}
	ul{
		list-style: none;
		display: flex;
		margin: auto;
	}
	ul li {
		flex: 1;
		line-height: 40px;
		text-align: center;
		display: flex;
		height: 40px;
		flex-direction: column;
	}
	.zhuhui{
		color:orange;
		border-bottom: 2px solid orange;
	} 
	.box1{
		width: 375px;
		height: 200px;
		background-color: yellow;
		margin: 0 auto;
	}
</style>
