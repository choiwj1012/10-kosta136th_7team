// node server and router

// extract modules
var http = require('http');
var express = require('express');
var mysql = require('mysql');
var Controller = require('./Controller');
var article_back = require('./server/article/article_back');


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

// controller connection test
Controller.getArticleController().test();
Controller.getBoardController().test();
Controller.getLoginController().test();
Controller.getQnaController().test();

// router
// request Main Page
app.all('/', function(request, response){

  response.redirect('view/index.html');

});

// article 글쓰기
app.all('/articleWrite', function(request, response){

  console.log('/articleWrite 요청받음');
  var title = request.param('title');
  var content = request.param('content');
  var writer = request.param('writer');

  var article = new article_back(title, content, writer);
  var isSuccess = Controller.getArticleController().requestArticleWrite(article);

  console.log('응답 데이터');
  response.send(isSuccess);

});

// article 글목록
app.all('/articleList', function(request, response){

  console.log('/articleList 요청받음');
  var send_articles = Controller.getArticleController().requestArticleList();

  response.send(send_articles);

});

// article 선택글읽기
app.all('/articleRead', function(request, response){

  console.log('/articleRead 요청받음');
  var num = parseInt(request.param('num'));
  var send_article = Controller.getArticleController().requestArticleRead(num);

  response.send(send_article);

});

// article 선택글삭제
app.all('/articleSelectedDelete', function(request, response){

  console.log('/articleDelete 요청받음');
  var delete_nums = parseInt(request.param('nums'));

  var isSuccess = Controller.getArticleController().requestArticleSelectedDelete(delete_nums);

  response(isSuccess);


});

//article 수정
app.all('/articleUpdate', function(request, response){

  console.log('/articleUpdate 요청받음');
  var num = parseInt(request.param('num'));
  var title = request.param('title');
  var content = request.param('content');
  var writer = request.param('writer');

  var article = new article_back(title, content, writer);

  article.num = num;

  var isSuccess = Controller.getArticleController().requestArticleUpdate(article);

  console.log('응답 데이터');
  response.send(isSuccess);

});
//article 삭제
app.all('/articleDelete'), function(request, response) {

	console.log('/articleDelete 요청받음');
	var num = parseInt(request.param('num'));

	var isSuccess = Controller.getArticleController().requestDelete(num);

	response.send(isSuccess);

}

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

module.exports = db;
