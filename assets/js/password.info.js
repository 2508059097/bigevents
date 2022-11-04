
(function(){
// 请求修改密码
$('.layui-form').on('submit',function(e){
    e.preventDefault()
    $.ajax({
        type: "POST",  //默认get
        url: "/my/updatepwd",  //默认当前页
        data: $(this).serialize(),  //格式{key:value}
        success: function(res){  //请求成功回调
            if(res.status!==0){
                return layui.layer.msg('重置密码失败')
            }
            layui.layer.msg('重置密码成功！')
            // 重置表单
            $('.layui-form')[0].reset()
        },
    })
})
}());
// 密码的正则验证
layui.form.verify({
    // password: function(value){ }
    pass: [/^[\S]{6,12}$/,'密码必须6到12位，且不能出现空格'] ,
    pwd2:function(value){
        if(value===$('.password').val()){
            return '新密码不能与原密码相同'
        }
    },
    pwd3:function(value){
        if(value!==$('#pwd').val()){
            return '密码不一致'
        }
    }
})