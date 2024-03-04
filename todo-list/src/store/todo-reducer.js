// reducers/todo.js

// 액션 타입 상수 정의
export const ADD_TODO = "todo/ADD_TODO";
export const DELETE_TODO = "todo/DELETE_TODO";
export const TOGGLE_TODO = "todo/TOGGLE_TODO";
export const EDIT_TODO = "todo/EDIT_TODO";

// 액션 생성자 함수 정의
export const addTodo = (content) => ({
  type: ADD_TODO,
  payload: { content },
});

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: { id },
});

export const editTodoState = (id) => ({
  type: TOGGLE_TODO,
  payload: { id },
});

export const editTodoContent = (id, content) => ({
  type: EDIT_TODO,
  payload: { id, content },
});

let lastIdx = 0;
// 초기 데이터 정의
const initialState = JSON.parse(localStorage.getItem("todos")) || [];

// 리듀서 함수 정의
const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      const newData = {
        id: lastIdx,
        completed: false,
        content: action.payload.content,
      };
      lastIdx += 1;
      const newStateAfterAdd = [...state, newData];
      localStorage.setItem("todos", JSON.stringify(newStateAfterAdd)); // 데이터 추가 후 로컬 스토리지에 저장
      return newStateAfterAdd; // 기존 데이터에 새로운 데이터 추가
    case DELETE_TODO:
      const idToDelete = action.payload.id;
      const newStateAfterDelete = state.filter(
        (todo) => todo.id !== idToDelete
      );
      localStorage.setItem("todos", JSON.stringify(newStateAfterDelete)); // 데이터 삭제 후 로컬 스토리지에 저장
      return newStateAfterDelete; // 해당 id를 가진 todo를 제외한 나머지 반환
    case TOGGLE_TODO:
      const newStateAfterToggle = state.map((todo) => {
        if (todo.id !== action.payload.id) {
          return todo;
        }
        return {
          ...todo,
          completed: !todo.completed,
        };
      });
      localStorage.setItem("todos", JSON.stringify(newStateAfterToggle)); // 데이터 변경 후 로컬 스토리지에 저장
      return newStateAfterToggle;

    case EDIT_TODO:
      const newStateAfterEdit = state.map((todo) => {
        if (todo.id !== action.payload.id) {
          return todo;
        }
        return {
          ...todo,
          content: action.payload.content,
        };
      });
      localStorage.setItem("todos", JSON.stringify(newStateAfterEdit)); // 데이터 변경 후 로컬 스토리지에 저장
      return newStateAfterEdit;
    default:
      return state;
  }
};

export default todoReducer;
