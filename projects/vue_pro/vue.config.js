const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // 保存时是否进行语法检查。true表示检查，false表示不检查，默认是true
  lintOnSave: false,
  pages: {
    index: {
      entry: 'src/main.js',
    }
  }
})
