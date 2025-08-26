import { useState, type ChangeEvent } from "react"


export default function Es7() {
    const [value, setValue] = useState<string>("")
    const handleSetValue = (e:ChangeEvent<HTMLSelectElement>)=>{
         setValue(e.target.value)
    }
  return (
    <div>
      <h2>Thanh pho: {value}</h2>
      <select value={value} onChange={handleSetValue}>    
        <option value="" >Chon thanh pho</option>
        <option value="Ha Noi" >Ha Noi</option>
        <option value="Ninh Binh" >Ninh Binh</option>
        <option value="Nam Dinh" >Nam Dinh</option>
      </select>
    </div>
  )
}
