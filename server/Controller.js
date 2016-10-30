var articleController_back = require('./article/articleController_back');

var Controller = function(){

}

Controller.getArticleController = function(){

    console.log("테스트입니다");
    return articleController;

}

module.exports = Controller;
