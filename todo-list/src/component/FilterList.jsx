import React, { useState } from "react";
import styles from "../css/filter.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  filterAll,
  filterDone,
  filterNotStarted,
} from "../store/filter-reducer";

export default function FilterList() {
  const [filterType, setFilterType] = useState(null);
  const isDarkMode = useSelector((state) => state.themeReducer.isDarkMode);
  const dispatch = useDispatch();

  const handleFilter = (filter) => {
    if (filterType === filter) {
      setFilterType(null);
      dispatch(filterAll());
    } else {
      setFilterType(filter);
      switch (filter) {
        case filterTypes.NOT_STARTED:
          dispatch(filterNotStarted());
          break;
        case filterTypes.DONE:
          dispatch(filterDone());
          break;
        default:
          break;
      }
    }
  };

  return (
    <div className={styles.filters}>
      <div className={styles["filter-area"]}>
        <div
          className={`${
            filterType === "NOT_STARTED" && isDarkMode
              ? styles.chooseDarkArea
              : ""
          } ${
            filterType === "NOT_STARTED" && !isDarkMode
              ? styles.chooseLightArea
              : ""
          }`}
        >
          <div
            onClick={() => handleFilter(filterTypes.NOT_STARTED)}
            className={`
            ${
              filterType === "NOT_STARTED" && isDarkMode
                ? styles.chooseDark
                : ""
            }
            ${
              filterType === "NOT_STARTED" && !isDarkMode
                ? styles.chooseLight
                : ""
            }
            ${
              filterType !== "NOT_STARTED" && isDarkMode
                ? styles.disabledDark
                : ""
            }
            ${
              filterType !== "NOT_STARTED" && !isDarkMode
                ? styles.disabledLight
                : ""
            }
          `}
          >
            NOT STARTED
          </div>
        </div>
      </div>
      <div className={styles["filter-area"]}>
        <div
          className={`${
            filterType === "DONE" && isDarkMode ? styles.chooseDarkArea : ""
          } ${
            filterType === "DONE" && !isDarkMode ? styles.chooseLightArea : ""
          }`}
        >
          <div
            onClick={() => handleFilter(filterTypes.DONE)}
            className={`
          ${filterType === "DONE" && isDarkMode ? styles.chooseDark : ""}
          ${filterType === "DONE" && !isDarkMode ? styles.chooseLight : ""}
          ${filterType !== "DONE" && isDarkMode ? styles.disabledDark : ""}
          ${filterType !== "DONE" && !isDarkMode ? styles.disabledLight : ""}
          `}
          >
            COMPLETED
          </div>
        </div>
      </div>
    </div>
  );
}

export const filterTypes = {
  ALL: "ALL",
  DONE: "DONE",
  NOT_STARTED: "NOT_STARTED",
};
