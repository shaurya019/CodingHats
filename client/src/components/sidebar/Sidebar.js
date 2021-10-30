import "./sidebar.css";
import {
  Dashboard,
  SpeakerNotes,
  Map,
  ArrowDropDown,
  QuestionAnswer,
  Attachment,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import { SidebarContext } from "../../context/sidebarContext/SidebarContext";
import { useContext } from "react";

function Sidebar() {
  const { page, dispatch } = useContext(SidebarContext);
  console.log(page);
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarIcon">
          <img
            src="https://cdn.iconscout.com/icon/free/png-256/hat-1594471-1348582.png"
            alt=""
          ></img>
        </div>
        <div className="sidebarMenu">
          <h4>CODING HATS</h4>
          <ul className="sidebarList">
            <Link to="/" className="link">
              {page === "dashboard" ? (
                <li className="sidebarListItem select">
                  <Dashboard className="sidebarListIcon" />
                  Dashboard
                </li>
              ) : (
                <li className="sidebarListItem">
                  <Dashboard className="sidebarListIcon" />
                  Dashboard
                </li>
              )}
            </Link>
            <Link to="/dsa" className="link">
              {page === "dsa" ? (
                <li className="sidebarListItem select">
                  <SpeakerNotes className="sidebarListIcon" />
                  DSA Revision
                </li>
              ) : (
                <li className="sidebarListItem">
                  <SpeakerNotes className="sidebarListIcon" />
                  DSA Revision
                </li>
              )}
            </Link>
            <Link to="/roadmaps" className="link">
              {page === "roadmaps" ? (
                <li className="sidebarListItem select">
                  <Map className="sidebarListIcon" />
                  Roadmaps
                </li>
              ) : (
                <li className="sidebarListItem">
                  <Map className="sidebarListIcon" />
                  Roadmaps
                </li>
              )}
            </Link>
            <Link to="/questions" className="link">
              {page === "questions" ? (
                <li className="sidebarListItem select">
                  <QuestionAnswer className="sidebarListIcon" />
                  Questions
                </li>
              ) : (
                <li className="sidebarListItem">
                  <QuestionAnswer className="sidebarListIcon" />
                  Questions
                </li>
              )}
            </Link>
            <Link to="projects" className="link">
              {page === "projects" ? (
                <li className="sidebarListItem select">
                  <Attachment className="sidebarListIcon" />
                  Projects
                </li>
              ) : (
                <li className="sidebarListItem">
                  <Attachment className="sidebarListIcon" />
                  Projects
                </li>
              )}
            </Link>
            <Link to="contests" className="link">
              {page === "contests" ? (
                <li className="sidebarListItem select">
                  <ArrowDropDown className="sidebarListIcon" />
                  Contests
                </li>
              ) : (
                <li className="sidebarListItem">
                  <ArrowDropDown className="sidebarListIcon" />
                  Contests
                </li>
              )}
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
