import http from 'http';
console.log(http)
const server = http.createServer(function(request, response) {
  
  let body = "";
  body += "<!DOCTYPE html>";
  body += "<html>";
  body += "<head>";
  body += "<title>Node.js</title>";
  body += "</head>";
  body += "<body>";
  body += "<h1>hello world</h1>";
  body += "</body>";
  body += "</html>";

  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/html');
  response.end('hello World');
});
// http를 console.log 해보니 객체 안에 들어있다. 이것도 모듈이라는 것을 알 수 있음.
// 객체 안에 들어있는 함수 = 메서드
// 인자를 전달받았다는 것은 알 수 있음
// 즉석으로 만들어 준다.

