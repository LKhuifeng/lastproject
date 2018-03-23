import React from 'react'
import {connect} from 'react-redux'
import {NavBar} from 'antd-mobile'
import {Switch,Route} from 'react-router-dom'
import NavLinkBar from '../navlink/navlink'
import Boss from '../boss/boss'
import Genius from '../genius/genius'
import User from '../user/user'

// function Boss(){
//     return <h2>Boss首页</h2>
// }
function code(){
    return <h2>Coder首页</h2>
}
function Msg(){
    return <h2>消息页面</h2>
}
// function User(){
//     return <h2>个人中心</h2>
// }
@connect(
    state=>state
)

class Dashboard extends React.Component{

    render(){
        console.log(this.props)
        const {pathname} = this.props.location
        const user = this.props.user
        const navlist = [
            {
                path:'/boss',
                text:'code',
                icon:'boss',
                title:'Coder List',
                component:Boss,
                hide:user.type=='code'
            },
            {
                path:'/genius',
                text:'HR',
                icon:'job',
                title:'HR List',
                component:Genius,
                hide:user.type=='boss'
            },
            {
                path:'/msg',
                text:'消息',
                icon:'msg',
                title:'News List',
                component:Msg
            },
            {
                path:'/me',
                text:'我',
                icon:'user',
                title:'Personal',
                component:User
            }
        ]

        return (
            <div>
                <NavBar className='fixd-header' mode='dard'>{navlist.find(v=>v.path==pathname).title}</NavBar>
                <div style={{marginTop:45}}>
                    <Switch>
                        {navlist.map(v=>(
                            <Route key={v.path} path={v.path} component={v.component}></Route>
                        ))}
                    </Switch>
                </div>
                <NavLinkBar data={navlist}></NavLinkBar>
            </div>
        )
    } 
}

export default Dashboard
