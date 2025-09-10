// import React from 'react'

import { NavLink } from "react-router-dom"

export default function TeamIndex() {
  const TEAMS = [
    {
      id: "alpha", name: "tienvu"
    },
    {
      id: "beta", name: "sieunhan"
    },
    {
      id: "gamma", name: "sadf"
    }
  ]
  return (
    <div>
      <h2>Team Index</h2>
      <ul>
        {TEAMS.map((t) => (
          <li key={t.id}>
            <NavLink to={t.id}>{t.name}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  )
}
