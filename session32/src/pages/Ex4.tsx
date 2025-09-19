// import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function Ex4() {
    const {arr, count}= useSelector((s:any) => s.random)
    const dispatch = useDispatch();

    const handleRandom = () => {
        dispatch({
            type: "RANDOM"
        })

    }
    return (
        <div>
            <div>
              {`[${arr.join(",")}]`}
            </div>
            <button onClick={handleRandom}>Gender random number</button>
            <div>   
                Count: {count}
            </div>
        </div>
    )
}
