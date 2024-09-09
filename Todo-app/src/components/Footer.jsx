import React from "react";
import styles from "./footer.module.css";
function Footer({ completedTodos, totalTodos }) {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.items}>
          <span className={styles.item}>Completed Todos: {completedTodos}</span>
          <span className={styles.item}>Total Todos: {totalTodos}</span>
        </div>
      </footer>
    </>
  );
}

export default Footer;
