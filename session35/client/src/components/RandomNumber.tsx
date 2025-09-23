// import React from 'react'?

import { useDispatch, useSelector } from "react-redux"
import type { RootState } from "../store/store"
import { random } from "../store/slices/randomNumberSlice"

export default function RandomNumber() {
    const arrNumber = useSelector((state: RootState) => state.randomNew)
    const dispatch = useDispatch()
    const handleRandom = () => {
        dispatch(random())
    }
    return (
        <div>
            <h2>List number:[{arrNumber.map(n => n + ",")}] </h2>
            <button onClick={handleRandom}>Random</button>
        </div>
    )
}
