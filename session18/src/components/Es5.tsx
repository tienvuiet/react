import { useReducer, type ChangeEvent } from "react"

// import React from 'react'
const initiaState = "";
type Action = {type: "CHANGE"; payload: string}
const reducer = (value: string, action: Action)=>{
    switch (action.type) {
        case "CHANGE":
            return action.payload
        default:
            return value
    }
}
export default function Es5() {
    const [value, dispatch] = useReducer(reducer, initiaState)
    const handleChange = (e: ChangeEvent<HTMLInputElement>)=>{
        dispatch({type: "CHANGE", payload: e.target.value})

    }
  return (
    <div>
        <h2>{value}</h2>
      <input type="text"  onChange={handleChange}/>
    </div>
  )
}
