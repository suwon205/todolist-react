import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import rootReducer from "./store";
import logger from "redux-logger";
import { createStore, applyMiddleware, compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";

// 배포 레벨에서는 리덕스 발동시 찍히는 logger를 사용하지 않습니다.
const enhancer =
  process.env.NODE_ENV === "production"
    ? compose(applyMiddleware())
    : composeWithDevTools(applyMiddleware(logger));

const store = createStore(rootReducer, enhancer);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
