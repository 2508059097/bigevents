// 为昵称添加正则验证
(function(){
    layui.form.verify({
        nickname:function(value){
            if(value.length>6){
                return '用户昵称为1~6个字符'
            }
        }
    })
}());
// 获取用户信息
function getUserInfo()
{
    $.ajax({
        type: "GET",  //默认get
        url: "/my/userinfo",  //默认当前页
         //请求发送前回调,常用验证
        success: function (res) {
            if(res.status!==0){
                return layui.layer.msg('获取用户信息失败')
            }
            // 给表单赋值
            layui.form.val('userform', res.data); 
        }
    })
}
(function(){
    getUserInfo()
    // 充值表单的功能
    $('#btnReset').on('click',function(e){
        e.preventDefault()
        getUserInfo()
    })
    // 更新表单模块
    $('.layui-form').on('submit',function(e){
        e.preventDefault()
       let data= $(this).serialize()
        $.ajax({
            type: "POST",  //默认get
            url: "/my/userinfo",  //默认当前页
            data:data,  //格式{key:value}
            success: function (res) {  //请求成功回调
                
                if(res.status!==0){
                    return layui.layer.msg('更新失败')
                }
                layui.layer.msg('更新成功')
                window.parent.getuserinfo()
            }, 
        })
    })
}())
