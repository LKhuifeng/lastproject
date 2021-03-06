import React from 'react'
import {connect} from 'react-redux'
import {NavBar} from 'antd-mobile'
import {Switch,Route} from 'react-router-dom'
import NavLinkBar from '../navlink/navlink'
import Boss from '../boss/boss'
import Genius from '../genius/genius'
import User from '../user/user'
import Msg from '../msg/msg'
import {getMsgList,sendMsg,recvMsg} from '../../redux/chat.redux'

// function Boss(){
//     return <h2>Boss首页</h2>
// }
function code(){
    return <h2>Coder首页</h2>
}
// function Msg(){
//     return <h2>消息页面</h2>
// }
// function User(){
//     return <h2>个人中心</h2>
// }
@connect(
    state=>state,
    {getMsgList,recvMsg}
)

class Dashboard extends React.Component{
    componentDidMount(){
        //重复渲染发送的bug
        if(!this.props.chat.chatmsg.length) {
            this.props.getMsgList()
            this.props.recvMsg()
        }
    }
    render(){
        console.log(this.props)
        const {pathname} = this.props.location
        const user = this.props.user
        const navlist = [
            {
                path:'/boss',
                text:'code',
                icon:'boss',
                title:'极客列表',
                component:Boss,
                hide:user.type=='code'
            },
            {
                path:'/genius',
                text:'HR',
                icon:'job',
                title:'任务列表',
                component:Genius,
                hide:user.type=='boss'
            },
            {
                path:'/msg',
                text:'消息',
                icon:'msg',
                title:'最新消息',
                component:Msg
            },
            {
                path:'/me',
                text:'我',
                icon:'user',
                title:'个人中心',
                component:User
            }
        ]

        return (
            <div>
                <NavBar className='fixd-header' mode='dard'>{navlist.find(v=>v.path==pathname).title}</NavBar>
                <div style={{marginTop:45}} className="dashbox">
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
