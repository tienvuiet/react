import { useState } from "react"


function Es4() {
    const [change, setChange] = useState<boolean>(true)
    const handleChange = ()=>{
        setChange((prev)=>!prev)
    }
  return (
    <div>
        <h2 style={change? {visibility:"hidden"}:{visibility:"visible"}}>Tieu de van ban</h2>
      <button onClick={handleChange}>{change?"Hien":"An"}</button>
    </div>
  )
}

export default Es4
