
var express = require('express');

var app = express();

app.get("/",function(req,res){

	res.send("Wecome to the chat app");
})

app.listen(8000,function(){

	console.log("Chat app has started");
})