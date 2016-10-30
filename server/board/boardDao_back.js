var boardDao_back = function() {

};

boardDao_back.test = function() {

    console.log("boardDao_back 연결 테스트 입니다");

};

boardDao_back.writeDao = function(board) {

    var sql = 'insert into boards(title, content, writer) values(?, ?, ?)';
    var values = [board.title, board.content, board.writer];

    try {
        insertQuery(sql, values, function(result) {

            isSuccess = result;

        });

        function insertQuery(sql, values, callback) {

            db.query(sql, values, function(error, result) {

            });

            callback({
                message: true
            });

        }

    } catch (e) {

        console.log('ArticleDao 객체 : saveDao 메서드에서 예외 발생');
        isSuccess = {
            message: false
        };

    }

    return isSuccess;

}

boardDao_back.readDao = function(selectNum) {

   var sql = 'SELECT * FROM boards WHERE num = ?'
   var values = selectNum;

   try {
      insertQuery(sql, values, function(result){
         
      });
   }

}

module.exports = boardDao_back;
