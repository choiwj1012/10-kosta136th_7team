
function ArticleDao() {

	//글저장 dao 메서드
	this.saveDao = function(article) {

		var isSuccess;

		try {
			$.ajax({
				url: '/save',
				async : false,
				type: 'get',
				dataType: 'json',
				data: article,
				success: function(data) {
					var messageValue = data;
					isSuccess = eval('(' + messageValue.message +')');
				}
			});
		} catch (e) {
			console.log('ArticleDao 객체 : saveDao 메서드에서 예외 발생');
		}

		return isSuccess;
	};

	// 글목록 dao 메서드
	this.selectAllDao = function() {

		var articles = [];

		try {

			//동기식
			$.ajax({
				url: '/selectAll',
				async : false,
				type: 'get',
				dataType: 'json',
				success:  function (data) {
					articles = data;
				}
			});


		} catch (e) {
			console.log('ArticleDao 객체 : selectAllDao 메서드에서 예외 발생');
			console.log(e.message);
		}

		return 
		;

	};

	// 글조회 dao 메서드
	this.selectOneDao = function(searchNum) {

		var article;

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
					article = data;
				}
			});

		} catch (e) {
			console.log('ArticleDao 객체 : selectOneDao 메서드에서 예외 발생');
			console.log(e.message);
		}

		return article;

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
			console.log('ArticleDao 객체 : deleteDao 메서드에서 예외 발생');
			console.log(e.message);
		}

		return isSuccess;

	};

}