const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // 保存时是否进行语法检查。true表示检查，false表示不检查，默认是true
  lintOnSave: false,
  pages: {
    index: {
      entry: 'src/main.js',
    }
  },
  devServer: {
    // 注意：这个地址就写到端口号位置即可。后面具体的路径不需要写。
    proxy: 'http://localhost:8000'
  }
})
