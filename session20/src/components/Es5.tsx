// import React from 'react'

import { useEffect, useState } from "react"

export default function Es5() {
    const [time, setTime] = useState(0)
   useEffect(()=>{  
    const id = setInterval(()=> setTime((prev)=>prev+1), 1000)
    return () =>{   
        clearInterval(id);
    }
   },[])
  return (
    <div>
      Time: {time}
    </div>
  )
}
