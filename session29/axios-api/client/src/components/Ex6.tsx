import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Ex6() {
    const [students, setStudents] = useState([]);

    const getAllStudent = async () => {
        const response = await axios.get("http://localhost:8080/students");
        console.log("Data all student: ", response.data);
        setStudents(response.data);
    };

    const createStudent = async () => {
        const student = {
            student_name: "Sieu nhan gao",
            email: "tienxinhzai241@gmail.com",
            address: "Ninh Binh",
            phone: "0915402696",
            status: true,
            created_at: "15/9/2025"
        };
        try {
            const response = await axios.post(`http://localhost:8080/students`, student);
            console.log("Studen add:", response.data);
            getAllStudent(); 
        } catch (error) {
            console.log(`Error: ${error}`);
        }
    };

    useEffect(() => {
        getAllStudent();
    }, []);

    return (
        <div>
            <h2>Detail all student</h2>
            <button onClick={createStudent}>Add Student</button>
           
        </div>
    );
}