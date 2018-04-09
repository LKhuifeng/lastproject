import React from 'react'
import {List,InputItem,NavBar,Icon,Grid} from 'antd-mobile'
import io from 'socket.io-client'
import {connect} from 'react-redux'
import {getMsgList,sendMsg,recvMsg} from '../../redux/chat.redux'
import {getChatId} from '../../util'
//服务器和客户端的端口不同，是跨域的，需要我们手动链接
//放到服务器中不是localhost，而是服务器ip
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
        if(!this.props.chat.chatmsg.length){
            this.props.getMsgList()
            this.props.recvMsg()
        }

        //全局socket,使得别人的信息能够传递过来
        // socket.on('recvmsg',(data)=>{
        //     this.setState({
        //         msg:[...this.state.msg,data.text]
        //     })
        // })
    }
    //修正antd的bug
    fixGird(){
        setTimeout(function(){
            window.dispatchEvent(new Event('resize'))
        },0)
    }

    handleSubmit(){
        //socket.emit('sendmsg',{text:this.state.text})
        //this.setState({text:''})
        const from = this.props.user._id
        const to = this.props.match.params.user
        const msg = this.state.text
        this.props.sendMsg({from,to,msg})
        this.setState({
            text:'',
            showEmoji:false
        })
    }
    render (){
        const emoji = '😀 😁 😂 🤣 😃 😄 😅 😆 😉 😊 😋 😎 😍 😘 😗 😙 😚 🙂 🤗 🤩 🤔 🤨 😐 😑 😶 🙄 😨 😩 🤯 😬 😰 😱 😳 🤪 😵 😡 😠 🤬 😷 🤒 🤕 🤢 🤮 🤧 😇 🤠 🤡 🤥 🤫 🤭 🧐 🤓 😈 👿 👹 👺 💀 👻 👽 🤖 💩'
                        .split('')
                        .filter(v=>v)
                        .map(v=>({text:v}))

        const userid = this.props.match.params.user
        const Item = List.Item
        const users = this.props.chat.users
        if(!users[userid]){
            return null
        }
        //过滤掉其他聊天信息
        const chatid = getChatId(userid, this.props.user._id)
        const chatmsgs = this.props.chat.chatmsg.filter(v=>v.chatid==chatid)

        return (
            <div id='chat-page'>
                <NavBar 
                    mode='dark'
                    icon={<Icon type="left"/>}
                    onLeftClick={()=>{
                        this.props.history.goBack()
                    }}
                >
                    {/*显示用户ID*/}
                    {users[userid].name}
                </NavBar>
                {/*判断发送信息的人*/}
                {chatmsgs.map(v=>{
                    const avatar = require(`../img/${users[v.from].avatar}.png`)
                    return v.from==userid?(
                        <List key={v._id}>
                            <Item
                                thumb={avatar}
                            >{v.content}</Item>
                        </List>
                        
                    ):(
                        <List key={v._id}>
                            <Item 
                                extra={<img src={avatar} />}
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
                            extra={
                                <div>
                                    <span
                                        onClick={()=>{
                                            this.setState({showEmoji:!this.state.showEmoji})
                                            this.fixGird()
                                        }}
                                        style={{marginRight:15}}
                                    >�</span>
                                    <span onClick={()=>this.handleSubmit()}>发送</span> 
                                </div>
                            }
                        ></InputItem>
                    </List>
                    {this.state.showEmoji
                        ?<Grid 
                            data={emoji}
                            columnNum={9}
                            carouselMaxRow={4}
                            isCarousel={true}
                            onClick={el=>{
                                this.setState({
                                    text:this.state.text+el.text
                                })
                            }}
                            />
                        :null}
                    
                {/* <h2>chat with user:{this.props.match.params.user}</h2> */}
                </div>
            </div>
        )
    }
}

export default Chat