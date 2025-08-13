const flatten = (array) => {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            result.push(array[i][j]);
        }
    }
    return result;
};
const arr = flatten([[1, 2], [3, 4], [5, 6]]);
console.log(arr);
const arr2 = flatten([['apple', 'banana'], ['cherry'], ['date', 'elderberry']]);
console.log(arr2);
