// import React from 'react'

export default function Ex4() {
    const changeNumber = (result: number)=>{
        console.log("So thu tu", result);
       
    }
    const displayNumber = (callback: (result: number) =>void,delay: number)=>{
        let count = 1
        const cou = setInterval(()=>{   
            callback(count)
            count++
            if(count===8){
                clearInterval(cou)
            }
        },delay)
    }
    displayNumber(changeNumber, 2000)
  return (
        <div>

        </div>
    )
}
