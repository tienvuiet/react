
import { useNavigate, useParams } from "react-router-dom"
import { tasks } from "./TaskList"

export default function TaskDetail() {
    const {id} = useParams()
    const navigate = useNavigate()
    const task  = tasks.find((t)=>t.id.toString()===id)
  return (
    <>
      <h2>Chi tiet cong viec</h2>
      { 
        <ul>
            <li>{task?.title}</li>
            <li>{task?.description}</li>
            <button onClick={()=>navigate(`/tasks`)}>Danh sach cong viec</button>
        </ul>
      }
    </>
  )
}
