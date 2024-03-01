import React, { useState } from "react";
import "../css/input-css.css";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/todo-reducer";

export default function InputBar() {
  const [inputData, setInputData] = useState("");
  const dispatch = useDispatch(); // 디스패치 함수를 가져옴

  const handleAdd = () => {
    dispatch(addTodo(inputData));
    setInputData(""); // 입력 폼 초기화
  };
  return (
    <div className="input-bar">
      <input
        type="text"
        name=""
        id=""
        className="input-text"
        value={inputData}
        onChange={(e) => setInputData(e.target.value)}
      />
      <div onClick={handleAdd}>+</div>
    </div>
  );
}
