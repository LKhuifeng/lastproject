import React from 'react'
import PropTypes from 'prop-types'
import {Card, WhiteSpace, WingBlank} from 'antd-mobile'
import { withRouter } from 'react-router-dom'

@withRouter

class UserCard extends React.Component{
    static propTypes = {
        userlist: PropTypes.array.isRequired
    }
    handleClick(v){
        this.props.history.push(`/chat/${v._id}`)
    }
    render(){
        const Header = Card.Header
        const Body = Card.Body
        return (
        <WingBlank>
            {console.log(this.props)}
            {this.props.userlist.map(v=>(
                v.avatar?(
                <div key={v._id}>
                    <WhiteSpace></WhiteSpace>
                    <Card 
                        key={v._id} 
                        onClick={()=>this.handleClick(v)}
                    >
                        <Header
                            title={v.user}
                            thumb={require(`../img/${v.avatar}.png`)}
                            extra={<span>{v.title}</span>}
                        ></Header>
                        <Body>
                            {/*公司名称*/}
                            {v.type=='boss'?<div>公司: {v.company}</div>:null}
                            {/*确保换行符工作*/}
                            {v.desc.split('\n').map(d=>(
                                <div key={d}>要求|能力: {d}</div>
                            ))}
                            {/*判断是否看boss列表*/}
                            {v.type=='boss'?<div>薪资: {v.money}</div>:null}
                        </Body>
                    </Card>
                </div>
                ):null
            ))}
        </WingBlank>
        )
    }
}

export default UserCard