// import React from 'react'

import { useEffect } from "react"

export default function Es3() {
    useEffect(()=>{
        console.log(`Component duoc render lan dau`);
        
    },[])
  return (
    <div>
      <h2>Chao mung banj den voi chug toi</h2>
    </div>
  )
}
