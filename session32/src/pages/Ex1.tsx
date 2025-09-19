// import React from 'react'

import { useSelector } from "react-redux"

export default function Ex1() {
    const result = useSelector((state: any) => state.user1)
  return (
    <div>
      <h1>Thong tin ca nhan</h1>
      <ul>
        <li>{result.id}</li>
        <li>{result.name}</li>
        <li>{result.gender}</li>
        <li>{result.date}</li>
        <li>{result.address}</li>
      </ul>
    </div>
  )
}
