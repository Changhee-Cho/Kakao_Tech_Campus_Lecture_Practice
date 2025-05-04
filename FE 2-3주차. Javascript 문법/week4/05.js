// 앞서서의 콜백함수: 콜백함수도 함수이기 때문에 기본적으로 this는 전역 객체를 참조한다.
// 예외사항: 제어권을 넘겨받을 코드에서 콜백 함수에 별도로 this가 될 대상을 지정한 경우에는 그 대상을 참조한다.(setActionListener) --> 설계가 그렇게 되어 있음, callback을 받는 함수 내부에서 명시적으로 되어 있기 때문

// callback(콜백함수를 인자로 받겠다.)
Array.prototype.map123 = function(callback, thisArg){
    // map 함수에서 return할 결과 배열
    var mappedArr = [];

    // 여기에서의 this는 호출 주체([1,2,3]);
    for(var i = 0; i<this.length; i++){
        var mappedValue = callback.call(thisArg || globalThis, this[i]);
        mappedArr[i]=mappedValue;
    }
    return mappedArr;
};

var newArr = [1,2,3].map123(function(number){
    return number*2;
});

console.log(newArr);
console.log(newArr.this);