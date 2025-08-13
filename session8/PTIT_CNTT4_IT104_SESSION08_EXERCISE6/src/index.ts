const findElement = <T>(array: T[], value: T): T | undefined => {
        for(let i= 0; i< array.length; i++){
            if(array[i]===value){
                return array[i]
            }
        }
        return undefined
}
const check = findElement([1,2,3,4,5], 2)
console.log(check);
