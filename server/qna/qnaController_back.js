var qna_back = require('./qna_back');
var qnaDao_back = require('./qnaDao_back');

var qnaController_back = function(){

}

// 연결 테스트 코드
qnaController_back.test = function(){

  console.log("qnaController_back 연결 테스트입니다");
  qnaDao_back.test();
  qna_back.test();
  
}

// 객체 생성 및 속성 불러오기 테스트 (확인후 맡는 용도로 수정할 것)
qnaController_back.requestQnaWrite = function(){

  var qna = new qna_back();
  console.log(qna.number);

}

module.exports = qnaController_back;
