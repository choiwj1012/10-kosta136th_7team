var mysql = require('mysql');

// connect mysql DB
var db = mysql.createConnection({
  host : 'localhost',
  port : 3306,
  user : 'root',
  password : 'knight85',
  database : 'articledb'
});

var articleDao_back = function(){

};

// test method
articleDao_back.test = function(){

  console.log("articleDao_back 연결 테스트 입니다");

};

// 글저장 method
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

// 글목록 dao method
articleDao_back.listDao = function() {

  var send_articles;

	try {

		var sql = 'select * from articles';

    selectAllQuery(sql, function(result){

      send_articles = result;

    });

    function selectAllQuery(sql, callback){

      db.query(sql, function(error, result){
        console.log(send_articles);
        send_articles = result;
        console.log(send_articles);
      });

      callback({send_articles});

    }

	} catch (e) {

		console.log('ArticleDao 객체 : listDao 메서드에서 예외 발생');
    console.log(e.message);
		send_articles = undefined;

	}

  console.log(send_articles);
  return send_articles;

};

// 글선택읽기 method
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

// 글 수정 method
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

// 글삭제 method
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

// 글 선택 삭제 method
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
