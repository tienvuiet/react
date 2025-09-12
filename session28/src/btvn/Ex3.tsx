// import React from 'react'

export default function Ex3() {
    const Arrays = [1, 2, 3, 4, 5]
    const print = (result: number) => {
        console.log("Phan tu thu", result);

    }
    const processArray =(arr: number[], callback: (item: number) => void) => {
        arr.forEach((a) => callback(a))
    }
    processArray(Arrays, print)
    return (
        <div>

        </div>
    )
}
