<template>
	<div>
		<ul>
			<li v-for="data in datalist":key="data.flimId">{{data.name}}</li>
		</ul>
	</div>
</template>

<script>
	import axios from 'axios'
	export default{
		data(){  
			return{
				datalist:[]
			}
		},
		mounted() {
			// fetch("/maizuo.json")
			// .then(res=>res.json())
			// .then(res=>{
			// 	this.datalist=res.data.films
			// })
			axios.get("/maizuo.json")
			.then(res=>{
				console.log(res.data.data.films)
				this.datalist=res.data.data.films
			})
		}
	}
</script>

<style scoped>
	ul li{
		background-color: red;
	}
</style>
