// 무슨 제어권? 2번째
// 인자에 대한 제어권을 갖느다.

// map 함수
// index나 currentValue는 사람이 이해할 수 있는 변수명일 뿐
// 컴퓨터가 인식할 수 있는 것은 매개변수의 위치임
// 인자의 순서도 넘겨받은 함수에 제어권이 있음
var newArr = [10,20,30].map(function(index, currentValue){
    console.log(index,currentValue);
    return currentValue+5;
});
//return이 없으면 undefined가 할당됨

console.log(newArr); 