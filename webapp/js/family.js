$(function(){
    $(".list-item").on("mouseEnter",function(){

    });
    /*-------动画--------*/
    var introH=$(".intro-box")[0].offsetHeight;
    var storyH=$(".story-box")[0].offsetHeight;
    $(".intro-box").animate({
        opacity:1,
        bottom:"0"
    },1300);
    window.onscroll=function () {
        var scrollH=document.documentElement.scrollTop + document.body.scrollTop+introH;
        if(scrollH>introH){
            $($(".story-box")[0]).animate({
                opacity:1,
                bottom:"0"
            },1300);
        }
        if(scrollH>introH+storyH){
            $($(".story-box")[1]).animate({
                opacity:1,
                bottom:"0"
            },1300);
        }
    }
});