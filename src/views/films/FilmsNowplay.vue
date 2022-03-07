<template>
	<div style="padding: 0 10px;">
	    <ul>
			<li v-for="data in datalist">    
				<div><img :src="data.poster" style="width: 100px;" alt=""></div>
				<div style="width: calc(100% - 120px);padding: 0 10px;"@click="handleChangePage(data.filmId)">
					<br>
				    <div style="font-size: 20px">{{data.name}}
					    <span style="background-color: gainsboro;color: white;">{{data.filmType.name}}</span>
					</div>
					<div style="overflow: hidden;white-space: nowrap;text-overflow: ellipsis;color: grey;">
						主演：<span v-for="actor in data.actors">{{actor.name+" "}}</span>
					   
					</div>
					<div style="color: grey;">{{data.nation}}
					    <span style="color: grey;">|</span>
						{{data.runtime}}分钟
					</div>
				    
				</div>	
			</li>
		</ul> 
	</div>
</template>

<script>
	import axios from 'axios'
	export default{
		
		data(){
			return{
				datalist:[],
			}
		},
		methods:{
			handleChangePage(id){
				//编程式导航
			//	location.href="#/detail"
			
			//声明式导航
			//	this.$router.push(`/detail/${id}`)
				
			//通过命名路由跳转
			this.$router.push({
				name:'zhuhuidetail',
				params:{
					id
				},
			})
			}
		},
		mounted() {
			axios.get('/maizuo.json')
			.then(res=>{
				this.datalist= res.data.data.films
			})
		}
	}
</script>

<style scoped>
	ul{
	    display: block;
		width: 100%;
		margin-top: 0.625rem;
	}
	ul li{
		display: block;
		text-align: start;
		width: 100%;
		height: 160px;
		line-height: 20px;
		border-bottom: 1px solid gainsboro;
		margin-bottom: 0.625rem;
	}
	ul li>div{
		float: left;
	}
</style>
