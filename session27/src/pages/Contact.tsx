// import React from 'react'

import { NavLink } from "react-router-dom";

export default function Contact() {
    return (
        <>
            <div style={{ display: "flex", gap: 10 }}>
                <NavLink to={`/`}><button>Home</button></NavLink>
                <NavLink to={`/about`}> <button>About</button>   </NavLink>
                <NavLink to={`/contact`}><button>Conteac</button></NavLink>
            </div>
            <h2>Thong tin lien he</h2>
            <ul>
                <li>Email: tienxinhzai241@gmail.com</li>
                <li>So dien thoai: 0915402696</li>
                <li>Link : <a href="https://www.facebook.com/tien.vuviet.3914/?locale=vi_VN%2F"> https://www.facebook.com/tien.vuviet.3914/?locale=vi_VN%2F</a></li>
            </ul>
        </>
    )
}
