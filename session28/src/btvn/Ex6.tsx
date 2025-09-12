// import React from 'react'

export default function Ex6() {
    const task1 = (next: ()=> void)=>{
        setTimeout(() => {
            console.log("Task 1 duoc thuc thi");
            next();
        }, 1000)
    }
    const task2 = (next: ()=> void)=>{
        setTimeout(() => {
            console.log("Task 2 duoc thuc thi");
            next();
        }, 1500)
    }
    const task3 = (next: ()=> void)=>{
        setTimeout(() => {
            console.log("Task 3 duoc thuc thi");
            next();
        }, 3000)
    }
    task1(()=>{
        task2(()=>{
            task3(()=>{
                console.log("Hoan thanh");
            })
        })
    })
    return (
        <div>

        </div>
    )
}
