// 비동기 작업: 순서를 보장하지 않는다.(언제 제어권이 나에게 올지 모른다.)
// 비동기 작업의 동기적 표현이 필요하다. (Promise, generator, async/await)

// promise : 비동기 처리에 대해 처리가 끝나면 알려달라는 약속
// resolve: 성공함, reject 실패함 처리결과에 따라 다음(then), 오류(catch)를 할 수 있다.

new Promise(function(resolve){
    setTimeout(function(){
        var name = "에스프레소";
        console.log(name);
        resolve(name);
    }, 500);
}).then(function(priv_name){
    // 이 안에서도 새롭게 프로미스를 생성
    return new Promise(function(resolve){
        setTimeout(function(){
            var name = priv_name + ", 아메리카노";
            console.log(name);
            resolve(name);
        }, 500);
    })
}).then(function(priv_name){
    // 이 안에서도 새롭게 프로미스를 생성
    return new Promise(function(resolve){
        setTimeout(function(){
            var name = priv_name + ", 카페모카";
            console.log(name);
            resolve(name);
        }, 500);
    })
}).then(function(priv_name){
    // 이 안에서도 새롭게 프로미스를 생성
    return new Promise(function(resolve){
        setTimeout(function(){
            var name = priv_name + ", 카페모카";
            console.log(name);
            resolve(name);
        }, 500);
    })
});