// import React from 'react'

import { useDispatch, useSelector } from "react-redux"
import type { RootState } from "../store/store"
import { change } from "../store/slices/changeBgSlice"

export default function ChangeBg() {
    const result = useSelector((state: RootState) => state.changeBg)
    const dispatch = useDispatch()
    const handleChangeBg = () => {
        dispatch(change())
    }
    return (
        <div>
            <div  style={
                result ?   
                { backgroundColor: "white", color: "black", padding: "10px", width: 200, height: 200, border: "1px solid red" }
                :
                { backgroundColor: "black", color: "white", padding: "10px", width: 200, height: 200, border: "1px solid green" }
            }>
                <button onClick={handleChangeBg}>Light</button>
            </div>

        </div>
    )
}
