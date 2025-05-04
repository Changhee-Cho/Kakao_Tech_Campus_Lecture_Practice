// 클래스
class Person {
    // 우리는 사람이기에 필수요소로 name, age로 지정
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    // 메서드 형태의 동사 표현
    sayHello(){
        console.log(this.name);
    }
    sayAge(){
        console.log(this.age);
    }
}

// 설계도를 통해 인스턴스(실제 사물) 만들기
// 이름은 조창희이고, 나이는 26살인 사람 하나 만들어줘(설계도에 근거해서)
const person1 = new Person("조창희", 26);
console.log(person1.name, person1.age);
const person2 = new Person("원서진", 24);
console.log(person2.name, person2.age);
person1.sayHello();
person2.sayHello();