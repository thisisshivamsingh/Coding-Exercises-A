function arr(i){
    var factorial=1;
    for(let n=i;n>=1;n--){
        factorial=factorial*n
    }
    return factorial;
}
console.log(arr(4));