// import React from 'react'

import { useDispatch, useSelector } from "react-redux"
import type { Student } from "../utils/types"
import { useState, } from "react";
import { addStudent, deleteStudent } from "../store/slices/studentSlice";
import type { RootState } from "../store/store";
export default function StudentManager() {
    const [user, setUser] = useState<Student>({
        id: Math.floor(Math.random() * 10000),
        name: ""
    })
    const result = useSelector((state : RootState) => state.students)
    console.log(result);
    
    const dispatch: any = useDispatch()


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUser({ ...user, name: e.target.value })
    }
    const addNewStudent = () => {
        dispatch(addStudent(user))
    }
    const deleteNewStudent = (student: Student) => {
        dispatch(deleteStudent(student.id))
    }
    return (
        <div>
            <h1>Quan ly sinh vien</h1>
            <input type="text" onChange={handleChange} />
            <button onClick={addNewStudent}>Them</button>
            {result.map((item: Student) => {
                return <li key={item.id}> {item.name} <button onClick={()=> deleteNewStudent(item)}>Xoa</button></li>
            })}
        </div>
    )
}
