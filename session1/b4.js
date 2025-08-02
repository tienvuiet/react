const checkNumer = (value) => {
    if (typeof value !== 'number') {
        return `${value} not is number`;
    }
    return value % 2 === 0 ?
    `${value} is an event number`:
    `${value} is odd`;
};

console.log(checkNumer(3));
console.log(checkNumer(2));

