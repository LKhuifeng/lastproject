import React from 'react'
import ReactDOM from 'react-dom'
//redux 单独分离出来，可以跟任何前端框架使用
import { createStore, applyMiddleware } from 'redux'
//路由
import { BrowserRouter, Route, Link, Switch, Redirect } from 'react-router-dom'
//异步redux
import thunk from 'redux-thunk'
//react专门链接reudx的工具
//使用后可以舍弃subscribe，store不断传递的写法
import { Provider } from 'react-redux'
import reducers from './reducer'
//拦截请求
import './config'

//建立仓库
const store = createStore(reducers, applyMiddleware(thunk))

ReactDOM.render(
    (<Provider store={store}>
        <BrowserRouter>
        </BrowserRouter>
    </Provider>),
    document.getElementById('root')
)
