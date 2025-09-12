// import React from 'react'

export default function Ex1() {
    const calculate = (a: number, b: number, callback: (result: number)=>void) => {
        const sum = a + b;
        callback(sum)
    }
    const handleResult = (result : number)=>{
        console.log(`ket qua tinh tong: `, result);
        
    }
    calculate(3,4,handleResult)
    return (
        <>

        </>
    )
}
