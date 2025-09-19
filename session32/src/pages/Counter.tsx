// import React from 'react'

import { useDispatch, useSelector } from "react-redux"

export default function Counter() {
    const result:any = useSelector((data:any) =>{
      console.log("data: ", data)
      return data.counter
    })
    const dispatch = useDispatch();
    const increase = () =>{
        dispatch({  
            type:"INCREMENT"
        })
    }
    const decrement = ()=>{
        dispatch({  
            type: "DECREMEN"
        })
    }
  return (
    <div>
      <h1>Ung dung counter </h1>
      <p>Gia tri cua counter: {result.count}</p>
      <button onClick={increase}>Tang</button>
      <button onClick={decrement}>Giam</button>
    </div>
  )
}
