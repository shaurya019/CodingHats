import Sidebar from "./components/Sidebar/Sidebar";
import { useContext } from "react";
import { SidebarContext } from "./context/SidebarContext/SidebarContext";
import Question from "./pages/Question/Question";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DayVise from "./pages/dayVise/DayVise";

function App() {
  const { dispatch } = useContext(SidebarContext);

  return (
    <Router>
      <div className="main">
        <Sidebar />
        <div className="container">
          <Switch>
            <Route path="/" exact>
              <Question SidebarDispatch={dispatch} />
            </Route>
            <Route path="/dayVise">
              <DayVise SidebarDispatch={dispatch} />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
