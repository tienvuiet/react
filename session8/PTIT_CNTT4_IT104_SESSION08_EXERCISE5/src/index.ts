const genericType = <T>(arr: T[], conditionFn: (item: T) => boolean): T | undefined => {
    for (const item of arr) {
        if (conditionFn(item)) return item
    }
    return undefined
}
const numbers = [1, 2, 3, 4, 5]
const fistEvent = genericType(numbers, (item) => item % 2 === 0)
console.log(fistEvent);
