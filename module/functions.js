function one () {
  return 1;
}

function twoReturnString () {
  return "1";
}
// 함수를 보자마자 타입이 string인 것을 알 수 있는 무식한 방식


// two () === "1";

function isThree() {
  return true;
}

// 함수 앞에 is가 붙어있다면 boolean일 확률이 높음

function four() {
  return {
    a = 1,
    b = "2",
    c : true
  }
}


function five() {
  let a = 1 + 1;
}
// ! 위 함수와 같이 return이 없는 경우는 return void라고 한다.
// ! 실행만 하는 함수임. return을 필요로 하지 않는 함수도 존재한다.
// ! 대표적인 것이 for문. for문은 return이 없다.


// ! 어떤 함수든 return만 알아내면 쓸 수 있다.
// ! 하지만 일일히 확인할 수 없기 때문에 debugger를 이용한다.