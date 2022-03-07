<template>
	<div>
		<div class="swiper zhuhuiswiper">
		    <div class="swiper-wrapper">
				<div class="swiper-slide" v-for="img in imgslist":key="img.bannerId">
					<img :src="img.imgUrl" alt="" style="width: 100%;">
				</div>
				
		    </div>
		    <!-- 如果需要分页器 -->
		    <div class="swiper-pagination"></div>
		    
		    <!-- 如果需要导航按钮 -->
		 <!--  <div class="swiper-button-prev"></div>
		    <div class="swiper-button-next"></div> -->
		    
		    <!-- 如果需要滚动条 -->
		   <!-- <div class="swiper-scrollbar"></div>  -->
		</div>
	</div>
	
</template>

<script>
	import Swiper,{ Navigation, Pagination,Autoplay} from 'swiper'
	import 'swiper/swiper-bundle.css'
	
	import axios from 'axios'
	var myflimswiper;
	function init(){
		myflimswiper=new Swiper(".zhuhuiswiper", {
			
			modules:[Navigation,Pagination,Autoplay],
			
			//direction: 'vertical', // 垂直切换选项
			loop: true, // 循环模式选项
			
			//如果需要分页器
			pagination: {
			  el: '.swiper-pagination',
			},
			 
			// 如果需要前进后退按钮
			navigation: {
			  nextEl: '.swiper-button-next',
			  prevEl: '.swiper-button-prev',
			},
			
			// 自动切换
			 autoplay: {
			          delay: 2500,
			          disableOnInteraction: false,
			        },
			
			// 如果需要滚动条
			// scrollbar: {
			//   el: '.swiper-scrollbar',
			// },
		})
	}
	export default{		
		data(){
			return{
			    imgslist:[]
			}
		},
		// 初始化swiper
		mounted() {
			axios.get('/maizuofilm.json')
			.then(res=>{
				this.imgslist=res.data.data
			})
			init();
		},
		updated() {
			// 销毁swiper
			myflimswiper.destroy(true,true);
			init();
		}
	}
</script>

<style scoped>

</style>
