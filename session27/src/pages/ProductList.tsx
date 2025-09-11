// import React from 'react'

import { useState } from "react"
import { NavLink, useSearchParams } from "react-router-dom"
export type IProducts = {
    id: number,
    name: string,
    price: number,
    description: string,
}
export const Products: IProducts[] = [
    {
        id: 1,
        name: "Laptop dell",
        price: 1200,
        description: "dung tot"
    },
    {
        id: 2,
        name: "Laptop Asus",
        price: 13200,
        description: "Choi gam tot"
    },
    {
        id: 3,
        name: "Macbook",
        price: 42200,
        description: "Si tot"
    },
    {
        id: 4,
        name: "Laptop dell",
        price: 1200,
        description: "dung tot"
    },
    {
        id: 5,
        name: "MSI",
        price: 12300,
        description: "Giat giat"
    },
]
export default function ProductList() {
    const [inputValue, setInputValue] = useState("")
    const [seacrchParam, setSearchParams] = useSearchParams();
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value)
    }
    const handleSubmit = () => {
        setSearchParams({ search: inputValue })
    }
    return (
        <>
            <h2>Danh sach san pham</h2>
            <div style={{ display: "flex", gap: 20 }}>
                <input type="text" onChange={handleChange} value={inputValue} name="" id="" />
                <button onClick={handleSubmit}>Search</button>
            </div>

            <div style={{ display: "flex", gap: 20 }}>
                {Products.map((p) => (
                    <div key={p.id}>
                        <ul>
                            <li>Name: {p.name}</li>
                            <li>Description: {p.description}</li>
                            <li>Price: {p.price}</li>
                        </ul>
                        <NavLink to={`/products/${p.id}`}><button>Xem chi tiet</button></NavLink>
                    </div>
                ))}
            </div>
        </>
    )
}
