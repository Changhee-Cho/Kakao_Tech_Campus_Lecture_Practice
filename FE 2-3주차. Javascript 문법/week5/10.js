// [렉시컬 스코프]
// js엔진은 함수를 어디서 호출했는지가 아니라
// 어디에 정의했는지에 따라서 스코프(상위 스코프)를 결정한다.

//  외부 렉시컬 환경에 대한 참조값-> outer
// 함수 정의가 평가되는 시점!

const x=3;
// outeerFunc내에 innerFunc가 호출되고 있음에도 불구하고
function outerFunc(){
    const x= 10;
    innerFunc();
}

// innerFunc와 outerFunc는 서로 다른 scope를 가지고 있다.
function innerFunc(){
    console.log(x); // 3
}
outerFunc();