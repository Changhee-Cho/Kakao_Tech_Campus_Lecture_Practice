// ES6

// 2015년도 이전 => var
// (1) ES6 => let(변수), const(상수)

// (2) arrow function
// 함수 선언문
function add(a, b){
    return a+b;
}
// 함수 표현식
let add1 = function(a,b){
    return a+b;
}

// 화살표 함수
let add2 = (x,y) => {
    return x+y;
}
let add3 = x=> 1;

// (3) 삼항 연산자
// condition ? true일 경우 : false일 경우
console.log(true ? "참":"거짓");
console.log(false ? "참":"거짓");