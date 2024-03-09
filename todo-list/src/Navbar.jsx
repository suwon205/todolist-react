import React from "react";
import Theme from "./component/Theme";
import FilterList from "./component/FilterList";
import styles from "./css/navbar.module.css";
import { useSelector } from "react-redux";
export default function Navbar() {
  const isDarkMode = useSelector((state) => state.themeReducer.isDarkMode);

  return (
    <div className={isDarkMode ? styles.Darkbar : styles.Lightbar}>
      <Theme />
      <FilterList />
    </div>
  );
}
