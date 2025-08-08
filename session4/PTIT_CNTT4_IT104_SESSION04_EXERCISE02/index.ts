let array: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9.6, 10];

const diemTB = (array:number[]) => {
    let sum = 0;
    array.forEach(e=>{
        sum+=e
    })
    return sum/array.length;
}
console.log(diemTB(array));
