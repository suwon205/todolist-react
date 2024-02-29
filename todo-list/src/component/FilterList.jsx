import React, { useState } from "react";
import "../css/filtercss.css";
export default function FilterList() {
  const [filterState, setFilter] = useState("All");
  return (
    <div className="filter">
      {filterList.map((filter, index) => (
        <p key={index}>{filter}</p>
      ))}
    </div>
  );
}

const filterList = ["Not Started", "Done"];
