// import React from 'react'

import { NavLink } from "react-router-dom"

export default function Home() {
    return (
        <>
            <div style={{ display: "flex", gap: 10 }}>
                <NavLink to={`/`}> <button>Home</button></NavLink>
                <NavLink to={`/about`}> <button>About</button>   </NavLink>
                <NavLink to={`/contact`}><button>Conteac</button></NavLink>
            </div>
            <h2>Chào mừng bạn đến với ứng dụng giới thiệu bản thân của tôi!</h2>
        </>
    )
}
