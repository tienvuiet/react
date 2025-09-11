// import React from 'react'

import { NavLink, useParams } from "react-router-dom"
import { Products } from "./ProductList"
export default function ProductDetail() {
   
    const { id } = useParams()
    const check = Products.find((p) => p.id.toString() === id)

    return (
        <>
            <h2>Danh sach chi tiet san pham</h2>
            
            <div>
                <ul>
                    <li>Name: {check?.name}</li>
                    <li>Description: {check?.description}</li>
                    <li>Price: {check?.price}</li>
                </ul>
                <NavLink to={`/products`}><button>Quay lai trang danh sach san pham</button></NavLink>
            </div>
        </>
    )
}
