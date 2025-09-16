// import React from 'react'

import axios from "axios"
// import { useEffect } from "react";

export default function Ex4() {
    const getAllStudent = async () => {
        const respone = await axios.get("http://localhost:8080/students")
        console.log("Data all student: ", respone.data);
    }
    getAllStudent()
    return (
        <div>
            <h2>Detail all student</h2>
        </div>
    )
}
