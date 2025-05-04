const increase=function(){
    // 카운트 상태 변수
    let num = 0;
    // 클로저
    return function(){
        return ++num;
    };
};

console.log(increase());
console.log(increase());
console.log(increase());

// [코드 설명]
//  1. 위 코드가 실행되면, 즉시 실행 함수가 호출-->함수가 반환(innerFunc) - > increase에 할당
//  2. increase 변수에 할당된 함수는 자신이 정의된 위치에 의해서 결정된 상위 스코프인 즉시 실행 함수의 렉시컬 환경을 기억하는 클로저 함수 -> let num =0; 을 기억한다.
//  3. 즉시 실행함수는 즉시 소멸됨 (outer 함수가 불리자마자 바로 call stack에서 popup 되는 것과 비슷)
//  [결론] : num은 초기화가 되지 않았으며, 외부에서 접근할 수 없는 은닉된 값! (의도되지 않은 변경도 걱정할 필요가 없다.)
// --> increase에서만 변경할 수 있기 때문이다. 