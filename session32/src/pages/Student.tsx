// import React from 'react'?

import { useSelector } from "react-redux"

export default function Student() {
    const result = useSelector((state : any) => state.students.users)
    console.log(result);
    
    return (
        <div>
            <h1>Quan ly sinh vien</h1>
            {result.map((item:any)=>(
               <li key={item.id}>{item.name}</li>
            ))}
        </div>
    )
}
