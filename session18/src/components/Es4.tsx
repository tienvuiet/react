//  import React from 'react'

import { useCallback, useState, type ChangeEvent,  } from "react"


export default function Es4() {
    const [color, setColor] = useState<string>("")
    const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setColor(e.target.value)

    }, []);

    return (
        <div>
            <h2>Mau nguoi dung chon</h2><br />
            <input type="color" onChange={handleChange} />
            <div style={{width:"100px", height: "100px", background: color||"white"}} ></div>
        </div>
    )
}
