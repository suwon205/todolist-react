import React from "react";
import data from "./data/todoData";
import "./css/content-css.css";
export default function Content() {
  return (
    <div className="content">
      컨텐츠가 들어갈 곳입니다.
      {data.map((info, index) => (
        <p key={index}>{JSON.stringify(info)}</p>
      ))}
    </div>
  );
}
