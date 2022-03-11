<template>
	<div>
		<div style="padding:15px;">
			<div class="hotcity">热门城市</div>
			<div class="hotcity-flex">
				<div v-for="item in hotcity" class="hot-city" @click="handleclick(item)">
					{{item.name}}
				</div>
			</div>
		</div>
		<van-index-bar :index-list="indexlist" @select="handleChange">
			<div v-for="item in citylist" :key="item.type">
				<van-index-anchor :index="item.type">{{item.type}}</van-index-anchor>
				<div v-for="data in item.list" :key="data.cityId">
					<van-cell :title="data.name" @click="handleclick(data)"/>
				</div> 
			</div>
		  
		</van-index-bar>
	</div>
</template> 

<script>
	import http from '../router/http.js'
	import {Toast} from 'vant'
	export default{
		data(){
			return{
				citylist:[],
				list:[],
				indexlist:[],
				hotcity:[]
			}
		},
		mounted(){
			http({
				url:'gateway?k=8962251',
				headers:{
					'X-Host':'mall.film-ticket.city.list'
				}
			}).then(res=>{
				this.list=res.data.data.cities
				this.renderCity(this.list)
			})
		},
		methods:{
			handleclick(data){
				//传统多页面数据传输方案
				//location.href="#/cinemas?cityname="+data
				// cookie,localStorage
				//单页面方案
				//中间人模式 bus事件总线 $on $emit
				console.log(data)
				this.$store.commit('changeCityName',data.name)
				this.$store.commit('changeCityId',data.cityId)
				
				this.$router.back()
			},
			handleChange(data){
				//Toast.setDefaultOptions({min-height:50px});
				Toast(data);
			},
			renderCity(list){
				var letterlist=[]
				for(let i=65;i<91;i++){
					letterlist.push(String.fromCharCode(i))	
				}
				letterlist.forEach(letter=>{
					var newlist= list.filter(item=>item.pinyin.substring(0,1).toUpperCase()==letter)
					if(newlist.length!=0){
						this.indexlist.push(letter)
						this.citylist.push({
						type:letter,
						list:newlist
					    })
					}	
				})	 
				this.hotcity=list.filter(item=>item.isHot==1)
				console.log(this.hotcity)
			}
		}
	}
</script>

<style>
	.van-toast--text{
		min-width: 30px;
	}
	.hotcity-flex{
		display: flex;
		flex-wrap: wrap;
	}
	.hot-city{
		width: 95px;
		height: 30px;
		line-height: 30px;
		margin: 10px;
		background-color: gainsboro;
		text-align: center;
	}
	.hotcity{
		font-size: 13px;
		color: grey;
	}
</style>
