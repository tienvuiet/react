import axios from "axios"

// import React from 'react'

export default function Ex2() {
    const getData = async () => {
        let data = await axios.get("http://localhost:3000/products")
        console.log("Data: ", data.data);
    }
    getData()
    return (
        <>
            <div>
                <h2>List Product</h2>
            </div>
            <div>

            </div>
        </>
    )
}
