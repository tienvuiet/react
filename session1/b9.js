const gopMang = (arr1,arr2)=>{
    const mangTong = [
        ...arr1,
        ...arr2
    ]
    const chiSo = mangTong.filter(e=> typeof e === 'number');
    chiSo.sort((a,b)=>a-b);
    return chiSo;
}
console.log(gopMang([1,3,`n`,0],[9,4,2,`k`]));
