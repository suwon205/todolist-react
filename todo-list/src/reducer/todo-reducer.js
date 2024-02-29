export default function todoReducer(data, action) {
  switch (action.state) {
    case "not started":
      return 1;
    case "done":
      return 2;
    default:
      throw Error("알 수 없는 액션 타입입니다.");
  }
}
