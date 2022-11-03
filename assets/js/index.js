// 获取用户的基本信息
function getuserinfo(){
    $.ajax({
        type: "GET",  //默认get
        url: "/my/userinfo",  //默认当前页
        // headers:{
        //     Authorization:localStorage.getItem('token') || ''
        // },
        success:function(res){
            if(res.status!==0){
                return layui.layer.msg('获取用户信息失败')
            }
            renderAvatar(res.data)
        },
        // complete:function(res){
        //     console.log(res)
        //     if(res.responseJSON.status===1){
        //         // 清空key
        //         localStorage.removeItem('token')
        //         // 强制跳回登录页
        //         location.href='/login.html'
        //     }
        // }
    })
}
// 渲染头像
function renderAvatar(res){
    let name=res.nickname||res.username
    $('.welcome').html(`欢迎&nbsp&nbsp${name}`)
    // 渲染用户头像
    if(res.user_pic!==null){
        // 渲染图片头像
        $('.layui-nav-img').attr('src',res.user_pic).show()
        $('.text-avater').hide()
    }else{
        // 渲染文本头像
        $('.layui-nav-img').hide()
        $('.text-avater').html(name[0]).show()
    }
}

(function(){
    getuserinfo()
    // 退出事件
    $('#btnOut').click(function(){
        // 弹出提示用户是否退出
        layui.layer.confirm('确定退出登录？', {icon: 3, title:'提示'}, function(index){
            //do something
            localStorage.removeItem('token')
            // 跳转页面
            location.href='../login.html'
            // 关闭弹出框
            layer.close(index);
        });
    })
}());