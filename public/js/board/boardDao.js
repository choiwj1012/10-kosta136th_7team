//board dao 객체
function BoardDao() {

	// 글저장 dao 메서드
	this.saveDao = function(board) {

		var isSuccess;

		try {

//			//비동기
//			$.getJSON( "/save", { title: article.getTitle(), content: article.getContent(),writer: article.getWriter() } ,function( isSuccess_String) {
//			alert(isSuccess_String.message);
//			isSuccess = eval('(' + isSuccess_String.message + ')'); //변환시켜라 자바스크립트코드로
//			});

			//동기식
			$.ajax({
				url: '/save',
				async : false,
				type: 'get',
				dataType: 'json',
				data: board,
				success:  function (data) {
					var messageValue =data;
					isSuccess = eval('(' + messageValue.message + ')');
				}
			});


		} catch (e) {
			console.log('BoardDao 객체 : saveDao 메서드에서 예외 발생');
			console.log(e.message);
		}

		return isSuccess;

	};

	// 글목록 dao 메서드
	this.selectAllDao = function() {

		var boards = [];

		try {

			//동기식
			$.ajax({
				url: '/selectAll',
				async : false,
				type: 'get',
				dataType: 'json',
				success:  function (data) {
					boards = data;
				}
			});


		} catch (e) {
			console.log('BoardDao 객체 : selectAllDao 메서드에서 예외 발생');
			console.log(e.message);
		}

		return boards;

	};

	// 글조회 dao 메서드
	this.selectOneDao = function(searchNum) {

		var board;

		try {
			//동기식
			$.ajax({
				url: '/selectOne',
				async : false,
				type: 'get',
				data: {
					num : searchNum
				},
				dataType: 'json',
				success:  function (data) {
					board = data;
				}
			});

		} catch (e) {
			console.log('BoardDao 객체 : selectOneDao 메서드에서 예외 발생');
			console.log(e.message);
		}

		return board;

	};

	// 글수정 dao 메서드
	this.updateDao = function(board) {

		var isSuccess;

		try {
			//동기식
			$.ajax({
				url: '/update',
				async : false,
				type: 'get',
				dataType: 'json',
				data: {
					num : board.num,
					title: board.title,
					content: board.content,
					writer: board.writer
				},
				success:  function (data) {
					var messageValue = data;
					isSuccess = eval('(' + messageValue.message + ')');
				}
			});
		} catch (e) {
			console.log('BoardDao 객체 : deleteDao 메서드에서 예외 발생');
			console.log(e.message);
		}

		return isSuccess;

	};

	// 글삭제 dao 메서드
	this.deleteDao = function(DeleteNum) {

		var isSuccess;

		try {
			//동기식
			$.ajax({
				url: '/delete',
				async : false,
				type: 'get',
				dataType: 'json',
				data: {
					num : DeleteNum
				},
				success:  function (data) {
					var messageValue = data;
					isSuccess = eval('(' + messageValue.message + ')');
				}
			});

		} catch (e) {
			console.log('BoardDao 객체 : deleteDao 메서드에서 예외 발생');
			console.log(e.message);
		}

		return isSuccess;

	};

	//글선택삭제 dao 메서드
	this.selectDelete = function(delete_nums) {

		var isSuccess;

		try {
			//동기식
			$.ajax({
				url: '/selectDelete',
				async : false,
				type: 'get',
				dataType: 'json',
				data: {
					nums : delete_nums
				},
				success:  function (data) {
					var messageValue = data;
					isSuccess = eval('(' + messageValue.message + ')');
				}
			});

		} catch (e) {
			console.log('BoardDao 객체 : deleteDao 메서드에서 예외 발생');
			console.log(e.message);
		}

		return isSuccess;

	};

}
