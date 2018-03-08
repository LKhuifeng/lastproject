import React, { Component } from 'react'
import { Link ,Route ,Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import App from './App'
import { logout } from './Auth.redux.js'

function second(){
    return <h1>second</h1>
}
function third(){
    return <h1>third</h1>
}

@connect(
    state=>state.auth,
    {logout}
)

class Dashboard extends Component{
    constructor(props){
        super(props)
    }
    render(){
        const match = this.props.match
        console.log(match)
        const redirectToLogin = <Redirect to='/login'></Redirect>
        const app = (
            <div>
                <h1>独立团</h1>
                {this.props.isAuth ? <button onClick={this.props.logout}>注销</button>:null}
                <ul>
                    <li>
                        <Link to={`${match.url}/`}>first</Link>
                    </li>
                    <li>
                        <Link to={`${match.url}/second`}>second</Link>
                    </li>
                    <li>
                        <Link to={`${match.url}/third`}>third</Link>
                    </li>
                </ul>
                <Route path={`${match.url}/`} exact component={App}></Route>
                <Route path={`${match.url}/second`} component={second}></Route>
                <Route path={`${match.url}/third`} component={third}></Route>
            </div>
        )
        
        return this.props.isAuth ? app : redirectToLogin
    }
}

export default Dashboard
