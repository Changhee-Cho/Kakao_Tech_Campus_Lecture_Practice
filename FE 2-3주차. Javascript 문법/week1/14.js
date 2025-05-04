//falsy한 값, truthy한 값

// number 타입도 조건문에 사용가능

if(0){
    console.log("hello");
}
if(""){
    console.log("hello");
}

if(null){
    console.log("hello");
}

if(undefined){
    console.log("hello");
}


if(NaN){
    console.log("hello");
}
if(false){
    console.log("hello");
}
if(-2){
    console.log("hello"); //얘만 true 처리되어 출력됨
}