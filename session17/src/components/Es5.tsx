import { useState, type ChangeEvent } from "react"


export default function Es5() {
    const [value, setValue] = useState<string>("")
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }
    return (
        <div>
         <h2>{value}</h2>
         <input type="text"  onChange={handleChange} placeholder="Nhap noi dung"/>
        </div>
    )
}
