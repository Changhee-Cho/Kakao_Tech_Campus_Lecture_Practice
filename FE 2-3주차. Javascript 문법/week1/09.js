// 스코프(변수의 영향 범위), 전역변수(전체에 영향), 지역변수(함수의 내에서만), 화살표함수
function printX(){
    let x = 10;
    console.log(x);
}

console.log(x);
printX();
