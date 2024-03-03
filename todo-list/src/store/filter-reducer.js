export const NOT_STARTED_FILTER = "filter/NOT_STARTED";
export const DONE_FILTER = "filter/DONE";
export const ALL_FILTER = "filter/ALL";

// 액션
export const filterNotStarted = () => ({
  type: NOT_STARTED_FILTER,
  payload: { filterType: "NOT_STARTED" }, // 필터의 종류를 payload에 포함
});

export const filterDone = () => ({
  type: DONE_FILTER,
  payload: { filterType: "DONE" }, // 필터의 종류를 payload에 포함
});

export const filterAll = () => ({
  type: ALL_FILTER,
  payload: { filterType: "ALL" }, // 필터의 종류를 payload에 포함
});

const initialState = { filterType: "All" };

// 리듀서 함수
const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case NOT_STARTED_FILTER:
      return { ...state, filterType: "NOT_STARTED" };
    case DONE_FILTER:
      return { ...state, filterType: "DONE" };
    case ALL_FILTER:
      return { ...state, filterType: "ALL" };
    default:
      return state; // 기본적으로는 이전 상태를 그대로 반환
  }
};

export default filterReducer;
