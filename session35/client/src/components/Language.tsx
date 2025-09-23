// import React from 'react'

import { useDispatch, useSelector } from "react-redux"
import type { RootState } from "../store/store"
import { changeLanguage } from "../store/slices/languageSlice"

export default function Language() {
    const result = useSelector((state: RootState) => state.changeLanguage)
    const dispatch = useDispatch()
    const handleChangeLanguage = () => {
       dispatch(changeLanguage())
    }
    return (
        <div>
            <select name="" id="" onChange={handleChangeLanguage} >
                <option value="vi">Vietnamese</option>
                <option value="en">English</option>
            </select>
            <h2>{result ? "Hoc vien Rekkei " : "Rikkei Academy"}</h2>
        </div>
    )
}
