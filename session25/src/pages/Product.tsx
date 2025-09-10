// import React from 'react'
// import { useNavigate } from 'react-router-dom'

import { useState } from "react"
import { useSearchParams } from "react-router-dom"

export default function Product() {
    // const navigate = useNavigate()
    // const handleNavigate = ()=> {
    //   navigate("/product-detail",{  
    //     state:{
    //         id: 1,
    //         name: "cam",
    //         price: 12000
    //     }
    //   })
    // }
    const [productName, setProductName] = useState<string>("")
    const [minPrice, setMinPrice] = useState<string>("")
    const [maxPrice, setMaxPrice] = useState<string>("")
    const [searchParams, setSearchParams] = useSearchParams()
    const handleSearch = ()=> {
          setSearchParams({ 
            keyword: productName,// tim kiem theo ten 
            minPrice: minPrice,
            maxPrice: maxPrice
          })
    }
    console.log("searchParams keyword", searchParams.get("keyword"));
    
  return (
    <div>
      <h1>Products</h1>
      <input type="text" placeholder="Tim kiem san pham theo ten"  value={productName} onChange={(e)=> setProductName(e.target.value)}/>
      <input type="number" placeholder="Gia tri be nhat "  value={minPrice} onChange={(e)=> setMinPrice(e.target.value)}/>
      <input type="number" placeholder="Gia tri lon nhat "  value={maxPrice} onChange={(e)=> setMaxPrice(e.target.value)}/>
      <button onClick={handleSearch}>Search </button>
      {/* <button onClick={handleNavigate}>Detail</button> */}
    </div>
  )
}
