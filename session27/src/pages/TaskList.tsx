import { NavLink } from "react-router-dom"

// import React from 'react'
type DataTask = {
    id: number,
    title: string,
    description: string
}
export const tasks: DataTask[] = [
        {
            id: 1,
            title: "Sieu nhan",
            description: "Hay va y nghia"
        },
        {
            id: 2,
            title: "Dragon ball",
            description: "Hay va y nghia"
        }
    ]
export default function TaskList() {
    
    return (
        <>
            <h2>Danh sach cong viec</h2>
            <div style={{ display: "flex", gap: 20 }}>
                {
                    tasks.map((t) => (
                        <div key={t.id}>
                            <ul>
                                <li>{t.title}</li>
                                <li>{t.description}</li>
                                <NavLink to={`/tasks/${t.id}`}>Xem chi tiet</NavLink>
                            </ul>
                        </div>
                    ))
                }
            </div>
        </>
    )
}
