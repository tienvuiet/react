// import React from 'react'

import { useDispatch, useSelector } from "react-redux"
import type { Data } from "../utils/types";
import { decrement, increment, resetN } from "../store/slices/counterSlice";

export default function Counter() {
    const result = useSelector((data: Data) =>{
        console.log(data);
        
        return data.counter.value
    })
    const dispatch = useDispatch()
    //tang gia tri count 
    const increase= () =>{
        dispatch(increment())
    }
    const reduce = () =>{
        dispatch(decrement())
    }
    const resetNumber = () =>{
        dispatch(resetN())
    }
    return (
        <div>
            <h2>Gia tri counter: {result}</h2>
            <button onClick={increase}>Tang</button>
            <button onClick={reduce}>Giam</button>
            <button onClick={resetNumber}>Reset</button>
        </div>
    )
}
