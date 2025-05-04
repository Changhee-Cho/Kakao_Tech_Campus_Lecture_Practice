// Set
// 고유한 값을 저장하는 자료구조
// 값만 저장한다.(키를 저장하지 않는다.)
// 값이 중복되지 않는 유일한 요소로만 구성된다.
// 값 추가, 검색, 삭제, 모든 값 제거, 존재 여부 확인

// 집합, 유일한 요소(값 중복 x == > 같은 것을 add 하면 합쳐짐)

const mySet = new Set();
mySet.add('value1'); // 값 저장
mySet.add('value2');
mySet.add('value2'); // 중복된 값 --> 저장 안됨
mySet.add('value3');
mySet.add('value4');
mySet.add('value5');

console.log(mySet);
console.log(mySet.size); // 크기

console.log(mySet.has('value1')); // 값이 있는지 여부 확인

// Iterator 반복 , key가 없기 때문에 value만 있음
for(const value of mySet.values()){
    console.log(value);
}