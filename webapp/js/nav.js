$(function(){
    var nav_child=$(".nav-child");
    $.each(nav_child, function(index,obj) {
        $(this).on("click",function(event){
            //先把class名为menu-current删除
            $(".menu-current").removeClass("menu-current");
            $(obj).children(0).addClass("menu-current");
            //跳到指定页面
        });
    });
});