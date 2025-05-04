// 화살표 함수
// ES6 신 문법
 
// 기존 
function add(x,y){
    return x+y;
}

// 1-1. 기본적인 화살표 함수
let arrow_func01 = (x,y) =>{
    return x+y;
};

console.log(arrow_func01(10,20));

// 1-2. 한 줄로
let arrow_func02 = (x,y) => x+y; // return문을 뺼 수 있는 조건: 중괄호 내의 명령어가 1줄일 경우에만 가능, 괄호도 같음


function testFunc(x){
    return x;
}

let arrow_func03 = x => x; // 매개변수도 1개일 때에는 ()를 생략 가능하다.