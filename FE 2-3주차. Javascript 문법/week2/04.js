// 자바스크립트에서 함수는 일급 객체(First-Class Object)
// 다른 객체들과 일반적으로 동일하다.(매개변수로 전달, 리턴문 출력, 연산이 가능)
// 함수는 객체로써 존재한다.
// 따라서 다른 언어와 다르게 함수를 매우 유연하게 사용할 수 있다.

// 일급객체로써의 함수

// (1) 변수에 함수를 할당할 수 있다.
// 함수가 마치 값으로 취급된다.
// 함수가 나중에 사용될 수 있도록 조치가 되었다.
const sayHello = function(){
    console.log("hello");
};

// (2) 함수를 인자로 다른 함수에 전달할 수 있다.
// (2-1). 콜백함수: 매개변수로써 쓰이는 함수
// (2-2). 고차함수: 함수를 인자로 받거나 return 하는 함수
function callFunction(func){
    // 매개변수로 받은 변수가 사실 함수이다.
    func();
};
// callFunction(function(){
//     console.log("hello");
// });

callFunction(sayHello); // 매개변수로 줄 때 () 안함 유의


// (3) 함수를 반환할 수 있다.
function createAdder(num){
    return function(x){
        return x+num;
    }
}
const addFive = createAdder(5);
console.log(addFive(10));