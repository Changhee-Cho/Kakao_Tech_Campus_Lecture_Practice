// static 메소드 = 정적 메소드
// Class -> 객체를 만들기 위해 사용
// 다양으로, 안전하고, 정확하게

class Calculator {
    static add(a, b){
        console.log(a+b);
    }
    static sub(a,b){
        console.log(a-b);
    }
}

// class 메소드에 static을 붙이면 객체 생성 없이 .을 이용해 접근이 가능하다.(굳이 인스턴스화를 시킬 필요가 없을 경우)

Calculator.add(3,2);
Calculator.sub(5,2);