import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { SidebarContextProvider } from "./context/sidebarContext/SidebarContext";

ReactDOM.render(
  <SidebarContextProvider>
    <App />
  </SidebarContextProvider>,
  document.getElementById("root")
);
