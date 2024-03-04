import Content from "./TodoList";
import "./App.css";
import Navbar from "./Navbar";
import styles from "./css/app.module.css";
import InputBar from "./component/InputBar";
function App() {
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
