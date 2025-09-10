// import React from 'react'

import { useLocation } from "react-router-dom"

export default function ProductDetail() {
    const location = useLocation()
    console.log("Location : ", location);
    
  return (
    <div>
      Product detail
    </div>
  )
}
