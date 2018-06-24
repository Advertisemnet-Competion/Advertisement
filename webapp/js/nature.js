$(function () {
    for(var i=0;i<$(".box").length;i++){
        $($(".box")[i]).css({
            backgroundImage:"url('./img/animal-"+(i+1)+".jpg')"
        })
    }

    var boxH=$(".animals-pic .row")[0].offsetHeight;
    var k=0;
    window.onscroll=function () {
        var scrollH=document.documentElement.scrollTop + document.body.scrollTop+100-$(".banner")[0].offsetHeight;//滚轮高度

        var i=parseInt(scrollH/boxH)+2;
        // if(i>=k){
            if(i%2==0){//偶数行
                $(".row:nth-of-type("+i+")>.pic-contain").animate({
                    right:0,
                    opacity:1
                },2000);
            }else{//奇数行
                $(".row:nth-of-type("+i+")>.pic-contain").animate({
                    left:0,
                    opacity:1
                },2000);
            }
            $(".row:nth-of-type("+i+")>.pic-brief").animate({
                top:0,
                opacity:1
            },2000);
           /* k=i;
        }else{
            console.log(k)
            if(k%2==0){//偶数行
                $(".row:nth-of-type("+k+")>.pic-contain").animate({
                    right:'-8%',
                    opacity:0
                },2000);
            }else{//奇数行
                $(".row:nth-of-type("+k+")>.pic-contain").animate({
                    left:'-8%',
                    opacity:0
                },2000);
            }
            $(".pic-brief:nth-of-type("+k+")").animate({
                top:'-10%',
                opacity:0
            },2000);
        }*/

    }
})