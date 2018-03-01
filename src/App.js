import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addPower,removePower,addPowerAsync } from './index.redux'

//使用react-redux的方法
//使用redux是为了将操作函数抽离出组件
//所有数据的运作都在index.redux里进行
// const mapStateProps = (state) => {
//   return { num:state }
// }
//将这些数据放到this处
// const actionCreators = { addPower,removePower,addPowerAsync }
//链接
// App = connect(mapStateProps, actionCreators)(App)

//使用transform-decorators-legacy后可以用@写法来链接
@connect(
  // 第一个参数:你需要的state放进props里
  state=>({num:state}),
  // 第二个参数:你需要的方法放进props里，并且自动dispatch
  { addPower,removePower,addPowerAsync }
)

class App extends Component{
  // constructor(props){
  //   super(props)
  // }
  render(){
    // const store = this.props.store
    //获取仓库数据
    // const num = store.getState()
    // const num = this.props.num
    // const addPower = this.props.addPower
    // const removePower = this.props.removePower
    // const addPowerAsync = this.props.addPowerAsync
    return (
      <div>
        <h1>have power {this.props.num} point</h1>
        <p>get power</p>
        <button onClick={this.props.addPower}>up</button>
        <p>lost power</p>
        <button onClick={this.props.removePower}>down</button>
        <p>add power after 2s</p>
        <button onClick={this.props.addPowerAsync}>up</button>
      </div>
    )
  }
}
export default App

// import React, { Component } from 'react'
// import {Button,List} from 'antd-mobile'
// // 通过package.json配置babel省去了引入css文件这个步骤
// // import 'antd-mobile/dist/antd-mobile.css'

// class App extends Component{
//   render () {
//     const address = 'sky hold'
//     return (
//       <h2>
//         <p>welcome to {address}</p>
//         <Makasa name="Makasa"/>
//         <Fenlire name="Fenlire"/>
//       </h2>)
//   }
// }

// class Makasa extends Component{
//   constructor(props) {
//     super(props)
//     this.state = {
//       skill: ['Shadow Hit','hidden']
//     }
//   }

//   componentWillMount () {
//     console.log('组件马上要加载了')
//   }

//   componentDidMount () {
//     console.log('组件加载完毕')
//   }

//   addSkill () {
//     console.log('gaosi')
//     this.setState({
//       skill:[...this.state.skill,'blood edge' + Math.random()]
//     })
//   }

//   render () {
//     const name = this.props.name
//     const rank = 'assassin'
//     return (
//       <div>
//         <p>our leader {rank} --{name}!</p>
//         {
//           //使用箭头函数执行控制this作用域
//         }
//         <Button type="primary" onClick={ () => this.addSkill()}>new skill</Button>
//         <List
//           renderHeader={()=>'skill book'}
//         >
//           {this.state.skill.map(v=>{
//             return (
//               <List.Item key={v}>
//                 {v}
//               </List.Item>)
//           })}
//         </List>
//       </div>
//     )}
// }

// class Fenlire extends Component{
//   render () {
//     const name = this.props.name
//     const rank = 'fs'
//     return <p>{rank} --{name}</p>
//   }
// }

// export default App