import React, { useState } from "react";
import styles from "../css/filter.module.css";
import { useDispatch } from "react-redux";
import {
  filterAll,
  filterDone,
  filterNotStarted,
} from "../store/filter-reducer";

export default function FilterList() {
  const [filterType, setFilterType] = useState(null); // 선택된 필터 타입을 상태로 관리
  const dispatch = useDispatch();

  // 필터링을 설정하는 함수
  const handleFilter = (filter) => {
    // 선택된 필터와 현재 필터 타입을 비교하여 동일하면 전체 필터로 설정
    if (filterType === filter) {
      setFilterType(null);
      dispatch(filterAll());
    } else {
      // 선택된 필터를 설정하고 해당 필터에 맞는 액션을 디스패치
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
          onClick={() => handleFilter(filterTypes.NOT_STARTED)}
          className={
            filterType === filterTypes.NOT_STARTED
              ? styles.active
              : styles.disabled
          }
        >
          NOT STARTED
        </div>
      </div>
      <div className={styles["filter-area"]}>
        <div
          onClick={() => handleFilter(filterTypes.DONE)}
          className={
            filterType === filterTypes.DONE ? styles.active : styles.disabled
          }
        >
          COMPLETED
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
