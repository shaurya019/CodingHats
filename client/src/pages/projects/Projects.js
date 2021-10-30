import React from "react";
import { changeSelect } from "../../context/sidebarContext/SidebarAction";
class Projects extends React.Component {
  componentDidMount() {
    const { SidebarDispatch } = this.props;
    SidebarDispatch(changeSelect("projects"));
  }
  render() {
    return <div>Projects</div>;
  }
}

export default Projects;
