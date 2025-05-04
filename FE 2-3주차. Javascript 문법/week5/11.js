const x=1;
// outeerFunc내에 innerFunc가 호출되고 있음에도 불구하고
function outerFunc(){
    const x= 10;
    const inner = function(){
        console.log(x);
    };
    return inner;
}

// innerFunc와 outerFunc는 서로 다른 scope를 가지고 있다.
const innerFunc = outer();
innerFunc();

// 클로저: 외부함수보다 중첩 함수가 더 오래 유지되는 경우 중첩함수는 이미 생명 주기가 종료한 외부 함수 변수를 여전히 참조할 수 있다.