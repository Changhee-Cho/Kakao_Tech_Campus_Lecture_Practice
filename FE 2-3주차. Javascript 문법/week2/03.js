// 단축 속성명 : property shorthand
const name = "nbc";
const newage = 30;

// key-value
const obj ={
    name, //이름이 같으면 생략이 가능 (name:name);
    age: newage
}
// 따라서 만약 name과 age로 정의되어 있고, 키 값이 같다면, 아래와 같이 정의할 수 있다.
// const obj = { name, age };
// const obj = { name : name, age: age}; // 위와 같은 것이다.

// 전개 구문 = spread operator
// destructureing과 함께 가장 많이 사용되는 es6 문법 중 하나
let arr = [1,2,3];
console.log(arr);    // [1,2,3]
console.log(...arr); // 1 2 3 따라서 구조를 벗어버리고 새로운 구조를 생성해야 할 때

let newArr = [...arr, 4];
console.log(newArr);

// 객체
let user = {
    name : 'nbc',
    age : 30
};

let user2 ={
    ...user,
    birthday:"March 9"
};

console.log(user2);

// 나머지 매개변수(rest parameter) --> 매개변수의 개수를 정확히 모를 때
function exampleFunctino(a,b,c, ...args){
    console.log(a,b,c);
    console.log(...args); //위는 나머지 매개변수, 얘는 전개 구문
    console.log(args);
}
exampleFunctino(1,2,3,4,5,6,7);

// 템플릿 리터럴(template literal) -- > 백틱, 따옴표와 비슷하나 추가 기능이 있음
// $를 이용해 변수의 값이나 식을 사용할 수 있음
// 따옴표는 멀티라인을 지원하지 않으나, 백틱은 멀티라인을 지원함
console.log(`Hello World! ${3+3}`);
console.log(`
    Hello,
        my name is Javascript`);