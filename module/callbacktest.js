
function seven(number, append) {
  return number + append;
}
// ! 실행 구문을 만들어놓고 나중에 '호출'할 때 쓰는 것
// ! 함수를 '정적'으로 제작했다. 필요할 때 할당, 호출하는 방식
// ! 미리 만들어 놓은 것이 문제점임.
// ? 알고리즘, 실행부를 즉석에서 만들 순 없나?


function eight(number, append, callback) {
  let a = number + 1;
  let b = number + 2;
  return callback(a, b);
}
// ! 세번째 매개변수 (가장 마지막 매개변수에 callback을 붙여줌)
// ! 인자를 전달받는다. arugument를 전달 받았다.
// ! 매개변수 자리에 함수가 들어가는 것를 callback이라고 함

console.log(eight(3,2, function(a, b){
  return a + b;
}));
// ! '호출 할 때' 결정됐음

console.log(eight(3,4, seven));
// ? 함수 호출이 아니고 이름만 가져왔는데 된다?