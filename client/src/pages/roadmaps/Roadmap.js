import React from "react";
import "./roadmap.css";
import { changeSelect } from "../../context/sidebarContext/SidebarAction";
class Roadmap extends React.Component {
  componentDidMount() {
    const { SidebarDispatch } = this.props;
    SidebarDispatch(changeSelect("roadmaps"));
  }
  render() {
    return (
      <div className="section-2">
        <div className="container">
          <div className="row">
            {/* Roadmaps heading */}
            <div className="roadmap-head">
              <h2>Roadmaps</h2>
              <p>Explore and try something new!!</p>
            </div>
            <hr />
            {/* Roadmaps main */}
            <div className="roadmap-main">
              {/* Roadmaps  main heading */}
              <div className="roadmap-main-head">
                <h2>TECHNOLOGY</h2>
              </div>
              {/* tech-box   */}
              <div className="tech-box">
                <div className="tech-box-1">
                  <div className="techno" id="tech-box-1">
                    <h3>Web development</h3>
                    <a href="/#">Explore {"->"}</a>
                  </div>
                  <div className="techno" id="tech-box-2">
                    <h3>Android development</h3>
                    <a href="/#">Explore {"->"}</a>
                  </div>
                </div>
                <div className="tech-box-2">
                  <div className="techno" id="tech-box-3">
                    <h3>Machine Learning</h3>
                    <a href="/#">Explore {"->"}</a>
                  </div>
                  <div className="techno" id="tech-box-4">
                    <h3>Back-End</h3>
                    <a href="/#">Explore {"->"}</a>
                  </div>
                </div>
                <div className="tech-box-3">
                  <div className="techno" id="tech-box-5">
                    <h3>Block chain ,AI and Deep Learning</h3>
                    <p>Coming Soon...</p>
                  </div>
                </div>
              </div>
              {/* Intern part */}
              <div className="Intern">
                {/* Intern heading */}
                <div className="Intern-main-head">
                  <h2>OPPORTUNITIES</h2>
                </div>
                <div className="Intern-box">
                  <h3>Want to know about Internships?</h3>
                  <a href="/#" target="_blank">
                    Explore {"->"}
                  </a>
                </div>
              </div>
              <div className="Graphs">
                {/* Graphs */}
                <div className="Graphs-main-head">
                  <h2>TRENDING</h2>
                </div>
                <div className="Graphs-para">
                  <p>
                    Checkout the trending graphs of different frameworks and
                    technologies
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Roadmap;
