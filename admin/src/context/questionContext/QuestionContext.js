import QuestionReducer from "./QuestionReducer";

import { createContext, useReducer } from "react";

const INITIAL_STATE = {
  questions: null,
};
export const SidebarContext = createContext(INITIAL_STATE);

export const SidebarContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(SidebarReducer, INITIAL_STATE);
  return (
    <SidebarContext.Provider value={{ ...state, dispatch }}>
      {children}
    </SidebarContext.Provider>
  );
};
