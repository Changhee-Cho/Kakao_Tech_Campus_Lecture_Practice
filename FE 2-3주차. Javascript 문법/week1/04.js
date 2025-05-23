// 불리언(Boolean)
// true(참), false(거짓)
let bool1 = true;
let bool2 = false;

console.log(bool1);
console.log(typeof bool1);
console.log(bool2);
console.log(typeof bool2);

// undefined
// un:not, define : 정의하다 따라서 정의되지 않은 값
let x;
console.log(typeof x);
console.log(x); //->값이 할당되지 않아 undefined가 나옴

// null : 값이 존재하지 않음을 '명시적'으로 나타내는 방법(의도적으로)
// null != undefined
let y = null;
console.log(typeof y);
console.log(y);

// object(객체) : key-value pair
let person = {
    name : 'choi',
    age : 24,
    isMarried : true,
}
console.log(typeof person);

// array(배열)
// 여러 개의 데이터를 순서대로 저장하는 데이터 타입
let number = [1, 2, 3, 4, 5];
let fruits = ['apple', 'banana', 'orange'];

