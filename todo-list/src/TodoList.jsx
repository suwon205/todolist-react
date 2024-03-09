import React from "react";
import { useSelector } from "react-redux";
import styles from "./css/content.module.css";
import Todo from "./component/Todo";

export default function Content() {
  const todos = useSelector((state) => state.todoReducer);
  const filterType = useSelector((state) => state.filterReducer.filterType);
  const isDarkMode = useSelector((state) => state.themeReducer.isDarkMode);

  const filteredTodos = todos.filter((todo) => {
    if (filterType === "DONE") {
      return todo.completed === true;
    } else if (filterType === "NOT_STARTED") {
      return todo.completed === false;
    } else {
      return true; // "ALL"이면 모든 데이터 반환
    }
  });

  return (
    <div
      className={isDarkMode ? styles.darkBackground : styles.lightBackground}
    >
      {filteredTodos !== undefined &&
        filteredTodos.length > 0 &&
        filteredTodos.map((todo) => <Todo key={todo.id} content={todo} />)}
    </div>
  );
}
