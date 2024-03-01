import Content from "./TodoList";
import "./App.css";
import Navbar from "./Navbar";
import "./css/app-css.css";
import InputBar from "./component/InputBar";
function App() {
  return (
    <div>
      <div className="app">
        <Navbar />
        <Content />
        <InputBar />
      </div>
    </div>
  );
}

export default App;
