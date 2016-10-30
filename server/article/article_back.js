var article_back = function(t, c, w){

  // 변수 테스트 속성
  this.number = 0;
  this.title = t;
  this.content = c;
  this.writer = w;
  this.readCount = 0;

};

article_back.test = function(){

  console.log("article_back 연결 테스트 입니다");

};

module.exports = article_back;
