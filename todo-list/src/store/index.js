import { combineReducers } from "redux";
import todoReducer from "./todo-reducer";
import filterReducer from "./filter-reducer";
// store에 저장되는 reducer는 한 개. combine Reducer는 reducer 묶어주는 역할.
const rootReducer = combineReducers({
  todoReducer,
  filterReducer,
});

export default rootReducer;
