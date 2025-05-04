// 클래스 연습해보기

// [요구사항]
// 1. Car라는 새로운 클래스를 만들되, 처음 객체를 만들 때는 다음 네 개의 값이 필수로 입력되어야 합니다.
// (1)modelName
// (2)modelYear
// (3)type
// (4)price
// 2. makeNoise() 메서드를 만들어 클락션을 출력해 주세요.
// 2-1. 해당 자동차가 몇년도 모델인지 작성하는 메서드 작성
// 3. 이후 자동차를 3개 정도 만들어 주세요(객체 생성)

class Car{
    constructor(modelName, modelYear, type, price){
        this.modelName = modelName;
        this.modelYear = modelYear;
        this.type = type;
        this.price = price;
    }
    makeNoise(){
        console.log("빵빵빵");
    }
    printYear(){
        console.log(this.modelYear);
    }
}
const car1 = new Car('테슬라',2020,'전기차',5000);
const car2 = new Car('소나타', 2018, '휘발유', 4000);
const car3 = new Car('k5',2020, '경유',4500);
console.log(car1, car2, car3);
car1.makeNoise();
car1.printYear();