// 콜백 함수 : 다른 함수에 인자로 넘겨주는 함수 
// 콜백 함수를 넘겨 받는 주체: forEach, setTimeout
// 콜백함수는 필요에 따라 적절한 시점에 실행됨(제어권은 넘겨 받는 주체에게 있음)
// 제어권을 넘겨줄테니 너가 알고 있는 그 로직으로 처리해 줘

//  콜백함수는 다른 코드(함수 또는 메서드)에게 인자를 넘겨줌으로써 그 제어권도 함께 위임한 함수.
// 콜백 함수를 위임받은 코드는 자체적으로 내부로직에 의해 콜백 함수를 적절한 시점에 시행

// 1000ms 뒤에 실행되는 setTimeout(이것은 setTimeout의 로직)
setTimeout(function(){
    console.log("Hello world");
}, 1000);

const numbers = [1,2,3,4,5];
numbers.forEach(function(number){
    console.log(number);
});

