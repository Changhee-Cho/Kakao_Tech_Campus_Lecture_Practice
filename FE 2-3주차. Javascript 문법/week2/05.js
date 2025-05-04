// 일급객체로써의 함수(2)
const person = {
    name : 'john',
    age : 31,
    isMarried : true,
    sayHello : function(){
        //console.log("Hello my name is", this.name);  // scope{} 안에서의 this 는 항상 자기 자신을 가리킨다. 
        console.log(`Hello my name is ${this.name}`);
    }
};
const changhee = {
    name : 'changhee',
    age : 25,
    isMarried : false,
    // sayHello : ()=>{
    //     console.log("Hello my name is", this.name);
    //     // 화살표 함수를 쓰면 this.name이 undefined로 나옴
    //     // 화살표 함수는 this를 바인딩하지 않는다.
    // }
};