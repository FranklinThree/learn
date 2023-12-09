// 等同于引入Vue.js文件
import Vue from 'vue'
// 导入App组件（根组件）
import App from './App.vue'

// 关闭生产提示信息
Vue.config.productionTip = false

// 创建Vue实例
new Vue({
  // 看不懂，一会再说
  render: h => h(App),
}).$mount('#app')
