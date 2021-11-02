import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { SidebarContextProvider } from "./context/SidebarContext/SidebarContext";

ReactDOM.render(
  <React.StrictMode>
    <SidebarContextProvider>
      <App />
    </SidebarContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
