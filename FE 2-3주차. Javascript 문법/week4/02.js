// 무슨 제어권?

// 1. 호출 시점에 대한 제어권
// setInterval(function(){}); --> 반복해서 매개변수로 받은 함수의 로직을 수행한다.
// setTimeout(); -->  몇 초 후 실행되게 
var count=0;
var cbFunc=function(){
    console.log(count);
    if(++count>4){
        clearInterval(timer); // 고유값을 없애써 반복되는 것을 삭제
    }
}

// setInterval의 반환값 : timer
// setInterval의 고유 값이 a에 담기는데, a를 멈추는 과정이 필요
// 호출주체와 제어권은 setInterval
var timer = setInterval(cbFunc, 300); // 300이 제어권