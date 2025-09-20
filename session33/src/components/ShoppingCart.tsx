// import React from 'react'

import { useDispatch, useSelector } from "react-redux"
import type { Products } from "../interface/interface";

export default function ShoppingCart() {
    const result = useSelector((state: any) => {
        return state.cart.cart
    });
    const dispatch = useDispatch()
    const increase = (id: number) => {
        dispatch({
            type: "INCREASE",
            payload: { id }
        })
    }
    const reduce = (id: number) => {
        dispatch({
            type: "REDUCE",
            payload: { id }
        })
    }
    const deleteProduct = (id: number) => {
        dispatch({
            type: "DELETE",
            payload: { id }
        })
    }
    return (
        <div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                <div className="panel panel-danger">
                    <div className="panel-heading">
                        <h1 className="panel-title">Your Cart</h1>
                    </div>
                    <div className="panel-body">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th >STT</th>
                                    <th>Name</th>
                                    <th >Price</th>
                                    <th >Quantity</th>
                                    <th >Action</th>
                                </tr>
                            </thead>
                            <tbody id="my-cart-body">
                                {
                                    result.map((c: Products, index: number) => (
                                        <tr key={index}>
                                            <th scope="row">{index + 1}</th>
                                            <td>{c.title}</td>
                                            <td>{c.price} USD</td>
                                            <td>
                                                <button onClick={() => increase(c.id)}>+</button>
                                                {c.quantity}
                                                <button onClick={() => reduce(c.id)}>-</button>
                                            </td>
                                            <td>
                                                <a
                                                    className="label label-info update-cart-item"
                                                    data-product=""
                                                >
                                                    Update
                                                </a>
                                                <a
                                                    className="label label-danger delete-cart-item"
                                                    data-product=""
                                                    onClick={() => deleteProduct(c.id)}
                                                >
                                                    Delete
                                                </a>
                                            </td>
                                        </tr>
                                    ))
                                }


                            </tbody>
                            <tfoot id="my-cart-footer">
                                <tr>
                                    <td colSpan={4}>
                                        There are <b>{result.length}</b> items in your shopping cart.
                                    </td>
                                    <td colSpan={2} className="total-price text-left">
                                        {result.reduce((acc: any, item: any) => {
                                            return acc + item.price * item.quantity
                                        }, 0)} USD
                                    </td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
                <div className="alert alert-success" role="alert" id="mnotification">
                    Add to cart successfully
                </div>
            </div>
        </div>
    )
}
