// 等同于引入Vue.js文件
import Vue from 'vue'
// 导入App组件（根组件）
import App from './App.vue'


Vue.config.productionTip = false

// 创建Vue实例
new Vue({
  el: '#app',

  render:h => h(App),
  // beforeCreate(){
  //   // 安装全局事件总线
  //   Vue.prototype.$bus = this
  // }

})
