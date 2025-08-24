import { Component } from 'react'
import TodoForm from './TodoForm'
import TodoItem from './TodoItem'

type Todo = {
    id: number,
    name: string,
    completed: boolean
}
type State = {
    todos: Todo[]
}
export default class TodoList extends Component<object, State> {
    constructor(props: object) {
        super(props)
        this.state = {
            todos: JSON.parse(localStorage.getItem("todos") || "[]")
        }
    }
    saveToLocalStorage(todos: Todo[]) {
        localStorage.setItem("todos", JSON.stringify(todos))
    }
    handleAdd = (name: string) => {
        if (!name.trim()) {
            alert(`ten cong viec khong duoc de trong`)
            return
        }
        if (this.state.todos.find((e) => e.name === name)) {
            alert(`ten nhiem vu khong duoc trung`)
            return
        }
        const newTodos = [...this.state.todos, { id: Date.now(), name, completed: false }]
        this.setState({ todos: newTodos });
        this.saveToLocalStorage(newTodos)
    }
    handleDelete = (id: number) => {
        const newTodos = this.state.todos.filter((e) => e.id !== id)
        this.setState({ todos: newTodos })
        this.saveToLocalStorage(newTodos)
    }
    handleToggle = (id: number) => {
        const newTodos = this.state.todos.map((e) => e.id === id ? { ...e, completed: !e.completed } : e)
        this.setState({ todos: newTodos })
        this.saveToLocalStorage(newTodos)
    }
    handleEdit = (id: number, newName: string) => {
        const newTodos = this.state.todos.map((e) =>
            e.id === id ? { ...e, name: newName } : e
        );
        this.setState({ todos: newTodos });
        this.saveToLocalStorage(newTodos);
    };
    render() {
        return (
            <div>
                <TodoForm onAdd={this.handleAdd} />
                <ul>
                    {this.state.todos.map((todo) => (
                        <TodoItem
                            key={todo.id}
                            todo={todo}
                            onDelete={this.handleDelete}
                            onToggle={this.handleToggle}
                            onEdit={this.handleEdit}
                        />
                    ))}
                </ul>

            </div>
        )
    }
}
