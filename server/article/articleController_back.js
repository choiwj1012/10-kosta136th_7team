var articleDao_back = require('./articleDao_back');

var articleController_back = function(){

}

// 연결 테스트 코드
articleController_back.test = function(){

  console.log("articleController_back 연결 테스트입니다");
  articleDao_back.test();

}

// save Controller
articleController_back.requestArticleWrite = function(article){

  var isSuccess = articleDao_back.saveDao(article);
  return isSuccess;

}

// List Controller
articleController_back.requestArticleList = function() {

	var send_articles = articleDao_back.listDao();
	return send_articles;

};

// update Controller
articleController_back.requestArticleUpdate = function(article){

	  var isSuccess = articleDao_bac.updateDao(article);
	  return isSuccess;

};

// Read Controller
articleController_back.requestArticleRead = function(num) {

	var send_article = articleDao_back.readDao();
	return send_article;

};

// SelectedDelete Controller
articleController_back.requestArticleSelectedDelete = function(delete_nums) {

	var isSuccess = articleDao_back.selectDeleteDao(delete_nums);
	return isSuccess;

}

// Delete Controller
articleController_back.requestArticleDelete = function(num) {

	 var isSuccess = articleDao_back.deleteDao(num);
	 return isSuccess;

}

module.exports = articleController_back;
