// reducers/todo.js

// 액션 타입 상수 정의
export const ADD_TODO = "todo/ADD_TODO";
export const DELETE_TODO = "todo/DELETE_TODO";

// 액션 생성자 함수 정의
export const addTodo = (content) => ({
  type: ADD_TODO,
  payload: { content },
});

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: { id },
});

// 초기 데이터 정의
const initialState = [];

// 리듀서 함수 정의
const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      const newId = state.length > 0 ? state[state.length - 1].id + 1 : 1; // 새로운 id 계산
      const newData = {
        id: newId,
        state: "NOT_STARTED",
        content: action.payload.content,
      };
      return [...state, newData]; // 기존 데이터에 새로운 데이터 추가
    case DELETE_TODO:
      const idToDelete = action.payload.id;
      return state.filter((todo) => todo.id !== idToDelete); // 해당 id를 가진 todo를 제외한 나머지 반환
    default:
      return state;
  }
};

export default todoReducer;
