$(function () {

    /*//奇数行
    $(".row:even>.pic-contain").animate({
        left:0,
        opacity:1
    },2000);
    //偶数行
    $(".row:odd>.pic-contain").animate({
        right:0,
        opacity:1
    },2000);*/
    // $(".banner-words").addClass("")
    /*前两个*/
    /*//奇数行
    $(".row:nth-of-type(1)>.pic-contain").animate({
        left:0,
        opacity:1
    },2000);
    //偶数行
    $(".row:nth-of-type(2)>.pic-contain").animate({
        right:0,
        opacity:1
    },2000);
    for(var i=1;i<=2;i++){
        $(".row:nth-of-type("+i+")>.pic-brief").animate({
            top:0,
            opacity:1
        },2000);
    }*/
    var boxH=$(".animals-pic .row")[0].offsetHeight;

    var k=0;
    window.onscroll=function () {
        console.log($(".banner")[0].offsetHeight);
        var scrollH=document.documentElement.scrollTop + document.body.scrollTop+100-$(".banner")[0].offsetHeight;//滚轮高度

        var i=parseInt(scrollH/boxH)+2;
        console.log(i)
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