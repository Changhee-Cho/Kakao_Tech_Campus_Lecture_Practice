const increase = function(){
    let num=0;
    return ++num;
};

console.log(increase());
console.log(increase());
console.log(increase());

// [리뷰]
// 1. num 변수는 increase 함수의 지역변수로 선언 -> 변경은 방지
//  == >num 변수는 오직 increase 함수만이 변경할 수 있었슴
//  2. 하지만 increase()가 호출될 때마다 num이 초기화되는 이상한코드
//  3. 여러번 호출해도 출력값은 언제나 1
//  * 의도치 않은 변경은 방지하면서, 이전 상태를 유지해야 함 --> 결론 클로저!
