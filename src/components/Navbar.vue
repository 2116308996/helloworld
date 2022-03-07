<template>
	<div>
		<button @click="handleLeft">侧边栏</button>
		navbar--{{myname}}
		<button v-show="myright">right</button>
		<br>
		<slot></slot>
	</div>
</template>

<script>
	export default{
		props:{
			myname:{
				type:String,
				default:""
			},
			myright:{
				type:Boolean,
				default:true
			}
		},
		methods:{
			handleLeft(){
				this.$emit('event')
			}
		},
		mounted() {
			console.log("mounted")
		}
	}
</script>

<style scoped>
	div{
		background-color: #0000FF;
	}
</style>
