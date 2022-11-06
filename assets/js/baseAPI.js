
$.ajaxPrefilter(function(options){
    
    // options.url='htt'
    options.url='http://www.liulongbin.top:3007'+options.url
    // console.log(options.url)
    // 判断是否有/my字符
    // 查找字符串如果没怎返回-1
    if(options.url.indexOf('/my/')!==-1){
        // 为所有有权限的接口设置headers权限
        options.headers={
            Authorization:localStorage.getItem('token') || 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzE4NTAsInVzZXJuYW1lIjoi5ZC05rWpIiwicGFzc3dvcmQiOiIiLCJuaWNrbmFtZSI6IuWQtOa1qeS4ieaguemblSIsImVtYWlsIjoiYXNkYXdkYUBxcS5jb20iLCJ1c2VyX3BpYyI6IiIsImlhdCI6MTY2NzYxMzU3NSwiZXhwIjoxNjY3NjQ5NTc1fQ.DpYhOQrdDIpY5m7gCrOIYr0eFIt4egnYr3i1_rUi0gM'
        }
    }
    // 为全局统一配置从complete
    options.complete=function(res){
        // console.log(res)
        if(res.responseJSON.status===1){
            // 清空key
            localStorage.removeItem('token')
            // 强制跳回登录页
            location.href='/login.html'
        }
    } 
})