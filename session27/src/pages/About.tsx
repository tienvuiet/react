// import React from 'react'

import { NavLink } from "react-router-dom";

export default function About() {
    return (
        <>
            <div style={{ display: "flex", gap: 10 }}>
                <NavLink to={`/`}><button>Home</button></NavLink>
                <NavLink to={`/about`}> <button>About</button>   </NavLink>
                <NavLink to={`/contact`}><button>Conteac</button></NavLink>
            </div>
            <h2>Gioi thieu ban than</h2>
            <ul>
                <li>Ho ten: Vu Viet Tien</li>
                <li>Nghe Nghiep: dev</li>
                <li>So thich: ngu</li>
            </ul>
        </>
    )
}
