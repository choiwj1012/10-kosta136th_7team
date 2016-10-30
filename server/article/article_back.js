var article_back = function(title, content, writer){

  // 변수
  this.number = 0;
  this.title = title;
  this.content = content;
  this.writer = writer;
  this.readCount = 0;

};

article_back.test = function(){

  console.log("article_back 연결 테스트 입니다");

};

module.exports = article_back;
