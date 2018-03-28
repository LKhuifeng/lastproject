import React from 'react'
import ReactDOM from 'react-dom'
//redux 单独分离出来，可以跟任何前端框架使用
import { createStore, applyMiddleware } from 'redux'
//路由
import { BrowserRouter, Route, Link, Switch, Redirect } from 'react-router-dom'
//引入组件
import Login from './container/login/login'
import Register from './container/register/register'
import AuthRoute from './component/authroute/authRoute'
import BossInfo from './container/bossinfo/bossinfo'
import GeniusInfo from './container/geniusinfo/geniusinfo'
import Dashboard from './component/dashboard/dashboard'
import Chat from './component/chat/chat'
//异步redux
import thunk from 'redux-thunk'
//react专门链接reudx的工具
//使用后可以舍弃subscribe，store不断传递的写法
import { Provider } from 'react-redux'
//合并redux
import reducers from './reducer'
//拦截请求
import './config'
import './index.css'

//建立仓库
const store = createStore(reducers, applyMiddleware(thunk))

//boss genius me msg 4个页面
ReactDOM.render(
    (<Provider store={store}>
        <BrowserRouter>
            <div>
                {/* 检测路由 */}
                <AuthRoute></AuthRoute>
                {/* Switch只需要找到当前路由就不会往下渲染其他路由 */}
                <Switch>
                    <Route path='/bossinfo' component={BossInfo}></Route>
                    <Route path='/login' component={Login}></Route>
                    <Route path='/register' component={Register}></Route>
                    <Route path='/chat/:user' component={Chat}></Route>
                    <Route path='/geniusinfo' component={GeniusInfo}></Route>
                    {/* <Route path='/boss' component={Boss}></Route> */}
                    <Route component={Dashboard}></Route>
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>),
    document.getElementById('root')
)
