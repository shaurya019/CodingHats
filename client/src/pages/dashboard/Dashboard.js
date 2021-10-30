import React from "react";
import "./dashboard.css";
import { changeSelect } from "../../context/sidebarContext/SidebarAction";

class Dashboard extends React.Component {
  componentDidMount() {
    const { SidebarDispatch } = this.props;
    SidebarDispatch(changeSelect("dashboard"));
  }

  render() {
    return <div className="dashboard">Dashboard</div>;
  }
}

export default Dashboard;
