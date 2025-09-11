// import React from 'react'

import { NavLink, Outlet } from "react-router-dom";

export default function Blog() {
    return (
        <>
            <div style={{ display: "flex ", gap : 20 }}>
                <div style={{backgroundColor:"green"}}> 
                    <h2>My Blog</h2>
                    <NavLink to={`/blog`}> <button >Posts</button></NavLink>
                </div>
                <div>
                   <h2>Danh sach bai viet</h2>
                   <Outlet/>
                </div>
            </div>
        </>
    )
}
