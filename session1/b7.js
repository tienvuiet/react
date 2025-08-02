const sumArrays = (...Arrays)=>{
    return Arrays.map(arr=>arr.reduce((sum,val)=> sum+val,0));
}
console.log(sumArrays([1,2,3],[2,3]));
