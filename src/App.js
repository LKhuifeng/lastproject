import React, { Component } from 'react'
import { addPower,removePower } from './index.redux'

class App extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    const store = this.props.store
    //获取仓库数据
    const num = store.getState()
    return (
      <div>
        <h1>have power {num} point</h1>
        <p>get power</p>
        <button onClick={()=>store.dispatch(addPower())}>up</button>
        <p>lost power</p>
        <button onClick={()=>store.dispatch(removePower())}>down</button>
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