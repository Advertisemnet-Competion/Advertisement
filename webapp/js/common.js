//导入页面
function importHTML(strNode){
    var link=document.querySelector("link[rel=import]");
    var content=link.import;//获取nav页面的文档流
    var el=content.querySelector(strNode);
    document.body.appendChild(el.cloneNode(true));
}