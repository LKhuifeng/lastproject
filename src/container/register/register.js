import React, { Component } from 'react'
import Logo from '../../component/logo/logo'
import { List, InputItem, Radio, WingBlank, WhiteSpace ,Button } from 'antd-mobile'

export class Register extends Component {
    constructor (props) {
        super(props)
        this.state = {
            type: 'genius'
        }
    }

    render () {
        const RadioItem = Radio.RadioItem
        return (
            <div>
                <Logo></Logo>
                <List>
                    <InputItem>用户名</InputItem>
                    <InputItem>密码</InputItem>
                    <InputItem>确认密码</InputItem>
                    <RadioItem checked={this.state.type=='genius'}>
                        coder
                    </RadioItem>
                    <RadioItem checked={this.state.type=='boss'}>
                        HR
                    </RadioItem>
                </List>
                <WhiteSpace></WhiteSpace>
                <Button type='primary'>注册</Button>
            </div>
        )
    }
}

export default Register