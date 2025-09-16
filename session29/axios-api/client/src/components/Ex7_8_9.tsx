// import React from 'react'

import axios from "axios";
import { Pencil, Trash } from "lucide-react";
import { useEffect, useState } from "react";
type Students = {
    id: number,
    student_name: string,
    email: string,
    address: string,
    phone: string,
    status: boolean,
    created_at: string
}
export default function Ex7_8_9() {
    const [students, setStudents] = useState<Students[]>([]);
    const [currentPage, setCurrentPage] = useState(1)
    const pageSize = 3
    const fetchTodo = async (): Promise<void> => {
        try {
            const response = await axios.get(`http://localhost:8080/students`)
            setStudents(response.data)
        } catch (error) {
            console.log("Error: ", error);

        }
    }
    useEffect(() => {
        fetchTodo()
    }, [])
    const handleDelete = async (student: Students) => {
        const isConfirmDelete = confirm(`Ban co muon xoa hoc sinh ${student.student_name} khong`)
        if (isConfirmDelete) {
            try {
                const response = await axios.delete(`http://localhost:8080/students/${student.id}`)
                if (response.status === 200) {
                    alert(`Xoa thanh cong`)
                    fetchTodo()

                    if ((currentPage - 1) * pageSize >= students.length - 1) {
                        setCurrentPage((prev) => Math.max(prev - 1, 1))
                    }
                }
            } catch (error) {
                console.log("Error: ", error);

            }
        }
    }

    const startIndex = (currentPage - 1) * pageSize;
    const currentData = students.slice(startIndex, startIndex + pageSize);
    const totalPages = Math.ceil(students.length / pageSize)
    return (
        <>
            <div style={{ justifyContent: "center" }}>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginBottom: "16px",
                    }}
                >
                    <h2>Quản lý sinh viên</h2>
                    <button>Thêm sinh viên</button>
                </div>

                <div>
                    <table
                        style={{
                            width: "100%",
                            borderCollapse: "collapse",
                            textAlign: "left",
                        }}
                    >
                        <thead>
                            <tr>
                                <th style={{ borderBottom: "1px solid #ccc", padding: "8px" }}>
                                    Tên sinh viên
                                </th>
                                <th style={{ borderBottom: "1px solid #ccc", padding: "8px" }}>
                                    Email
                                </th>
                                <th style={{ borderBottom: "1px solid #ccc", padding: "8px" }}>
                                    Địa chỉ
                                </th>
                                <th style={{ borderBottom: "1px solid #ccc", padding: "8px" }}>
                                    Số điện thoại
                                </th>
                                <th style={{ borderBottom: "1px solid #ccc", padding: "8px" }}>
                                    Lựa chọn
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                currentData.map((student) => (
                                    <tr key={student.id}>
                                        <td style={{ padding: "8px" }}>{student.student_name}</td>
                                        <td style={{ padding: "8px" }}>{student.email}</td>
                                        <td style={{ padding: "8px" }}>{student.address}</td>
                                        <td style={{ padding: "8px" }}>{student.phone}</td>
                                        <td style={{ padding: "8px" }}>
                                            <button>
                                                <Pencil />
                                            </button>
                                            <button style={{ marginLeft: "8px" }} onClick={() => handleDelete(student)}>
                                                <Trash />
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            }

                        </tbody>
                    </table>


                    <div
                        style={{
                            marginTop: "16px",
                            display: "flex",
                            justifyContent: "center",
                            gap: "8px",
                        }}
                    >
                        <button
                            disabled={currentPage === 1}
                            onClick={() => setCurrentPage((prev) => prev - 1)}
                        >
                            Prev
                        </button>
                        <span>
                            {currentPage}/{totalPages}
                        </span>
                        <button
                            disabled={currentPage === totalPages}
                            onClick={() => setCurrentPage((prev) => prev + 1)}
                        >
                            Next
                        </button>
                    </div>
                </div>
            </div>

        </>
    )
}
