const partialUpdate = <T>(obj: T, updates: Partial<T>):T=>{
    return {...obj, ...updates}
}
const used1 = partialUpdate({ name: 'Alice', age: 30, job: 'Developer' },{ age: 31 })
console.log(used1);
