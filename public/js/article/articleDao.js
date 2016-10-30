
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
}