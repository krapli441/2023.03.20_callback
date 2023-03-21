import fs from 'fs';

let name = "parkjunhyeong";
let date = new Date();
let year = date.getFullYear();
let fileName = year + name;
console.log(fileName);

fs.writeFileSync("./" + fileName + ".txt", name);
// ! 파일 생성

// fs.rmSync("./" + "202321parkjunhyeong.txt");
// ! 파일 제거


// ! 파일을 동기 방식으로 쓰다
// ! 만든 것을 동적으로 저장할 수 있다
// ! CRUD의 C를 해보았다.