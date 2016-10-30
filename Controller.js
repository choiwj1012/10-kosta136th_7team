var articleController_back = require('./server/article/articleController_back');
var boardController_back = require('./server/board/boardController_back');
var loginController_back = require('./server/login/loginController_back');
var qnaController_back = require('./server/qna/qnaController_back');

var Controller = function(){

}

Controller.getArticleController = function(){

    return articleController_back;

}

Controller.getBoardController = function(){

  return boardController_back;

}

Controller.getLoginController = function(){

  return loginController_back;

}

Controller.getQnaController = function(){

  return qnaController_back;

}

module.exports = Controller;
