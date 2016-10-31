var board_back = require('./board_back');
var BoardDao_back = require('./boardDao_back');

var boardController_back = function(){

}

// 연결 테스트 코드
boardController_back.test = function(){

  console.log("boardController_back 연결 테스트입니다");
  BoardDao_back.test();
  board_back.test();

}

// 객체 생성 및 속성 불러오기 테스트 (확인후 맡는 용도로 수정할 것)
boardController_back.requestBoardWrite = function(board){

  var isSuccess = boardDao_back.writeDao(board);
  return isSuccess;

}

boardController_back.requestBoardRead = function(searchNum){

  var selectedBoard = boardDao_back.readDao(searchNum);
  return selectedBoard;

}



module.exports = boardController_back;
