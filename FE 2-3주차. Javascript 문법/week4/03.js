// 무슨 제어권? 2번째
// 인자에 대한 제어권을 갖느다.

// map 함수
var newArr = [10,20,30].map(function(currentValue, index){
    console.log(currentValue, index);
    return currentValue+5;
});
//return이 없으면 undefined가 할당됨

console.log(newArr); 