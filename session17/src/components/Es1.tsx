import { useState } from "react"


export default function Es1() {
    const [name] = useState<string>("Nguyen van A")
  return (
    <div>
      <h2>Ho va ten: {name}</h2>
    </div>
  )
}
