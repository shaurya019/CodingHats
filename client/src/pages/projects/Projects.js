import React from "react";
import "./projects.css";
import { IconContext } from "react-icons/lib";
import { FcApproval } from "react-icons/fc";
import { changeSelect } from "../../context/sidebarContext/SidebarAction";
import { Link } from "react-router-dom";

class Projects extends React.Component {

  componentDidMount() {
    const { SidebarDispatch } = this.props;
    SidebarDispatch(changeSelect("projects"));
  }

  render() {
    return (
      <div className="Projects-section"> 
      <div className="Project-col">
      <div className="Project-head">
      <div id="Project-head-1">
        <h2>Projects <FcApproval /></h2>
        </div> 
        <div id="Project-head-2">
        <h4>Cool Intresting Stuff!!</h4>
        </div> 
        </div> 
        <hr></hr>
      <div className="row">
      <div className="Project-setup">
      <div className="Project-set-1">
        <div className ="set-box" id="p-box-1">
          <h5>Basic website</h5>
        </div>
        <div className ="set-box" id="p-box-2">
          <h5>JavaScript</h5>
        </div>
        </div>
        <div className="Project-set-2">
        <div className ="set-box" id="p-box-3">
          <h5>React</h5>
        </div>
        <div className ="set-box" id="p-box-4">
          <h5>Android</h5>
        </div>
      </div> 
      <div className="Project-set-3">
        <div className ="set-box" id="p-box-5">
          <h5>Python</h5>
        </div>
        <div className ="set-box" id="p-box-6">
          <h5>Machine Learning</h5>
        </div>
      </div> 
      </div> 
      </div>  
      </div>  
      </div>
    );
  }
}

export default Projects;
