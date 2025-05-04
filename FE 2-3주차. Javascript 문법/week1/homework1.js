function solution(s){
    let p_count = 0;
    let y_count = 0;
    for(let i=0; i<s.length;i++){
        if( s[i] === "p" || s[i] === "P" ){
            p_count++;
        }
        else if( s[i] === "y" || s[i] === "Y"){
            y_count++;
        }
    }
    if (p_count === y_count)
        return true;
    else
        return false;
}