var articleController_back = require('./article/articleController_back');

var Controller = function(){

}

Controller.getArticleController = function(){

    return articleController_back;

}

module.exports = Controller;
