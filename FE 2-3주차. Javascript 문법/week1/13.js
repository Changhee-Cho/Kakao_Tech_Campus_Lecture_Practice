// 조건부 실행
let x = 10;

/*
    if(x>0){
        console.log("x는 양수입니다.");
    }
*/

// and조건(&&)
x>0 && console.log("x는 양수입니다."); // 앞의 조건을 만족하면 뒤에 있는 것을 실행하는 조건부 실행.

// or조건(||)
// 삼항 연산자와 단축평가
let y=20; // y는 undefined
let z = y || 20; // --> y가 undefined이면 20을 실행해 줘(y가 값이 없으면 우측 값으로 정의해라);
console.log(z);