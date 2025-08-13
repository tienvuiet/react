const reverseArray = <T>(arr: T[]): T[] => {
    const result: T[] = []
    for (let i = arr.length; i >= 0; i--) {
        result.push(arr[i])
    }
    return result
}
console.log(reverseArray([1,2,3]));
console.log(reverseArray(["a","b","c"]));

