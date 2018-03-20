import React from 'react'
import {Card, WhiteSpace, WingBlank} from 'antd-mobile'
import {connect} from 'react-redux'
import {getUserList} from '../../redux/chatuser.redux'

@connect(
    state=>state.chatuser,
    {getUserList}
)

class Boss extends React.Component{
    constructor(props){
        super(props)
        this.state={
            data:[]
        }
    }

    componentDidMount(){
        this.props.getUserList('code')
    }

    render(){
        const Header = Card.Header
        const Body = Card.Body
        return (
            <WingBlank>
                {console.log(this.props)}
                {this.props.userlist.map(v=>(
                    v.avatar?(
                    <div>
                        <WhiteSpace></WhiteSpace>
                        <Card key={v._id}>
                            <Header
                                title={v.user}
                                thumb={require(`../img/${v.avatar}.png`)}
                                extra={<span>{v.title}</span>}
                            ></Header>
                            <Body>
                                {/*确保换行符工作*/}
                                {v.desc.split('\n').map(v=>(
                                    <div key={v}>{v}</div>
                                ))}
                            </Body>
                        </Card>
                    </div>
                    ):null
                ))}
            </WingBlank>
        )
    }
}

export default Boss