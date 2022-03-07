<template>
	<div >
		<tabbar></tabbar>
		
        <router-view ></router-view>
	</div>

</template>

<script>
	import tabbar from './components/Tabbar'
	document.documentElement.style.fontSize=document.documentElement.clientWidth/375 * 16 +"px"
	export default{
		components:{
			tabbar
		},
		data(){
			return{
			
			}
		},
		methods:{
			
		}
	}
</script>

<style>
	*{
		margin: 0;
		padding: 0;
	}
	body{
		font-size: 16px;
	}
	

</style>
