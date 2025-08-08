const check = (value: number|string):string=>{
    if (typeof value === "string"){
        return `${value.length} ky tu`
    }else{
        return value%2===0?`day la so chan`:`day la so le`
    }
}
console.log(check("123asd"));
console.log(check(12));

