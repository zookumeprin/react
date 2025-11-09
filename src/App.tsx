import { useState, useRef } from "react";
import TodoTemplate from './components/Template';
import TodoList from './components/List';
import TodoInsert from './components/Insert';

export type Todo = {
  id: number;
  text: string;
  done: boolean;
};

export default function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const nextId = useRef(1);

  const handleAdd = (text: string) => {
  setTodos((prev) => [...prev, { id: nextId.current++,
  text, done: false }]);
  };

  const handleToggle = (id: number) => {
  setTodos((prev) => prev.map((todo) => 
  todo.id === id ? {...todo, done: !todo.done } : todo));
  };

  const handleRemove = (id: number) => {
  setTodos((prev) => prev.filter((todo) => 
  todo.id !== id));
  };

  return (
    <TodoTemplate>
      <h1>Todo List</h1>
      <TodoInsert onAdd={handleAdd}/>
      <TodoList todos={todos} onToggle={handleToggle} onRemove={handleRemove}/>
    </TodoTemplate>
  );
}