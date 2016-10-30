var login_back = require('./login_back');
var loginDao_back = require('./loginDao_back');

var loginController_back = function(){

}

// 연결 테스트 코드
loginController_back.test = function(){

  console.log("loginController_back 연결 테스트입니다");
  loginDao_back.test();
  login_back.test();

}

// 객체 생성 및 속성 불러오기 테스트 (확인후 맡는 용도로 수정할 것)
loginController_back.requestLoginWrite = function(){

  var login = new login_back();
  console.log(login.number);

}

module.exports = loginController_back;
