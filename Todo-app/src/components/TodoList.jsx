import styles from "./todolist.module.css";
import TodoItem from "./TodoItem";
export default function TodoList({ todos, setTodos }) {
  return (
    <div className={styles.list}>
      {todos.map((item) => (
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
