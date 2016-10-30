// node server and router

// extract modules
var http = require('http');
var express = require('express');
var mysql = require('mysql');
var Controller = require('./Controller');

// connect mysql DB
var db = mysql.createConnection({
  host : 'localhost',
  port : 3306,
  user : 'root',
  password : '123456',
  database : 'articledb'
});

// setup express
var app = express();
app.use(express.static('public'));
app.use(app.router);

// start web server
http.createServer(app).listen(3000, function(){
  console.log('starting web server ... http://localhost:3000');
});

// connection test
Controller.getArticleController().test();
Controller.getBoardController().test();
Controller.getLoginController().test();
Controller.getQnaController().test();

// router
// 메인페이지 요청
app.all('/', function(request, response){

  response.redirect('view/index.html');

});

// article 글쓰기
app.all('/articleWrite', function(request, response){

  console.log('/articleWrite 요청받음');

});

// article 글목록
app.all('/articleList', function(request, response){

  console.log('/articleList 요청받음');

});

// article 선택글읽기
app.all('/articleRead', function(request, response){

  console.log('/articleRead 요청받음');

});

// article 선택글삭제
app.all('/articleDelete', function(request, response){

  console.log('/articleDelete 요청받음');

});
