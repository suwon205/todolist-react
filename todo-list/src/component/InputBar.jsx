import React, { useState } from "react";
import styles from "../css/input.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../store/todo-reducer";
import { FaPlus } from "react-icons/fa";

export default function InputBar() {
  const [inputData, setInputData] = useState("");
  const dispatch = useDispatch(); // 디스패치 함수를 가져옴
  const isDarkMode = useSelector((state) => state.themeReducer.isDarkMode);

  const handleAdd = () => {
    if (inputData.length === 0 || inputData === undefined) {
      alert("데이터를 입력해 주세요!");
    } else {
      dispatch(addTodo(inputData));
      setInputData(""); // 입력 폼 초기화
    }
  };
  return (
    <div
      className={
        isDarkMode
          ? styles["input-dark-container"]
          : styles["input-light-container"]
      }
    >
      <input
        type="text"
        className={styles["input-text"]}
        value={inputData}
        onChange={(e) => setInputData(e.target.value)}
        placeholder="할 일을 입력해주세요"
      />
      <FaPlus
        onClick={handleAdd}
        className={isDarkMode ? styles["dark-icon"] : styles["light-icon"]}
      />
    </div>
  );
}
