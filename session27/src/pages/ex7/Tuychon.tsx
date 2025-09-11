// import React from 'react'

import { NavLink } from "react-router-dom";

export default function Tuychon() {
  return (
    <>
     <h2>About</h2>
     <p>Trang gioi thieu mau</p>
     <NavLink to={`/trangchu`}>Quay ve trang chu</NavLink> 
    </>
  )
}
