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