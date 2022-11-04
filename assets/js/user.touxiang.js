  // 1.1 获取裁剪区域的 DOM 元素
  var $image = $('#image')
  // 1.2 配置选项
  const options = {
    // 纵横比
    aspectRatio: 1,
    // 指定预览区域
    preview: '.img-preview'
  }

  // 1.3 创建裁剪区域
   $image.cropper(options)
  (function(){
    // 实现上传模块
    $('#btn-push').on('click',function(){
        $('[name=file]').click()
    })
    // 为文件选择框绑定change事件，监听value值
    $('#inp').on('change',function(e){
        console.log(e)
        // 获取用户选择的图片
        let imgfiles=e.target.files
        console.log(imgfiles)
        if(imgfiles.length===0){
          return layui.layer.msg('请选择图片')
        }
        // 1.拿到用户选择的图片
        var file = e.target.files[0]
        // 2.创建一个对应的url地址var newImgURL = URL.createObjectURL(file)
        var newImgURL = URL.createObjectURL(file)
        // 3.先`销毁`旧的裁剪区域，再`重新设置图片路径`，之后再`创建新的裁剪区域`
        $image
          .cropper('destroy')      // 销毁旧的裁剪区域
          .attr('src', newImgURL)  // 重新设置图片路径
          .cropper(options)        // 重新初始化裁剪区域

        })


      // 1.将裁剪后的图片，输出为 base64 格式的字符串
      $('#btnLoad').on('click',function(){
        var dataURL = $image
        .cropper('getCroppedCanvas', { // 创建一个 Canvas 画布
          width: 100,
          height: 100
          })
          .toDataURL('image/png')       // 将 Canvas 画布上的内容，转化为 base64 格式的字符串
        
        $.ajax({
          type: "POST",  //默认get
          url: "/my/update/avatar",  //默认当前页
          data: {
            avatar:dataURL
          },  //格式{key:value}
          success: function (res) {
             console.log(res)
             console.log(666)
            if(res.status!==0){
              return layui.layer.msg('上传失败')
            }
            layui.layer.msg('上传成功')
            window.parent.getuserinfo()
          },
           //无论请求是成功还是失败都会执行的回调，常用全局成员的释放，或者页面状态的重置
        })
       })
       
    }());