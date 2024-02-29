import React, { useState } from "react";
import "../css/input-css.css";

export default function InputBar() {
  const [inputData, setData] = useState("");
  const handleInput = (e) => {
    setData(e.target.value);
  };
  const handleAdd = () => {
    console.log(`${inputData}를 추가합니다.`);
    setData("");
  };
  return (
    <div className="input-bar">
      <input
        type="text"
        name=""
        id=""
        className="input-text"
        value={inputData}
        onChange={handleInput}
      />
      <div onClick={handleAdd}>+</div>
    </div>
  );
}
