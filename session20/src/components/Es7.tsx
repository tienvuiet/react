// import React from 'react'

import { useReducer } from "react"
type State = {
    count : number
}
const initialState : State = {
    count : 0
}
const reducer = (state: State, action: {type: "tang"|"giam"}): State=>{
    switch (action.type) {
        case "tang":
            return {count : state.count+1}
        case "giam":
            return {count : state.count-1}
        default:
            return state
    }
}
export default function Es7() {
    const [state, dispatch] = useReducer(reducer, initialState);
    
  return (
    <div>
      <h2>So dem : {state.count}</h2>
      <button onClick={()=> dispatch({type :"tang"})}>Tang</button>
      <button onClick={()=>dispatch({type:"giam"})}>Giam</button>
    </div>
  )
}
