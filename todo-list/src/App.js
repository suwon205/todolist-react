import Content from "./TodoList";
import "./App.css";
import Navbar from "./Navbar";
import styles from "./css/app.module.css";
import InputBar from "./component/InputBar";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { exchangeMode } from "./store/theme-reducer";
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const storedTheme = localStorage.getItem("isDarkMode");
    console.log("라이트 모드?", storedTheme);
    if (storedTheme !== null) {
      // 로컬 스토리지에서 테마 정보를 가져와서 Redux 스토어에 dispatch
      dispatch(exchangeMode(storedTheme === "true" ? true : false));
      console.log("테마 불러오기는 할까요?");
    }
  }, [dispatch]);
  return (
    <div>
      <div className={styles.app}>
        <Navbar />
        <Content />
        <InputBar />
      </div>
    </div>
  );
}

export default App;
