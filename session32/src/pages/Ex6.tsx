// import React from 'react'

import { useDispatch, useSelector } from "react-redux"

export default function Ex6() {
    const {name, background , color} = useSelector((n:any) =>n.changebr)
    const dispatch = useDispatch()
    const handleChangeBg = () =>{
        dispatch({  
            type:"CHANGEBG"
        })
    }
  return (
    <div style={{backgroundColor:`${background}`, height: 300}}>

      <input type="checkbox"   onChange={handleChangeBg} /> <span style={{color:`${color}`}}>{name}</span>
    </div>
  )
}
