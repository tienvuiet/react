// import React from 'react'

import { Navigate, NavLink, Outlet, useNavigate } from "react-router-dom"

export default function DefaultLayout() {

  // const customStyle = ({ isActive }: { isActive: boolean }) => {
  //   return {
  //     fontWeight: isActive ? "bold" : "",
  //     backgroundColor: isActive?"red":"",
      
  //   }
  // }

  // const navigate = useNavigate()
  const isLogin = false;

  // return (
    // <div>
      {/* <nav style={{ display: "flex", gap: 10 }}> */}
        {/* <NavLink style={customStyle} end to="/user/">Profile</NavLink>
        <NavLink style={customStyle} to="/user/order">Order</NavLink>
        <NavLink style={customStyle} to="/user/change-password">Change password</NavLink> */}
{/* 
        <button onClick={()=> navigate("/user")} >Profile</button>
        <button onClick={()=> navigate("/user/order")}>Order</button>
        <button onClick={()=> navigate("/user/change-password")}>Change password</button>


        <button onClick={()=> navigate(-1)}>Back to 1</button>
        <button onClick={()=> navigate(1)}>Go to 1</button>
        <button onClick={()=> navigate(2)}>Go 2</button>
        <button onClick={()=> navigate(-2)}>Back to 2</button>

        <button onClick={()=> navigate("/user/order",{replace: true})}>Go to order not save history</button> */}
      {/* </nav> */}
      {/* Pham vi hien thi noi dung cua trang */}
      
      {/* muon hien thi component con long tren component cha thi phai su dung outlet */}
      {/* <footer>Footer</footer> */}
    // </div>
  // )
  return isLogin ? <Outlet /> : <Navigate to={"/login"}/>
  
}
