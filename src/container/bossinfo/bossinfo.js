import React from 'react'
import {NavBar,InputItem,TextareaItem,Button} from 'antd-mobile'
import AvatarSelector from '../../component/avatar-selector/avatar-selector'

class BossInfo extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            title:''
        }
    }
    onChange(key,val){
        this.setState({
            [key]:val
        })
    }

    render(){
        return (
            <div>
                <NavBar mode="dark">HR信息完善页面</NavBar>
                <AvatarSelector
                    selectAvatar={(imgname)=>{
                        this.setState({
                            avatar: imgname
                        })
                    }}
                ></AvatarSelector>
                <InputItem onChange={(v)=>this.onChange('title',v)}>
                    职位招聘
                </InputItem>
                <InputItem onChange={(v)=>this.onChange('company',v)}>
                    公司名称
                </InputItem>
                <InputItem onChange={(v)=>this.onChange('money',v)}>
                    薪资范围
                </InputItem>
                <TextareaItem onChange={(v)=>this.onChange('desc',v)}
                    rows={3}
                    autoHeight
                    title='职位要求'
                >
                    职位简介
                </TextareaItem>
                <Button type='primary'>保存</Button>
            </div>
        )
    }
}

export default BossInfo