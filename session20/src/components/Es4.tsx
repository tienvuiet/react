// import React from 'react'

import { useEffect, useState } from "react"

export default function Es4() {
    const [data, setData] = useState("")
    useEffect(()=>{ 
        document.title = data
    })
  return (
    <>
      <input type="text" onChange={(e)=>setData(e.target.value)}/>
    </>
  )
}
