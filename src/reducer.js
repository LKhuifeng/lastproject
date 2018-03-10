// 合并所有reducer 并且返回
import { combineReducers } from 'redux'
import { user } from './redux/user.redux'

// 合并reducer
export default combineReducers({user})