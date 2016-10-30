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

Controller.getArticleController().requestArticleWrite();

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

//article 수정
app.all('/articleUpdate', function(request, response){

  console.log('/articleUpdate 요청받음');
  var num = parseInt(req.param('num'));
  var title = req.param('title');
  var content = req.param('content');
  var writer = req.param('writer');
  
  var article = new Article(title, content, writer);
  
  article.num = num;
  
  var isSuccess = Controller.getArticleController().articleController_back.requestArticleUpdate(article);
  
  console.log('응답 데이터');
  res.send(isSuccess);
});

// board 글쓰기
app.all('/boardWrite', function(request, response){

  console.log('/boardWrite 요청받음');

});

// board 글목록
app.all('/boardList', function(request, response){

  console.log('/boardList 요청받음');

});

// board 선택글읽기
app.all('/boardRead', function(request, response){

  console.log('/boardRead 요청받음');

});

// board 선택글삭제
app.all('/boardDelete', function(request, response){

  console.log('/boardDelete 요청받음');

});

// qna 글쓰기
app.all('/qnaWrite', function(request, response){

  console.log('/qnaWrite 요청받음');

});

// qna 글목록
app.all('/qnaList', function(request, response){

  console.log('/qnaList 요청받음');

});

// qna 선택글읽기
app.all('/qnaRead', function(request, response){

  console.log('/qnaRead 요청받음');

});

// qna 선택글삭제
app.all('/qnaDelete', function(request, response){

  console.log('/qnaDelete 요청받음');

});

// login 글쓰기
app.all('/loginWrite', function(request, response){

  console.log('/loginWrite 요청받음');

});

// login 요청
app.all('/login', function(request, response){

  console.log('/login 요청받음');

});

// SignUp 요청
app.all('/signup', function(request, response){

  console.log('/signup 요청받음');

});
