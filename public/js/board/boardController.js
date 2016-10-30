//board controller 객체
function BoardController() {

	var dao = new BoardDao();

	// 글쓰기뷰 controller 메서드
	this.requestWriteView = function() {

		document.location = 'boardUpload.html';

	};

	// 글저장 controller 메서드
	this.requestSave = function(board) {

		var isSuccess = dao.saveDao(board);

		if (isSuccess === true) {
			alert('글 저장 성공');
		} else {
			alert('글 저장 실패');
		}

		document.location = 'boardList.html';

	};

	// 글목록 controller 메서드
	this.requestSelectAll = function() {

		var boards = dao.selectAllDao();
		return boards;

	};

	// 글조회 controller 메서드
	this.requestSelectOne = function(num) {

		var selectOneBoard = dao.selectOneDao(num);
		var requestUrl = 'selectOneView.html';
		requestUrl = requestUrl + '?num=' + selectOneBoard.num;
		requestUrl = requestUrl + '&title=' + selectOneBoard.title;
		requestUrl = requestUrl + '&content=' + selectOneBoard.content;
		requestUrl = requestUrl + '&writer=' + selectOneBoard.writer;
		requestUrl = requestUrl + '&readCount=' + selectOneBoard.readCount;

		document.location = requestUrl;

	};

	// 글목록뷰 controller 메서드
	this.requestSelectAllView = function() {

		document.location = 'boardList.html';

	};

	// 글수정 controller 메서드
	this.requestUpdate = function(board) {

		var isSuccess = dao.updateDao(board);

		if (isSuccess === true) {
			alert('글  수정 성공');
		} else {
			alert('글 수정 실패');
		}
		return isSuccess;
	};

	// 글삭제 controller 메서드
	this.requestDelete = function(num) {

		var isSuccess = dao.deleteDao(num);

		if (isSuccess === true) {
			alert('글 삭제 성공');
		} else {
			alert('글 삭제 실패');
		}

		document.location = 'boardList.html';

	};

	// 글선택 삭제 controller 메서드
	this.requestSelectDelete = function(delete_nums) {

		var isSuccess = dao.selectDelete(delete_nums);

		if (isSuccess == true) {
			alert('글 삭제 성공');
		} else {
			alert('글 삭제 실패');
		}

		document.location = 'boardList.html';
	}

}

//controller 객체(static)
var Controllers = function() {

};

Controllers.boardController = new BoardController();

Controllers.getBoardController = function() {

	return Controllers.boardController;

};
