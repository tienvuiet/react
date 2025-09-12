// import React from 'react'

export default function Ex8() {
    const numbers = [1, 2, 2, 3, 4, 5, 6]
    const changeCallBack = (arr: number[]) => {
        console.log(arr);
    }
    const myFilter = (arr: number[], search: number,arrCall : number[] ,callback: (arrCall: number[]) => void) => {
        for(let i = 0 ; i < arr.length; i++){
            if(arr[i]===search){
                arrCall.push(arr[i])
            }
        }
        callback(arrCall)
    }
    myFilter(numbers, 2, [], changeCallBack)
    return (
        <div>

        </div>
    )
}
