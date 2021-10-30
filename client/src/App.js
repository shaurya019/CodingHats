import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Dsa from "./pages/dsa/Dsa";
import Questions from "./pages/questions/Questions";
import Contests from "./pages/contests/Contests";
import Roadmap from "./pages/roadmaps/Roadmap";
import Dashboard from "./pages/dashboard/Dashboard";
function App() {
  return (
    <Router>
      <div className="main">
        <Sidebar />
        <div className="container">
          <Navbar />
          <Switch>
            <Route path="/" exact>
              <Dashboard />
            </Route>
            <Route path="/dsa">
              <Dsa/>
            </Route>
            <Route path="/roadmaps">
              <Roadmap />
            </Route>
            <Route path="/questions">
              <Questions />
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
