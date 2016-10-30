var article_back = require('./article_back');
var articleDao_back = require('./articleDao_back');

var articleController_back = function(){

}

// 연결 테스트 코드
articleController_back.test = function(){

  console.log("articleController_back 연결 테스트입니다");
  articleDao_back.test();
  article_back.test();

}

// 객체 생성 및 속성 불러오기 테스트 (확인후 맡는 용도로 수정할 것)
articleController_back.requestArticleWrite = function(){

  var article = new article_back();
  console.log(article.number);

}

articleController_back.requestArticleUpdate = function(article){

	  var isSuccess = articleDao_back.saveDao(article);
	  return isSuccess;
//	  var article = new article_back();
//	  console.log(article.number);

	};

module.exports = articleController_back;
