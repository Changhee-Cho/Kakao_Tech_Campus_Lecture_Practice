// 명시적 this binding
// call, apply, bind
// call
var func = function (a,b,c){
    console.log(this, a,b,c);
}

// no binding
// func(1,2,3);

// 명시적 binding
func.call({x:1},4,5,6);
func.apply({x:1},[4,5,6]); //call과 유사하나, 매개변수를 []로 묶어주는 것과 동일
