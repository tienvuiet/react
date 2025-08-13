const reverseArray = (arr) => {
    const result = [];
    for (let i = arr.length; i >= 0; i--) {
        result.push(arr[i]);
    }
    return result;
};
console.log(reverseArray([1, 2, 3]));
console.log(reverseArray(["a", "b", "c"]));
