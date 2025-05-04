// while

let i =0; 
while(i<10){
    // 메인 로직
    // 증감
    console.log(i);
    i++;
}

// for(초기값;조건식;증감식){

// }

console.log("================");

// while문을 활용해서, 3초과 100 미만의 숫자 중 5의 배수만 출력하는 예
i=4;
while(i<100){
    if(i%5==0)
        console.log(i);
    i++;
}

// do~while
i=0;
do{
    console.log(i);
    i++;
}while(i>10);

// break, continue문

// break문
for(i=0; i<10; i++){
    if(i===5)
        break;
    console.log(i);
}

// continue문
for(i=0; i<10; i++){
    if(i===5)
        continue;
    console.log(i);
}