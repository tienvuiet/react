// import React from 'react'

import { useState } from "react"

export default function Es1() {
    const [data, setData] = useState({key: ""})
    const [error, setError] =useState({key:""})
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        const {name, value} = e.target
        if(value.length<=5){
            setError({...error, [name]:"Chuoi nhap vao dai hon 5 ki tu"})
            /**
             * {
             *  chuoi: "",
             *  age: "adjskajdsaj"
             * }
            */
        }else{
            setError({...error, [name]:""})
        }
        setData({...data,[name]:value})
    }
  return (
    <div>
      <input type="text" onChange={handleChange} name="key"/>
      <p style={{color:"red"}}>{error.key}</p>
    </div>
  )
}
