// import React from 'react'

import { useReducer, type ChangeEvent } from "react"
const initiaState = ""
type Action = {
    type: "CHANGE"
    payload : string
}
const reducer = (value: string, action: Action)=>{
    switch (action.type) {
        case "CHANGE":
            
            return action.payload
    
        default:
            return value
    }
}
export default function Es6() {
    const [value, dispatch] = useReducer(reducer, initiaState)
    const handleChange = (e: ChangeEvent<HTMLInputElement>)=>{
        dispatch({type: "CHANGE", payload: e.target.value})
    }
    return (
        <div>
            <input type="radio" value="name" onChange={handleChange}/> Nam <br />
            <input type="radio" value="nu" onChange={handleChange}/> Nu <br />
            <input type="radio" value="khac" onChange={handleChange}/> Khac <br />
            <h3>Selected gender:{value} </h3>
        </div>
    )
}
