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

// [추가 요구사항]
// 1. 전기차 클래스 <- Car 클래스의 상속을 받을 것

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

// 전기차 클래스 정의
class ElectronicCar extends Car{
    // 생성자도 오버라이딩 가능
    constructor(modelName, modelYear, price, chargetime){
        // Car(부모) 클래스에게도 알려주기 필요!
        // super(); 부모의 생성자, 반드시 4개가 들어가야 함
        super(modelName, modelYear, 'e', price);
        this._chargetime=chargetime;
    }
    set chargetime(value){
        this._chargetime=value;
    }
    get chargetime(){
        return this._chargetime;
    }
}

const elecCar = new ElectronicCar('Tesla','2020',5000,"60");
console.log(elecCar);
elecCar.makeNoise();
console.log(elecCar.modelName);

console.log("=================");
console.log(elecCar.chargetime);
elecCar._chargetime = 100;
console.log(elecCar.chargetime);