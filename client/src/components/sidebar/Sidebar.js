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

function Sidebar() {
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
            <li className="sidebarListItem select">
              <Dashboard className="sidebarListIcon" />
              Dashboard
            </li>
            <Link to="/dsa">
            <li className="sidebarListItem">
              <SpeakerNotes className="sidebarListIcon" />
              DSA Revision
            </li>
            </Link>
            <Link to="/roadmaps">
              <li className="sidebarListItem">
                <Map className="sidebarListIcon" />
                Roadmaps
              </li>
            </Link>
            <Link to="/questions">
            <li className="sidebarListItem">
              <QuestionAnswer className="sidebarListIcon" />
              Questions
            </li>
            </Link>
            <li className="sidebarListItem">
              <Attachment className="sidebarListIcon" />
              Projects
            </li>
            <Link to="contests">
              <li className="sidebarListItem">
                <ArrowDropDown className="sidebarListIcon" />
                Contests
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
