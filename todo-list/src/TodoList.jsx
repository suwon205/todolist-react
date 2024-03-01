import React from "react";
import { useSelector } from "react-redux";
import "./css/content-css.css";
import Todo from "./component/Todo";

export default function Content() {
  const todos = useSelector((state) => state.todoReducer);
  return (
    <div className="content">
      {todos !== undefined &&
        todos.length > 0 &&
        todos.map((todo) => (
          <Todo key={todo.id} content={todo} state={todo.state} />
        ))}
    </div>
  );
}
