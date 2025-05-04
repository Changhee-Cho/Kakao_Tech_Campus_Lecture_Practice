// 12번 파일을 조금 줄이고 싶다 --> apply
var numbers = [10,20,3,16,45];

// apply -> ({},[]);
var max = Math.max.apply(null, numbers);
var min = Math.min.apply(null, numbers);
console.log(max,min);

//spread operator
console.log(...numbers);
var max = Math.max(...numbers);
var min = Math.min(...numbers);
console.log(max, min);