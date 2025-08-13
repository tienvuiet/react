const generic = <T,U>(fist: T, second : U):[T, U]=>{
    return [fist, second]
}
const result  = generic<string, number>("tien", 3)
console.log(result);
