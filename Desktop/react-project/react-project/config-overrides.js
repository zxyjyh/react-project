/*
 * @Author: your name
 * @Date: 2019-11-19 18:37:45
 * @LastEditTime: 2019-11-20 13:35:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /react-project/react-project/config.overrides.js
 */
const {
  override,
  fixBabelImports,
  addLessLoader,
  addDecoratorsLegacy
} = require('customize-cra');

module.exports = override(
  // 按需加载
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  // 自定义主题
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {
      '@primary-color': '#1DA57A'
    },
  }),
  // 添加装饰器语法
  // yarn add @babel/plugin-proposal-decorators --dev
  addDecoratorsLegacy()
);