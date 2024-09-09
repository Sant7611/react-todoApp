import { useState } from "react";
import Form from "./Form";
import TodoList from "./TodoList";
import Footer from "./Footer";

export default function Todo() {

  const [todos, setTodos] = useState([]);
  const completedTodos = todos.filter((todo)=>todo.done).length;
  const totalTodos = todos.length;

  return (
    <div>
      <Form todos={todos} setTodos={setTodos} />
      <TodoList setTodos={setTodos} todos={todos} />
      <Footer totalTodos={totalTodos} completedTodos = {completedTodos} />
    </div>
  );
}
