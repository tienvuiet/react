// import React from 'react'

import { useParams } from "react-router-dom"



export default function Team() {
  const {id} =  useParams()

  return (
    <div>
      <h2>Chi tiết team</h2>
      <p>Team id: {id}</p>
    </div>
  )
}
