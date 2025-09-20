import { useState } from "react"
import type { Products } from "../interface/interface"
import { useDispatch } from "react-redux"

// import React from 'react'

const data : Products[] = [
    {
        id: 1,
        title: "Pizza",
        image: "public/images/bread.jpg",
        content: "pizza",
        price: 14,
        quantity: 4
    },
    {
        id: 2,
        title: "Hamburger",
        image: "public/images/Cake.jpg",
        content: "pizza",
        price: 1000,
        quantity: 6
    },
    {
        id: 3,
        title: "Bread",
        image: "public/images/pizza.jpg",
        content: "pizza",
        price: 3000,
        quantity: 9
    },
    {
        id: 4,
        title: "Cake",
        image: "public/images/bread.jpg",
        content: "pizza",
        price: 3000,
        quantity: 3
    },
]
export default function ListProduct() {
    
    const [products] = useState<Products[]>(data)
    const dispatch = useDispatch()
    const addToCart = (p: Products) =>{
        dispatch({
            type: "ADD",
            payload: p
        })
    }
    return (
        <div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        <h1 className="panel-title">List Products</h1>
                    </div>
                    <div className="panel-body" id="list-product">
                        {/* Danh sach san pham */}
                        {products.map((p: Products) => (
                            <div key={p.id}>
                                <div className="media product">
                                    <div className="media-left">
                                        <a href="#">
                                            <img
                                                className="media-object"
                                                src={p.image}
                                                alt="pizza"
                                            />
                                        </a>
                                    </div>
                                    <div className="media-body">
                                        <h4 className="media-heading">{p.title}</h4>
                                        <p>
                                            {p.content}
                                        </p>
                                        <input
                                            name="quantity-product-1"
                                            type="number"
                                            defaultValue={p.quantity}
                                        />
                                        <a data-product={1} className="price" onClick={(e) =>{
                                            e.preventDefault();
                                            addToCart(p)
                                        }} 
                                            style={{cursor: "pointer"}}
                                        >
                                            {p.price} USD{" "}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </div>
    )
}
