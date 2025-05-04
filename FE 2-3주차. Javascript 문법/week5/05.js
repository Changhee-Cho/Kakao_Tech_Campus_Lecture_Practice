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
// 1. modelName, modelYear, price, type getters
// 2. modelName, modelYear, price, type setters
// 3. 만든 인스턴스를 통해서 마지막에 set해서 get하는 로직까지



class Car{
    constructor(modelName, modelYear, type, price){
        this._modelName = modelName;
        this._modelYear = modelYear;
        this._type = type;
        this._price = price;
    }
    makeNoise(){
        console.log("빵빵빵");
    }
    printYear(){
        console.log(this.modelYear);
    }
    get modelName(){
        return this._modelName;
    }
    set modelName(value){
        // 유효성 검사
        if(typeof value !== 'string'){
            console.log("입력된 모델명이 문자형이 아닙니다.");
            return;
        }
        if(value.length<=0){
            console.log("모델명이 입력되지 않았습니다.");
            return;
        }
        this._modelName = value;
    }
    get modelYear(){
        // 유효성 검사
        if(typeof value !== 'string'){
            console.log("입력된 연도가 문자형이 아닙니다.");
            return;
        }
        if(value.length!==4){
            console.log("입력된 연도가 4자리가 아닙니다.");
            return;
        }
        return this._modelYear;
    }
    set modelYear(value){
        this._modelYear = value;
    }
    get type(){
        return this._type;
    }
    set type(value){
        // g(가솔린), d(디젤), e(전기차)가 아닌 경우 모델
        if(value !== g && value !== d && value !== e){
            console.log("옳지 않은 타입입니다.");
            return;
        }
        this._type = value;
    }
    get price(){
        return this._price;
    }
    set price(value){
        if(typeof value !== 'number'){
            console.log("숫자가 아닙니다.");
            return;
        }
        else if(value<100){
            console.log("가격은 100만원보다 작을 수 없습니다.");
            return;
        }
        // 검증이 완료된 경우
        this._price = value;
    }
}
const car1 = new Car('테슬라',2020,'e',5000);
const car2 = new Car('소나타', 2018, 'g', 4000);
const car3 = new Car('k5',2020, 'd',4500);
// console.log(car1, car2, car3);
// car1.makeNoise();
// car1.printYear();

//getters 예시
console.log(car1.modelName);

//setters 예ㅅ;
car1.modelName = 'kia';
console.log(car1.modelName);