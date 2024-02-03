// 等同于引入Vue.js文件
import Vue from 'vue'
// 导入App组件（根组件）
import App from './App.vue'

// 获取VueComponent构造函数
// const VueComponentConstructor = Vue.extend({})
// 创建一个共享的vc对象
// const globalvc = new VueComponentConstructor()
// 给“vue的原型对象”拓展一个x属性，x属性指向了这个共享的vc对象
// 给“vue的原型对象”拓展的这个x属性，其他的组件vc都是可以直接访问到的。
// Vue.prototype.x = globalvc

// 创建Vue实例
const vm = new Vue({
  el: '#app',

  render:h => h(App),
  beforeCreate(){
    // Vue.prototype.x = this

    // 全局事件总线。bus
    Vue.prototype.$bus = this

  }

})