"use client";
import { useState } from "react";
import api from "@/lib/api";

export default function TodoItem({ todo, onUpdate }) {
  const toggleDone = async () => {
    await api.put(`/todos/${todo.id}`, { ...todo, is_done: !todo.is_done });
    onUpdate();
  };

  const deleteTodo = async () => {
    await api.delete(`/todos/${todo.id}`);
    onUpdate();
  };

  return (
    <div className="flex items-center justify-between border-b py-2">
      <label className="flex items-center gap-2">
        <input type="checkbox" checked={todo.is_done} onChange={toggleDone} />
        <span className={todo.is_done ? "line-through" : ""}>{todo.title}</span>
      </label>
      <button onClick={deleteTodo} className="text-red-500">
        Delete
      </button>
    </div>
  );
}
