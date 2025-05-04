// getters와 setters ->문법 제공
// 객체지향 프로그래밍 언어에서 다 있음
// 클래스 ->객체 (인스턴스)
// 프로퍼티(constructor)
// new Class(a,b,c)
// setter를 쓰면 외부에서 온 값을 검증 후 사용할 수 있음.

class Rectangle{
    constructor(width, height){
        // underscore:private
        this._width = width;
        this._height = height;
    }
    get width(){
        // width를 위한 getter
        return this._width;

    }
    set width(value){
        // width를 위한 setter
        // 검증 1: value가 음수이면 오류 발생
        if(value <= 0){
            console.log('가로 길이는 0보다 커야 합니다.');
            return;
        }
        else if(typeof value !== 'number'){
            console.log("Number 타입이 아닙니다.");
            return;
        }
        this._width=value;

    }
    get height(){
        return this._height;

    }
    set height(value){
        if(value <= 0){
            console.log('세로 길이는 0보다 커야 합니다.');
            return;
        }
        else if(typeof value !== 'number'){
            console.log("Number 타입이 아닙니다.");
            return;
        }
        this._height=value;
    }
    getArea(){
        const a = this._width * this._height;
        console.log(`${a}`);
    }
}


// instance
const rect1 = new Rectangle(10, 20);
rect1.getArea();
const rect2 = new Rectangle(10, 30);
const rect3 = new Rectangle(15, 20);
