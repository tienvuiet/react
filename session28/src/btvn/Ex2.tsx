// import React from 'react'

export default function Ex2() {
    const getUserName = (result: string) => {
        console.log(result);

    }
    const delayedCallback = (callback: (result: string)=>void) => {
        setTimeout(() => {
            callback("Dau bep")
        }, 3000)
        console.log("Sieu nhan");
    }
    delayedCallback(getUserName)

    return (
        <div>

        </div>
    )
}
