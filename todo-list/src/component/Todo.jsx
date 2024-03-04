import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { FiEdit, FiTrash2 } from "react-icons/fi";

import {
  deleteTodo,
  editTodoContent,
  editTodoState,
} from "../store/todo-reducer";
import styles from "../css/content.module.css";
import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";

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
    dispatch(deleteTodo(content.id));
  };

  const handleUpdate = () => {
    let newContent = prompt("수정할 내용을 입력하세요.");
    if (newContent === null || newContent === undefined) {
      return;
    }
    dispatch(editTodoContent(content.id, newContent));
  };
  return (
    <div className={styles["todo-container"]}>
      <div className={styles.content}>
        <div className={styles.icon} onClick={handleTodo}>
          {isDone ? (
            <MdCheckBox className={styles.checked} />
          ) : (
            <MdCheckBoxOutlineBlank />
          )}
        </div>
        <div style={{ width: "300px", margin: "auto" }}>
          <p
            style={{
              whiteSpace: "pre-wrap",
              wordBreak: "break-word",
              fontFamily: "'IBM Plex Sans KR', sans-serif",
              fontWeight: "600",
            }}
          >
            {content.content}
          </p>
        </div>
      </div>
      <div className={styles.buttons}>
        <FiEdit onClick={handleUpdate} className={styles["select-icon"]} />
        <FiTrash2 onClick={handleDelete} className={styles["select-icon"]} />
      </div>
    </div>
  );
}
