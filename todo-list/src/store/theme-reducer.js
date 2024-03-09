export const DARK = "theme/DARK";
export const LIGHT = "theme/LIGHT";

export const exchangeMode = (isDark) => ({
  type: isDark ? LIGHT : DARK,
  // 기존에 다크모드였을 경우 라이트 모드 전환, 그렇지 않은 경우 다크모드 전환
});

const initialState = {
  isDarkMode: localStorage.getItem("isLightmode") === "true" ? true : false,
};

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case DARK:
      return { ...state, isDarkMode: true };
    case LIGHT:
      return { ...state, isDarkMode: false };
    default:
      return state;
  }
};

export default themeReducer;
