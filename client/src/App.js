import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Dsa from "./pages/dsa/Dsa";
import Questions from "./pages/questions/Questions";
import Contests from "./pages/contests/Contests";
import Roadmap from "./pages/roadmaps/Roadmap";
import Dashboard from "./pages/dashboard/Dashboard";
import DsaQuestion from "./pages/dsaquestion/DsaQuestion";
import Contest from "./pages/contest/Contest";
import { SidebarContext } from "./context/sidebarContext/SidebarContext";
import { useContext } from "react";
import Projects from "./pages/projects/Projects";

function App() {
  const { dispatch } = useContext(SidebarContext);
  return (
    <Router>
      <div className="main">
        <Sidebar />
        <div className="container">
          <Navbar />
          <Switch>
            <Route path="/" exact>
              <Dashboard SidebarDispatch={dispatch} />
            </Route>
            <Route exact path="/dsa">
              <Dsa SidebarDispatch={dispatch} />
            </Route>
            <Route path="/dsa/:id">
              <DsaQuestion SidebarDispatch={dispatch} />
            </Route>
            <Route path="/contests/:platform">
              <Contest SidebarDispatch={dispatch} />
            </Route>
            <Route path="/roadmaps">
              <Roadmap SidebarDispatch={dispatch} />
            </Route>
            <Route path="/questions">
              <Questions SidebarDispatch={dispatch} />
            </Route>
            <Route path="/projects">
              <Projects SidebarDispatch={dispatch} />
            </Route>
            <Route path="/contests">
              <Contests />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
