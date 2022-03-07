<template>
	<div>
		hello app--{{myname}}--{{mytext}}
		<br>
		<img src="../../../../image/2.jpg" style="width: 200px;" alt="">
		<br>
		<input type="text" v-model="mytext" name="" id="" value="" />
		<button type="button" @click="addfun">add</button>
		<ul>
			<li v-for="data in datalist" :key="data">{{data}}

			</li>
		</ul>
		<button type="button" @click="change">change</button>
		<navbar myname="home" :myright="isShow" @event="handleEvent">
			<div v-hello>11111111</div>
			<div v-hello>2222222</div>
		</navbar>
		<button type="button" @click="changeshow">侧边栏</button>
		<transition name="zhuhui">
			<sidebar v-show="isshow2"></sidebar>
		</transition>

	</div>

</template>

<script>
	import navbar from "./components/Navbar"
	import sidebar from "./components/Sidebar"
	import Vue from 'vue'
	import axios from 'axios'
	//import Vue from 'vue'
	//Vue.component('navbar',navbar)
	// ES6导出规范
	Vue.directive("hello",{
		inserted(el,binding){
			el.style.border="1px solid black"
		}
	})
	export default {
		data() {
			return {
				myname: "zhuhui",
				mytext: "",
				datalist: ["11111", "22222", "33333"],
				isShow: true,
				isshow2: false,
			}
		},
		components: {
			navbar: navbar,
			sidebar: sidebar
		},
		methods: {
			addfun() {
				this.datalist.push(this.mytext)
			},
			change() {
				this.isShow = !this.isShow
			},
			changeshow() {
				this.isshow2 = !this.isshow2
			},
			handleEvent(){
				this.isshow2 = !this.isshow2
			}
		},
		computed: {

		},
		watch: {

		},
		mounted() {
			axios.get('')
			.then(res=>{
				console.log(res.data)
			})
		}

	}
</script>

<style>
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;
		border: 1px solid black;
	}

	* {
		margin: 0;
		padding: 0;
	}

	@keyframes mymove {


		from {
			opacity: 0;
			transform: translateX(-300px);
		}

		to {
			opacity: 1;
			transform: translateX(0px);
		}
	}

	.zhuhui-enter-active {
		animation: mymove 1s;
	}

	.zhuhui-leave-active {
		animation: mymove 1s reverse;
	}

	ul {
		list-style: none;
	}

	ul li {
		background-color: yellow;
	}
</style>
