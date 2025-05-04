var obj = {
    a:1,
    method:function(x,y){
        console.log(this.a,x,y);
        console.log(this);
    }
};

// method 함수 안의 this는 항상 obj!!
// obj.method(2,3);
// 출력결과: 1,2,3

obj.method.call({a:4},5,6);
// obj.method.apply({a: 4},[5,6]);