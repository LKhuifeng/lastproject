import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import App from './App';
import { counter} from './index.redux'

//建立仓库
const store = createStore(counter)

//封装成函数以便订阅函数调用
function render(){
    ReactDOM.render(<App store={store} />, document.getElementById('root'));
}

render()

// 订阅(subscribe)每次store发生改变会触发订阅，订阅执行监听函数
// subscribe订阅render函数使每次修改都会重新渲染
store.subscribe(render)

// import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';


// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

