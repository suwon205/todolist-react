import React from "react";
import Theme from "./component/Theme";
import FilterList from "./component/FilterList";
import styles from "./css/navbar.module.css";
export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <Theme />
      <FilterList />
    </div>
  );
}
