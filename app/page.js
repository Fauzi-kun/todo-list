"use client";
import { useEffect, useState } from "react";
import api from "@/lib/api";
import TodoItem from "@/components/TodoItem";
import TodoForm from "@/components/TodoForm";

export default function Home() {
  const [todos, setTodos] = useState([]);

  const fetchTodos = async () => {
    const res = await api.get("/todos/");
    setTodos(res.data);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <main className="max-w-xl mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4">📝 To-Do List</h1>
      <TodoForm onAdd={fetchTodos} />
      <div>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} onUpdate={fetchTodos} />
        ))}
      </div>
    </main>
  );
}
