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
    const Mailto = ({ email, subject = '', body = '', children }) => {
      let params = subject || body ? '?' : '';
      if (subject) params += `subject=${encodeURIComponent(subject)}`;
      if (body) params += `${subject ? '&' : ''}body=${encodeURIComponent(body)}`;

      return <a href={`mailto:${email}${params}`}>{children}</a>;
    };
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
                <Link to="/projects/basic" className="link">
                  <div className="set-box" id="p-box-1">
                    <h5>Basic website</h5>
                  </div>
                </Link>
                <Link to="/projects/javascript" className="link">
                  <div className="set-box" id="p-box-2">
                    <h5>JavaScript</h5>
                  </div>
                </Link>
              </div>
              <div className="Project-set-2">
                <Link to="/projects/react" className="link">
                  <div className="set-box" id="p-box-3">
                    <h5>React</h5>
                  </div>
                </Link>
                <Link to="/projects/android" className="link">
                  <div className="set-box" id="p-box-4">
                    <h5>Android</h5>
                  </div>
                </Link>
              </div>
              <div className="Project-set-3">
                <Link to="/projects/python" className="link">
                  <div className="set-box" id="p-box-5">
                    <h5>Python</h5>
                  </div>
                </Link>
                <Link to="/projects/ml" className="link">
                  <div className="set-box" id="p-box-6">
                    <h5>Machine Learning</h5>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="contact">
          <div className="contact-col">
            <div className="row">
              <Mailto email="codingHats23@gmail.com" subject="Contacting Coding Hats" body="Hey!!">
                <div className="contact-box" id="contact-1">
                  <div className="contact-us">
                    <div className="contact-text">
                      <h3>Contact Us</h3>
                    </div>
                    <div className="contact-mail">
                      <p>codingHats23@gmail.com</p>
                    </div>
                  </div>
                </div>
              </Mailto>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
