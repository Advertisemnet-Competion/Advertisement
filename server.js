"use strict";
const express=require("express"),
    bodyParser=require("body-parser");
let app=express();
//托管静态资源
app.use("/",express.static("webapp"));
//post参数注入 解析 application/json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
//首页渲染
app.get("/",function (req,res) {
    res.render("index.html");
})
app.get("/favicon.ico",function(req,res){
    return;
});
//-------监听端口-------
app.listen(8088,function(err){
    if(err) throw err;
    console.log("服务器启动成功");
});
