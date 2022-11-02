// 登录注册切换
(function(){
    $('#login a').click(function(){
        $('#login').hide()
        $('#login2').show()
    })
    $('#login2 a').click(function(){
        $('#login2').hide()
        $('#login').show()
    })
}());
//表单验证模块
(function(){
    let form=layui.form
    form.verify({
        // 自定义了pwd的规则
        pwd:[
            /^[\S]{6,12}$/,
            '密码必须6到12位，且不能出现空格'] ,
         repwd:function(value){
            let re=$('#login2 [name=password]').val()
            if(value !==re){
                return '两次密码不一致'
            }
         }   
    })
    
    }());
    // 注册/登录事件
(function(){
    // 注册
    $('#login2 .layui-form').on('submit',function(e){
        e.preventDefault()
        let layer=layui.layer
        $.post('http://www.liulongbin.top:3007/api/reguser',{username:$('#login2 [name=username]').val(),password:$('#login2 [name=password]').val()},function(res){
            console.log(res)
            if(res.status===1){
                layer.msg(res.message);
            }else{
                layer.msg(res.message);
                $('#login2 a').click()
            }
        })
    })
   
    // 备用方案
    // $('#login2 button').click(
    //     function(){
    //         console.log(66666)
    //         $.post('http://www.liulongbin.top:3007/api/reguser',{username:'wuhao798',password:'123456'},function(res){
    //             console.log(res)
    //         })
    //     }
    // )
    // 登录
    $('#login .layui-form').on('submit',function(e){
        e.preventDefault()
        let obj=$(this).serialize()
        $.ajax({
            type: "POST",  //默认get
            url: "/api/login",  //默认当前页
            data:obj,  //格式{key:value}
            success: function (res) {  
                console.log(res)//请求成功回调
                console.log(obj)
                if(res.status!==0){
                    layer.msg(res.message)
                   return 
                }
                layer.msg(res.message)
                // 把token值存到本地存储里边
                localStorage.setItem('token',res.token)
                // 跳转到后台主页
                location.href='/index.html'
            },
        })
    })
}());