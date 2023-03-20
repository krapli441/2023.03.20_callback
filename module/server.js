import http from 'http';
import bodyParser from 'body-parser';
import querystring from 'querystring';


const formTag = `
<form method="POST" action="/login">
<input type="text" name="id">
<input type="submit">
</form>
`;

function greet(fromSubmitString) {
return `<h1>${fromSubmitString}</h1>`;
}

function firstPage(data) {
return `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Document</title>
</head>
<body>
${data}
</body>
</html>
`;
}


const server = http.createServer(function(request, response){
// 최초접속
if(request.method === 'POST' && request.url === '/') {
response.writeHead(200, {'Content-Type': 'text/html'});
let page = firstPage(formTag);
response.write(page);
response.end();
}
// 무언가
if(request.method === 'POST' && request.url.startsWith('/login')) {
console.log(request.url);
const name = request.url.split('=')[1];
console.log(name);
response.writeHead(200, {'Content-Type': 'text/html'});
let page = firstPage(greet(name))
response.write(page);

response.end();
}
});
// 서버 포트 설정
server.listen(2080, function(error) {
if(error) { console.error('서버 안돌아감') } else { console.log('서버 돌아감'); }
});











// ----------------------


// import http from 'http'
// import bodyParser from 'body-parser';



// function greet(fromSubmitString) {
//   return `<h1>${fromSubmitString}</h1>`;
// }



// const server = http.createServer(function(request, response) {

//   response.statusCode = 200;
//   response.setHeader('Content-Type', 'text/html');

//   response.end();
// });

// server.listen(2080, function(error) {
//   if(error) { console.error('서버 안돌아감') } else { console.log('서버 돌아감'); }
//   });

// // http를 console.log 해보니 객체 안에 들어있다. 이것도 모듈이라는 것을 알 수 있음.
// // 객체 안에 들어있는 함수 = 메서드
// // 인자를 전달받았다는 것은 알 수 있음
// // 즉석으로 만들어 준다.

