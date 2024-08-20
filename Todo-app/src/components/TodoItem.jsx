import styles from "./todoitem.module.css";
export default function TodoItem({ item, todos, setTodos }) {
  function handleDelete(item) {
    console.log(item, todos);
    setTodos(todos.filter((todo) => todo.name !== item.name));
  }

  function handleClick(name) {
    const newArray = todos.map((todo)=> todo.name === name ? {...todo, done: !done} : todo);
    setTodos(newArray);
  }

  const className = item.done ? styles.completed : "";
  return (
    <div className={styles.item}>
      <div className={styles.itemName}>
        <span className={className} onClick={() => handleClick(item.name)}> {item.name}</span>
        <span>
          <button
            className={styles.deleteButton}
            onClick=                                                                                                                                           {() => handleDelete(item)}
          ></button>
        </span>
      </div>

      <hr className={styles.line} />
    </div>
  );
}
