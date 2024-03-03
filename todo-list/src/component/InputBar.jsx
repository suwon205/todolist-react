import React, { useState } from "react";
import "../css/input-css.css";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/todo-reducer";

export default function InputBar() {
  const [inputData, setInputData] = useState("");
  const dispatch = useDispatch(); // 디스패치 함수를 가져옴

  const handleAdd = () => {
    if (inputData.length === 0 || inputData === undefined) {
      alert("데이터를 입력해 주세요!");
    } else {
      dispatch(addTodo(inputData));
      setInputData(""); // 입력 폼 초기화
    }
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
