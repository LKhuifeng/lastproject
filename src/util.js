//公共方法
export function getRedirectPath({type,avatar}){
    // 根据用户信息 返回跳转地址
    // user.type /boss /genius
    // user.avatar /bossinfo /geniusinfo
    let url = (type === 'boss') ? '/boss' : '/genius' 
    if(!avatar){
        url += 'info'
    }
    return url
}
//获取聊天房间的唯一ID
export function getChatId(userId, targetId){
    return [userId, targetId].sort().join('_')
}