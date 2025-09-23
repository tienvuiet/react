// import React from 'react'

import { useDispatch, useSelector } from "react-redux"
import type { RootState } from "../store/store"
import HeartOutlined from "@ant-design/icons/lib/icons/HeartOutlined"
import { changeLove } from "../store/slices/LoveSlice"

export default function ChangeLove() {
    const result = useSelector((state: RootState) => state.changeLove)
    const dispatch = useDispatch()

    return (
        <>
            <h2>List Favorites User: </h2>
            {result.map((u) => (
                <ul key={u.id}>
                    <li>UserName: {u.name}</li>
                    <li>Favorite: <HeartOutlined style={u.love ? { color: "red" } : { color: "black" }} onClick={() => dispatch(changeLove(u.id))} /></li>
                </ul>
            ))}
        </>
    )
}
