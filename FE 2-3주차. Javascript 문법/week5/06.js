// 상속
// class --> 유산으로 내려주는 주요 기능
//  부모 <--> 자식 관계

// 동물 전체에 대한 클래스
class Animal{
    // 생성자
    constructor(name){
        this.name = name;
    }
    // 메서드
    speak(){
        console.log(`${this.name} says!`);
    }
}

const me = new Animal("조창희");
me.speak();

class Dog extends Animal{
    // 부모에게서 받은 메서드를 재정의 할 수 있음
    // overriding
    speak(){
        console.log("bark!");
    }
}
const mingu = new Dog("민구");
mingu.speak();