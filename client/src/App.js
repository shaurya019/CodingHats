import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Contests from "./pages/contests/Contests";
import Roadmap from "./pages/roadmaps/Roadmap";
function App() {
  return (
    <Router>
      <div className="main">
        <Sidebar />
        <div className="container">
          <Navbar />
          <Switch>
            <Route path="/" exact>
              <Contests />
            </Route>
            <Route path="/contests">
              <Contests />
            </Route>
            <Route path="/roadmaps">
              <Roadmap />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
