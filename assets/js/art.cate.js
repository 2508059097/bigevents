(function(){
    // 获取图书列表渲染页面
    function getArtcateList(){
        $.ajax({
            methods:'GET',
            url:'/my/article/cates',
            success:function(res){
                console.log(res)
                let htmlStr=template('tpl-table',res)
                $('tbody').html(htmlStr)
            }
        })
    }
    getArtcateList()
    // 添加图书类别事件
    let indexAdd=null
    $('#btnAdd').on('click',function(){
         indexAdd=layui.layer.open({
            title:'添加文章分类',
            type: 1, 
            area: ['500px', '300px'],
            content:$('#inner').html()
          });
    })
    // 绑定submi事件
    // $.ajax({
    //     methods:'POST',
    //     url:'/my/article/addcates',
    //     data: {
    //         name:'吴浩',
    //         alias:'wuhao'
    //     },
    //     success:function(res){
    //         console.log(res)
    //         if(res.status!==0){
    //             return layui.layer.msg('更新图书列表失败')
    //         }
    //         getArtcateList()
    //         layui.layer.msg('更新图书列表成功')
    //         return false
    //     }
    // })
    $('body').on('submit','.layui-form',function(e){
        e.preventDefault()
       $('.layui-table').append(`
       <tr>
       <td>${$('[name=name]').val()}</td>
       <td>${$('[name=alias]').val()}</td>
       <td>
           <button type="button" class="layui-btn layui-btn-xs">编辑</button>
           <button type="button" class="layui-btn layui-btn-danger layui-btn-xs">删除</button>
       </td>
   </tr>
       `)
       layui.layer.close(indexAdd)
    })
    // 绑定删除事件
    $('tbody').on('click','.layui-btn-danger',function(){
       
        let atn=$(this).parent().parent()
        layui.layer.confirm('确定删除?', {icon: 3, title:'提示'}, function(index){
            //do something
            atn .hide().remove()
            layer.close(index);
          });
       
    })
    // 修改信息模块
    $('tbody').on('click','#btn',function(){
        layui.layer.open({
            title:'修改文章',
            type: 1, 
            area: ['500px', '300px'],
            content:$('#inner-bj').html()
          });
          let obj=$(this).parent().parent()
          console.log(obj)
          layui.form.val('form', obj);
    })
}());