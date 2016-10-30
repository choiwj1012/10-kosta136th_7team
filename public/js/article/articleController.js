function ArticleController() {
	
	var dao = new ArticleDao();
	
	//articleWriteView Controller 메서드
	this.requestWriteView = function() {
		
		document.location = "writeView.html";
		
	};
	//articleListView Controller 메서드
	this.requestListView = function() {
		
		document.location = "articleList.html";
		
	};
	
	//save Controller 메서드
	this.requestSave = function(article) {
		
		var isSuccess = dao.saveDao(article);
		
		if(isSuccess === true) {
			alert('게시글이 등록 되었습니다.');
		} else {
			alert('게시글 등록이 실패하였습니다.');
		}
		
		document.location = "articleList.html";
	}
}

var Controllers = function() {
	
	var ArticleController = articleController;
	
};

Controllers.articleController = new ArticleController();

Controllers.getArticleController = function() {
	
	return Controllers.articleController;
	
};

module.exports = Controllers;