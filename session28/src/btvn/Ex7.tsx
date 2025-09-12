// import React from 'react'

export default function Ex7() {
    const numbers = [1,2,3,4,5] 
    const printCallback = (index: number, item : number, arr: number[]) =>{
        console.log(`Vi tri: ${index} | phan tu: ${item}: | Mang: `, arr); 
    } 
    const myForEach = (arr: number[], callback :(index : number, item : number,arr: number[])=> void)=>{
         for(let i =0 ; i< arr.length; i++){
            callback(i, arr[i],arr)
         }
    }
    myForEach(numbers, printCallback)
  return (
    <>
      
    </>
  )
}
