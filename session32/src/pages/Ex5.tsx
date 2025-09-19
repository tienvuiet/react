// import React from 'react'

import { useDispatch, useSelector } from "react-redux"

export default function Ex5() {
    const { name } = useSelector((n: any) => n.change)
    const dispatch = useDispatch()
    const handleChange = () => {
         dispatch({
            type:"CHANGE"
         })
    }
    return (
        <div>
            <h2>{name}</h2>
            <button onClick={handleChange}>Change State</button>
        </div>
    )
}
