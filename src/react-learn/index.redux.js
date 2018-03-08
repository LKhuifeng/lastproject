const ADD_POWER = 'power up'
const REMOVE_POWER = 'power down'

//reducer
export function counter(state=10, action){
    switch(action.type){
        case ADD_POWER:
            return state+1
        case REMOVE_POWER:
            return state-1
        //默认返回值
        default:
            return state
    }
}

//action creator
export function addPower(){
    console.log('up')
    return {type:ADD_POWER}
}

export function removePower(){
    console.log('down')
    return {type:REMOVE_POWER}
}

export function addPowerAsync(){
    return dispatch=>{
        setTimeout(()=>{
            dispatch(addPower())
        },2000)
    }
}

// import { createStore } from 'redux'
// //创建 store
// //通过reducer简历
// //根据原来的state和aciton 生成新的state
// function counter(state=0, action){
//     switch(action.type){
//         case 'power up':
//             return state+1
//         case 'power down':
//             return state-1
//         //默认返回值
//         default:
//             return 10
//     }
// }

// const store = createStore(counter)

// const init = store.getState()

// console.log(init)
// //监听
// function listener(){
//     const current = store.getState()
//     console.log('have power ${current} point now')
// }
// //订阅(subscribe)每次store发生改变会触发订阅，订阅执行监听函数
// //subscribe订阅render函数使每次修改都会重新渲染
// store.subscribe(listener)
// //派发(dispatch)事件,传递action
// //使用store.dispatch管理数据取缔setState
// store.dispatch({type:'power up'})
// console.log(store.getState())