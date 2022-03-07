<template>
	<div>detail
	    <div v-for="data in datalist" v-show="data.filmId==id">{{data.synopsis}}</div>
	    <router-link to="/films/nowplay" tag="button" >取消</router-link>
	</div>
</template>

<script>
	import axios from 'axios'
	export default{
		data(){
			return{
				datalist:[],
				id:"",
			}
		},
		mounted() {
			this.id=this.$route.params.id
			axios.get('/maizuo.json')
			.then(res=>{
				this.datalist= res.data.data.films
			})
		},
	}
</script>

<style>
</style>
