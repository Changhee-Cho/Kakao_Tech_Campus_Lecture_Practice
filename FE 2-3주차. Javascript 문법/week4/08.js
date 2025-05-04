// bind
// call, apply: ()하자 마자 즉시 실행
// bind는 this를 바인딩 해 새로운 함수 리턴 --> 함수를 만들 때 유용

var obj1 ={
    name:'obj1',
    func : function(){
        console.log(this.name);
    },
};

setTimeout(obj1.func.bind(obj1), 1000);

var obj2 = {
    name : 'obj2'
}
setTimeout(obj1.func.bind(obj2),1500);