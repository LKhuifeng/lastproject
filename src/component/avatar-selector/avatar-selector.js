import React from 'react'
import {Grid,List} from 'antd-mobile'
//检测属性
import {PropTypes} from 'prop-types'

class AvatarSelector extends React.Component{
    static propTypes = {
        //规定属性必须为
        selectAvatar:PropTypes.func
    }

    constructor(props){
        super(props)
        this.state={

        }
    }

    render(){
        const avatarList = 'boy,girl,man,woman,bull,chick,crab,hedgehog,hippopotamus,koala,lemur,pig,tiger,whale,zebra'
        .split(',')
        .map(v=>({
            icon:require(`../img/${v}.png`),
            text:v
        }))
        const gridHeader = this.state.text
                            ?(<div>
                                <span>已选择头像</span>
                                <img style={{width:20,marginLeft:10}} src={this.state.icon} alt={this.state.text}/>
                            </div>)
                            :'请选择头像'
        return (
            <div>
                {gridHeader}
                <List renderHeader={()=>gridHeader}>
                    <Grid 
                        data={avatarList}
                        columnNum={5}
                        onClick={elm=>{
                            this.setState(elm)
                            this.props.selectAvatar(elm.text)
                        }}
                    >
                    </Grid>
                </List>
            </div>
        )
    }
}

export default AvatarSelector