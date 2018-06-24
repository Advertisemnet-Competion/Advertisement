//导入页面
function importHTML(strNode){
    var link=document.querySelector("link[rel=import]");
    var content=link.import;//获取nav页面的文档流
    var el=content.querySelector(strNode);
    document.body.appendChild(el.cloneNode(true));
}
$(function(){
    (function() {
        if (!
                /*@cc_on!@*/
                0) return;
        var e = "abbr, article, aside, audio, canvas, datalist, details, dialog, eventsource, figure, footer, header, hgroup, mark, menu, meter, nav, output, progress, section, time, video".split(', ');
        var i= e.length;
        while (i--){
            document.createElement(e[i]);
        }
    })();
});
