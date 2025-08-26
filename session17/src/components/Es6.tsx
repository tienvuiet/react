import { useState, type ChangeEvent } from "react"


export default function Es6() {
    const [text, setText] = useState<number>(0)
    const handleCountText = (e: ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value.length);
    }
    return (
        <div>
            <input type="text" value={text}  onChange={handleCountText} />
            <h3>So ky tu: {text}</h3>
        </div>
    )
}
