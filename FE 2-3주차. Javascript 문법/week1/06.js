// 연산자(+, -, *, /, %)

// 1. 더하기 연산자(우선순위: 문자열)
console.log(1+1);
console.log(1+"1");

// 2. 빼기 연산자(우선순위: 숫자)
console.log(1-"2");
console.log(1-2);

// 3. 곱하기 연산자(우선순위: 숫자)
console.log(2*3);
console.log("2"*3);

// 4. 나누기 연산자(우선순위: 숫자)
console.log(3/2);
console.log("3"/3);

// 5. 나누기 연산자(/) vs 나머지 연산자(%)
console.log(5/2); // 2.5
console.log(5%2); //1

// 6. 할당 연산자(assignment)
// 6-1. 등호 연산자(=)
let x = 10;
console.log(x);

// 6-2. 더하기 등호 연산자(+=)
x += 5;  // x = x+5;
console.log(x);

// 6-3. 빼기 등호 연산자(-=)
x -= 5;
console.log(x);

// 6-3. 곱하기 등호 연산자(*=)
let a = 10;
a *= 20;
console.log(a);

// 비교 연산자(값 비교 후 true ㄸ또는 false를 반환)
// 1. 일치 연산자(===)
// - 타입까지 일치해야 true를 반환하는 연산자

// 숫자 2가 숫자 2랑 같나? 응!
console.log(2 === 2); // true
console.log(2 === "2"); // false
console.log("2" === 2); // false

// 2. 불일치 연산자(!==)
// - 타입까지 일치해야 false를 반환하는 연산자

// 숫자 2가 숫자 2와 다르니?  아니!
console.log(2 !== 2); // false
console.log("2" !== 2); // true
console.log(2 !== "2");  // true

// 3. 작다 연산자(<), 작거나 같다 연잔자(<=)
console.log("================================");
console.log(2 < 3); // true
console.log(2 <= 3); // true

// 4. 논리 연산자
// 4-1. 논리곱 연산자 : 모두 true 일 때 true 반환
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

// 4-2. 논리합 연산자: 하나라도 true 이면 true 반환
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

// 4-3. 논리 부정 연산자(!)
// 값을 반대로 바꿈
console.log(!true);
let b = true;
console.log(!b);

// 5. 삼항 연산자(중요)
// 조건에 따라 값을 선택한다.
let z = 10;
let result = ( z>5 ? "크다":"작다" );
console.log(result);

console.log("=======================");
// 3항 연산자를 이용하여 y가 10보다 작은 경우 작다를
// console.log()로 출력해 주세요.
// 10보다 크다면 크다를 출력해 주세요.
let y = 20;
console.log(y>10?"크다":"작다");

// 6. 타입 연산자(typeof)
console.log(typeof 5);