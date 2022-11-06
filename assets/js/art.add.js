(function(){
    $.get('/my/article/cates',function(res){
        console.log(res)
        if(res.status!==0){
            return layui.layer.msg('获取失败')
        }
        layui.layer.msg('获取成功')
        let htmlStr=template('inner',res)
        $('[name=city]').html(htmlStr)
        layui.form.render()
    })
    initEditor()
}());
// 裁剪效果
(function(){
    var $image = $('#image')
  
    // 2. 裁剪选项
    var options = {
      aspectRatio: 400 / 280,
      preview: '.img-preview'
    }
    
    // 3. 初始化裁剪区域
    $image.cropper(options)
    // 上传图片事件
    $('.layui-btn-danger').on('click',function(){
        $('#coverFile').click()
    })
    // 拿照片用change事件
    $('#coverFile').on('change',function(e){
        var file = e.target.files[0]
        var newImgURL = URL.createObjectURL(file)
        $image
        .cropper('destroy')      // 销毁旧的裁剪区域
        .attr('src', newImgURL)  // 重新设置图片路径
        .cropper(options)        // 重新初始化裁剪区域

    })
    $('#fabu').on('click',function(e){
        location.href='/article/art.list.html'
    })
}());