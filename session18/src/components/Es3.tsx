// import React from 'react'

import { useCallback, useState, type FormEvent } from "react"

export default function Es3() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const handleSubmit = useCallback((e: FormEvent) => {
        e.preventDefault();
        console.log({ email, password });
    },[email, password])

    return (
        <form action="" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="">Email</label>
                <input type="text" value={email} onChange={e=>setEmail(e.target.value)} placeholder="abc@gmail.com" />
            </div>
            <div>   
                <label htmlFor="">Password</label>
                <input type="text" value={password} onChange={e=>setPassword(e.target.value)} name="" id="" placeholder="......"/>
            </div>
            <button type="submit">Submit</button>
        </form>
    )
}
