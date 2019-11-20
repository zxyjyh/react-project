/*
 * @Author: your name
 * @Date: 2019-11-19 14:50:33
 * @LastEditTime: 2019-11-19 19:03:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /react-project/react-project/src/config/routers.js
 */
import Home from '../component/home'
import Login from '../component/login'
import NotFound from '../component/404'

const routes = [
    {
        path: '/',
        component: Home,
        exact:true
    },
    {
        path: '/login',
        component: Login,
        exact:true
    },
    {
        component:NotFound,
    }
]

export default routes