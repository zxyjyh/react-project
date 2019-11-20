/*
 * @Author: your name
 * @Date: 2019-11-19 14:22:01
 * @LastEditTime: 2019-11-19 23:57:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /react-project/react-project/src/index.js
 */
import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import App from './App'
import store from './redux/stores'

ReactDOM.render(<Provider store={store}><App/></Provider>,document.getElementById('root'))
