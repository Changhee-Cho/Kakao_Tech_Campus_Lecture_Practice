// 03.js의 패턴을 예제에 적용

// 이런 패턴을 어떨까
var copyObject = function(target){
    var result = {};
    // for~in 구문을 이요하여, 객체의 모든 프로퍼티에 접근할 수 있음
    // 하드코딩을 하지 않아도 됨
    // 이 copyObject로 복사를 한 다음, 복사를 완료한 객체의 프로퍼티를 변경하면 됨
    for(var prop in target){
        result[prop] = target[prop];
    }
    return result;
}

var user = {
    name : 'wonjang',
    gender : 'name'
};

var user2 = copyObject(user);
user2.name = "twojang";

if(user!== user2){
    console.log("유저 정보가 변경되었습니다.");
}

console.log(user.name, user2.name);
console.log(user === user2);