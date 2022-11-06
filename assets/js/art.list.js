(function(){
    let obj={
        pagenum: 1,
        pagesize: 2,
        cate_id:'',
        state:'',
    }
    // 获取文章列表信息
    $.ajax({
        methods: 'GET',
        url:'/my/article/list',
        data:obj,
        success:function(res){
            console.log(res)
        }
    })
    layui.laypage.render({
        elem: 'pagefenye', //在哪个div中显示
        count: 50 ,//总数居数
        limit:2,//每页显示多少条数据
        curr:1,//默认被选中的分页
        // 出发jump回调的方式有两种
        // 一是点击页码值时触发 
        layout:['count','pre','page','next','skip'],
        // 只要触发了laypage.render()方法就会触发jump回调 first=ture
        jump:function(e,first){
            console.log(e.curr)
        }
        // 点击触发的回调函数
      });
}());