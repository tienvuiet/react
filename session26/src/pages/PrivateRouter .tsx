// import React from 'react'

import { useState } from "react"
import { Navigate,  Outlet } from "react-router-dom";

export default function PrivateRouter () {
    const [status] = useState<boolean> (false)
    // setStatus(true)
    return status ? <Outlet/>: <Navigate to={`/login`}/>
}
