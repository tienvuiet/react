// import React from 'react'

import { NavLink, useNavigate } from "react-router-dom";

export default function None() {
    const navigate = useNavigate()
    const handleClick = ()=>{
        navigate(-1)
    }
  return (
    <div>
      <h2>404</h2>
      <button>  
        <NavLink to={`/trangchu`}>Quay ve trang chu</NavLink>
      </button>
      <button onClick={handleClick}>  
        Quay lai
        
      </button>
    </div>
  )
}
