// import React from 'react'

import { useSelector } from "react-redux"

export default function Ex2() {
    const result = useSelector((state: any) => state.user2.users)
    return (
        <div>
            <h1>List User</h1>
            <table>
                <thead>
                    <th>Id</th>
                    <th>Ten</th>
                    <th>Gioi tinh</th>
                    <th>Date</th>
                    <th>Dia chi</th>
                    <th>Chuc nang</th>
                </thead>
                <tbody>
                    {
                        result.map((u:any) => (
                            <tr key={u.id}>
                                <td>{u.id}</td>
                                <td>{u.name}</td>
                                <td>{u.gender}</td>
                                <td>{u.date}</td>
                                <td>{u.address}</td>
                                <td>    
                                    <button>Sua</button>
                                    <button>Xoa</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}
