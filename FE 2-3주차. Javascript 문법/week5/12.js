// 카운트 상태 변경 함수 #1
// 함수가 호출될 때마다 호출된 횟수를 누적하여 출력하는 카운터를

// 카운트 상태 변수
let num  =1;

// 카운트 상태 변경 함수
const increase = function(){
    // 카운트 상태를 1만큼 증가시킨다.
    return ++num;
};

console.log(increase());
num = 100; // 치명적인 단점이 있다., 은닉되지 않았기에 다른 사람이 접근할 수 있기 때문이다. --> 보완: 클로저 사용
console.log(increase());
console.log(increase());

// 보완해야 할 사항
//  1. 카운트 상태(num 변수의 값) =>increase 함수가 호출되기 전까지는 변경되지 x
//  2. 이를 위해서 count 상태는 increase 함수 만이 변경할 수 있어야 한다.
//  3. 전역변수 num이 문제다.  --> 지역변수로 바꾸면 괜찮을까?
