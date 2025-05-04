// 이터러블 객체 (next()라는 메서드를 갖고 있음)
// 제너레이터 문법: 이터레이터 객체를 반환

var addCoffee = function (prevName, name) {
    setTimeout(function () {
        coffeeMaker.next(prevName ? prevName + ', ' + name : name);
    }, 500);
};

//*이 붙은 함수: 제너레이터 함수 -> 이터레이터 객체 반환
var coffeeGenerator = function* () {
    var espresso = yield addCoffee('', '에스프레소');
    console.log(espresso);
    var americano = yield addCoffee(espresso, '아메리카노');
    console.log(americano);
    var mocha = yield addCoffee(americano, '카페모카');
    console.log(mocha);
    var latte = yield addCoffee(mocha, '카페라떼');
    console.log(latte);
};
var coffeeMaker = coffeeGenerator();
coffeeMaker.next();