import React from 'react';
import ReactDOM from 'react-dom';
//路由
import { BrowserRouter, Route, Link, Switch, Redirect } from 'react-router-dom'
//redux 单独分离出来，可以跟任何前端框架使用
import { createStore, applyMiddleware } from 'redux'
//异步redux
import thunk from 'redux-thunk'
//react专门链接reudx的工具
//使用后可以舍弃subscribe，store不断传递的写法
import { Provider } from 'react-redux'
import App from './App';
import Auth from './Auth'
import Dashboard from './Dashboard'
// import { counter } from './index.redux'
import reducers from './reducer'

//建立仓库
const store = createStore(reducers, applyMiddleware(thunk))

console.log(store.getState())

// class Test extends React.Component{
//     constructor(props){
//         super(props)
//     }
//     render(){
//         console.log(this.props)
//         return <h1>组件测试 {this.props.match.params.location}</h1>
//     }
// }

ReactDOM.render(
    (<Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route path='/login' exact component={Auth}></Route>
                <Route path='/dashboard' component={Dashboard}></Route>
                <Redirect to='/dashboard'></Redirect>
            </Switch>
        </BrowserRouter>
    </Provider>),
    document.getElementById('root')
)

//封装成函数以便订阅函数调用
// function render(){
//     ReactDOM.render(<App store={store} addPower={addPower} removePower={removePower} addPowerAsync={addPowerAsync}/>, document.getElementById('root'));
// }

// render()

// 订阅(subscribe)每次store发生改变会触发订阅，订阅执行监听函数
// subscribe订阅render函数使每次修改都会重新渲染
// store.subscribe(render)

// import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';


// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

