import React, { useState } from "react";
import { CiDark } from "react-icons/ci";
import { MdOutlineLightMode } from "react-icons/md";
import styles from "../css/navbar.module.css";

export default function Theme() {
  const [isDark, setDark] = useState(false);

  const handleMode = () => {
    setDark(!isDark); // 상태를 반전시켜 업데이트
  };

  return (
    <div>
      {!isDark ? (
        <MdOutlineLightMode onClick={handleMode} className={styles.icon} />
      ) : (
        <CiDark onClick={handleMode} className={styles.icon} />
      )}
    </div>
  );
}
