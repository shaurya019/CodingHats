import React from "react";
import { AiFillPushpin } from "react-icons/ai";
import "./roadmap.css";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  Tooltip,
} from "recharts";
import { Link } from 'react-router-dom';
import { changeSelect } from "../../context/sidebarContext/SidebarAction";
import { IconContext } from "react-icons/lib";
const data = [
  {
    name: "React",
    percent: 53,
    year: 2016,
  },
  {
    name: "React",
    percent: 62,
    year: 2017,
  },
  {
    name: "React",
    percent: 72,
    year: 2018,
  },
  {
    name: "React",
    percent: 80,
    year: 2019,
  },
  {
    name: "React",
    percent: 80,
    year: 2020,
  },
  {
    name: "Angular",
    percent: 20,
    year: 2016,
  },
  {
    name: "Angular",
    percent: 28,
    year: 2017,
  },
  {
    name: "Angular",
    percent: 58,
    year: 2018,
  },
  {
    name: "Angular",
    percent: 58,
    year: 2019,
  },
  {
    name: "Angular",
    percent: 56,
    year: 2020,
  },
  {
    name: "Ember",
    percent: 14,
    year: 2016,
  },
  {
    name: "Ember",
    percent: 22,
    year: 2017,
  },
  {
    name: "Ember",
    percent: 32,
    year: 2018,
  },
  {
    name: "Ember",
    percent: 46,
    year: 2019,
  },
  {
    name: "Ember",
    percent: 49,
    year: 2020,
  },
  {
    name: "Vue js",
    percent: 10,
    year: 2016,
  },
  {
    name: "Vue js",
    percent: 22,
    year: 2017,
  },
  {
    name: "Vue js",
    percent: 32,
    year: 2018,
  },
  {
    name: "Vue js",
    percent: 46,
    year: 2019,
  },
  {
    name: "Vue js",
    percent: 49,
    year: 2020,
  },
  {
    name: "Preact",
    percent: 7,
    year: 2018,
  },
  {
    name: "Preact",
    percent: 12,
    year: 2019,
  },
  {
    name: "Preact",
    percent: 13,
    year: 2020,
  },
  {
    name: "Svelte",
    percent: 8,
    year: 2019,
  },
  {
    name: "Svelte",
    percent: 15,
    year: 2020,
  },
];
class Roadmap extends React.Component {
  componentDidMount() {
    const { SidebarDispatch } = this.props;
    SidebarDispatch(changeSelect("roadmaps"));
  }
  render() {

    const Mailto = ({ email, subject = '', body = '', children }) => {
      let params = subject || body ? '?' : '';
      if (subject) params += `subject=${encodeURIComponent(subject)}`;
      if (body) params += `${subject ? '&' : ''}body=${encodeURIComponent(body)}`;

      return <a href={`mailto:${email}${params}`}>{children}</a>;
    };


    return (
      <div className="section-2">
        <div className="container">
          <div className="row">
            {/* Roadmaps heading */}
            <div className="roadmap-head">
              <IconContext.Provider value={{ color: "#125d98" }}>
                <h2>RoadMaps<AiFillPushpin /></h2>
              </IconContext.Provider>
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
                  <Link to="/roadmaps/web" className="link">
                    <div className="techno" id="tech-box-1">
                      <h3>Web development</h3>
                    </div>
                  </Link>
                  <Link to="/roadmaps/android" className="link">
                    <div className="techno" id="tech-box-2">
                      <h3>Android development</h3>
                    </div>
                  </Link>
                </div>
                <div className="tech-box-2">
                  <Link to="/roadmaps/ml" className="link">
                    <div className="techno" id="tech-box-3">
                      <h3>Machine Learning</h3>
                    </div>
                  </Link>
                  <Link to="/roadmaps/backEnd" className="link">
                    <div className="techno" id="tech-box-4">
                      <h3>Back-End</h3>
                    </div>
                  </Link>
                </div>
                <Link to="/roadmaps/web" className="link"></Link>
                <div className="tech-box-3">
                  <div className="techno" id="tech-box-5">
                    <h3>Block chain ,AI and Deep Learning</h3>
                    <p>Coming Soon...</p>
                  </div>
                </div>
              </div>
              {/* Intern part */}
              <Link to="/roadmaps/intern" className="link">
                <div className="Intern">
                  {/* Intern heading */}
                  <div className="Intern-main-head">
                    <h2>OPPORTUNITIES</h2>
                  </div>
                  <div className="Intern-box">
                    <h3>Want to know about Internships?</h3>
                  </div>
                </div>
              </Link>
              {/* frameworks */}
              <Link to="/roadmaps/react" className="link">
                <div className="frame">
                  <div className="frame-main-head">
                    <h2>FRAMEWORKS</h2>
                  </div>
                  <div className="frame-box">
                    <h3>React</h3>
                  </div>
                </div>
              </Link>
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

export default Roadmap;
