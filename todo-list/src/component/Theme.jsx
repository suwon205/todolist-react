import React, { useEffect } from "react";
import styles from "../css/navbar.module.css";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { useDispatch, useSelector } from "react-redux";
import { exchangeMode } from "../store/theme-reducer";

export default function Theme() {
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state) => state.themeReducer.isDarkMode);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    console.log(newMode);
    localStorage.setItem("isDarkMode", newMode);
    dispatch(exchangeMode(newMode));
  };
  return (
    <div>
      <DarkModeSwitch
        checked={!isDarkMode}
        onChange={toggleDarkMode}
        size={40}
        className={styles.icon}
        moonColor="black"
        sunColor="white"
        animationProperties={{}}
      />
    </div>
  );
}
