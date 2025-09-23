// import React from 'react'

import { useDispatch, useSelector } from "react-redux"
import type { RootState } from "../store/store"
import { changeDisplay } from "../store/slices/displayMethodSlice"

export default function DisplayMethod() {
    const result = useSelector((state: RootState) => state.displayMt)
    const dispatch = useDispatch()
    const handleChangeDisplay = () =>{
          dispatch(changeDisplay())
    }
    return (
        <>
            <button onClick={handleChangeDisplay} style={{ padding: 4 }}>{result ? "List mode": "Grid mode"}</button>
            <div style={result ?
                {
                    display: "flex",
                    flexDirection: "column"
                }
                :
                {
                    display: "flex",
                    flexDirection:"row"

                }
            }>
                <div style={{ width: 300, display: "flex", justifyContent: "center", border: "1px solid red", marginTop: 4 }}>1</div>
                <div style={{ width: 300, display: "flex", justifyContent: "center", border: "1px solid red", marginTop: 4 }}>2</div>
                <div style={{ width: 300, display: "flex", justifyContent: "center", border: "1px solid red", marginTop: 4 }}>3</div>
                <div style={{ width: 300, display: "flex", justifyContent: "center", border: "1px solid red", marginTop: 4 }}>4</div>
            </div>
        </>
    )
}
