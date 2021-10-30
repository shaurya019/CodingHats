import SidebarReducer from "./SidebarReducer";

import { createContext, useReducer } from "react";

const INITIAL_STATE = {
  page: null,
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
