import styles from "./todolist.module.css";
import TodoItem from "./TodoItem";
export default function TodoList({ todos, setTodos }) {
  const sortedTodos = todos.slice().sort((a,b)=>Number(a.done)-Number(b.done))
  
  return (
    <div className={styles.list}>
      {sortedTodos.map((item) => (
        <TodoItem
          todos={todos}
          key={item.name}
          setTodos={setTodos}
          item={item}
        />
      ))}
    </div>
  );
}
