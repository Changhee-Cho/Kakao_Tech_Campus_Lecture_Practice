// 배열

// 1. 생성
// 1-1. 기본 생성
let fruit = ["사과", "바나나", "오렌지"];
//              0        1        2

// 1-2. 크기 지정
let number = new Array(5);

// 배열의 길이
console.log(number.length);

// 2-1. 요소 접근
console.log(fruit[0]);
console.log(fruit[1]);
console.log(fruit[2]);

// 3. 배열 메소드
// 3-1. push
let fruits = ['사과', '바나나'];
console.log(fruits);

fruits.push('오렌지');
console.log(fruits);
console.log(fruits.length);

// 3-2. pop(마지막 요소를 삭제하는 메소드)
fruits.pop();
console.log(fruits);
console.log(fruits.length);

// 3-3. shift(첫 번째 요소를 삭제)
let juice = ['사과','배','오랜지'];
juice.shift();
console.log(juice);

// 3-4. unshift(맨 앞에 어떤 것을 추가하는 것)
juice.unshift("포도");
console.log(juice);

// 3-5. splice(위치를 지정해 요소 삽입)
fruits = ['사과', '바나나', '키위'];
console.log(fruits);
fruits.splice(1, 1, "포도"); // 첫 번째 요소 ~ 1개의 요소를 삭제 후 거기에 삽입
console.log(fruits);

// 3-6. slice()
fruits = ['사과', '바나나', '키위'];
let slicedFruits = fruits.slice(1,3); // 1번째 요소부터 3번째 요소 전까지 추출
console.log(slicedFruits);
console.log(fruits);


// forEach, map, filter, find
// (1) forEach
let numbers = [1,2,3,4,5];

// 매개변수 자리에 함수를 넣는 것: 콜백함수
numbers.forEach(function(item){
    console.log(item);
});
numbers.forEach(a=>{
    console.log(a);
});

// (2) map : 항상 원본 길이만큼의 배열이 return 된다.
let newNumbers = numbers.map(function(item){
    
    // map함수의 function은 return 문이 있어야 함.
    // return을 안하면 그 개수만큼 undefined 처리
    // map을 거치고 나면 새로운 배열이 나옴(가공한 값)
    return item*2;
});
console.log(newNumbers);

// (3) filter
let num = [4,1,5,4,5];
let newnum = num.filter(function(item){
    // 조건이 들어가 조건에 해당하는 것만 배열로 반환(map은 원본 배열 크기만큼 리턴했으나, map은 해당하는 것의 길이만큼 리턴)
    return item === 5;
});
console.log(num);
console.log(newnum);

// (4) find 
numbers= [4,1,5,4,5];
console.log(numbers.find(item=>{

    // 리턴 문을 통해 조건에 맞는 첫번째 것만 반환 --> 따라서 4만 반환
    return item > 3;
}));