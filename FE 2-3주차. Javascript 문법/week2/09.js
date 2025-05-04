const myMap = new Map();
myMap.set('one', 1);
myMap.set('two', 2);
myMap.set('three', 3);

console.log(myMap.keys());

// Map은 iterator가 있기 때문에 for of 문의 형식으로 반복이 가능하다.

for (const key of myMap.keys()){
    console.log(key);
}

console.log(myMap.values());
for(const value of myMap.values()){
    console.log(value);
}

console.log(myMap.entries());
for(const entry of myMap.entries()){
    console.log(entry);
    console.log(entry[0], entry[1]);
}

// Map의 크기 확인
console.log(myMap.size); // Map의 크기
console.log(myMap.has('one'));  // key 기반 검색 --> true, false 반환