// obj
// 2가지 속성

var obj = {
    vals : [1,2,3],
    logValues : function(v,i){
        console.log("test start");
        if(this===global){
            console.log("this가 글로벌입니다. 원하지 않은 결과");

        }
        else{
            console.log(this,v,i);
        }

        console.log("test ends");
    }
};

// 메소드 호출
obj.logValues(1,2); // this : obj


// forEach, map, filter (첫번째 인자: 요소, 두번쨰 인자 : 인덱스)
[4,5,6].forEach(obj.logValues);

// 결국 메소드의 형태를 넣은 것 처럼 보이나 function부터 시작하는 function을 넣은 것과 동일(메소드를 넣었다고 생각하지 않음)
// 매개변수를 호출해 줘야 this가 obj인 것이지 콜백으로 메소드를 넘겨주는 것은 함수와 동일 취급

