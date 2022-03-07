import Vue from 'vue'
import VueRouter from 'vue-router'
import Films from '@/views/Films.vue'
import FilmsNowplay from '@/views/films/FilmsNowplay.vue'
import FilmsComingsoon from '@/views/films/FilmsComingsoon.vue'
import Detail from '@/views/Detail.vue'
import Cinemas from '@/views/Cinemas.vue'
import CinemasSearch from '@/views/CinemasSearch'
//import Center from '@/views/Center.vue'

//import Order from '@/views/Order.vue'
import Login from '@/views/Login.vue'
Vue.use(VueRouter)// 注册路由插件

//配置表
const routes=[
	{
		path:'/films',
		component:Films,
		children:[
			{
		        path:'/films/nowplay',
		        component:FilmsNowplay,
	        },
			{
		    	path:'/films/comingsoon',
		    	component:FilmsComingsoon
			},
			{
				path:'/films',
				redirect:'/films/nowplay'
			}
		]
	},
	{   name:'zhuhuidetail',
		path:'/detail/:id',//动态路由
		component:Detail
	},
	{
		path:'/cinemas/search',
		component:CinemasSearch
	},
	{
		path:'/cinemas',
		component:Cinemas
	},
	{
		path:'/center',
		component:()=>import("@/views/Center.vue"),//懒加载
		meta:{
			iszhuhui:true
		},
		//独享路由拦截
		// beforeEnter:(to,from,next)=>{
		// 	if(to.meta.iszhuhui){
		// 		// 通过token判断是否以登录
		// 		if(localStorage.getItem('token')){
		// 			next()
		// 		}else{
		// 			//console.log(to.fullPath)
		// 			next({
		// 				path:'/login',
		// 				query:{redirect:to.fullPath}
		// 			})		
		// 		}
		// 	}else{
		// 		next()
		// 	}
			
		// }
	},
	{
		path:'/order',
		component:()=>import("@/views/Order.vue"),
		meta:{
			iszhuhui:true
		}
	},
	{
		path:'/login',
		component:Login,
		
	},
	{
		path:'*',
		redirect:'/films/nowplay'
	}
]

const router=new VueRouter({
	//mode:"history",
	routes
})
//全局拦截
router.beforeEach((to,from,next)=>{
//	console.log(to)
	if(to.meta.iszhuhui){
		// 通过token判断是否以登录
		if(localStorage.getItem('token')){
			next()
		}else{
			console.log(to.fullPath)
			next({
				path:'/login',
				query:{redirect:to.fullPath}
			})		
		}
	}else{
		next()
	}
	
})
export default router