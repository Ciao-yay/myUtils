const path = require('path')

// 暴露对象
module.exports = {
  // 模式
  // mode: 'production',
  mode: 'development',
  // 入口
  entry: './src/index.js',
  // 出口
  output: {
    // 打包文件夹
    path: path.resolve(__dirname, 'dist'),
    // 打包文件
    filename: 'truthy-utils',
    // 向外暴露对象的名称
    libraray: 'tUtils',
    // 打包生成库可以通过esm/commonjs/requirejs的语法引入
    librarayTarget: 'umd',
  }

}