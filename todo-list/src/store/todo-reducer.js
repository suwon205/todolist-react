// reducers/todo.js

// 액션 타입 상수 정의
export const ADD_TODO = "todo/ADD_TODO";
export const DELETE_TODO = "todo/DELETE_TODO";
export const TOGGLE_TODO = "todo/TOGGLE_TODO";
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
let lastIdx = 0;
// 초기 데이터 정의
const initialState = [];

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
      return [...state, newData]; // 기존 데이터에 새로운 데이터 추가
    case DELETE_TODO:
      const idToDelete = action.payload.id;
      return state.filter((todo) => todo.id !== idToDelete); // 해당 id를 가진 todo를 제외한 나머지 반환
    case TOGGLE_TODO:
      return state.map((todo) => {
        if (todo.id !== action.payload.id) {
          return todo;
        }
        return {
          ...todo,
          completed: !todo.completed,
        };
      });
    default:
      return state;
  }
};

export default todoReducer;
