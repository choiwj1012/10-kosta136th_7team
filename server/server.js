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

// connection
Controller.getArticleController().test();
Controller.getBoardController().test();
Controller.getLoginController().test();
Controller.getQnaController().test();
