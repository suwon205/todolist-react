import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, editTodoState } from "../store/todo-reducer";
import "../css/content-css.css";

export default function Todo({ content }) {
  const [isDone, setIsDone] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setIsDone(content.completed);
  }, [content.completed]);

  const handleTodo = () => {
    const newState = !isDone;
    dispatch(editTodoState(content.id, newState ? "DONE" : "NOT_STARTED"));
  };
  const handleDelete = () => {
    console.log(content.id);
    dispatch(deleteTodo(content.id));
  };
  return (
    <div className="todo-container">
      <div onClick={handleTodo}>
        <input type="checkbox" checked={isDone} readOnly />
        <p>Content: {content.content}</p>
      </div>
      <button onClick={handleDelete}>삭제하기</button>
    </div>
  );
}
