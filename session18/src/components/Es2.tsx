import { useMemo, useState } from "react"

// import React from 'react'
type User = {
    id : number , 
    name: string , 
    age: number
}
export default function Es2() {
    const [user] = useState<User[]>([   
        {
            id: 1,
            name: "Vu Viet Tien", 
            age: 18
        },
        {
            id: 2,
            name: "Tien",
            age: 20,
        },
        {
            id: 3,
            name:"Sieu nhan",
            age: 21
        }
    ])
    const adults = useMemo(()=>{    
        return user.filter((u)=>u.age>18)
    }, [user])
  return (
    <div>
    <h2>Nhung nguoi lon hon 18 tuoi</h2>
    <ul>    
        {adults.map(u=>(    
            <li key={u.id}>    
             #{u.id}: {u.name}-{u.age}
            </li>
        ))}
        </ul>     
    </div>
  )
}
