import React from "react";
import "./roadmap.css";
import { changeSelect } from "../../context/sidebarContext/SidebarAction";
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Cell } from "recharts";
import { scaleOrdinal } from "d3-scale";
import PropTypes from "prop-types";
import { schemeCategory10 } from "d3-scale-chromatic";

class Roadmap extends React.Component {
  componentDidMount() {
    const { SidebarDispatch } = this.props;
    SidebarDispatch(changeSelect("roadmaps"));
  }
  render() {
    const data = [
      { name: "React.js", students: 40.14 },
      { name: "Jquery", students: 34.43 },
      { name: "Express", students: 23.82 },
      { name: "Angular", students: 22.96 },
      { name: "Vue.js", students: 18.97 },
      { name: "Flask", students: 16.14 },
      { name: "ASP.NET", students: 15.74 },
      { name: "Django", students: 14.99 },
      { name: "Spring", students: 14.56 },
      { name: "Angular.js", students: 11.49 },
      { name: "Laravel", students: 10.12 },
    ];

    const colors = scaleOrdinal(schemeCategory10).range();

    const getPath = (x, y, width, height) => `M${x},${y + height}
          C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${
      x + width / 2
    }, ${y}
          C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${
      y + height
    } ${x + width}, ${y + height}
          Z`;

    const TriangleBar = (props) => {
      const { fill, x, y, width, height } = props;

      return (
        <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />
      );
    };

    TriangleBar.propTypes = {
      fill: PropTypes.string,
      x: PropTypes.number,
      y: PropTypes.number,
      width: PropTypes.number,
      height: PropTypes.number,
    };

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
                  </div>
                  <div className="techno" id="tech-box-2">
                    <h3>Android development</h3>
                  </div>
                </div>
                <div className="tech-box-2">
                  <div className="techno" id="tech-box-3">
                    <h3>Machine Learning</h3>
                  </div>
                  <div className="techno" id="tech-box-4">
                    <h3>Back-End</h3>
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
                  <BarChart
                    width={1000}
                    height={600}
                    data={data}
                    className="graphBarChart"
                  >
                    <Bar
                      dataKey="students"
                      fill="green"
                      shape={<TriangleBar />}
                      label={{ position: "top" }}
                    >
                      {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                      ))}
                    </Bar>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                  </BarChart>
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
