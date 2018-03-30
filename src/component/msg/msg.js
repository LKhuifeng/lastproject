import React from 'react'
import {connect} from 'react-redux'

@connect(
    state=>state
)

class Msg extends React.Component{
    render(){
        const msgGroup = {}
        //按照聊天用户分组，根据chatid
        this.props.chat.chatmsg.forEach(v=>{
            msgGroup[v.chatid] = msgGroup[v.chatid] || []
            msgGroup[v.chatid].push(v)
        })
        return (
            <div>
                <h2>消息</h2>
            </div>
        )
    }
}

export default Msg