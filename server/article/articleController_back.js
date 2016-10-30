var article_back = require('./article_back');
var articleDao_back = require('./articleDao_back');

var articleController_back = function(){

}

articleController_back.test = function(){

  console.log("articleController 연결 테스트입니다");
  articleDao_back.test();
  article_back.test();

}

articleController_back.requestArticleWrite = function(){

  var article = new article_back();
  console.log(article.number);

}

articleController_back.requestArticleUpdate = function(article){

	  var isSuccess = articleDao_back.
	
//	  var article = new article_back();
//	  console.log(article.number);

	}

module.exports = articleController_back;
