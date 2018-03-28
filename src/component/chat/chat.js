import React from 'react'
import {List,InputItem,NavBar} from 'antd-mobile'
import io from 'socket.io-client'
import {connect} from 'react-redux'
import {getMsgList,sendMsg,recvMsg} from '../../redux/chat.redux'
//服务器和客户端的端口不同，是跨域的，需要我们手动链接
const socket = io('ws://localhost:9093')

@connect(
    state=>state,
    {getMsgList,sendMsg,recvMsg}
)

class Chat extends React.Component{
    constructor(props){
        super(props)
        this.state = {text:'',msg:[]}
    }

    componentDidMount(){
        this.props.getMsgList()
        this.props.recvMsg()
        //全局socket,使得别人的信息能够传递过来
        // socket.on('recvmsg',(data)=>{
        //     this.setState({
        //         msg:[...this.state.msg,data.text]
        //     })
        // })
    }
    handleSubmit(){
        //socket.emit('sendmsg',{text:this.state.text})
        //this.setState({text:''})
        const from = this.props.user._id
        const to = this.props.match.params.user
        const msg = this.state.text
        this.props.sendMsg({from,to,msg})
        this.setState({text:''})
        console.log(this.state)
    }
    render (){
        const user = this.props.match.params.user
        const Item = List.Item
        return (
            <div id='chat-page'>
                <NavBar mode='dark'>
                    {/*显示用户ID*/}
                    {this.props.match.params.user}
                </NavBar>
                {/*判断发送信息的人*/}
                {this.props.chat.chatmsg.map(v=>{
                    return v.from==user?(
                        <List key={v._id}>
                            <Item
                                // thumb={}
                            >{v.content}</Item>
                        </List>
                        
                    ):(
                        <List key={v._id}>
                            <Item 
                                extra={'avatar'}
                                className='chat-me'
                            >{v.content}</Item>
                        </List>
                    )
                    return <p key={v._id}>{v.content}</p>
                })}
                <div className="stick-footer">
                    <List>
                        <InputItem
                            placeholder='请输入'
                            value={this.state.text}
                            onChange={v=>{
                                this.setState({text:v})
                            }}
                            extra={ <span onClick={()=>this.handleSubmit()}>发送</span> }
                        ></InputItem>
                    </List>

                {/* <h2>chat with user:{this.props.match.params.user}</h2> */}
                </div>
            </div>
        )
    }
}

export default Chat