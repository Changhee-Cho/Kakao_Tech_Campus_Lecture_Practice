setTimeout(
    function (name) {
        var coffeeList = name;
        console.log(coffeeList);
        setTimeout(
            function (name) {
                coffeeList += ", " + name;
                console.log(coffeeList);
                setTimeout(
                    function (name) {
                        coffeeList += ", " + name;
                        console.log(coffeeList);
                        setTimeout(
                            function (name) {
                                coffeeList += ", " + name;
                                console.log(coffeeList);
                            },
                            500,
                            "카페라떼"
                        );
                    },
                    500,
                    "카페모카"
                );
            },
            500,
            "아메리카노"
        );
    },
    500,
    "에스프레소"
);

// 기명함수로 바꿔서 하면 좀 더 간결해 질 것, 다만 이름을 다 붙여줘야 해 리소스 낭비가 심함
var coffeeList = '';
var addEspresso = function (name) {
    coffeeList = name;
    console.log(coffeeList);
    setTimeout(addAmericano, 500, '아메리카노');
};
var addAmericano = function (name) {
    coffeeList += ', ' + name;
    console.log(coffeeList);
    setTimeout(addMocha, 500, '카페모카');
};
var addMocha = function (name) {
    coffeeList += ', ' + name;
    console.log(coffeeList);
    setTimeout(addLatte, 500, '카페라떼');
};
var addLatte = function (name) {
    coffeeList += ', ' + name;
    console.log(coffeeList);
};
setTimeout(addEspresso, 500, '에스프레소');