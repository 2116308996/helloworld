import Vue from 'vue'// ES6导入方式
import App from './App.vue'// 导入跟组件APP
import router from './router'
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),// vue支持的新写法
}).$mount('#app')
var obj={
	name:"zhuhui",
	age:100
}
console.log(obj) 