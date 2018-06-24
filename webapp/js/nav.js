$(function(){
    var nav_child=$(".nav-child");
    $($(".nav-child")[page]).find(".btn_base").addClass("menu-current");
    $.each(nav_child, function(index,obj) {
        $(this).on("click",function(event){
            //先把class名为menu-current删除
            /*$(".menu-current").removeClass("menu-current");
            $(obj).children(0).addClass("menu-current");*/
            //跳到指定页面
            switch (index){
                case 0:
                    window.location.href="./index.html";
                    break;
                case 1:
                    window.location.href="./family.html";
                    break;
                case 2:
                    window.location.href="./society.html";
                    break;
                case 3:
                    window.location.href="./nature.html";
                    break;

            }
        });
    });
});