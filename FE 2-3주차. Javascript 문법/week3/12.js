var numbers = [10,20,3,16,45];
var max = min = numbers[0];//10
numbers.forEach(function(number){
    if(number>max)
        max=number;
    if(number<min)
        min=number;
});

console.log(max,min);

numbers.forEach(function(numbers, idx){
    console.log(idx+"번째 값: "+numbers);
});