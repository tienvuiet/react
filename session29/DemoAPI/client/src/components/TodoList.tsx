// import React from 'react'

import { useEffect, useState } from "react"
type TodoType = {
    id: number,
    name: string,
    age: number
}
export default function TodoList() {
    const [todos, setTodos] = useState<TodoType[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const fetchTodo = (): void => {

        //hien thi loading
        setIsLoading(true)

        fetch("http://localhost:3000/students", {
            method: "GET"
        })
            .then((response) => response.json())
            .then((data) => setTodos(data))
            .catch((error) => console.log("Error: ", error))
            .finally(() => setIsLoading(false))
    }

    useEffect(() => {
        fetchTodo()
    }, [])
    //ham them cong viec
    const handleAddTodo = async (): Promise<void> => {
        //validate du lieu dau vao 
        //Them moi vao database khi du lieu thoa man
        //tra ve loi khi du lieu khong thoa man
        try {
            const response = await fetch("http://localhost:3000/students", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name: "Build web app",
                    completed: false,
                })
            })
            if (response.status === 201) {
                //hien thi thong bao
                alert("them moi cv thanh cong")
                //load lai du lieu moi nhat
                fetchTodo()
            }

        } catch (error) {
            console.log("Error: ", error);

        }
    }
    //ham xoa cong viec
    const handleDelete = async (todo: TodoType) => {
        //thong bao xac nhan xoa
        const isConfirmDelete = confirm(`Ban co muon xoa cong viec ${todo.name} khong`)
        //neu nhu dong y se goi API xoa du lieu
        if (isConfirmDelete) {
            //goi API xoa cong viec
            try {
                const reponse = await fetch(`http://localhost:3000/students/${todo.id}`, {
                    method: "DELETE"
                })
                if (reponse.status === 200) {
                    //hien thi thong bao 
                    alert(`Xoa cong viec thanh cong`)
                    //load lai du lieu
                    fetchTodo()
                }
            } catch (error) {
                console.log("Error: ", error);

            }
        }
    }

    // ham chinh sua
    const handleUpdate = async (todo: TodoType) => {
        try {
            const reponse = await fetch(`http://localhost:3000/students/${todo.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: "Todo Updated",
                    age: 1000
                })
            })

            if (reponse.status === 200) {
                //hien thi thong bao
                alert(`Cap nhat cong viec thanh cong`)
                //load lai du lieu
                fetchTodo()
            }
        } catch (error) {
            console.log("Error: ", error);

        }
    }
    return (
        <div>
            {   
                isLoading && <div>Dan tai du lieu ...</div>
            }

            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h2>Todo list</h2>
                <button onClick={handleAddTodo}>Add Todo</button>
            </div>
            <ul>
                {
                    todos.map((todo) => (
                        <li key={todo.id}>
                            <h2>Id: {todo.id}</h2>
                            <h2>Name: {todo.name}</h2>
                            <h2>Age: {todo.age}</h2>
                            <button onClick={() => handleUpdate(todo)}>Sua</button>
                            <button onClick={() => handleDelete(todo)}>Xoa</button>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
