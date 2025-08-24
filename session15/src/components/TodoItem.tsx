import  { Component } from 'react'
type Todo ={
    id : number, 
    name: string, 
    completed: boolean;
}
type Props = {
    todo: Todo
    onDelete: (id: number) => void
    onToggle: (id: number) => void
    onEdit: (id: number, name: string) => void
}
type State = {
    editing: boolean
    editValue: string
}
export default class TodoItem extends Component<Props, State> {
    constructor(props: Props){
        super(props)
        this.state = {
            editing:false,
            editValue: props.todo.name
        }
    }
    handleEdit = ()=>{
        if(this.state.editing){
            this.props.onEdit(this.props.todo.id, this.state.editValue)
        }
        this.setState({editing: !this.state.editing})
    }
  render() {
    const {todo, onDelete, onToggle} =  this.props

    return (
      <li>  
        <input type="checkbox" checked = {todo.completed} onChange={()=>onToggle(todo.id)}  />
        {this.state.editing? (  
            <input type="text"  value={this.state.editValue} onChange={(e)=>this.setState({editValue: e.target.value})}/>
        ):
        (   
            <span  style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
              {todo.name}
            </span>
        )  
        }
        <button onClick={this.handleEdit}>
          {this.state.editing ? "Lưu" : "Sửa"}
        </button>
        <button onClick={() => onDelete(todo.id)}>Xóa</button>
      </li>
    )
  }
}
