// import React from 'react'

import { NavLink } from "react-router-dom";

export default function Trangchu() {
  return (
    <>
     <h2>Trang chu</h2>
    <NavLink to={`/tuychon`}>   
    {({isActive})=>(<button style={{    
        backgroundColor: isActive? "red":"",
        color:isActive ?"white":"",
        padding: 4
    }}>    
        About
    </button>)}    
    </NavLink>
    </>
  )
}
