// import React from 'react'

export default function Ex5() {
    const resultCallback = (result: boolean) => {
        console.log("Dieu kien tra ve: ", result);

    }
    const checkCondition = (check: boolean, callback: (result: boolean) => void) => {
        setTimeout(() => {
            callback(check)
        }, 1000)
    }
    checkCondition(true, resultCallback)
    checkCondition(false, resultCallback)
    return (
        <>

        </>
    )
}
