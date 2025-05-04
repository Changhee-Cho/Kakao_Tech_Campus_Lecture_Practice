function solution(absolutes, signs) {
    let sum = 0;
    for(let i = 0; i<absolutes.length; i++){
        let temp = absolutes[i];
        if(signs[i]==false){
            temp*=-1;
        }
        sum+=temp;
    }
    return sum;
}