import fs from 'fs';

let name = "parkjunhyeong";
let date = new Date();
// let fileName = date.getFullYear() + date.getMonth() + date.getDay() + name;
let year = "2023";
let month = "3";
let day = "20";
let fileName = year + month + day + "-" + name;

fs.writeFileSync("./" + fileName + ".txt", name);
// ! 파일을 동기 방식으로 쓰다
// ! 만든 것을 동적으로 저장할 수 있다
// ! CRUD의 C를 해보았다.