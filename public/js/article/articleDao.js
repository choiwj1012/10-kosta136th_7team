function ArticleDao() {

	//글저장 dao 메서드
	this.saveDao = function(article) {

		var isSuccess;

		try {
			$.ajax({
				url: '/articleWrite',
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

				url: '/articleList',
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

		return articles;

	};

	// 글조회 dao 메서드
	this.selectOneDao = function(searchNum) {

		var article;

		try {
			//동기식
			$.ajax({
				url: '/articleRead',
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
				url: '/articleSelectedDelete',
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

	// 글삭제 dao 메서드
	this.deleteDao = function(DeleteNum) {

		var isSuccess;

		try {
			//동기식
			$.ajax({
				url: '/articleDelete',
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
			console.log('ArticleDao 객체 : deleteDao 메서드에서 예외 발생');
			console.log(e.message);
		}

		return isSuccess;

	};

	// 글수정 dao 메서드
	this.updateDao = function(article) {

		var isSuccess;

		try {
			//동기식
			$.ajax({
				url: '/articleUpdate',
				async : false,
				type: 'get',
				dataType: 'json',
				data: {
					num : article.num,
					title: article.title,
					content: article.content,
					writer: article.writer
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
