var articleDao_back = function(){

};

articleDao_back.test = function(){

  console.log("articleDao_back 연결 테스트 입니다");

};

articleDao_back.saveDao = function(article) {

	var isSuccess;

	try {

		var sql = 'insert into articles(title, content, writer) values(?, ?, ?)';
		var values = [article.title, article.content, article.writer];

		insertQuery(sql, values, function(result) {

			isSuccess = result;

		});

		function insertQuery(sql, values, callback) {

			db.query(sql, values, function(error, result) {

			});

			callback({ message : true });

		}
    
	} catch (e) {

		console.log('ArticleDao 객체 : saveDao 메서드에서 예외 발생');
		isSuccess = { message : false };

	}

	return isSuccess;

};

articleDao_back.listDao = function() {

	var send_articles;

	try {

		var sql = 'select * from articles';

		listQuery(sql, function(result) {

			send_articles = result;

		});

		function listQuery(sql, callback) {

			db.query(sql, function(error, result) {

			});

			callback({ send_articles });

		}

	} catch (e) {

		console.log('ArticleDao 객체 : listDao 메서드에서 예외 발생');

		send_articles = { undefined };

	}

};

articleDao_back.readDao = function(num) {

	var send_article;

	try {

		var sql = 'select * from articles where num = ?';
		var values = [num];

		readQuery(sql, values, function(result) {

			send_article = result;

		});

		function readQuery(sql, values, callback) {

			db.query(sql, values, function(error, result) {

			});

			callback({ send_article });

		}

	} catch (e) {

		console.log('ArticleDao 객체 : selectOneDao 메서드에서 예외 발생');
		send_article = { undefined };

	}

};

articleDao_back.updateDao = function(article) {


	var isSuccess;
	try {

	var sql = 'update from articles where num =?';
	var values = [article.num, article.title, article.content, article.writer];

	updateQuery(sql, values, function(result) {

		isSuccess = result;

	});

	function updateQuery(sql, values, callback) {

		db.query(sql, values, function(error, result) {

		});

		callback({ message : true });

	}

	} catch (e) {

		console.log('ArticleDao 객체 : updateDao 메서드에서 예외 발생');
		isSuccess = { message : false };

	}


};

articleDao_back.deleteDao = function(num) {

	var isSuccess;
	try {

	var sql = 'delete from articles where num =?';
	var values = [num];

	deleteQuery(sql, values, function(result) {

		isSuccess = result;

	});

	function deleteQuery(sql, values, callback) {

		db.query(sql, values, function(error, result) {

		});

		callback({ message : true });

	}

	} catch (e) {

		console.log('ArticleDao 객체 :deleteDao 메서드에서 예외 발생');
		isSuccess = { message : false };

	}

};

articleDao_back.selectDeleteDao = function(delete_nums) {

	var isSuccess;

	try {

		var sql = 'delete from aticles where num ?';
		var values = [delete_nums];

		deleteQuery(sql, values, function(result) {

			isSuccess = result;

		});

		function deleteQuery(sql, values, callback) {

			db.query(sql, values, function(error, result) {

			});

			callback({ message : true });

		}

	} catch (e) {

		console.log('ArticleDao 객체 : selectDeleteDao 메서드에서 예외 발생');
		isSuccess = { message : false };

	}

};

module.exports = articleDao_back;
