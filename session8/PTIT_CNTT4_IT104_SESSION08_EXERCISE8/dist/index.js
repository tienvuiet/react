const partialUpdate = (obj, updates) => {
    return Object.assign(Object.assign({}, obj), updates);
};
const used1 = partialUpdate({ name: 'Alice', age: 30, job: 'Developer' }, { age: 31 });
console.log(used1);
