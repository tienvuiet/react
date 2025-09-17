// import React from 'react'

import axios from "axios";
import { Pencil, Trash } from "lucide-react";
import { useEffect, useState } from "react";

type TodoType = {
  id: number;
  name: string;
  status: boolean;
};

export default function TodoList() {
  const [todos, setTodos] = useState<TodoType[]>([]);
  const [newTodo, setNewTodo] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [editingId, setEditingId] = useState<number | null>(null);
  const [editingName, setEditingName] = useState<string>("");

  const fetchTodo = async (): Promise<void> => {
    setIsLoading(true);
    try {
      const response = await axios.get(`http://localhost:8080/Todo`);
      setTodos(response.data);
    } catch (error) {
      console.log("Error: ", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchTodo();
  }, []);

  const handleDelete = async (todo: TodoType) => {
    const isConfirmDelete = confirm(
      `Ban co chac chan muon xoa cong viec ${todo.name} khong`
    );
    if (isConfirmDelete) {
      try {
        const response = await axios.delete(
          `http://localhost:8080/Todo/${todo.id}`
        );
        if (response.status === 200) {
          alert(`Xoa thanh cong`);

          setTodos((prev) => prev.filter((t) => t.id !== todo.id));
        }
      } catch (error) {
        console.log(`Error: `, error);
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };
  const handleAddTodo = async (): Promise<void> => {
    const name = newTodo.trim();
    if (!name) return;
    try {
      const response = await axios.post(`http://localhost:8080/Todo`, {
        name,
        status: false,
      });
      if (response.status === 201) {
        alert(`Them cong viec thanh cong`);
        setNewTodo("");
        // thêm lạc quan
        setTodos((prev) => [...prev, response.data ?? { id: Date.now(), name, status: false }]);
      }
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  const isAllCompleted = (list: TodoType[]) =>
    list.length > 0 && list.every((t) => t.status === true);
  const handleToggleStatus = async (todo: TodoType) => {
    const prevTodos = todos;
    const prevAllCompleted = isAllCompleted(prevTodos);
    const updated: TodoType = { ...todo, status: !todo.status };
    const nextTodos = prevTodos.map((t) => (t.id === todo.id ? updated : t));
    setTodos(nextTodos);
    try {
      await axios.put(`http://localhost:8080/Todo/${todo.id}`, updated);
      const nextAllCompleted = isAllCompleted(nextTodos);
      if (!prevAllCompleted && nextAllCompleted) {
        alert(`Hoan thanh cong viec`);
      }
    } catch (error) {
      setTodos(prevTodos); 
    }
  };

  const startEdit = (todo: TodoType) => {
    setEditingId(todo.id);
    setEditingName(todo.name);
  };


  const cancelEdit = () => {
    setEditingId(null);
    setEditingName("");
  };


  const handleUpdate = async (todo: TodoType) => {
    const name = editingName.trim();
    if (!name) {
      alert("Ten cong viec khong duoc de trong");
      return;
    }

    const prevTodos = todos;
    const updated: TodoType = { ...todo, name };
    const nextTodos = prevTodos.map((t) => (t.id === todo.id ? updated : t));
    setTodos(nextTodos); 

    try {
      await axios.put(`http://localhost:8080/Todo/${todo.id}`, updated);
      setEditingId(null);
      setEditingName("");
    } catch (error) {
      console.log("Error: ", error);
      setTodos(prevTodos); 
    }
  };

  return (
    <>
      <div style={{ width: 600 }}>
        {isLoading && <div>Dang tai du lieu</div>}
        <h2>Quan ly cong viec</h2>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <input
            type="text"
            placeholder="Nhap ten cong viec"
            onChange={handleChange}
            value={newTodo}
          />
          <button onClick={handleAddTodo}>Them cong viec</button>
        </div>

        <div style={{ maxHeight: "200px", overflowY: "auto", marginTop: 20 }}>
          {todos.map((todo) => {
            const isEditing = editingId === todo.id;
            return (
              <div key={todo.id}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: 4,
                    border: "2px solid green",
                    marginTop: 4,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 6,
                    }}
                  >
                    <input
                      type="checkbox"
                      checked={todo.status}
                      onChange={() => handleToggleStatus(todo)}
                    />

                    {!isEditing ? (
                      <span
                        style={{
                          marginLeft: 6,
                          textDecoration: todo.status ? "line-through" : "none",
                          opacity: todo.status ? 0.7 : 1,
                        }}
                      >
                        {todo.name}
                      </span>
                    ) : (
                      <input
                        autoFocus
                        value={editingName}
                        onChange={(e) => setEditingName(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") handleUpdate(todo);
                          if (e.key === "Escape") cancelEdit();
                        }}
                        style={{ padding: "2px 6px", minWidth: 220 }}
                        placeholder="Nhap ten moi..."
                      />
                    )}
                  </div>

                  <div style={{ display: "flex", gap: 6 }}>
                    {!isEditing ? (
                      <>
                        <button onClick={() => startEdit(todo)} title="Chinh sua">
                          <Pencil />
                        </button>
                        <button onClick={() => handleDelete(todo)} title="Xoa">
                          <Trash />
                        </button>
                      </>
                    ) : (
                      <>
                        <button onClick={() => handleUpdate(todo)}>Luu</button>
                        <button onClick={cancelEdit}>Huy</button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
