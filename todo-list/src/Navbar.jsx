import React from "react";
import ThemeChange from "./component/ThemeChange";
import FilterList from "./component/FilterList";
import "./css/navbar-css.css";
export default function Navbar() {
  return (
    <div className="navbar">
      <ThemeChange />
      <FilterList />
    </div>
  );
}
