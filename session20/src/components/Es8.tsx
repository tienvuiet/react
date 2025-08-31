import { useReducer } from "react"

// import React from 'react'
type State = {
    name: string,
    email: string
}
const initialState: State = {
    name: "",
    email: ""
}
type Action = { type: "SET_NAME"; payload: string } | { type: "SET_EMAIL", payload: string }

const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case "SET_NAME":
            return { ...state, name: action.payload }
        case "SET_EMAIL":
            return { ...state, email: action.payload }
        default: return state
    }
}
export default function Es8() {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <>
            <div>
                <label htmlFor="">Ten:</label><br />
                <input type="text" value={state.name} onChange={(e) => dispatch({ type: "SET_NAME", payload: e.target.value })} />
            </div>
            <div>
                <label htmlFor="">Email:</label><br />
                <input type="email" value={state.email} onChange={(e) => dispatch({ type: "SET_EMAIL", payload: e.target.value })} />
            </div>
            <div>
                <h3>Thong tin nguoi dung</h3>
                <p>Ten: {state.name !== "" ? state.name : "Chua nhap"}</p>
                <p>Email: {state.email !== "" ? state.email : "Chua nhap"}</p>

            </div>
        </>
    )
}
