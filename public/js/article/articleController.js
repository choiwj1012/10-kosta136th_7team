function ArticleController() {

	var dao = new ArticleDao();

	//articleWriteView Controller 메서드
	this.requestWriteView = function() {

		document.location = "articleWrite.html";

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

	};

	// 글목록 controller 메서드
	this.requestSelectAll = function() {

		var articles = dao.selectAllDao();
		return articles;

	};

	// 글조회 controller 메서드
	this.requestSelectOne = function(num) {

		document.location = 'articleRead.html';
		var selectOneArticle = dao.selectOneDao(num);

	};

	// 글수정 view Controller 메서드
	this.requestUpdateView = function() {

		document.location = 'articleUpload.html';

	}

	// 글조회 view Controller 메서드
	this.requestReadView = function() {

		document.location = 'articleRead.html';

	}

	// 글수정 controller 메서드
	this.requestUpdate = function(article) {

		var isSuccess = dao.updateDao(article);

		if (isSuccess === true) {
			alert('글  수정 성공');
		} else {
			alert('글 수정 실패');
		}

		return isSuccess;

	};

	// 글선택 삭제 controller 메서드
	this.requestSelectDelete = function(delete_nums) {

		var isSuccess = dao.selectDelete(delete_nums);

		if (isSuccess == true) {
			alert('글 삭제 성공');
		} else {
			alert('글 삭제 실패');
		}

		document.location = 'articleList.html';
		
	};

	// 글삭제 controller 메서드
	this.requestDelete = function(num) {

		var isSuccess = dao.deleteDao(num);

		if (isSuccess === true) {
			alert('글 삭제 성공');
		} else {
			alert('글 삭제 실패');
		}

		document.location = 'selectAllView.html';

	};

}

var Controllers = function() {

};

Controllers.articleController = new ArticleController();

Controllers.getArticleController = function() {

	return Controllers.articleController;

};
