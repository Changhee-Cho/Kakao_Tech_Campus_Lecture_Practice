// 객체
// key - value pair
// 하나의 변수에 여러 개의 값을 넣을 수 있다.(배열, 함수, 객체도 가능--> 자료형에 제한이 없음)

// 1. 객체 생성 방법
// 1-1. 기본적인 객체 생성 방법(직접 생성)
let person = {
    name : "홍길동",
    age: 30,
    gender : "male"
};

// 1-2. 생성자 함수를 이용한 객체 생성 방법
function Person(name, age, gender){
    this.name = name;
    this.age = age;
    this.gender = gender;
} // 여기서는 세미콜론 x

let person1 = new Person("홍길동", 30, "남자");
let person2 = new Person("홍길순", 20, "여자");

// 2. 접근하는 방법
console.log('1', person.name);
console.log('2', person.age);
console.log('3', person.gender);

// 3. 객체 메소드(객체가 가진 여러가지 기능 : Object.~~~)
// 3-1. Object.key() : key를 가져오는 메소드 --> 배열 형태로 저장됨

let keys = Object.keys(person); // 'name', 'age', 'gender'
console.log(keys);

// 3-2. Object.values() : value를 가져오는 메소드 --> 배열 형태로 저장됨
let values = Object.values(person); // '홍길동', '30', 'male'
console.log(values);

// 3-3. Object.entries() : key와 value를 묶어서 배열로 만든 배열(2차원 배열)
let entries = Object.entries(person);
console.log(entries); // [ [ 'name', '홍길동' ], [ 'age', 30 ], [ 'gender', 'male' ] ]

// 3-4. Object.assign() : 객체 복사
let newPerson = {}; // 빈 객체
Object.assign(newPerson, person); // { name: '홍길동', age: 30, gender: 'male' }
console.log(newPerson);

Object.assign(newPerson, person, { gender:'여자' } ); // 마지막에 속성값과 키값을 같이 입력하면 해당 속성의 값 변경 후 저장됨
console.log(newPerson);

// 3-5. 객체 비교
// 객체: 크기가 상당히 커 메모리에 저장할 때 별도의 공간에 저장

// human1 별도 공간에 대한 주소
let human1 = {
    name : "홍길동",
    age : 30,
    gender : '남자'
};

// human2 별도 공간에 대한 주소
let human2 = {
    name : '홍길동',
    age : 30,
    gender : "남자"
};

let str1 = "aaa";
let str2 = "aaa";

console.log(human1===human2); // false, 주소를 비교하기에 다르다고 나옴(객체) -> JSON 사용
console.log(str1 === str2); // true, 값을 비교하기에 같다고 나옴(일반 변수)

console.log(JSON.stringify(human1)===JSON.stringify(human2)); //JSON.stringify() --> 내용을 문자열화 시킴 따라서 비교 가능(단 객체 멤버의 순서도 같아야 함)
console.log(JSON.stringify(human1));

// 3-6. 객체 병합
let student1 = {
    name : "홍길동",
    age : 30
};
 // person2 별도 공간에 대한 주소
let student2 ={
    gender:"남자"
};

// ... : spread operator
let PerfectMan = {...student1, ...student2}; //name : "홍길동", age : 30
console.log(PerfectMan);