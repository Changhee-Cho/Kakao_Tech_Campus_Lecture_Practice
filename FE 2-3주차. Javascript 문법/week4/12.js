// refactoring 
// 다시 구조화 하는 작업 (비효율적 코드를 효율적인 코드로 다시 작성)

var addCoffee = function(name){
    return function(prevName){
        return new Promise(function(resolve){
            setTimeout(function(){
                // 백틱 ``
                var newname = prevName ? `${prevName}, ${name}` : name;
                console.log(newname);
                resolve(newname);
            }, 500);
        });
    }
}

addCoffee("에스프레소")().then(addCoffee("아메리카노")).then(addCoffee("카페모카")).then(addCoffee("카페라뗴"));