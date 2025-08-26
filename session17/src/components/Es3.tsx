import { useState } from "react"

export default function Es3() {
    const [change, setChange] = useState<boolean>(true)
    const handleUpdateColor = () => (
        setChange((prev) => !prev)
    )


    return (
        <div>
            <h1 style={change? {color:"black"}:{color:"red"}} >Tieu de van ban</h1>
            <button onClick={handleUpdateColor}>Thay doi mau</button>
        </div>
    )
}
