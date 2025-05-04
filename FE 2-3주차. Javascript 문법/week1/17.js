// for, while => ~동안 : 반복문

// for (초기값; 조건식; 증감식) {
//
// }

// i라는 변수는 0부터 시작할거야
// i라는 변수가 10에 도달할 때까지 계속할거야
// i라는 변수가 한 사이클을 돌고 나면 1을 더할거야
for (let i=0; i<10; i++){
    console.log(i);
}

// 배열과 for문은 짝꿍이다.
const arr = ['one', 'two', 'three', 'four','five'];
for(let i = 0; i<arr.length; i++){
    console.log("i의 값: "+i+" arr의 값: "+arr[i]);
}

// ex: 0~10의 수 중 2의 배수만 console.log로 출력하는 예시
for(let i=0; i<=10; i++)
    if(i%2==0&&i>0)
        console.log(i);

// for ~ in 문
// 객체 속성을 출력하는 문법
let person = {
    name : 'john',
    age : 30,
    gender : 'male'
};

for(let key in person){
    console.log(key+":"+ person[key]);
}