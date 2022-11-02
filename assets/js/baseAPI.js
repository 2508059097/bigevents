
$.ajaxPrefilter(function(options){
    
    // options.url='htt'
    options.url='http://www.liulongbin.top:3007'+options.url
    console.log(options.url)
})