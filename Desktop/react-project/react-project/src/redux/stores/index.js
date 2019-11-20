/*
 * @Author: your name
 * @Date: 2019-11-19 14:26:46
 * @LastEditTime: 2019-11-20 13:39:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /react-project/react-project/src/redux/stores/index.js
 */
import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import {
 composeWithDevTools
} from 'redux-devtools-extension';
import reducers from '../reduces'

const middleware = process.env.NODE_ENV === 'development'? composeWithDevTools(applyMiddleware(thunk)):applyMiddleware(thunk)
const store = createStore(reducers,middleware)

export default store

