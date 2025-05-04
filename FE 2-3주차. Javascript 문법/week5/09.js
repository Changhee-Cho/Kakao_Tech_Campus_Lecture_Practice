// 클로저
const x =1;
function outerFunc(){
    const x= 10;
    function innerFunc(){
        // x는 어디서 참조할까
        // 내부에 없어 외부를 찾고, lexical은 함수가 실행될 때의 렉시컬이므로 x=10이 들어감
        // 함수가 선언된 렉시컬 환경 -> 함수가 선언될 당시의 외부 변수 등의 정보
        console.log(x);
    }

    innerFunc();
}

outerFunc();