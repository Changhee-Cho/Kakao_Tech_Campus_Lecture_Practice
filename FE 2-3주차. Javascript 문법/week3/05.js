var n = null;
console.log(typeof n); // object(js의 오류임 null이 Object로 반환됨)

// 동등연산자 --> 값만 같은지 확인
console.log(n == undefined); // true
console.log(n == null); // true

// 일치연산자 --> 값과 자료형이 같은지 확인
console.log(n === undefined); // false
console.log(n === null); // true