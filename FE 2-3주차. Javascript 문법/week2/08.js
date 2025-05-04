// Map
// JS --> 객체, 배열 : 많고, 다양하고, 복잡한 프로그램을 만들어 왔다.
// 그럼에도 현실세계를 반영하기는 어려웠음
// Map, Set 추가적인 자료구조가 등잠함

// Map, Set 목적: 데이터의 구성, 검색, 사용을 효율적으로 처리 > 기존의 객체나 배열보다

// (1) Map
// - Key / Value pair
// - Key에 어떤 데이터타입(유형)도 다 들어올 수 있다.
// - Map은 키가 정렬된 순서로 저장되기 때문이다.

// -기능 > 검색, 삭제, 제거, 여부 확인

const myMap = new Map();
// myMap.set('key','value'); 이런 식으로 저장
// myMap.get('key'); 이런 식으로 검색

// 반복을 위한 method : keys, values, entries

// map은 이터레이터(반복자)가 있어 keys, values, entries를 for of문을 통해 반복할 수 있음