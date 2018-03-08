import axios from 'axios'
import { Toast } from 'antd-mobile'
//拦截器

//拦截请求
//所有请求之前做的事情 interceptors拦截器
axios.interceptors.request.use(function(config){
    Toast.loading('加载中',0)
    return config
})

//拦截响应
//所有请求之后做的事情
axios.interceptors.response.use(function(config){
    Toast.hide()
    return config
})