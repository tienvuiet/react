// import React from 'react'

import { Button } from "antd";
import Input from "antd/es/input/Input";
import { Pencil, SquareX } from "lucide-react";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
type Task = {
    id: string | number,
    name: string,
    isCompleted: boolean,
}

export default function Todo() {
    const [task, setTask] = useState<string>("")
    const [error, setError] = useState<string>("")
    const [tasks, setTasks] = useState<Task[]>(() => {
        const taskLocals = localStorage.getItem("tasks")
        return taskLocals ? JSON.parse(taskLocals) : []

    })

    const handleChangeTask = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (!event.target.value) {
            setError("Ten cong viec khong duoc de trong")
            return
        } else {
            setError("")
            setTask(event.target.value);
        }
    }
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault()
        const newTask: Task = {
            id: uuidv4(),
            name: task,
            isCompleted: false
        }
        const taskClones = [...tasks, newTask];
        setTasks(taskClones);
        localStorage.setItem("tasks", JSON.stringify(taskClones))
        setTask("")

    }
    const handleChangeStatus = (id: number | string) => {
        const updateTasks = tasks.map((task: Task) => {
            if (task.id === id) {
                task.isCompleted = !task.isCompleted
            }
            return task
        })
        setTasks(updateTasks);
        localStorage.setItem("tasks", JSON.stringify(updateTasks))
    }
    const handleDeleteTask = (id: number | string) => {
        const target = tasks.find((t) => t.id === id)
        if (!target) return
        const ok = window.confirm(`Bạn có chắc muốn xóa công việc: "${target.name}"?`)
        if (!ok) return
        const next = tasks.filter((t) => t.id !== id)
        setTasks(next)
        localStorage.setItem("tasks", JSON.stringify(next))
        window.alert(`Đã xóa công việc: "${target.name}"`)
    }
    const handleEditTask = (id: string |number) =>{
        const target = tasks.find((t)=>t.id===id)
        if(!target) return 
        const newName = window.prompt("Ten nhiem vu moi: ", target.name);
        if(newName===null) return ;
        const updateTasks = tasks.map((t)=> t.id===id? {...t,name: newName}:t)
        setTasks(updateTasks)
        localStorage.setItem("tasks", JSON.stringify(updateTasks))
        window.alert(`Cap nhat cong viec thanh cong`)

    }
    return (
        <>
            <div className="h-screen flex justify-center items-center">
                <div className="w-[1000px] border border-[#dadada] p-6 rounded-lg shadow-sm">
                    <h3 className="text-center text-[24px] font-semibold mb-6">Danh sách công việc</h3>
                    <form onSubmit={handleSubmit} className="flex gap-5 mb-3"    >
                        <Input onChange={handleChangeTask} value={task}
                            placeholder="Nhap ten cong viec" />
                        <Button htmlType="submit">Them</Button>
                    </form>
                    {
                        error && (
                            <p className="mb-6 text-red-600 text-[14px]">Ten cong viec khong duoc de trong</p>
                        )
                    }

                    <ul className="mb-6">
                        {
                            tasks.map((task: Task) => (
                                <li className="flex justify-between items-center">
                                    <div className="flex items-center gap-3">
                                        <input onChange={() => handleChangeStatus(task.id)} type="checkbox" checked={task.isCompleted} />
                                        {
                                            task.isCompleted ? (
                                                <s>{task.name}</s>
                                            ) : (
                                                <span>{task.name}</span>
                                            )
                                        }

                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Pencil size={18}   
                                        className="text-orange-400 hover:text-orange-600 cursor-pointer"    
                                        onClick={()=>handleEditTask(task.id)}    
                                        />
                                        <SquareX size={18}
                                            className="text-red-400 hover:text-red-600 cursor-pointer"
                                            onClick={() => handleDeleteTask(task.id)}
                                        />
                                    </div>
                                </li>
                            ))
                        }

                    </ul>
                    <div>
                        <span>Công việc đã hoàn thành: </span>
                        <span>{tasks.filter((t) => t.isCompleted).length}</span> /{" "}
                        <span>{tasks.length}</span>
                    </div>
                </div>
            </div>
        </>
    )
}
