// 변수, 상수
// 메모리에 저장한다. 읽어들여서 재사용한다. --> 변수

// 변수의 5가지 주요 개념

// 변수 이름: 저장된 값의 고유 이름
// 변수 값: 변수에 저장된 값
// 변수 할당 : 변수에 값을 저장하는 행위
// 변수 선언 : 변수를 사용하기 위해 컴퓨터에 알리는 행위
// 변수 참조 : 변수에 할당되는 값을 읽어오는 것

// 변수를 선언할 수 있는 3가지 방법 : var, let, const

// 1. var
var myVar="Hello world";
myVar = "Goodbye 1";
console.log(myVar);


var myVar1;
myVar1 = 3;
// var myVar1 = 3; 과 동일

// 2. let
let myLet= "Hello world1";
myLet = "Goodbye 2";
console.log(myLet);

//3. const
const myConst = "hello world2";
//myConst = "Goodbye 3";
console.log(myConst);
//const myConst = "test3";

// var와 let의 차이
  // 1. var는 동일 이름으로 재선언이 가능하지만, let과 const는 할 수 없다.
  // 2. const는 var, let과 다르게 변수를 재할당 할 수 있으나 const는 불가능하다.


