// 구조분해할당: de+structuring
// de ==> not
// structure ==> 구조
// 배열이나 객체의 속성

// (1) 배열의 경우
let [value1, value2] = [1, "new"]; // 오른쪽 구조를 분해해 각각 0,1에 할당한다.
console.log(value1);
console.log(value2);

let arr = ["value1","value2","value3"];
let [a,b,c=2,d=4] = arr;
console.log(a, b, c, d); // d가 없다면 4를 할당하나, 원래 저 식이 없었다면, d는 undefined


// (2) 객체인 경우
// 배열은 순서가 중요했지만, 객체는 key가 중요하다.
let user = {
    name : "nbc",
    age : 30
};
// 구조 분해 할당
// let {name, age} = user;
// console.log(name, age); // key의 이름이 같아야 한다.

// let {name, age} = {
//     name : 'changhee',
//     age : 25
// };
// console.log(name, age);

// 새로운 이름으로 할당하는 방법
let {
    name : newName,
    age : newage
} = user;
console.log(newName);
console.log(newage);

let {name, age, birthday="today /*초기값 지정*/"} = user;
console.log(name, age, birthday);