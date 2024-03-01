// import React, { createContext, useContext, useReducer } from "react";
// import todoReducer from "./reducer/todo-reducer";

// const DataContext = createContext();
// // Context 내부에는 provider Component가 존재. 그 컴포넌트 간에 공유하고자 하는 값을 value라는 prop으로 설정

// export const DataProvider = ({ children }) => {
//   const [data, dispatch] = useReducer(todoReducer, []);

//   return (
//     <DataProvider.Provider value={{ data, dispatch }}>
//       {children}
//     </DataProvider.Provider>
//   );
// };

// export const useData = () => useContext(DataContext);
