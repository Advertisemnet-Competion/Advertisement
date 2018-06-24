$(function () {
    $(".card-wrap").hover(
        function (event) {
            var event=window.event||event;
            var block=event.srcElement;
            $(block).find(".card-cover").show();
        },
        function () {
            $(".card-cover").hide();
        }
    );
})