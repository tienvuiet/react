const sum = (arr) =>{
    let sum = 0;
    for(e of arr){
        if(e%2===0){
            sum += e
        }
    }
    return sum ;
}
console.log(sum([1,2,3,4,5,6]));
