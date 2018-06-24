$(function(){
    $(".news-box").mouseenter(function(){
        $(this).css({
            "background-color":"#008fff",
            "color":"#FFF"
        });
    });
    $(".news-box").mouseleave(function(){
        $(this).css({
            "background-color":"transparent",
            "color":"#000"
        }
       );
    });
    /*-------动画--------*/
    $(".society-info").animate({
        opacity:1,
        top:"0"
    },1300);
    var societyH=$(".society-info")[0].offsetHeight;
    var dynamicH=$(".dynamic")[0].offsetHeight;
    var photoH=$(".photos")[0].offsetHeight;
    var society_dynamic=societyH+dynamicH;
    window.onscroll=function () {
        var scrollH=document.documentElement.scrollTop + document.body.scrollTop+societyH-100;
        if(scrollH>societyH){
            $(".dynamic").animate({
                opacity:1,
                top:"0"
            },1300);
        }
        if(scrollH>society_dynamic){
            $(".photos").animate({
                opacity:1,
                top:"0"
            },1300);
        }
    }
});