import { useState, type ChangeEvent } from "react"

export default function Es8() {
    const [hobbies, setHobbies] = useState<string[]>([])
    const handleCheckBox = (e: ChangeEvent<HTMLInputElement>) => {
        const { value, checked } = e.target
        if (checked) {
            setHobbies([...hobbies, value])
        } else {
            setHobbies(hobbies.filter((hobby) => hobby !== value))
        }
    }
    return (
        <div>
            <h2>So thich: {JSON.stringify(hobbies)}</h2>
            <input type="checkbox" value="Di choi" onChange={handleCheckBox} />Di choi <br />
            <input type="checkbox" value="Code" onChange={handleCheckBox} />Code <br />
            <input type="checkbox" value="Boi loi" onChange={handleCheckBox} />Boi loi <br />
            <input type="checkbox" value="Nhay day" onChange={handleCheckBox} />Nhay day <br />
        </div>
    )
}
